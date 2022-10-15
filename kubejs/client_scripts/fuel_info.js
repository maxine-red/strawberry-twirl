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

var tinker_blocks = [
    'tconstruct:seared_fuel_tank',
    'tconstruct:scorched_fuel_tank',
    'tconstruct:seared_fuel_gauge',
    'tconstruct:scorched_fuel_gauge',
    'tconstruct:seared_melter',
    'tconstruct:scorched_alloywr',
    'tconstruct:smeltery_controller',
    'tconstruct:founcry_controller',
];

var fuels = [
    {mods: ['pneumaticcraft'], liquid: 'plastic', temperature: 100},
    {mods: ['immersiveengineering'], liquid: 'creosote', temperature: 800},
    {mods: ['immersiveengineering', 'pneumaticcraft'], liquid: 'biodiesel', temperature: 1000},
    {mods: ['immersivepetroleum', 'pneumaticcraft'], liquid: 'diesel', temperature: 1000},
    {mods: ['immersivepetroleum'], liquid: 'diesel_sulfur', temperature: 1000},
    {mods: ['immersiveengineering'], liquid: 'plantoil', temperature: 800},
    {mods: ['immersivepetroleum', 'pneumaticcraft'], liquid: 'oil', temperature: 800},
    {mods: ['pneumaticcraft'], liquid: 'vegetable_oil', temperature: 800},
    {mods: ['immersivepetroleum', 'pneumaticcraft'], liquid: 'lubricant', temperature: 800},
    {mods: ['immersivepetroleum'], liquid: 'napalm', temperature: 1500},
    {mods: ['pneumaticcraft'], liquid: 'lpg', temperature: 1500},
    {mods: ['pneumaticcraft'], liquid: 'kerosene', temperature: 1350},
    {mods: ['immersivepetroleum', 'pneumaticcraft'], liquid: 'gasoline', temperature: 1200},
    {mods: ['immersiveengineering', 'pneumaticcraft'], liquid: 'ethanol', temperature: 1200}
];

onEvent('jei.information', event => {
    fuels.forEach(fuel => {
        fuel.mods.forEach(mod => {
            event.add(`${mod}:${fuel.liquid}_bucket`, [`This liquid can be used as a fuel in tinker tanks and burns at ${fuel.temperature}°C`]);
        });
    });
    tinker_blocks.forEach(block => {
        event.add(block, ['This modpack adds additional fuels for tinker.', 'Look at buckets from Immersive Engineering, Immersive Petroleum and Pneumaticcraft: Repressurized, for details.']);
    });
})