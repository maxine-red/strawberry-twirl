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

let items = [
	{id: 'crushed_andesite_alloy', texture: 'create:item/crushed_quicksilver_ore', name: 'Crushed Andesite Alloy'},
	{id: 'salt', texture: 'kubejs:item/salt', name: 'Salt'},
	{id: 'soul_salt', texture: 'kubejs:item/salt_soul', name: 'Soul Salt'},
	{id: 'void_salt', texture: 'kubejs:item/salt_void', name: 'Void Salt'},
	{id: 'wax', texture: 'kubejs:item/wax', name: 'Bees Wax'},
	{id: 'apple_leather_unprepared', texture: 'kubejs:item/apple_leather_unprepared', name: 'Unprepared Apple Leather'},
	{id: 'apple_pulp_dry', texture: 'kubejs:item/apple_pulp_dry', name: 'Dry Apple Pulp'},
	{id: 'apple_pulp_wet', texture: 'kubejs:item/apple_pulp_wet', name: 'Wet Apple Pulp'},
	{id: 'cinder_dough', texture: 'kubejs:item/cinder_dough', name: 'Cinder Dough'},
	{id: 'sweet_dough', texture: 'kubejs:item/wheat_dough', name: 'Sweet Dough'},
	{id: 'potato_flour', texture: 'kubejs:item/wheat_flour', name: 'Potato Flour'},
	{id: 'wheat_grains', texture: 'kubejs:item/wheat_grain', name: 'Wheat Grains'},
	{id: 'jam_jar', texture: 'kubejs:item/jam_jar_labelled', name: 'Jar of Jam'},
	{id: 'jam_jar_purple', texture: 'kubejs:item/jam_jar_purple_labelled_alt', name: 'Jar of Mysterious Jam'},
	{id: 'jam_jar_red', texture: 'kubejs:item/jam_jar_red_labelled', name: 'Jar of red Jam'},
	{id: 'butter', texture: 'kubejs:item/butter', name: 'Butter'},
	{id: 'magic_butter', texture: 'kubejs:item/butter_mystical', name: 'Magic Butter'},
	{id: 'gelatin', texture: 'kubejs:item/gelatine', name: 'Gelatin'},
	{id: 'attuned_salt', texture: 'kubejs:item/attuned_salt', name: 'Attuned Salt'}
];
let aefoods = [
	{id: 'jelly', texture: 'kubejs:item/jelly', hunger: 3, saturation: 0.1666667, name: 'Jelly'},
	{id: 'red_jelly', texture: 'kubejs:item/jelly_red', hunger: 3, saturation: 0.1666667, name: 'Red Jelly'},
	{id: 'purple_jelly', texture: 'kubejs:item/jelly_purple', hunger: 3, saturation: 0.1666667, name: 'Mysterious Jelly'}
];
let foods = [
	{id: 'sliced_bread', texture: 'kubejs:item/bread_sliced', hunger: 5, saturation: 0.6, name: 'Sliced bread'},
	{id: 'jam_sandwich', texture: 'kubejs:item/sandwich_jam', hunger: 3, saturation: 0.75, name: 'Jam Sandwich'},
	{id: 'red_jam_sandwich', texture: 'kubejs:item/sandwich_jam_red', hunger: 3, saturation: 0.75, name: 'Red Jam Sandwich'},
	{id: 'purple_jam_sandwich', texture: 'kubejs:item/sandwich_jam_purple', hunger: 3, saturation: 0.75, name: 'Mysterious Jam Sandwich'},
	{id: 'buttered_bread', texture: 'kubejs:item/toast_buttered', hunger: 5, saturation: 0.7, name: 'Buttered Bread Slices'},
	{id: 'magic_buttered_bread', texture: 'kubejs:item/toast_buttered_mystical', hunger: 5, saturation: 0.7, name: 'Magic Buttered Bread Slices'}
];
events.listen('item.registry', (event) => {
	items.forEach(item => {
        if (item.id === 'wax') {
            event.create(item.id).texture(item.texture).displayName(item.name).burnTime(200);
        }
        else {
            event.create(item.id).texture(item.texture).displayName(item.name);
        }
	});
	aefoods.forEach(food => {
		if (food.id === 'purple_jelly') {
			event.create(food.id).texture(food.texture).food(f => {
				f.hunger(food.hunger);
				f.saturation(food.saturation);
				f.effect('ars_nouveau:mana_regen', 100, 0, 1.0);
				f.effect('minecraft:nausea', 100, 0, 1.0);
				f.effect('minecraft:blindness', 50, 0, 0.1);
				f.effect('minecraft:glowing', 200, 0, 1.0);
				f.effect('minecraft:regeneration', 200, 0, 1.0);
				f.alwaysEdible();
			}).tooltip('Strange energy comes from this...').displayName(food.name);
		}
		else {
			event.create(food.id).texture(food.texture).food(f => {
				f.hunger(food.hunger);
				f.saturation(food.saturation);
				f.alwaysEdible();
			}).displayName(food.name);
		}
	});
	foods.forEach(food => {
		if (food.id === 'purple_jam_sandwich') {
			event.create(food.id).texture(food.texture).food(f => {
				f.hunger(food.hunger);
				f.saturation(food.saturation);
				f.effect('ars_nouveau:mana_regen', 200, 0, 1.0);
				f.effect('minecraft:weakness', 300, 0, 0.1);
				f.effect('minecraft:mining_fatigue', 300, 2, 0.1);
				f.effect('minecraft:nausea', 100, 0, 1.0);
				f.effect('minecraft:resistance', 600, 1, 1.0);
				f.effect('minecraft:invisibility', 300, 0, 1.0);
				f.effect('minecraft:fire_resistance', 600, 0, 1.0);
				f.effect('minecraft:blindness', 50, 0, 0.1);
				f.effect('minecraft:glowing', 600, 0, 1.0);
				f.effect('minecraft:regeneration', 600, 1, 1.0);
			}).tooltip('Strange energy comes from this...').displayName(food.name);
		}
		else if (food.id === 'magic_buttered_bread') {
			event.create(food.id).texture(food.texture).food(f => {
				f.hunger(food.hunger);
				f.saturation(food.saturation);
				f.effect('minecraft:weakness', 100, 0, 0.1);
				f.effect('minecraft:mining_fatigue', 100, 2, 0.1);
				f.effect('minecraft:nausea', 150, 0, 1.0);
				f.effect('minecraft:resistance', 400, 1, 1.0);
				f.effect('minecraft:invisibility', 300, 0, 1.0);
				f.effect('minecraft:fire_resistance', 400, 0, 1.0);
			}).tooltip('Strange energy comes from this...').displayName(food.name);
		}
		else {
			event.create(food.id).texture(food.texture).food(f => {
				f.hunger(food.hunger);
				f.saturation(food.saturation)
			}).displayName(food.name);
		}
	});
});