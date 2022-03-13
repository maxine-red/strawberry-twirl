#!/usr/bin/env ruby

require 'json'

Dir.chdir(File.dirname(__FILE__)) do
  data = JSON.parse(File.read('data/oregen.json'), symbolize_names: true)
  data = data.sort_by { |o| o[:weight] }.reverse
  botania = { values: [] }
  Dir['kubejs/data/occultism/recipes/miner/**/*.json'].each do |f|
    File.unlink(f)
  end
  weights = []
  data.each do |ore|
    if ore[:category].include?('orechid_ores')
      botania[:values] << { type: 'block', block: ore[:block], weight: ore[:weight] }
    end
    form = ore[:category].grep(/miner/)
    unless form.empty?
      form = form.first.sub(/miner-/, '')
      if form == 'ores' then
        weights << {ore: ore[:block], weight: ore[:weight]}
      end
      miner = { type: 'occultism:miner', ingredient: { tag: "occultism:miners/#{form}" }, result: { item: ore[:block] }, weight: ore[:weight] }
      ore_name = ore[:block].sub(/.+:/, '')
      if File.exists?("kubejs/data/occultism/recipes/miner/#{form}/#{ore_name}.json")
        ore_name = ore[:block].sub(/:/, '_')
      end
      File.write("kubejs/data/occultism/recipes/miner/#{form}/#{ore_name}.json", JSON.pretty_generate(miner))
    end
  end
  File.write('kubejs/data/botania/orechid_ore_weights/orechid.json', JSON.pretty_generate(botania))
  weight_sum = weights.map{|x|x[:weight]}.inject(:+)
  weights.each do |ore|
    weight_percent = (ore[:weight] * 100.0 / weight_sum).round(1)
    if ARGV.grep(/-v/) then
      $stdout.puts "#{ore[:ore]} has a percentage of #{weight_percent}%"
    end
    if weight_percent < 0.2 then
      $stderr.puts "#{ore[:ore]} has a percentage of #{weight_percent}%!"
    end
  end
end
