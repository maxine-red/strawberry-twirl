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

let new_materials = [
    {material: 'aeternium',  temperature: 1250, times: {nugget: 25, dust: 55, ingot: 74, gear: 147, block: 221}},
    {material: 'thallasium', temperature:  850, times: {nugget: 21, dust: 50, ingot: 60, gear: 120, block: 150}},
    {material: 'terminite',  temperature:  720, times: {nugget: 20, dust: 58, ingot: 58, gear: 116, block: 174}},
    {material: 'signalum',   temperature: 1220, times: {nugget: 24, dust: 54, ingot: 73, gear: 146, block: 220}},
    {material: 'lumium',     temperature: 1325, times: {nugget: 26, dust: 57, ingot: 77, gear: 154, block: 230}},
    {material: 'enderium',   temperature: 1450, times: {nugget: 26, dust: 59, ingot: 79, gear: 156, block: 240}}
];
function storage_block_casting(material) {
    return {
        type: 'tconstruct:casting_basin',
        fluid: {
            tag: `tconstruct:molten_${material.material}`,
            amount: 1296
        },
        result: Item.of(`#forge:storage_blocks/${material.material}`).id,
        cooling_time: material.times.block
    };
}
function storage_block_melting(material) {
    return {
        type: 'tconstruct:melting',
        'ingredient': {
            tag: `forge:storage_blocks/${material.material}`
        },
        result: {
            fluid: `kubejs:molten_${material.material}`,
            amount: 1296
        },
        temperature: material.temperature,
        time: material.times.block
    };
}

function get_liquid_amount(cast_type) {
    if (cast_type === 'ingot' || cast_type === 'dust') {
        return  144; // 1 ingot
    }
    else if (cast_type === 'gear') {
        return 576; // 4 ingots
    }
    else if (cast_type === 'nugget') {
        return 16; // 1/9th of an ingot
    }
}

function cast_recipe(material, cast_type, use_type) {
    return {
        type: (cast_type === 'block' ? 'tconstruct:casting_basin' : 'tconstruct:casting_table'),
        fluid: {
            tag: `tconstruct:molten_${material.material}`,
            amount: get_liquid_amount(cast_type)
        },
        cast_consumed: use_type === 'multi',
        result: Item.of(`#forge:${cast_type}s/${material.material}`).id,
        cast: {
            tag: `tconstruct:casts/${use_type}_use/${cast_type}`
        },
        cooling_time: material.times[cast_type]
    };
}

function melt_recipe(material, cast_type) {
    return {
        type: 'tconstruct:melting',
        'ingredient': {
            tag: `forge:${cast_type}s/${material.material}`
        },
        result: {
            fluid: `kubejs:molten_${material.material}`,
            amount: get_liquid_amount(cast_type)
        },
        temperature: material.temperature,
        time: material.times.block
    };
}

function material_melting_recipe(material) {
    return {
        type: 'tconstruct:material_melting',
        input: `tconstruct:${material.material}`,
        temperature: material.temperature,
        result: {
            fluid: `kubejs:molten_${material.material}`,
            amount: 144
        }
    };
}

function gear_pressing_recipe(material) {
    return {
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
                tag: `forge:ingots/${material}`
            }
        },
        energy: 2400
    };
}

function material_casting_recipe(material) {
    return {
        type: 'tconstruct:material_fluid',
        fluid: {
            tag: `tconstruct:molten_${material.material}`,
            amount: 144
        },
        temperature: material.temperature,
        output: `tconstruct:${material.material}`
    }
}

onEvent('server.datapack.low_priority', (event) => {
    new_materials.forEach(material => {
        // casting/melting
        ['block', 'ingot', 'nugget', 'gear', 'dust'].forEach(cast_type => {
            if (cast_type === 'block') {
                event.addJson(`tconstruct:recipes/smeltery/casting/metal/${material.material}/block.json`, JSON.stringify(storage_block_casting(material)));
                event.addJson(`tconstruct:recipes/smeltery/melting/${material.material}/block.json`, JSON.stringify(storage_block_melting(material)));
            }
            else if (!tag_empty(`#forge:${cast_type}s/${material.material}`)) {
                if (cast_type === 'dust') {
                    event.addJson(`tconstruct:recipes/smeltery/melting/${material.material}/${cast_type}.json`, JSON.stringify(melt_recipe(material, cast_type)));
                }
                else {
                    ['multi', 'single'].forEach(use_type => {
                        event.addJson(`tconstruct:recipes/smeltery/casting/metal/${material.material}/${cast_type}_${use_type === 'multi' ? 'gold' : 'sand'}_cast.json`, JSON.stringify(cast_recipe(material, cast_type, use_type)));
                        event.addJson(`tconstruct:recipes/smeltery/melting/${material.material}/${cast_type}.json`, JSON.stringify(melt_recipe(material, cast_type)));
                    });
                }
                if (cast_type === 'gear' && !tag_empty(`#forge:${cast_type}s/${material.material}`)) {
                        event.addJson(`immersiveengineering:recipes/metalpress/gear_${material.material}.json`, JSON.stringify(gear_pressing_recipe(material.material)));
                }
            }
        });
        event.addJson(`tconstruct:recipes/tools/materials/melting/${material.material}.json`, JSON.stringify(material_melting_recipe(material)));
        event.addJson(`tconstruct:recipes/tools/materials/casting/${material.material}.json`, JSON.stringify(material_casting_recipe(material)));
    });
});