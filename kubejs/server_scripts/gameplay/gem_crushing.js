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

var gems = [ 
    { gem: 'sapphire', count: 1, secondary: 'minecraft:cobblestone'},
    { gem: 'mana', count: 1, secondary: 'minecraft:cobblestone'},
    { gem: 'geodes/blue', count: 1, secondary: 'minecraft:cobblestone'},
    { gem: 'geodes/red', count: 1, secondary: 'minecraft:netherrack'},
    { gem: 'geodes/purple', count: 1, secondary: 'betterendforge:endstone_dust'},
    { gem: 'amber/overworld', count: 1, secondary: 'minecraft:cobblestone'},
    { gem: 'moonstone', count: 1, secondary: 'minecraft:cobblestone'},
    { gem: 'rockroot', count: 2, secondary: 'minecraft:cobblestone'},
    { gem: 'eclipse', count: 1},
    { gem: 'soul', count: 1},
    { gem: 'moon_crystal', count: 1},
    { gem: 'pearl_shards', count: 1},
    { gem: 'verdant', count: 1},
    { gem: 'aqua', count: 1},
    { gem: 'bloodstone', count: 1}
];

function starlightInfusionRecipe(ore, gemstone) {
    return {
        type: 'astralsorcery:infuser',
        fluidInput: 'astralsorcery:liquid_starlight',
        input: ore,
        output: gemstone,
        consumptionChance: 0.1,
        duration: 100,
        consumeMultipleFluids: false,
        acceptChaliceInput: true,
        copyNBTToOutputs: false
    }
}

onEvent('recipes', event => {
    gems.forEach(gem => {
        let ore = `#forge:ores/${gem.gem}`;
        let gemstone = `#forge:gems/${gem.gem}`;
        event.recipes.immersiveengineering.crusher(Item.of(gemstone, 2 * gem.count), ore);
        if (gem.secondary) {
            event.recipes.create.crushing([Item.of(gemstone, 2 * gem.count), Item.of(gemstone, gem.count).withChance(0.25), Item.of(gem.secondary).withChance(0.125)], ore);
        }
        else {
            event.recipes.create.crushing([Item.of(gemstone, 2 * gem.count), Item.of(gemstone, gem.count).withChance(0.25)], ore);
        }
        event.custom(starlightInfusionRecipe(ore, Item.of(gemstone, 5 * gem.count)));
        event.custom(crushingPressureChamberRecipe(Item.of(gemstone, 6 * gem.count), ore));
    });
});