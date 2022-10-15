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

var cookies = [
    {input: 'minecraft:honey_bottle', output: 'farmersdelight:honey_cookie', fluid: 'create:honey'},
    {input: 'minecraft:cocoa_beans', output: 'minecraft:cookie'},
    {input: 'minecraft:sweet_berries', output: 'farmersdelight:sweet_berry_cookie'},
    {input: 'neapolitan:mint_leaves', output: 'cookielicious:mint_cookie'},
    {input: 'neapolitan:banana', output: 'cookielicious:banana_cookie'},,
    {input: 'neapolitan:strawberries', output: 'cookielicious:strawberry_cookie'},
    {input: '#forge:ingots/chocolate', output: 'cookielicious:chocolate_cookie'},
    {input: 'neapolitan:dried_vanilla_pods', output: 'cookielicious:vanilla_cookie'},
    {input: 'bayou_blues:gooseberry_jam', output: 'bayou_blues:gooseberry_jam_cookie'},
    {input: 'autumnity:syrup_bottle', output: 'abnormals_delight:maple_cookie'},
    {input: 'environmental:cherries', output: 'abnormals_delight:cherry_cookie'},
    {input: 'upgrade_aquatic:mulberry', output: 'abnormals_delight:mulberry_cookie'},
    {input: 'neapolitan:roasted_adzuki_beans', output: 'cookielicious:adzuki_cookie'}
];

var pies = [
    {input: 'farmersdelight:pumpkin_slice', output: 'minecraft:pumpkin_pie'},
    {input: 'environmental:cherries', output: 'environmental:cherry_pie'},
    {input: 'minecraft:apple', output: 'environmental:apple_pie'},
    {input: 'upgrade_aquatic:mulberry', output: 'upgrade_aquatic:mulberry_pie'},
    {input: 'environmental:truffle', input2: 'minecraft:brown_mushroom', output: 'environmental:truffle_pie'},
    {input: 'ars_nouveau:mana_berry', input2: 'ars_nouveau:mana_bloom', output: 'ars_nouveau:source_berry_pie'},
    {input: 'neapolitan:dried_vanilla_pods', output: Item.of('neapolitan:vanilla_fudge', 4)}
];

var cakes = [
    {input: 'minecraft:sugar', output: 'minecraft:cake'},
    {input: '#forge:ingots/chocolate', output: 'neapolitan:chocolate_cake'},
    {input: 'neapolitan:strawberries', output: 'neapolitan:strawberry_cake'},
    {input: 'neapolitan:dried_vanilla_pods', output: 'neapolitan:vanilla_cake'},
    {input: 'neapolitan:banana', output: 'neapolitan:banana_cake'},
    {input: 'neapolitan:mint_leaves', output: 'neapolitan:mint_cake'},
    {input: 'neapolitan:roasted_adzuki_beans', output: 'neapolitan:adzuki_cake'},
    {input: 'atmospheric:yucca_fruit', output: 'peculiars:yucca_cake'},
    {input: 'atmospheric:aloe_leaves', output: 'peculiars:aloe_cake'},
    {input: 'atmospheric:passionfruit', output: 'peculiars:passionfruit_cake'},
    {input: 'seasonals:roasted_pumpkin', output: 'seasonals:pumpkin_cake'},
    {input: 'minecraft:sweet_berries', output: 'seasonals:sweet_berry_cake'}
];

onEvent('recipes', event => {
    cookies.forEach(cookie => {
        event.remove({type: 'minecraft:crafting_shapeless', output: cookie.output});
        event.remove({type: 'minecraft:crafting_shaped', output: cookie.output});
        event.shapeless(Item.of(cookie.output, 8), ['kubejs:sweet_dough', cookie.input]);
        if (cookie.fluid) {
            event.recipes.create.mixing(Item.of(cookie.output, 8), ['kubejs:sweet_dough', Fluid.of(cookie.fluid, 250)]);
        }
        else {
            event.recipes.create.mixing(Item.of(cookie.output, 8), ['kubejs:sweet_dough', cookie.input]);
        }
    });
    pies.forEach(pie => {
        event.remove({type: 'minecraft:crafting_shapeless', output: pie.output});
        event.remove({type: 'minecraft:crafting_shaped', output: pie.output});
        if (pie.input2) {
            event.shapeless(pie.output, [pie.input, pie.input2, 'farmersdelight:pie_crust', 'minecraft:sugar']);
        }
        else {
            event.shapeless(pie.output, [pie.input, pie.input, 'farmersdelight:pie_crust', 'minecraft:sugar']);
        }
    });
    cakes.forEach(cake => {
        event.remove({type: 'minecraft:crafting_shaped', output: cake.output});
        event.shaped(cake.output, ['mim', 'ses', 'fif'], {m: '#forge:milk', i: cake.input, s: 'minecraft:sugar', e: '#forge:eggs', f: '#forge:dusts/flour'});
    });
});