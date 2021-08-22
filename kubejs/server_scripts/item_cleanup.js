// priority: 0

//settings.logAddedRecipes = true
//settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

var sophisticated_upgrades = [
	'sophisticatedbackpacks:magnet_upgrade',
	'sophisticatedbackpacks:advanced_magnet_upgrade',
	'sophisticatedbackpacks:advanced_magnet_upgrade_from_basic',
	'sophisticatedbackpacks:feeding_upgrade',
	'sophisticatedbackpacks:compacting_upgrade',
	'sophisticatedbackpacks:advanced_compacting_upgrade',
	'sophisticatedbackpacks:void_upgrade',
	'sophisticatedbackpacks:advanced_void_upgrade',
	'sophisticatedbackpacks:inception_upgrade',
	'sophisticatedbackpacks:smelting_upgrade',
	'sophisticatedbackpacks:advanced_tool_swapper_upgrade',
	'sophisticatedbackpacks:auto_smelting_upgrade',
	'sophisticatedbackpacks:crafting_upgrade',
	'sophisticatedbackpacks:stonecutter_upgrade',
	'sophisticatedbackpacks:stack_upgrade_tier_1',
	'sophisticatedbackpacks:stack_upgrade_tier_2',
	'sophisticatedbackpacks:stack_upgrade_tier_3',
	'sophisticatedbackpacks:stack_upgrade_tier_4',
	'sophisticatedbackpacks:tool_swapper_upgrade',
	'sereneseasons:calendar',
	'sereneseasons:season_sensor',
	'sophisticatedbackpacks:tank_upgrade',
];

var foods = [
	'minecraft:bread',
	'farmersdelight:wheat_dough',
	'minecraft:mushroom_stew',
	'minecraft:beetroot_soup',
	'farmersdelight:integration/create/mixing/tomato_sauce_from_mixing',
	'minecraft:rabbit_stew_from_brown_mushroom',
	'minecraft:rabbit_stew_from_red_mushroom',
	'create:splashing/wheat_flour',
	'farmersdelight:raw_pasta',
	'bayou_blues:crafting/gooseberry_jam_cookie',
	'bayou_blues:crafting/honey_glazed_gooseberries',
	'bayou_blues:crafting/gooseberry_juice',
	'bayou_blues:crafting/gooseberry_jam',
	'bayou_blues:crafting/gooseberry_jam_from_juice',
	'farmersdelight:cake_from_milk_bottle',
	'minecraft:netherite_ingot'
];

var recipes = [
	 'farmersdelight:integration/create/mixing/pie_crust_from_mixing',
	 'astralsorcery:shaped/black_marble/black_marble_raw',
	 'astralsorcery:altar/black_marble_raw',
	/minecraft:\w+_(shovel|axe|pickaxe|sword)/,
	/astralsorcery:altar\/crystal_(shovel|axe|pickaxe|sword)/,
	/immersiveengineering:crafting\/(shovel|axe|pickaxe|sword)_steel/,
    // broken recipes
    'abnormals_delight:environmental/cooking/squid_ink_risotto',
    'minecraft:cyan_glazed_terracotta'
];

var outputs = [
];

var create_andesite_alloy = [
	'andesite_alloy',
	'andesite_alloy_from_zinc'
];


var quark_glass_shards = ["black", "blue", "brown", "cyan", "gray", "green", "light_blue", "light_gray", "lime", "magenta", "orange", "pink", "purple", "red", "white", "yellow"];
var corundum_colors = ["red", "yellow", "green", "blue", "indigo", "violet", "white", "black"];


onEvent('recipes', event => {
	sophisticated_upgrades.forEach(item => {
		event.remove({id: item});
	});
	
	foods.forEach(item => {
		event.remove({id: item});
	});
	
	recipes.forEach(recipe => {
        console.info("Remove recipe: " + recipe);
		event.remove({id: recipe});
	});
	
	outputs.forEach(item => {
		event.remove({output: item});
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
/*var create_crushing = [
	'platinum_ore',
	'silver_ore',
	'aluminum_ore',
	'uranium_ore',
	'tin_ore',
	'lead_ore',
	'nickel_ore'
];

var create_cobble = [
	'granite',
	'andesite',
	'diorite'
];

var polished_stones = [
	'granite',
	'diorite',
	'granite'
];

var smooth_stones = [
	'stone'
];

var ex_nihil_hammer = [
	'andesite',
	'diorite',
	'granite'
];

var corals = [
	'tube',
	'brain',
	'bubble',
	'fire',
	'horn'
];

var types = [
	'exnihilosequentia:compost',
	'exnihilosequentia:heat',
	'exnihilosequentia:crucible'
];

var recipes = [
	 'astralsorcery:block_transmutation/iron_starmetal',
	 'exnihilosequentia:hammer/ens_gravel',
	 'create:milling/cobblestone',
	 'farmersdelight:integration/create/mixing/pie_crust_from_mixing',
	 'create:emptying/milk_bucket',
	 'create:mixing/tea',
	 'create:mixing/chocolate',
	 'quark:tools/smithing/flamerang_smithing',
];

onEvent('recipes', event => {
	create_crushing.forEach(item => {
		event.remove({id: 'create:crushing/' + item});
		event.remove({id: 'create:milling/' + item});
	});
	
  polished_stones.forEach(item => {
		event.remove({id: 'minecraft:polished_' + item});
		event.remove({id: 'minecraft:polished_' + item + '_from_' + item + '_stonecutting'});
	});
	
  smooth_stones.forEach(item => {
		event.remove({id: 'minecraft:smooth_' + item});
		event.remove({id: 'exnihilosequentia:sieve/ens_pebble_' + item});
		event.remove({input: 'exnihilosequentia:pebble_' + item});
	});
	
  create_cobble.forEach(item => {
		event.remove({id: 'create:' + item + '_cobblestone_from_' + item + '_stonecutting'});
	});
	
  ex_nihil_hammer.forEach(item => {
		event.remove({id: 'exnihilosequentia:hammer/ens_' + item});
		event.remove({id: 'exnihilosequentia:sieve/ens_pebble_' + item});
		event.remove({input: 'exnihilosequentia:pebble_' + item});
	});

  types.forEach(item => {
    event.remove({type: item});
  });
	
  corals.forEach(item => {
		event.remove({id: 'exnihilosequentia:hammer/ens_' + item + '_coral',});
		event.remove({id: 'exnihilosequentia:hammer/ens_' + item + '_coral_fan',});
	});
  
  vanilla_saplings.forEach(saplings => {
	  event.remove({id: 'botania:mana_infusion/' + saplings[0] + '_sapling_to_' + saplings[1] + '_sapling'});
  });
  
  event.remove({input: 'farmersdelight:wheat_dough'});
  event.remove({output: 'quark:biotite'});
});*/
