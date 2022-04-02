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

var wood_types = [
    {type: 'minecraft:oak', trap_door: true},
    {type: 'minecraft:spruce', trap_door: true, bookshelf: true},
    {type: 'minecraft:birch', trap_door: true, bookshelf: true},
    {type: 'minecraft:jungle', trap_door: true, bookshelf: true},
    {type: 'minecraft:acacia', trap_door: true, bookshelf: true},
    {type: 'minecraft:dark_oak', trap_door: true, bookshelf: true},
    {type: 'minecraft:crimson', trap_door: true, bookshelf: true, door: true, stairs: true, log: true, wood: '_stem', stripping: true, bark: '_hyphae'},
    {type: 'minecraft:warped', trap_door: true, bookshelf: true, door: true, stairs: true, log: true, wood: '_stem', stripping: true, bark: '_hyphae'},
    {type: 'bayou_blues:cypress', trap_door: true, door: true, bookshelf: true, stairs: true, log: true, wood: '_log', stripping: true, bark: '_wood'},
    {type: 'ars_nouveau:archwood', trap_door: true, door: true, stairs: true},
    {type: 'atmospheric:rosewood', trap_door: true, door: true, bookshelf: true, stairs: true, log: true, wood: '_log', stripping: true, bark: ''},
    {type: 'atmospheric:morado', trap_door: true, door: true, bookshelf: true, stairs: true, log: true, wood: '_log', stripping: true, bark: '_wood'},
    {type: 'atmospheric:yucca', trap_door: true, door: true, bookshelf: true, stairs: true, log: true, wood: '_log', stripping: true, bark: '_wood'},
    {type: 'atmospheric:kousa', trap_door: true, door: true, bookshelf: true, stairs: true, log: true, wood: '_log', stripping: true, bark: '_wood'},
    {type: 'atmospheric:aspen', trap_door: true, door: true, bookshelf: true, stairs: true, log: true, wood: '_log', stripping: true, bark: '_wood'},
    {type: 'atmospheric:grimwood', trap_door: true, door: true, bookshelf: true, stairs: true, log: true, wood: '_log', stripping: true, bark: ''},
    {type: 'autumnity:maple', trap_door: true, door: true, bookshelf: true, stairs: true, log: true, wood: '_log', stripping: true, bark: '_wood'},
    {type: 'environmental:willow', trap_door: true, door: true, bookshelf: true, stairs: true, log: true, wood: '_log', stripping: true, bark: '_wood'},
    {type: 'environmental:cherry', trap_door: true, door: true, bookshelf: true, stairs: true, log: true, wood: '_log', stripping: true, bark: '_wood'},
    {type: 'environmental:wisteria', trap_door: true, door: true, bookshelf: true, stairs: true, log: true, wood: '_log', stripping: true, bark: '_wood'},
    {type: 'bamboo_blocks:bamboo', trap_door: true, door: true},
    {type: 'betterendforge:mossy_glowshroom', trap_door: true, door: true, bookshelf: true, stairs: true, log: true, wood: '_log', stripping: true, bark: '_bark'},
    {type: 'betterendforge:lacugrove', trap_door: true, door: true, bookshelf: true, stairs: true, log: true, wood: '_log', stripping: true, bark: '_bark'},
    {type: 'betterendforge:end_lotus', trap_door: true, door: true, bookshelf: true, stairs: true, log: true, wood: '_log', stripping: true, bark: '_bark'},
    {type: 'betterendforge:pythadendron', trap_door: true, door: true, bookshelf: true, stairs: true, log: true, wood: '_log', stripping: true, bark: '_bark'},
    {type: 'betterendforge:dragon_tree', trap_door: true, door: true, bookshelf: true, stairs: true, log: true, wood: '_log', stripping: true, bark: '_bark'},
    {type: 'betterendforge:tenanea', trap_door: true, door: true, bookshelf: true, stairs: true, log: true, wood: '_log', stripping: true, bark: '_bark'},
    {type: 'betterendforge:helix_tree', trap_door: true, door: true, bookshelf: true, stairs: true, log: true, wood: '_log', stripping: true, bark: '_bark'},
    {type: 'betterendforge:umbrella_tree', trap_door: true, door: true, bookshelf: true, stairs: true, log: true, wood: '_log', stripping: true, bark: '_bark'},
    {type: 'betterendforge:jellyshroom', trap_door: true, door: true, bookshelf: true, stairs: true, log: true, wood: '_log', stripping: true, bark: '_bark'},
    {type: 'betterendforge:lucernia', trap_door: true, door: true, bookshelf: true, stairs: true, log: true, wood: '_log', stripping: true, bark: '_bark'},
    {type: 'endergetic:poise', trap_door: true, door: true, bookshelf: true, stairs: true, log: true, wood: '_stem', stripping: true, bark: '_wood'},
    {type: 'abundance:jacaranda', trap_door: true, door: true, bookshelf: true, stairs: true, log: true, wood: '_log', stripping: true, bark: '_wood'},
    {type: 'abundance:redbud', trap_door: true, door: true, bookshelf: true, stairs: true, log: true, wood: '_log', stripping: true, bark: '_wood'},
    {type: 'upgrade_aquatic:driftwood', trap_door: true, door: true, bookshelf: true, stairs: true, log: true, wood: '_log', stripping: true, bark: ''},
    {type: 'upgrade_aquatic:river', trap_door: true, door: true, bookshelf: true, stairs: true, log: true, wood: '_log', stripping: true, bark: '_wood'},
    {type: 'druidcraft:darkwood', trap_door: true, door: true, stairs: true, log: true, wood: '_log', stripping: true, bark: '_wood'},
    {type: 'druidcraft:elder', trap_door: true, door: true, stairs: true, log: true, wood: '_log', stripping: true, bark: '_wood'},
    {type: 'undergarden:smogstem', trap_door: true, door: true, stairs: true, log: true, wood: '_log', stripping: true, bark: '_wood'},
    {type: 'undergarden:wigglewood', trap_door: true, door: true, stairs: true, log: true, wood: '_log', stripping: true, bark: '_wood'},
    {type: 'undergarden:grongle', trap_door: true, door: true, stairs: true, log: true, wood: '_log', stripping: true, bark: '_wood'},
    {type: 'astralsorcery:infused_wood', stairs: true, log: true, wood: ''},
    {type: 'naturesaura:ancient', stairs: true, log: true, wood: '_log', stripping: false, bark: '_bark'},
    {type: 'nethers_exoticism:ramboutan', trap_door: true, door: true, stairs: true, log: true, wood: '_log', stripping: false, bark: '_wood'},
    {type: 'the_afterlight:moonlight', trap_door: true, door: true, stairs: true, log: true, wood: '_log', stripping: false, bark: '_bark'},
    {type: 'tconstruct:greenheart', trap_door: true, door: true, log: true, wood: '_log', stripping: true, bark: '_wood'},
    {type: 'tconstruct:skyroot', trap_door: true, door: true, log: true, wood: '_log', stripping: true, bark: '_wood'},
    {type: 'tconstruct:bloodshroom', trap_door: true, door: true, log: true, wood: '_log', stripping: true, bark: '_wood'},
    {type: 'feywild:spring', trap_door: true, door: true, stairs: true, log: true, wood: '_log', stripping: true, bark: '_wood', log_attribute: '_tree'},
    {type: 'feywild:summer', trap_door: true, door: true, stairs: true, log: true, wood: '_log', stripping: true, bark: '_wood', log_attribute: '_tree'},
    {type: 'feywild:autumn', trap_door: true, door: true, stairs: true, log: true, wood: '_log', stripping: true, bark: '_wood', log_attribute: '_tree'},
    {type: 'feywild:winter', trap_door: true, door: true, stairs: true, log: true, wood: '_log', stripping: true, bark: '_wood', log_attribute: '_tree'}
]

