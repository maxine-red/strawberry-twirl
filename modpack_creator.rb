#!/usr/bin/env ruby

require 'json'
require 'open-uri'

class InQueueError < StandardError; end
pwd = File.absolute_path(File.dirname(__FILE__))

# TODO: add tasks, for updating mods. Otherwise just take file ids from a local
# file and don't fetch new.
# When updating, show what mods have updates, so I can manually check if they're
# good or not
Dir.chdir("#{pwd}/build") do
  $stdout.puts "Cleaning up..." if $stdout.tty?
  `rm -rf *`
  $stdout.puts "Creating new pack data" if $stdout.tty?
  settings = JSON.parse(File.read("#{pwd}/settings.json"), symbolize_names: true)
  manifest = {}
  manifest.store(:minecraft, settings[:minecraft])
  manifest.store(:manifestType, "minecraftModpack")
  manifest.store(:manifestVersion, 1)
  manifest.store(:name, settings[:name])
  version = `git tag`.split($/).map{|v|v.sub(/^v/, '')}.sort_by{|v|Gem::Version.new(v)}.last
  manifest.store(:version, version)
  manifest.store(:author, settings[:author])
  modlist = ["# #{settings[:name]} - #{version} Mod list"]
  mod_files = []
  modlist_html = ['<ul>']
  $stdout.puts "Fetching mod data..." if $stdout.tty?
  mod_list = Dir["#{pwd}/mods/*.jar"].map{|f|File.basename(f)}
  JSON.parse(File.read("#{pwd}/mods.json"), symbolize_names: true)[:ids].each do |mod|
    begin
      mod_data = JSON.parse(URI.parse("https://api.cfwidget.com/#{mod}").read, symbolize_names: true)
      if mod_data[:error] == 'in_queue'
        $stderr.puts "Mod (#{mod}) is in queue, waiting 11s"
        raise InQueueError
      else
        raise ArgumentError, mod_data[:error] unless mod_data[:error].nil?
      end
    rescue InQueueError
      sleep 11
      retry
    end
    modlist_html << "<li><a href=\"#{mod_data[:urls][:curseforge]}\">#{mod_data[:title]} (by #{mod_data[:members].first[:username]})</li></a>"
    mod_file = mod_data[:files].select{|f|mod_list.include?(f[:name])}.first
    newest = mod_data[:files].select{|f|f[:type]==mod_file[:type]}.last
    modlist << " - #{mod_file[:name].sub(/\.jar$/, '')}"
    mod_files << {
      projectID: mod,
      fileID: mod_file[:id],
      required: true
    }
    sleep 0.5
  end
  modlist_html << '</ul>'
  manifest.store(:files, mod_files)
  manifest.store(:overrides, "overrides")
  File.write('manifest.json', JSON.pretty_generate(manifest))
  File.write('modlist.html', modlist_html.join($/))
  File.write('MODLIST.md', modlist.join($/) + $/)
  sources = ['config/', 'defaultconfigs/', 'kubejs/', 'README.md', 'patchouli_books/']
  Dir.mkdir('overrides')
  `cp -r #{sources.map{|s| "#{pwd}/#{s}"}.join(' ')} overrides/`
  #`zip --exclude=MODLIST.md --exclude=.keep -r #{pwd}/artifacts/#{settings[:name].gsub(' ', '_').downcase}-#{version}.zip .`
  $stdout.puts "Mod making done. Corresponding zip file is in artifacts." if $stdout.tty?
  File.write('MODCHANGES.md', '# Mod changes' + `diff #{pwd}/MODLIST.md MODLIST.md`.split($/).select{|l|l.match(' - ')}.join('').gsub('< ', $/).gsub('>  - ', ' -> '))
  $stdout.puts "Check MODCHANGES.md for changes to mods and replace MODLIST.md with new one" if $stdout.tty?
end
