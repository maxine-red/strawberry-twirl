/**
 * Copyright 2021,2022 Maxine Red 
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
	'farmersdelight:wheat_dough',
	
    /quark:\w*biotite\w*/,
	'quark:lit_lamp',
	//'quark:diamond_heart',
	'quark:crate',
	'quark:potato_crate',
	'quark:carrot_crate',
	'quark:beetroot_crate',
	'ars_nouveau:arcane_road',
	/curios:\w+/,
	/theoneprobe:\w+_helmet_probe/,
	'theoneprobe:probe',
	'theoneprobe:creativeprobe',
    'create:crushed_brass',
    
    // Druicraft unfinished items
    'druidcraft:debug',
    'druidcraft:hellkiln',
    'druidcraft:hellkiln_igniter',
    'druidcraft:nether_fiery_glass_ore',
    'druidcraft:brightstone_ore',
    'druidcraft:knife',
    'storagedrawers:controller_slave'
];


onEvent('jei.hide.items', event => {
	remove_items.forEach(item => {
		event.hide(item);
	});
});
