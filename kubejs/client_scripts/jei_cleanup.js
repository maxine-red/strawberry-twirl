var remove_items = [
	'sophisticatedbackpacks:magnet_upgrade',
	'sophisticatedbackpacks:advanced_magnet_upgrade',
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
	'sophisticatedbackpacks:tank_upgrade',
	
	'farmersdelight:wheat_dough',
	
	/(minecraft|astralsorcery):\w+_(shovel|axe|pickaxe|sword)/,
	/immersiveengineering:(shovel|axe|pickaxe|sword)_steel/,
	
    /quark:\w+rang/,
	/quark:\w*biotite\w*/,
	'quark:lit_lamp',
	'quark:diamond_heart',
	'quark:crate',
	'quark:potato_crate',
	'quark:carrot_crate',
	'quark:beetroot_crate',
	'ars_nouveau:arcane_road',
	/curios:\w+/,
	/theoneprobe:\w+_helmet_\w+/,
	/theoneprobe:\w*probe/

	//'bayou_blues:gooseberry_jam_cookie',
	//'bayou_blues:gooseberry_juice',
	//'bayou_blues:gooseberry_jam',
	//'bayou_blues:honey_glazed_gooseberries'
];


onEvent('jei.hide.items', event => {
	remove_items.forEach(item => {
		event.hide(item);
	});
});
