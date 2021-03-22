var fluids = [
	{id: 'soul_water', color: 0x23c0c6, name: 'Soul Water', thick: false},
	{id: 'void_water', color: 0x29241a, name: 'Void Water', thick: false},
	{id: 'red_jam', color: 0xdd1725, name: 'Red Jam', thick: true},
	{id: 'purple_jam', color: 0x3b2340, name: 'Purple Jam', thick: true},
	{id: 'yellow_jam', color: 0xd76f18, name: 'Jam', thick: true}
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