var special_wood_types = [
    {type: 'ars_nouveau:blue_archwood', planks: 'ars_nouveau:archwood_planks', log: true, wood: '_log', stripping: true, bark: '_wood'},
    {type: 'ars_nouveau:purple_archwood', planks: 'ars_nouveau:archwood_planks', log: true, wood: '_log', stripping: true, bark: '_wood'},
    {type: 'ars_nouveau:green_archwood', planks: 'ars_nouveau:archwood_planks', log: true, wood: '_log', stripping: true, bark: '_wood'},
    {type: 'ars_nouveau:red_archwood', planks: 'ars_nouveau:archwood_planks', log: true, wood: '_log', stripping: true, bark: '_wood'}
]

var sawdust = 'immersiveengineering:dust_wood';
var bark = 'farmersdelight:tree_bark';


onEvent('recipes', event => {
    wood_types.forEach(wood_type => {
        let planks = wood_type.type + '_planks';
        if (wood_type.door) {
            event.recipes.immersiveengineeringSawmill(planks, wood_type.type + '_door', {stripping: false, output: sawdust});
            event.custom(cuttingBoardRecipe(Item.of(planks), 'axe', Ingredient.of(wood_type.type + '_door')));
        }
        if (wood_type.trap_door) {
            event.recipes.immersiveengineeringSawmill(planks, wood_type.type + '_trapdoor', {stripping: false, output: sawdust});
            event.custom(cuttingBoardRecipe(Item.of(planks), 'axe', Ingredient.of(wood_type.type + '_trapdoor')));
        }
        if (wood_type.bookshelf) {
            let type = wood_type.type;
            if (wood_type.type.indexOf('minecraft') >= 0) {
                type = type.replace('minecraft', 'quark');
            }
            event.recipes.immersiveengineeringSawmill(Item.of(planks, 4), type + '_bookshelf', [{stripping: false, output: sawdust},{stripping: false, output: Item.of('minecraft:book', 3)}]);
        }
        if (wood_type.stairs) {
            if (wood_type.log_attribute === undefined) {
                event.recipes.immersiveengineeringSawmill(planks, wood_type.type + '_stairs', {stripping: false, output: sawdust});
            }
            else {
                event.recipes.immersiveengineeringSawmill(planks, wood_type.type + '_planks_stairs', {stripping: false, output: sawdust});
            }
        }
        if (wood_type.log) {
            if (wood_type.stripping) {
                secondary = [{stripping: true, output: bark}, {stripping: false, output: sawdust}];
                let stripped = wood_type.type.replace(':', ':stripped_');
                if (wood_type.bark === '_bark' || wood_type.log_attribute !== undefined) {
                    stripped = wood_type.type + '_stripped'
                }
                let base_wood = [wood_type.type + wood_type.wood, wood_type.type + wood_type.bark];
                if (wood_type.log_attribute !== undefined) {
                    base_wood = [wood_type.type + wood_type.log_attribute + wood_type.wood, wood_type.type + wood_type.log_attribute + wood_type.bark];
                }
                if (wood_type.type === 'abundance:redbud') {
                    base_wood.push('abundance:flowering_redbud_log', 'abundance:flowering_redbud_wood');
                }
                else if (wood_type.type === 'endergetic:poise') {
                    base_wood.push('endergetic:glowing_poise_stem', 'endergetic:glowing_poise_stem');
                }
                else if (wood_type.type === 'atmospheric:aspen') {
                    base_wood.push('atmospheric:watchful_aspen_log', 'atmospheric:watchful_aspen_wood');
                }
                event.recipes.immersiveengineeringSawmill(Item.of(planks, 6), base_wood, [{stripping: true, output: bark}, {stripping: false, output: sawdust}], stripped + wood_type.wood);
                event.recipes.immersiveengineeringSawmill(Item.of(planks, 6), [stripped +  wood_type.wood, stripped +  wood_type.bark], {stripping: false, output: sawdust});
                if (wood_type.log_attribute === undefined) {
                    event.custom(cuttingBoardRecipe([Item.of(stripped + wood_type.wood), Item.of(bark)], 'axe', Ingredient.of(wood_type.type + wood_type.wood), 'minecraft:item.axe.strip'));
                    event.custom(cuttingBoardRecipe([Item.of(stripped + wood_type.bark), Item.of(bark)], 'axe', Ingredient.of(wood_type.type + wood_type.bark), 'minecraft:item.axe.strip'));
                }
                else {
                    event.custom(cuttingBoardRecipe([Item.of(stripped + wood_type.wood), Item.of(bark)], 'axe', Ingredient.of(wood_type.type + wood_type.log_attribute + wood_type.wood), 'minecraft:item.axe.strip'));
                    event.custom(cuttingBoardRecipe([Item.of(stripped + wood_type.bark), Item.of(bark)], 'axe', Ingredient.of(wood_type.type + wood_type.log_attribute + wood_type.bark), 'minecraft:item.axe.strip'));
                }
            }
            else {
                event.recipes.immersiveengineeringSawmill(Item.of(planks, 6), wood_type.type +  wood_type.wood, {stripping: false, output: sawdust});
            }
        }
    });
    special_wood_types.forEach(wood_type => {
        if (wood_type.stripping) {
            secondary = [{stripping: true, output: bark}, {stripping: false, output: sawdust}];
            let stripped = wood_type.type.replace(':', ':stripped_');
            event.recipes.immersiveengineeringSawmill(Item.of(wood_type.planks, 6), [wood_type.type +  wood_type.wood, wood_type.type +  wood_type.bark], [{stripping: true, output: bark}, {stripping: false, output: sawdust}], stripped + wood_type.wood);
            event.recipes.immersiveengineeringSawmill(Item.of(wood_type.planks, 6), [stripped +  wood_type.wood, stripped +  wood_type.bark], {stripping: false, output: sawdust});
            }
            else {
                event.recipes.immersiveengineeringSawmill(Item.of(wood_type.planks, 6), [wood_type.type +  wood_type.wood, wood_type.type +  wood_type.bark], {stripping: false, output: sawdust});
            }
    });
});