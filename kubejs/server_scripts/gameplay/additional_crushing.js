/**
 * Copyright 2021,2022 Maxine Red 
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
    {input: 'forge:ender_pearls', output: 'betterendforge:ender_dust', amount: 1},
    {input: 'forge:blackstone', output: 'crockpot:blackstone_dust', amount: 1}
];
var dyes = [
    {input: 'druidcraft:chitin', output: Item.of('minecraft:blue_dye', 2), secondary: Item.of('minecraft:cyan_dye').withChance(0.25)}
]

onEvent('recipes', event => {
    dusts.forEach(dust => {
        dust.input = `#${dust.input}`;
        if (dust.exclude !== 'immersive') {
            event.recipes.immersiveengineering.crusher(Item.of(dust.output, dust.amount), dust.input);
        }
        if (dust.amount <= 2) {
            event.custom(hammerCrushingRecipe(Item.of(dust.output), Ingredient.of(dust.input)));
        }
        if (dust.exclude !== 'create') {
            if (dust.amount > 1) {
                event.recipes.create.crushing([Item.of(dust.output, dust.amount)], dust.input);
            }
            else {
                event.recipes.create.crushing([Item.of(dust.output), Item.of(dust.output).withChance(0.5)], dust.input);
                event.recipes.create.milling([Item.of(dust.output)], dust.input);
            }
        }
        if (dust.exclude !== 'occultism') {
            event.custom(crushingSpiritRecipe(Ingredient.of(dust.input), Item.of(dust.output, dust.amount)));
        }
        if (dust.amount === 9) {
            event.custom(PressureChamberRecipe(Item.of(dust.output, dust.amount), Ingredient.of(dust.input), 3.0));
        }
        else {
            event.custom(PressureChamberRecipe(Item.of(dust.output, dust.amount), Ingredient.of(dust.input), 1.5));
        }
    });
    dyes.forEach(dye => {
        event.custom(PressureChamberRecipe(dye.output, Ingredient.of(dye.input), 1.0));
        event.recipes.create.milling([dye.output, dye.secondary], dye.input);
        event.recipes.immersiveengineering.crusher(dye.output, dye.input, dye.secondary);
        event.custom({type: 'occultism:crushing', ingredient: Ingredient.of(dye.input).toJson(), result: dye.output.toResultJson(), crushing_time: 200})
    });
});
