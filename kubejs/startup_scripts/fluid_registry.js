var fluids = [
	{id: 'soul_water', color: 0x23c0c6, name: 'Soul Water'},
	{id: 'void_water', color: 0x29241a, name: 'Void Water'}
]

events.listen('fluid.registry', (event) => {
	fluids.forEach(fluid => {
		event.create(fluid.id).color(fluid.color).displayName(fluid.name);
	});
});