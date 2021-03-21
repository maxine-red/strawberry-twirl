// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

var create_crushing = [
	'platinum_ore',
	'silver_ore',
	'aluminum_ore',
	'uranium_ore',
	'tin_ore',
	'lead_ore',
	'nickel_ore',
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
	});
	create_cobble.forEach(item => {
		event.remove({id: 'create:' + item + '_cobblestone_from_' + item + '_stonecutting'});
	});
	ex_nihil_hammer.forEach(item => {
		event.remove({id: 'exnihilosequentia:hammer/ens_' + item});
	});
	event.remove({id: 'astralsorcery:block_transmutation/iron_starmetal'});
	event.remove({mod: 'theoneprobe'});
	event.remove({type: 'exnihilosequentia:compost'});
	event.remove({id: "exnihilosequentia:hammer/ens_gravel"});
	event.remove({id: "create:milling/cobblestone"});
	event.remove({id: "farmersdelight:integration/create/mixing/pie_crust_from_mixing"});
});