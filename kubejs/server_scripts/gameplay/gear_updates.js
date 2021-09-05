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

//var gear_materials = ['diamond', 'emerald', 'quartz', 'lapis']

onEvent('recipes', event => {
    //event.remove({type: 'minecraft:crafting_shaped', outpus: /thermal:\w+_gear/});
});

onEvent('server.datapack.low_priority', (event) => {
    /*gear_materials.forEach(material => {
        let press_recipe = {
            type: 'immersiveengineering:metal_press',
            mold: {
                item: 'immersiveengineering:mold_gear'
            },
            result: {
                tag: `forge:gears/${material}`
            },
            input: {
                count: 4,
                base_ingredient: {
                    tag: `forge:gems/${material}`
                }
            },
            energy: 2400
        };
        event.addJson(`immersiveengineering:recipes/metalpress/gear${material}.json`, JSON.stringify(press_recipe));
        if (material !== 'lapis') {
            let recipe = {
                type: 'tconstruct:casting_table',
                fluid: {
                    tag: `tconstruct:molten_${material}`,
                    amount: 576
                },
                cast_consumed: true,
                result: '',
                cooling_time: 0
            };
            if (material === 'diamond') {
                recipe.cooling_time = 79 * 4;
            }
            else if (material === 'emerald') {
                recipe.cooling_time = 64 * 4;
            }
            else if (material === 'quartz') {
                recipe.cooling_time = 55 * 4;
            }
            ['multi', 'single'].forEach(use_type => {recipe.type = 'tconstruct:casting_table';
                recipe.result = `thermal:${material}_gear`;
                recipe.cast = {tag: `tconstruct:casts/${use_type}_use/gear`};
                recipe.cast_consumed = (use_type === 'single');
                event.addJson(`tconstruct:recipes/smeltery/casting/metal/${material}/gear_${use_type}_use_cast.json`, JSON.stringify(recipe));
            });
        }
    });*/
});