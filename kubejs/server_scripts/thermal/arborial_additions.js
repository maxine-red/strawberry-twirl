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

var arobor_fertilizers = [
    {mod: 'create', item: 'tree_fertilizer', output: 4.0}
];
var arbor_outputs = [
    {
        trunk: 'autumnity:maple_log',
        mod: 'autumnity',
        leaves: [ 'maple', 'orange_maple', 'red_maple', 'yellow_maple'],
        result: {
            fluid: 'thermal:sap',
            amount: 50
        }
    },
    {
        trunk: 'minecraft:spruce_log',
        mod: 'quark',
        leaves: ['blue_blossom', 'lavender_blossom', 'pink_blossom', 'yellow_blossom', 'red_blossom'],
        result: {
            fluid: 'thermal:resin',
            amount: 50
        }
    },
    {
        trunk: 'environmental:willow_log',
        mod: 'environmental',
        leaves: ['willow'],
        result: {
            fluid: 'thermal:resin',
            amount: 25
        }
    },
    {
        trunk: 'ars_nouveau:red_archwood_log',
        mod: 'ars_nouveau',
        leaves: ['red_archwood'],
        result: {
            fluid: 'thermal:resin',
            amount: 25
        }
    },
    {
        trunk: 'ars_nouveau:blue_archwood_log',
        mod: 'ars_nouveau',
        leaves: ['blue_archwood'],
        result: {
            fluid: 'thermal:resin',
            amount: 25
        }
    },
    {
        trunk: 'ars_nouveau:purple_archwood_log',
        mod: 'ars_nouveau',
        leaves: ['purple_archwood'],
        result: {
            fluid: 'thermal:resin',
            amount: 25
        }
    },
    {
        trunk: 'ars_nouveau:green_archwood_log',
        mod: 'ars_nouveau',
        leaves: ['green_archwood'],
        result: {
            fluid: 'thermal:resin',
            amount: 25
        }
    },
    {
        trunk: 'tconstruct:greenheart_log',
        mod: 'tconstruct',
        leaves: ['ender_slime'],
        result: {
            fluid: 'tconstruct:earth_slime',
            amount: 25
        }
    },
    {
        trunk: 'tconstruct:greenheart_log',
        mod: 'tconstruct',
        leaves: ['earth_slime'],
        result: {
            fluid: 'tconstruct:earth_slime',
            amount: 25
        }
    },
    {
        trunk: 'tconstruct:skyroot_log',
        mod: 'tconstruct',
        leaves: ['sky_slime'],
        result: {
            fluid: 'tconstruct:sky_slime',
            amount: 25
        }
    },
    {
        trunk: 'atmospheric:rosewood_log',
        mod: 'atmospheric',
        leaves: ['rosewood'],
        result: {
            fluid: 'thermal:resin',
            amount: 25
        }
    },
    {
        trunk: 'atmospheric:morado_log',
        mod: 'atmospheric',
        leaves: ['morado'],
        result: {
            fluid: 'thermal:resin',
            amount: 25
        }
    },
    {
        trunk: 'atmospheric:yucca_log',
        mod: 'atmospheric',
        leaves: ['yucca'],
        result: {
            fluid: 'thermal:resin',
            amount: 25
        }
    },
    {
        trunk: 'atmospheric:kousa_log',
        mod: 'atmospheric',
        leaves: ['kousa'],
        result: {
            fluid: 'thermal:resin',
            amount: 25
        }
    },
    {
        trunk: 'atmospheric:aspen_log',
        mod: 'atmospheric',
        leaves: ['aspen'],
        result: {
            fluid: 'thermal:resin',
            amount: 25
        }
    },
    {
        trunk: 'atmospheric:grimwood_log',
        mod: 'atmospheric',
        leaves: ['grimwood'],
        result: {
            fluid: 'thermal:resin',
            amount: 25
        }
    },
    {
        trunk: 'bayou_blues:cypress_log',
        mod: 'bayou_blues',
        leaves: ['cypress'],
        result: {
            fluid: 'thermal:resin',
            amount: 25
        }
    }
];


onEvent('server.datapack.low_priority', (event) => {
    let fertilizer_recipe = {
        type: 'thermal:tree_extractor_boost',
        ingredient: {
            item: ''
        },
        output: '',
        cycles: 16
    };
    let fluid_recipe = {
        type: 'thermal:tree_extractor',
        trunk: '',
        leaves: ''
    };
    arobor_fertilizers.forEach(fertilizer => {
        fertilizer_recipe.item = `${fertilizer.mod}:${fertilizer.item}`;
        fertilizer_recipe.output = fertilizer.output;
            console.log(JSON.stringify(fertilizer_recipe));
        event.addJson(`thermal:recipes/devices/tree_extractor/tree_extractor_boost_from_${fertilizer.item}.json`, JSON.stringify(fertilizer_recipe));
    });
    arbor_outputs.forEach(tree => {
        fluid_recipe.trunk = tree.trunk;
        fluid_recipe.result = tree.result;
        tree.leaves.forEach(leave_set => {
            fluid_recipe.leaves = `${tree.mod}:${leave_set}_leaves`;
            console.log(JSON.stringify(fluid_recipe));
            event.addJson(`thermal:recipes/devices/tree_extractor/tree_extractor_${leave_set}.json`, JSON.stringify(fluid_recipe));
        });
    });
});
