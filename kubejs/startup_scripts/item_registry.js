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
	{id: 'attuned_salt', texture: 'kubejs:item/attuned_salt', name: 'Attuned Salt'},
	{id: 'lure_of_luck', texture: 'kubejs:item/lure_of_luck', name: 'Lure of Luck'}
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

let rituals = [
    {id: 'craft_stack_upgrade_tier_4', name: 'Ritual: Craft Backpack Stack Upgrade Tier 4', tooltip: 'Stack upgrades allow your backpack to store more items in every slot.'},
    {id: 'craft_stack_upgrade_tier_3', name: 'Ritual: Craft Backpack Stack Upgrade Tier 3', tooltip: 'Stack upgrades allow your backpack to store more items in every slot.'},
    {id: 'craft_stack_upgrade_tier_2', name: 'Ritual: Craft Backpack Stack Upgrade Tier 2', tooltip: 'Stack upgrades allow your backpack to store more items in every slot.'},
    {id: 'craft_stack_upgrade_tier_1', name: 'Ritual: Craft Backpack Stack Upgrade Tier 1', tooltip: 'Stack upgrades allow your backpack to store more items in every slot.'},
    {id: 'craft_compacting_upgrade', name: 'Ritual: Craft compacting upgrade', tooltip: 'Compacts items that have a 2x2 recipe'},
    {id: 'craft_compacting_drawers_3', name: 'Ritual:Craft compacting drawers', tooltip: 'Compacting drawers compact items into storage blocks and store them readily available in nugget, ingot and block form (where applicable)'},
    {id: 'craft_everlasting_upgrade', name: 'Ritual: Craft Everlasting Upgrade', tooltip: 'An upgrade, that makes your backpack virtually indestructible'},
    {id: 'craft_controller', name: 'Ritual: Craft Drawer Controller', tooltip: 'Drawer controller provide a nuified interface for all drawers, they connect to.'},
    {id: 'craft_obsidian_storage_upgrade', name: 'Ritual: Craft Obsidian Storage Upgrade', tooltip: 'Increases storage by 2x its base value'},
    {id: 'craft_iron_storage_upgrade', name: 'Ritual: Craft Iron Storage Upgrade', tooltip: 'Increases storage by 4x its base value'},
    {id: 'craft_gold_storage_upgrade', name: 'Ritual: Craft Gold Storage Upgrade', tooltip: 'Increases storage by 8x its base value'},
    {id: 'craft_diamond_storage_upgrade', name: 'Ritual: Craft Diamond Storage Upgrade', tooltip: 'Increases storage by 16x its base value'},
    {id: 'craft_emerald_storage_upgrade', name: 'Ritual: Craft Emerald Storage Upgrade', tooltip: 'Increases storage by 32x its base value'},
    {id: 'craft_void_upgrade', name: 'Ritual: Craft Voiding Upgrade', tooltip: 'Destroy unwanted items, instead of putting them into your backpack'},
    {id: 'craft_restock_upgrade', name: 'Ritual: Craft Restocking Upgrade', tooltip: 'Refills the stack, you are currently using, from your backpack'},
    {id: 'craft_refill_upgrade', name: 'Ritual: Craft Refilling Upgrade', tooltip: 'Destroy unwanted items, instead of putting them into your backpack'},
    {id: 'craft_pickup_upgrade', name: 'Ritual: Craft Pickup Upgrade', tooltip: 'Puts items into your backpack for you'},
    {id: 'craft_filter_upgrade', name: 'Ritual: Craft Filter Upgrade', tooltip: 'Filters what can be inside backpacks (only piping)'},
    {id: 'craft_feeding_upgrade', name: 'Ritual: Craft Feeding Upgrade', tooltip: 'Feeds you, edible, items from your backpack'},
    {id: 'craft_deposit_upgrade', name: 'Ritual: Craft Deposit Upgrade', tooltip: 'Deposits contents of backpack into inventory, you right click'},
    {id: 'craft_stonecutter_upgrade', name: 'Ritual: Craft Stonecutter Upgrade', tooltip: 'Have a stone cutter in your backpack'},
    {id: 'craft_crafting_upgrade', name: 'Ritual: Craft Crafting Upgrade', tooltip: 'Have a crafting table, inside of your backpack'},
    {id: 'craft_advanced_pickup_upgrade', name: 'Ritual: Craft Advanced Pickup Upgrade', tooltip: 'Pickup, with more filter options'},
    {id: 'craft_advanced_void_upgrade', name: 'Ritual: Craft Advanced Voiding Upgrade', tooltip: 'Voiding, with more filter options'},
    {id: 'craft_advanced_restock_upgrade', name: 'Ritual: Craft Advanced Restocking Upgrade', tooltip: 'Restocking, with more filter options'},
    {id: 'craft_advanced_filter_upgrade', name: 'Ritual: Craft Advanced Filter Upgrade', tooltip: 'Bigger filter'},
    {id: 'craft_advanced_feeding_upgrade', name: 'Ritual: Craft Advanced Feeding Upgrade', tooltip: 'Feeding, with more filter options'},
    {id: 'craft_advanced_deposit_upgrade', name: 'Ritual: Craft Advanced Deposit Upgrade', tooltip: 'Depositing, with more filter options'},
    {id: 'craft_advanced_compacting_upgrade', name: 'Ritual: Craft Advanced Compacting Upgrade', tooltip: 'Compacts items that have a 2x2, or 3x3 recipe'}
]
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
    rituals.forEach(ritual => {
        event.create(ritual.id).texture('occultism:item/pentacle').tooltip(ritual.tooltip).displayName(ritual.name);
    });
});