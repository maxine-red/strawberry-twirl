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

/*let gem_dusts = ['ender_pearl', 'diamond', 'emerald', 'quartz', 'lapis', 'apatite', 'cinnabar', 'niter', 'sulfur'];
let special_dusts = [
    {input: '#minecraft:logs', output: '6x thermal:sawdust'},
    {input: '#minecraft:planks', output: '2x thermal:sawdust'},
    {input: '#forge:rods/wooden', output: 'thermal:sawdust'},
    {input: '#forge:rods/wooden', output: 'thermal:sawdust'},
    {input: 'minecraft:prismarine_bricks', output: '9x #forge:dusts/prismarine'},
    {input: 'minecraft:prismarine', output: '4x #forge:dusts/prismarine'}
];
let blend_dusts = [
    {ingot: 'thermal:enderium_ingot', input: ['lead', 'lead', 'lead', 'diamond', 'ender_pearl', 'ender_pearl'], output: 'enderium', count: 2, high_temperature: true},
    {ingot: 'thermal:lumium_ingot', input: ['tin', 'tin', 'tin', 'silver', 'glowstone', 'glowstone'], output: 'lumium', count: 4, high_temperature: true},
    {ingot: 'thermal:signalum_ingot', input: ['copper', 'copper', 'copper', 'silver', 'redstone', 'redstone', 'redstone', 'redstone'], output: 'signalum', count: 4, high_temperature: true}
];*/
onEvent('recipes', event => {
    /*special_dusts.forEach(dust => {
        event.recipes.immersiveengineeringCrusher(dust.output, dust.input);
        event.recipes.createMilling(dust.output, dust.input);
    });
    gem_dusts.forEach(dust => {
        event.recipes.immersiveengineeringCrusher(`#forge:dusts/${dust}`, `#forge:gems/${dust}`);
        event.recipes.createMilling(`#forge:dusts/${dust}`, `#forge:gems/${dust}`);
        event.recipes.createCompacting(`#forge:gems/${dust}`, `#forge:dusts/${dust}`);
    });
    blend_dusts.forEach(dust => {
        console.info(dust);
        console.info(dust.input.map(i => { return `forge:dusts/${i}` }));
        event.remove({type: 'minecraft:crafting_shapeless', output: dust.ingot});
        event.recipes.createMixing(`${dust.count}x #forge:dusts/${dust.output}`, dust.input.map(i => { return `#forge:dusts/${i}` }));
        event.recipes.createMilling(`#forge:dusts/${dust.output}`, `#forge:ingots/${dust.output}`);
        event.recipes.immersiveengineeringArcFurnace(`#forge:ingots/${dust.output}`, `#forge:dusts/${dust.output}`, [], (dust.high_temperature === true ? 'thermal:rich_slag' : 'thermal:slag'))
        if (dust.high_temperature === true) {
        event.remove({type: 'minecraft:blasting', output: dust.ingot});
        }
        event.remove({type: 'minecraft:smelting', output: dust.ingot});
    });*/
});