#!/usr/bin/env ruby

require 'json'

lang = {}
opts = { indent: "    " }
Dir['data/tetra/materials/*.json'].each do |f|
  JSON.parse(File.read(f), symbolize_names: true).each do |d|
    t = JSON.parse(File.read("data/tetra/materials/templates/#{File.basename(f)}"), symbolize_names: true)
    tint = d.delete(:color)
    name = d.delete(:name)
    lang.store("tetra.material.#{d[:key]}", name)
    lang.store("tetra.material.#{d[:key]}.prefix", name)
    t[:tints][:glyph] = tint
    t[:tints][:texture] = tint
    t[:material].store(:item, d.delete(:item)) if d.has_key?(:item)
    t[:material].store(:tag, d.delete(:tag)) if d.has_key?(:tag)
    d.each do |k, v|
      t[k] = v
    end
    File.write("kubejs/data/tetra/materials/#{t[:category]}/#{t[:key]}.json",
               JSON.pretty_generate(t, opts))
  end
end
sockets = { replace: false, variants: [] }
schematics = { replace: false, outcomes: [] }
['double', 'single', 'sword'].each do |type|
  sockets[:variants] = []
  schematics[:outcomes] = []
  JSON.parse(File.read('data/tetra/sockets.json'),
             symbolize_names: true).each do |s|
    name = s.delete(:name)
    color = s.delete(:color)
    item = s.delete(:item)
    tag = s.delete(:tag)
    key = s.delete(:key)
    exp = s.delete(:experienceCost)
    t = JSON.parse(File.read('data/tetra/modules/templates/socket.json'),
                   symbolize_names: true)
    sc = JSON.parse(File.read('data/tetra/schematics/templates/socket.json'),
                    symbolize_names: true)
    t[:key] = "#{type}_socket/#{key}"
    t[:models] = [{location: "tetra:items/module/#{type}/#{type == 'sword' ? 'guard' : 'binding'}/socket/default", tint: color}]
    t[:glyph][:tint] = color
    s.each do |k, v|
      t[k] = v
    end
    sockets[:variants] << t
    p item
    sc[:material].store(:item, item) unless item.nil?
    sc[:material].store(:tag, tag) unless tag.nil?
    sc[:moduleKey] = "#{type}/socket"
    sc[:moduleVariant] = "#{type}_socket/#{key}"
    sc[:experienceCost] = exp unless exp.nil?
    schematics[:outcomes] << sc
    lang.store("tetra.variant.#{type}_socket.#{key}", name)
  end
  File.write("kubejs/data/tetra/modules/#{type}/socket.json",
             JSON.pretty_generate(sockets, opts))
  File.write("kubejs/data/tetra/schematics/#{type}/socket.json",
             JSON.pretty_generate(schematics, opts))
end
File.write('kubejs/assets/tetra/lang/en_us.json', JSON.pretty_generate(lang, opts))
