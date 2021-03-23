
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
	'quark:ancient_tome',
	'quark:ender_watcher',
	'quark:iron_rod',
	'quark:diamond_heart',
	'astralsorcery:starmetal_ore',
	'botania:laputa_shard',
	'farmersdelight:wheat_dough',
	'bayou_blues:gooseberry_jam_cookie'
];

onEvent('jei.hide.items', event => {
	remove_items.forEach(item => {
		event.hide(item)
	});
});