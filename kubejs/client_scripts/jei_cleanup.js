var remove_items = [
	'create:crushed_platinum_ore',
	'create:crushed_silver_ore',
	'create:crushed_aluminum_ore',
	'create:crushed_uranium_ore',
	'create:crushed_tin_ore',
	'create:crushed_nickel_ore',

	/sophisticatedbackpacks:\w+_upgrade/,
	/sophisticatedbackpacks:\w+_backpack/,
	'sophisticatedbackpacks:upgrade_base',

	'astralsorcery:starmetal_ore',
	'farmersdelight:wheat_dough',
	
    /quark:\w+rang/,
	/quark:\w*biotite\w*/,
	'quark:lit_lamp',
	'quark:diamond_heart',
	'quark:crate',
	'quark:potato_crate',
	'quark:carrot_crate',
	'quark:beetroot_crate',
	
    'botania:enchanter',
	
    /exnihilosequentia:crucible_\w+/,
	/exnihilosequentia:pebble_\w+/,
	/curios:\w+/,

	'bayou_blues:gooseberry_jam_cookie',
	'bayou_blues:gooseberry_juice',
	'bayou_blues:gooseberry_jam',
	'bayou_blues:honey_glazed_gooseberries'
];

onEvent('jei.hide.items', event => {
	remove_items.forEach(item => {
		event.hide(item)
	});
});
