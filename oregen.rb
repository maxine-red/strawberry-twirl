#!/usr/bin/env ruby

require 'json'

Dir.chdir(File.dirname(__FILE__)) do
  data = JSON.parse(File.read('data/oregen.json'), symbolize_names: true)
  botania = { values: [] }
  data.each do |ore|
    if ore[:category].include?('orechid_ores')
      botania[:values] << { type: 'block', block: ore[:block], weight: ore[:weight] }
    end
    form = ore[:category].grep(/miner/)
    unless form.empty?
      form = form.first.sub(/miner-/, '')
      miner = { type: 'occultism:miner', ingredient: { tag: "occultism:miners/#{form}" }, result: { item: ore[:block] }, weight: ore[:weight] }
      File.write("kubejs/data/occultism/recipes/miner/#{form}/#{ore[:block].sub(/.+:/, '')}.json", JSON.pretty_generate(miner))
    end
  end
  File.write('kubejs/data/botania/orechid_ore_weights/orechid.json', JSON.pretty_generate(botania))
end
