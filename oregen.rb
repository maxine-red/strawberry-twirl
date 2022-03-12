#!/usr/bin/env ruby

require 'json'

Dir.chdir(File.dirname(__FILE__)) do
  data = JSON.parse(File.read('data/oregen.json'), symbolize_names: true)
  botania = { values: [] }
  Dir['kubejs/data/occultism/recipes/miner/**/*.json'].each do |f|
    File.unlink(f)
  end
  data.each do |ore|
    if ore[:category].include?('orechid_ores')
      botania[:values] << { type: 'block', block: ore[:block], weight: ore[:weight] }
    end
    form = ore[:category].grep(/miner/)
    unless form.empty?
      form = form.first.sub(/miner-/, '')
      miner = { type: 'occultism:miner', ingredient: { tag: "occultism:miners/#{form}" }, result: { item: ore[:block] }, weight: ore[:weight] }
      ore_name = ore[:block].sub(/.+:/, '')
      if File.exists?("kubejs/data/occultism/recipes/miner/#{form}/#{ore_name}.json")
        ore_name = ore[:block].sub(/:/, '_')
      end
      File.write("kubejs/data/occultism/recipes/miner/#{form}/#{ore_name}.json", JSON.pretty_generate(miner))
    end
  end
  File.write('kubejs/data/botania/orechid_ore_weights/orechid.json', JSON.pretty_generate(botania))
end
