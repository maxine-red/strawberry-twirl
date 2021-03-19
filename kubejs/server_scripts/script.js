// priority: 0

onEvent('recipes', event => {
/* event.custom({
    type: 'farmersdelight:cutting',
    ingredients: [
      Ingredient.of('minecraft:grass_block').toJson()
    ],
	tool: {
		tag: "forge:shears"
	},
    result: [
      Item.of('minecraft:grass').toResultJson(),
      Item.of('minecraft:dirt').toResultJson()
    ],
	sound: "minecraft:block.beehive.shear"
}) */});

onEvent('item.tags', event => {
	// Get the #forge:cobblestone tag collection and add Diamond Ore to it
	// event.get('forge:cobblestone').add('minecraft:diamond_ore')

	// Get the #forge:cobblestone tag collection and remove Mossy Cobblestone from it
	// event.get('forge:cobblestone').remove('minecraft:mossy_cobblestone')
})