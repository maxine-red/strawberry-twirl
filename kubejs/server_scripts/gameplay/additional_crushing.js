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

var dusts = [ 
    {input: 'forge:storage_blocks/petcoke', output: 'immersivepetroleum:petcoke_dust', amount: 9, exclude: 'immersive'},
    {input: 'forge:coal_petcoke', output: 'immersivepetroleum:petcoke_dust', amount: 1, exclude: 'immersive'},
    {input: 'forge:storage_blocks/coal_coke', output: 'immersiveengineering:dust_coke', amount: 9, exclude: 'immersive'},
    {input: 'forge:coal_coke', output: 'immersiveengineering:dust_coke', amount: 1, exclude: 'immersive'},
    {input: 'forge:end_stones', output: 'occultism:crushed_end_stone', amount: 2, exclude: 'occultism'},
    {input: 'forge:netherrack', output: 'create:cinder_flour', amount: 1, exclude: 'create'},
    {input: 'forge:gems/ender', output: 'betterendforge:ender_dust', amount: 1},
    {input: 'forge:ender_pearls', output: 'betterendforge:ender_dust', amount: 1},
    {input: 'forge:gems/moon_crystal', output: 'the_afterlight:crushed_moon_crystal_dust', amount: 6}
];
var dyes = [
    {input: 'druidcraft:chitin', output: Item.of('minecraft:blue_dye', 2), secondary: Item.of('minecraft:cyan_dye').withChance(0.25)}
]

function crushingSpiritRecipe(input, output, amount) {
    return  {
        type: 'occultism:crushing',
        ingredient: {
            tag: input
        },
        result: {
            item: output,
            count: amount
        },
        crushing_time: 200 * amount
    }
}

function hammerCrushingDustRecipe(input, output) {
    return {
        type: 'immersiveengineering:hammer_crushing',
        result: {
            item: output
        },
        input: {
            tag: input
        }
    };
}

onEvent('recipes', event => {
    dusts.forEach(dust => {
        if (dust.exclude !== 'immersive') {
            event.recipes.immersiveengineering.crusher(Item.of(dust.output, dust.amount), `#${dust.input}`);
        }
        if (dust.amount <= 2) {
            event.custom(hammerCrushingDustRecipe(dust.input, dust.output));
        }
        if (dust.exclude !== 'create') {
            if (dust.amount > 1) {
                event.recipes.create.crushing([Item.of(dust.output, dust.amount)], `#${dust.input}`);
            }
            else {
                event.recipes.create.crushing([Item.of(dust.output), Item.of(dust.output).withChance(0.5)], `#${dust.input}`);
                event.recipes.create.milling([Item.of(dust.output)], `#${dust.input}`);
            }
        }
        if (dust.exclude !== 'occultism') {
            event.custom(crushingSpiritRecipe(dust.input, dust.output, dust.amount));
        }
        if (dust.amount === 9) {
            event.custom(crushingPressureChamberRecipe(Item.of(dust.output, dust.amount), `#${dust.input}`, 3.0));
        }
        else {
            event.custom(crushingPressureChamberRecipe(Item.of(dust.output, dust.amount), `#${dust.input}`, 1.5));
        }
    });
    dyes.forEach(dye => {
        console.info(dye);
        event.custom(crushingPressureChamberRecipe(dye.output, dye.input, 1.0));
        event.recipes.create.milling([dye.output, dye.secondary], dye.input);
        event.recipes.immersiveengineering.crusher(dye.output, dye.input, dye.secondary);
        event.custom({type: 'occultism:crushing', ingredient: Ingredient.of(dye.input).toJson(), result: dye.output.toResultJson(), crushing_time: 200})
    });
});