// priority: 0

//settings.logAddedRecipes = true
//settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

var create_crushing = [
	'platinum_ore',
	'silver_ore',
	'aluminum_ore',
	'uranium_ore',
	'tin_ore',
	'lead_ore',
	'nickel_ore'
];

var create_andesite_alloy = [
	'andesite_alloy',
	'andesite_alloy_from_zinc'
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

var foods = [
	'minecraft:mushroom_stew',
	'botania:mushroom_stew',
	'minecraft:beetroot_soup',
	'farmersdelight:integration/create/mixing/tomato_sauce_from_mixing',
	'minecraft:rabbit_stew_from_brown_mushroom',
	'minecraft:rabbit_stew_from_red_mushroom',
	'enhanced_mushrooms:crafting/food/beef_stew',
	'create:splashing/wheat_flour',
	'farmersdelight:raw_pasta',
	'minecraft:bread',
	'farmersdelight:wheat_dough',
	'bayou_blues:crafting/gooseberry_jam_cookie',
	'bayou_blues:crafting/honey_glazed_gooseberries',
	'bayou_blues:crafting/gooseberry_juice',
	'bayou_blues:crafting/gooseberry_jam',
	'bayou_blues:crafting/gooseberry_jam_from_juice',
	'farmersdelight:cake_from_milk_bottle',
	'minecraft:cake'
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
	 'exnihilosequentia:ens_crucible_wood',
	 'exnihilosequentia:ens_crucible_fired',
	 'exnihilosequentia:ens_crucible_unfired',
	 'exnihilosequentia:sieve/ens_apple',
	 'exnihilosequentia:sieve/ens_golden_apple',
	 'sereneseasons:calendar',
	 'sereneseasons:season_sensor',
	 'sophisticatedbackpacks:netherite_backpack',
	 'quark:tools/smithing/flamerang_smithing',
	 'astralsorcery:shaped/black_marble/black_marble_raw',
	 'astralsorcery:altar/black_marble_raw'
];

var vanilla_saplings = [
	['oak', 'spruce'],
	['spruce', 'birch'],
	['birch', 'jungle'],
	['jungle', 'acacia'],
	['acacia', 'dark_oak'],
	['dark_oak', 'oak']
];

onEvent('recipes', event => {
	create_crushing.forEach(item => {
		event.remove({id: 'create:crushing/' + item});
		event.remove({id: 'create:milling/' + item});
	});
	
  create_andesite_alloy.forEach(item => {
		event.remove({id: 'create:crafting/materials/' + item});
		event.remove({id: 'create:mixing/' + item});
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
	
  foods.forEach(item => {
		event.remove({id: item});
	});

  types.forEach(item => {
    event.remove({type: item});
  });
	
  corals.forEach(item => {
		event.remove({id: 'exnihilosequentia:hammer/ens_' + item + '_coral',});
		event.remove({id: 'exnihilosequentia:hammer/ens_' + item + '_coral_fan',});
	});
	
  recipes.forEach(item => {
    event.remove({id: item});
  });
  
  vanilla_saplings.forEach(saplings => {
	  event.remove({id: 'botania:mana_infusion/' + saplings[0] + '_sapling_to_' + saplings[1] + '_sapling'});
  });
  
  event.remove({input: 'farmersdelight:wheat_dough'});
  event.remove({output: 'quark:biotite'});
});
