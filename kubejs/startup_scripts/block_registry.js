var blocks = [
  {id: 'enderrack', material: 'rock', tool: 'pickaxe', level: 0, required: true, name: 'Enderrack', hardness: 0.4, resistance: 0.4}
];

events.listen('block.registry', (event) => {
	blocks.forEach(block => {
		event.create(block.id).material(block.material).harvestTool(block.tool, block.level).requiresTool(block.required).hardness(block.hardness).resistance(block.resistance).displayName(block.name);
	});
});