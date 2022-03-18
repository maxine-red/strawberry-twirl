/**
 * Copyright 2021 Maxine Red 
 * This file is part of Strawberry Twirl.
 *
 * Foobar is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Foobar is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with Foobar.  If not, see <https://www.gnu.org/licenses/>.
*/

// priority: 0

//settings.logAddedRecipes = true
//settings.logRemovedRecipes = true
settings.logSkippedRecipes = false;
settings.logErroringRecipes = true;

var foods = [
	'minecraft:bread',
	'farmersdelight:wheat_dough',
	'minecraft:mushroom_stew',
	'botania:mushroom_stew',
	'minecraft:beetroot_soup',
	'farmersdelight:integration/create/mixing/tomato_sauce_from_mixing',
	'minecraft:rabbit_stew_from_brown_mushroom',
	'minecraft:rabbit_stew_from_red_mushroom',
	'create:splashing/wheat_flour',
	'farmersdelight:raw_pasta_from_water',
	'farmersdelight:raw_pasta_from_eggs',
	'farmersdelight:raw_pasta',
	'farmersdelight:cake_from_milk_bottle'
];

var recipes = [
	'farmersdelight:integration/create/mixing/pie_crust_from_mixing',
	'astralsorcery:shaped/black_marble/black_marble_raw',
	'astralsorcery:altar/black_marble_raw',
    'minecraft:sugar_from_honey_bottle',
    'create:bar_of_chocolate',
    'minecraft:honey_block',
    /create:(blasting|smelting)\/\w*brass\w*/,
    'create:mixing/crushed_brass',
    'create:crushing/brass_block',
    'mana-and-artifice:vinteum_dust_blast_furnace',
    'mana-and-artifice:vinteum_dust',
    'feywild:schematics_yggdrasil_rune_crafting',
    /feywild:runes\/\w+heim_rune/,
    /feywild:runes\/\w+gard_rune/,
    'feywild:runes/nidavellir_rune',
    'feywild:smelting/fey_dust',
    'druidcraft:knife',
    'farmersdelightintegrations:example',
    'minecraft:beehive',
    'waystones:warp_dust_2',
    'create:crushing/platinum_ore',
    'create:milling/platinum_ore',
    'occultism:miner/ores/ore_aluminum',
    'occultism:miner/ores/ore_nickel',
    'occultism:miner/ores/ore_uranium',
    'create:dough_by_mixing',
    'create:mixing/dough_by_mixing'
];

var create_andesite_alloy = [
	'andesite_alloy',
	'andesite_alloy_from_zinc'
];


var quark_glass_shards = ["black", "blue", "brown", "cyan", "gray", "green", "light_blue", "light_gray", "lime", "magenta", "orange", "pink", "purple", "red", "white", "yellow"];
var corundum_colors = ["red", "yellow", "green", "blue", "indigo", "violet", "white", "black"];


onEvent('recipes', event => {
	
	foods.forEach(item => {
		event.remove({id: item});
	});
	
	recipes.forEach(recipe => {
		event.remove({id: recipe});
	});
	
	create_andesite_alloy.forEach(item => {
		event.remove({id: 'create:crafting/materials/' + item});
		event.remove({id: 'create:mixing/' + item});
	});
	
	quark_glass_shards.forEach(color => {
		let output = "minecraft:" + color + "_stained_glass";
		let input = "quark:" + color + "_shard";
		event.recipes.createMixing(output, [input, input, input, input]).heated();
		event.recipes.createMilling("4x " + input, output);
		event.recipes.createMixing("quark:" + color + "_stained_planks", ["#minecraft:planks", "#forge:dyes/" + color, Fluid.of("astralsorcery:liquid_starlight", 50)]);
		event.remove({id: "quark:tweaks/crafting/" + color + "_glass"});
		event.remove({id: "quark:building/crafting/" + color + "_stained_planks"});
	});
	  
	corundum_colors.forEach(color => {
        event.remove({id: "quark:world/crafting/waxed_" + color + "_crystal"});
		event.shapeless("quark:waxed_" + color + "_crystal", ["quark:" + color + "_crystal", "kubejs:wax"]);
	});
});
