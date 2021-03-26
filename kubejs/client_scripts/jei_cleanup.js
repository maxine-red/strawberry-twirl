
var remove_items = [
	'create:crushed_platinum_ore',
	'create:crushed_silver_ore',
	'create:crushed_aluminum_ore',
	'create:crushed_uranium_ore',
	'create:crushed_tin_ore',
	'create:crushed_nickel_ore',
	/theoneprobe:\w+/,
	/sophisticatedbackpacks:\w+_upgrade/,
	/sophisticatedbackpacks:\w+_backpack/,
	'sophisticatedbackpacks:upgrade_base',
	/quark:\w+_shard/,
	/quark:\w+rang/,
	/quark:\w+_rune/,
	/quark:\w+_button/,
	/quark:\w*biotite\w*/,
	/quark:cobblestone\w*/,
	/quark:redstone_\w+/,
	/quark:\w+_rune/,
	'quark:cobbedstone_vertical_slab',
	'quark:ender_watcher',
	'quark:iron_rod',
	'quark:diamond_heart',
	'astralsorcery:starmetal_ore',
	'farmersdelight:wheat_dough',
	'bayou_blues:gooseberry_jam_cookie',
	'botania:enchanter',
	/exnihilosequentia:crucible_\w+/,
	/exnihilosequentia:pebble_\w+/,
	'quark:lit_lamp',
	/curios:\w+/,
	'bayou_blues:gooseberry_juice',
	'bayou_blues:gooseberry_jam',
	'bayou_blues:honey_glazed_gooseberries',
	'quark:crate',
	'quark:potato_crate',
	'quark:carrot_crate',
	'quark:beetroot_crate'
];

var remove_nbt_items = [
	'botania:laputa_shard',
	'quark:ancient_tome'
];

onEvent('jei.hide.items', event => {
	remove_items.forEach(item => {
		event.hide(item)
	});
});

onEvent('jei.subtypes', event => {
	remove_nbt_items.forEach(item => {
		event.useNBT(item);
	});
});