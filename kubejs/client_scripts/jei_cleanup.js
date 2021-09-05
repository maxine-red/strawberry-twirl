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
	
	/(minecraft|astralsorcery):\w+_(shovel|axe|pickaxe|sword|hoe)/,
	/immersiveengineering:(shovel|axe|pickaxe|sword|hoe)_steel/,
	
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
	/theoneprobe:\w+_helmet_probe/,
	'theoneprobe:probe',
	'theoneprobe:creativeprobe',
    /thermal:upgrade_augment_\d/,
    /thermal:rf_coil\w*_augment/,
    /thermal:fluid_tank\w*_augment/,
    'thermal:area_radius_augment',
    'thermal:ender_bucket'
];


onEvent('jei.hide.items', event => {
	remove_items.forEach(item => {
		event.hide(item);
	});
});

onEvent('jei.hide.fluids', event => {
	event.hide('thermal:ender');
});
