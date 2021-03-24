var fluids = [
	{id: 'soul_water', color: 0x23c0c6, name: 'Soul Water', thick: false},
	{id: 'void_water', color: 0x29241a, name: 'Void Water', thick: false},
	{id: 'red_jam', color: 0xdd1725, name: 'Red Jam', thick: true},
	{id: 'purple_jam', color: 0x3b2340, name: 'Purple Jam', thick: true},
	{id: 'yellow_jam', color: 0xd76f18, name: 'Jam', thick: true},
	{id: 'gelatin', color: 0xd9e4e0, name: 'Gelatin', thick: false},
	{id: 'mushroom_stew', color: 0xcb8a6e, name: 'Mushroom Stew', thick: true},
	{id: 'tomato_sauce', color: 0xbe331f, name: 'Tomato Sauce', thick: true},
	{id: 'beetroot_soup', color: 0x82160d, name: 'Beetroot Soup', thick: true},
	{id: 'rabbit_stew', color: 0xcf7f54, name: 'Rabbit Stew', thick: true},
	{id: 'vegetable_soup', color: 0x887725, name: 'Vegetable Soup', thick: true},
	{id: 'fish_stew', color: 0xaa3800, name: 'Fish Stew', thick: true},
	{id: 'pumpkin_soup', color: 0xe0881d, name: 'Pumpkin Soup', thick: true},
	{id: 'baked_cod_stew', color: 0xcc9e53, name: 'Baked Cod Stew', thick: true},
	{id: 'chicken_soup', color: 0xdba565, name: 'Chicken Soup', thick: true},
	{id: 'sweet_berry_cheesecake', color: 0xa50700, name: 'Sweet Berry Cheesecake Filling', thick: true},
	{id: 'potato_stuffing', color: 0xa16f59, name: 'Potato Stuffing', thick: true},
	{id: 'pumpkin_pie', color: 0xb55b12, name: 'Pumpkin Pie Filling', thick: true},
	{id: 'gooseberry_pie', color: 0x7e6917, name: 'Gooseberry Pie Filling', thick: true},
	{id: 'apple_pie', color: 0x921e32, name: 'Apple Pie Filling', thick: true},
	{id: 'dog_food', color: 0x622c10, name: 'Dog Food', thick: true}
];

events.listen('fluid.registry', (event) => {
	fluids.forEach(fluid => {
		if (fluid.thick === true) {
			event.create(fluid.id).textureThick(fluid.color).displayName(fluid.name);
		}
		else {
			event.create(fluid.id).textureThin(fluid.color).displayName(fluid.name);
		}
	});
});