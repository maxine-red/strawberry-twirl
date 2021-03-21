var items = [
	{id: 'crushed_andesite_alloy', texture: 'create:item/crushed_quicksilver_ore', name: 'Crushed Andesite Alloy'},
	{id: 'salt', texture: 'kubejs:item/salt', name: 'Salt'},
	{id: 'soul_salt', texture: 'kubejs:item/salt_soul', name: 'Soul Salt'},
	{id: 'void_salt', texture: 'kubejs:item/salt_void', name: 'Void Salt'}
]

events.listen('item.registry', (event) => {
	items.forEach(item => {
		event.create(item.id).texture(item.texture).displayName(item.name);
	});
});