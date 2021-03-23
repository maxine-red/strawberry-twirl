var items = [
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
	{id: 'buttered_bread', texture: 'kubejs:item/toast_buttered', name: 'Buttered Bread'},
	{id: 'magic_buttered_bread', texture: 'kubejs:item/toast_buttered_mystical', name: 'Magic Buttered bread'}
];
var aefoods = [
	{id: 'jelly', texture: 'kubejs:item/jelly', hunger: 3, saturation: 0.1666667, name: 'Jelly'},
	{id: 'red_jelly', texture: 'kubejs:item/jelly_red', hunger: 3, saturation: 0.1666667, name: 'Red Jelly'},
	{id: 'purple_jelly', texture: 'kubejs:item/jelly_purple', hunger: 3, saturation: 0.1666667, name: 'Mysterious Jelly'}
];
var foods = [
	{id: 'sliced_bread', texture: 'kubejs:item/bread_sliced', hunger: 5, saturation: 1.2, name: 'Sliced bread'},
	{id: 'jam_sandwich', texture: 'kubejs:item/sandwich_jam', hunger: 3, saturation: 0.75, name: 'Jam Sandwich'},
	{id: 'red_jam_sandwich', texture: 'kubejs:item/sandwich_jam_red', hunger: 3, saturation: 0.75, name: 'Red Jam Sandwich'},
	{id: 'purple_jam_sandwich', texture: 'kubejs:item/sandwich_jam_purple', hunger: 3, saturation: 0.75, name: 'Mysterious Jam Sandwich'},
];

events.listen('item.registry', (event) => {
	items.forEach(item => {
		event.create(item.id).texture(item.texture).displayName(item.name);
	});
	aefoods.forEach(food => {
		if (food.id === 'purple_jelly') {
			event.create(food.id).texture(food.texture).food(f => {
				f.hunger(food.hunger);
				f.saturation(food.saturation);
				f.effect('minecraft:levitation', 60, 0, 0.7);
				f.effect('minecraft:blindness', 60, 0, 0.3);
				f.effect('minecraft:regenration', 60, 0, 0.1);
				f.effect('minecraft:nausea', 600, 0, 0.4);
				f.effect('minecraft:strength', 600, 0, 0.6);
				f.effect('minecraft:weakness', 600, 0, 0.2);
				f.effect('minecraft:bad_omen', 200, 0, 0.3);
				f.effect('minecraft:glowing', 200, 0, 1.0);
				f.effect('minecraft:hero_of_the_village', 60, 0, 0.01);
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
				f.effect('minecraft:levitation', 120, 0, 0.7);
				f.effect('minecraft:nausea', 600, 0, 0.4);
				f.effect('minecraft:strength', 1200, 0, 0.6);
				f.effect('minecraft:weakness', 1200, 0, 0.2);
				f.effect('minecraft:glowing', 1200, 0, 1.0);
				f.effect('minecraft:fire_resistance', 600, 0, 0.6);
				f.effect('minecraft:invisibility', 200, 0, 0.2);
				f.effect('minecraft:wither', 60, 0, 0.05);
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