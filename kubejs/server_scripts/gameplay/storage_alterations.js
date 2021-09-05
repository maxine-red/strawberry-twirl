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

let non_metal_materials_srush = [
    {material: 'diamond'},
    {material: 'lapis', ore_count: 9},
    {material: 'ender_pearl', count: 4},
    {material: 'emerald'},
    {material: 'quartz', count: 4, ore_count: 3},
    {material: 'mana'},
    {material: 'apatite'},
    {material: 'cinnabar'},
    {material: 'niter'},
    {material: 'sulfur'},
    {material: 'coal_coke'},
    {material: 'coal_petcoke'},
    {material: 'redstone', ore_count: 6},
    {material: 'glowstone', count: 4},
    {material: 'gunpowder'},
    {material: 'sawdust'}
];

let non_metal_materials_saw = [
    {material: 'amber', count: 4, ore_count:3},
    {material: 'bamboo'},
    {material: 'charcoal'},
    {material: 'coal'},
    {material: 'tar'},
    {material: 'bitumen'},
    {material: 'sugar_cane'},
    {material: 'rubber'},
    {material: 'cured_rubber'},
    {material: 'slag'},
    {material: 'rich_slag'},
    {material: 'aurora', count: 4},
    {material: 'smaragdant', count: 4}
];
// time is for melting time of 1 ingot
let metals = [
    {material: 'aluminum', temperature: 425, time: 47},
    {material: 'brass', temperature: 605, time: 54, alloy: { ingredients: [{ material: 'copper'}, { material: 'zinc'}], result: 2}},
    {material: 'bronze', temperature: 700, time: 57, alloy: { ingredients: [{ material: 'copper', count: 3 }, { material: 'tin'}], result: 4}},
    {material: 'cobalt', temperature: 950, time: 65},
    {material: 'constantan', temperature: 920, time: 64, alloy: { ingredients: [{ material: 'copper'}, { material: 'nickel'}], result: 2}},
    {material: 'copper', temperature: 500, time: 50, byproduct: {material: 'gold', chance: 0.1}},
    {material: 'electrum', temperature: 760, time: 59, alloy: { ingredients: [{ material: 'gold'}, { material: 'silver'}], result: 2}},
    {material: 'gold', temperature: 700, time: 57},
    {material: 'hepatizon', temperature: 1400, time: 78, alloy: { ingredients: [{ material: 'copper', count: 2 }, { material: 'cobalt'}, { material: 'obsidian'}], result: 2}},
    {material: 'invar', temperature: 900, time: 63, alloy: { ingredients: [{ material: 'iron', count: 2 }, { material: 'nickel'}], result: 3}},
    {material: 'iron', temperature: 800, time: 60, byproduct: {material: 'nickel', chance: 0.1}},
    {material: 'knightslime', temperature: 1125, time: 70},
    {material: 'lead', temperature: 330, time: 43, byproduct: {material: 'silver', chance: 0.1}},
    {material: 'manyullyn', temperature: 1200, time: 72, alloy: { ingredients: [{ material: 'cobalt', count: 3 }, { material: 'netherite_scrap'}], result: 4}},
    {material: 'netherite', temperature: 1250, time: 74, alloy: { ingredients: [{ material: 'gold', count: 2 }, { material: 'netherite_scrap', count: 4}], result: 1}},
    {material: 'nickel', temperature: 950, time: 65, byproduct: {material: 'iron', chance: 0.1}},
    {material: 'pig_iron', temperature: 811, time: 60, alloy: { ingredients: [{ material: 'iron'}, { material: 'blood'}, { material: 'brick'}], result: 2}},
    {material: 'queens_slime', temperature: 1150, time: 71, alloy: { ingredients: [{ material: 'cobalt'}, { material: 'magma'}, { material: 'gold'}], result: 2}},
    {material: 'rose_gold', temperature: 550, time: 52, alloy: { ingredients: [{ material: 'copper', count: 3 }, { material: 'gold'}], result: 4}},
    {material: 'silicon_bronze', temperature: 700, time: 57, alloy: { ingredients: [{ material: 'copper', count: 3 }, { material: 'glass'}], result: 3}},
    {material: 'silver', temperature: 790, time: 60, byproduct: {material: 'lead', chance: 0.1}},
    {material: 'slimesteel', temperature: 900, time: 63, alloy: { ingredients: [{ material: 'iron'}, { material: 'sky'}, { material: 'seared_stone'}], result: 2}},
    {material: 'steel', temperature: 950, time: 65},
    {material: 'tin', temperature: 225, time: 39},
    {material: 'uranium', temperature: 830, time: 61, byproduct: {material: 'lead', chance: 0.1}},
    {material: 'zinc', temperature: 420, time: 47},
    {material: 'aeternium', temperature: 1250, time: 74, alloy: { ingredients: [{ material: 'terminite'}, { material: 'netherite'}], result: 1}},
    {material: 'thallasium', temperature: 850, time: 60},
    {material: 'terminite', temperature: 720, time: 58, alloy: { ingredients: [{ material: 'terminite_base'}, { material: 'ender_pearl'}], result: 1}},
    {material: 'signalum', temperature: 1220, time: 73, alloy: { ingredients: [{ material: 'copper', count: 3 }, { material: 'silver'}, { material: 'redstone', count: 4 }], result: 4}},
    {material: 'lumium', temperature: 1325, time: 77, alloy: { ingredients: [{ material: 'tin', count: 3 }, { material: 'silver'}, { material: 'glowstone', count: 2 }], result: 4}},
    {material: 'enderium', temperature: 1450, time: 79, alloy: { ingredients: [{ material: 'lead', count: 3 }, { material: 'diamond'}, { material: 'ender_pearl', count: 2 }], result: 2}},
    {material: 'starmetal', temperature: 750, time: 59},
    {material: 'fairy', temperature: 750, time: 59}
];


onEvent('recipes', event => {
/********************************************************************************
 * || Private functions (Unsafe to call)                                        *
 ********************************************************************************/
    /**
     * Generic function to remove unwanted smelting recipes
     */
    function remove_smelting_generic(material, tag_type) {
        get_tag_content(`#forge:${tag_type}${material}`).forEach(ingot => {
            ['minecraft:crafting_shaped', 'minecraft:crafting_shapeless', 'minecraft:smelting', 'minecraft:blasting', 'immersiveengineering:arc_furnace', 'charcoal_pit:orekiln', 'immersiveengineering:alloy', 'charcoal_pit:orekiln'].forEach(type => {
                if (type !== 'immersiveengineering:arc_furnace' && material !== 'steel') {
                    event.remove({type: type, output: ingot});
                }
            });
        });
        ['minecraft:crafting_shaped', 'minecraft:crafting_shapeless', 'minecraft:smelting', 'minecraft:blasting', 'immersiveengineering:arc_furnace', 'charcoal_pit:orekiln', 'immersiveengineering:alloy', 'charcoal_pit:orekiln'].forEach(type => {
            event.remove({type: type, output: `#forge:${tag_type}${material}`});
        });
    }
    /**
     * Generic function to remove unwanted crushing recipes
     */
    function remove_crushing_generic(material, tag_type) {
        get_tag_content(`#forge:${tag_type}${material}`).forEach(dust => {
            ['minecraft:crafting_shaped', 'minecraft:crafting_shapeless', 'immersiveengineering:crusher'].forEach(type => {
                event.remove({type: type, output: dust});
            });
        });
    }
    /**
     * Removes ore smelting recipes
     */
    function remove_ore_smelting(ore) {
        event.remove({type: 'minecraft:smelting', input: ore});
        event.remove({type: 'minecraft:blasting', input: ore});
        event.remove({type: 'minecraft:campfire_cooking', input: ore}); // Most of the time, will not be called. Just for weird edge cases.
    }
    /**
     * Removes crushing recipes for ores (usually excludes create)
     */
    function remove_ore_crushing(ore) {
        event.remove({type: 'immersiveengineering:crusher', input: ore});
    }
    /**
     * Create recipes for the squeezer/compactor (somehow not in the kubejs/immersive compat mod)
     */
    function press_block(block, base, count) {
        let squeezer_recipe = {
            type:'immersiveengineering:squeezer',
            result: {
                tag: block
            },
            input: {
                count: count,
                base_ingredient: {
                    tag: base
                }
            },
            energy: 4096
        };
        event.custom(squeezer_recipe);
        event.recipes.createCompacting(`#${block}`, Item.of(`#${base}`, count));
    }
    function generic_from_block_saw(material, count, type) {
        let base = Item.of(`#forge:${type}${material}`, count);
        let block = `#forge:storage_blocks/${material}`;
        event.recipes.immersiveengineeringSawmill(base, block);
    }
    function generic_and_dust_from_block_saw(material, count, type) {
        let base_count = Math.floor(count * 0.75);
        let base = Item.of(`#forge:${type}${material}`, base_count);
        let dust = Item.of(`#forge:dusts/${material}`, count - base_count);
        let block = `#forge:storage_blocks/${material}`;
        event.recipes.immersiveengineeringSawmill(base, block, dust);
    }
    
    function alloy_kiln_recipe(result, count, ingredients) {
        ingredients = ingredients.map(ingredient => {
            return get_ingredient_alloy_kiln(ingredient.material, ingredient.count);
        });
        return {
            type: 'charcoal_pit:orekiln',
            ingredients: ingredients,
            result: result,
            amount: count
        }
    }
    
    /**
     * Helper function to determine ingredient. Not alal ingredients are ingots
     */
    function get_ingredient_alloy(material, count) {
        if (!tag_empty(`#forge:ingots/${material}`)) {
            return Ingredient.of(`#forge:ingots/${material}`, count);
        }
        else if (!tag_empty(`#forge:gems/${material}`)) {
            return Ingredient.of(`#forge:gems/${material}`, count);
        }
        else if (!tag_empty(`#forge:dusts/${material}`)) {
            return Ingredient.of(`#forge:dusts/${material}`, count);
        }
        else if (!tag_empty(`#forge:slimeball/${material}`)) {
            return Ingredient.of(`#forge:slimeball/${material}`, count);
        }
        else if (!tag_empty(`#forge:${material}`)) {
            return Ingredient.of(`#forge:${material}`, count);
        }
        else {
            console.error(`Can't find material: ${material}`);
        }
    }
    
    /**
     * Helper function to determine ingredient. Not alal ingredients are ingots
     */
    function get_ingredient_alloy_kiln(material, count) {
        if (!tag_empty(`#forge:ingots/${material}`)) {
            return {tag: `forge:ingots/${material}`, count: count};
        }
        else if (!tag_empty(`#forge:gems/${material}`)) {
            return {tag: `forge:gems/${material}`, count: count};
        }
        else if (!tag_empty(`#forge:dusts/${material}`)) {
            return {tag: `forge:dusts/${material}`, count: count};
        }
        else if (!tag_empty(`#forge:slimeball/${material}`)) {
            return {tag: `forge:slimeball/${material}`, count: count};
        }
        else if (!tag_empty(`#forge:${material}`)) {
            return {tag: `forge:${material}`, count: count};
        }
        else {
            console.error(`Can't find material: ${material}`);
        }
    }
    
/********************************************************************************
 * || Public functions (Safe to call)                                           *
 ********************************************************************************/
 
 
/********************************************************************************
 * Recipe removel                                                               *
 ********************************************************************************/
    /**
     * Combination function, that accepts two tags and a count.
     * This function will remove all result <-> base crafting recipes.
     */
    function remove_conversion_recipes(result, ingredient, count) {
        let ingredients = get_tag_content(ingredient);
        let results = get_tag_content(result);
        let types = ['minecraft:crafting_shaped', 'minecraft:crafting_shapeless'];
        results.forEach(r => {
            ingredients.forEach(i => {
                types.forEach(t => {
                    event.remove({type: t, input: Item.of(i, count), output: r});
                    event.remove({type: t, output: Item.of(i, count), input: r});
                });
            });
            types.forEach(t => {
                event.remove({type: t, input: ingredient, output: r});
            });
        });
        ingredients.forEach(i => {
            types.forEach(t => {
                event.remove({type: t, output: i, input: result});
            });
        });
    }
    
    function remove_smelting_metal(material) {
        remove_smelting_generic(material, 'ingots/');
    }
    function remove_crushing_metal(material) {
        remove_crushing_generic(material, 'dusts/');
    }
    
    
/********************************************************************************
 * Recipe additions                                                             *
 ********************************************************************************/
 
    function add_mixing_metal(metal) {
        if (!tag_empty(`#forge:dusts/${metal.material}`)) {
            let ingredients = [];
            let recipe_valid = true;
            metal.alloy.ingredients.forEach(ingredient => {
                if (!tag_empty(`#forge:dusts/${ingredient.material}`)) {
                    for (let i = 0; i < (ingredient.count === undefined ? 1 : ingredient.count); i++) {
                        ingredients.push(`#forge:dusts/${ingredient.material}`);
                    }
                }
                else {
                    recipe_valid = false;
                }
            });
            if (recipe_valid) {
                event.recipes.createMixing(Item.of(`#forge:dusts/${metal.material}`, metal.alloy.result), ingredients);
            }
        }
    }
    function add_alloying_metal(metal) {
        let ingredients = metal.alloy.ingredients.map(ingredient => {
            return get_ingredient_alloy(ingredient.material, (ingredient.count === undefined ? 1 : ingredient.count));
        });
        let result = Item.of(`#forge:ingots/${metal.material}`, metal.alloy.result);
        if (metal.temperature <= 800) {
            if (ingredients.length < 3) {
                event.recipes.immersiveengineeringAlloy(result, ingredients[0], ingredients[1]);
            }
            event.custom(alloy_kiln_recipe(`#forge:ingots/${metal.material}`, metal.alloy.result, metal.alloy.ingredients));
        }
        event.recipes.immersiveengineeringArcFurnace(result, ingredients.shift(), ingredients);
    }
    
    /**
     * Remove vanilla-like ore processing and add in custom ones.
     */
    function ore_dust_processing(material, count) {
        let ore = `#forge:ores/${material}`;
        let dust = `#forge:dusts/${material}`;
        count = (count === undefined ? 2 : count);
        remove_ore_smelting(ore)
        remove_ore_crushing(ore);
        event.recipes.immersiveengineeringCrusher(Item.of(dust, count), ore);
        event.shapeless(Item.of(dust, count), ['thermal:earth_charge', ore]);
    }
    /**
     * Crush gems/ingots into dust
     */
    function dust_base_conversation(material, base) {
        let dust = `#forge:dusts/${material}`;
        event.remove({type: 'minecraft:crafting_shapeless', output: `thermal:${material}_dust`, input: 'thermal:earth_charge'});
        event.recipes.immersiveengineeringCrusher(dust, base);
        event.shapeless(dust, [base, 'thermal:earth_charge']);
        event.recipes.createMilling(dust, base);
        event.recipes.createPressing(base, dust);
    }
    function dust_base_conversation_saw(material, base) {
        let dust = `#forge:dusts/${material}`;
        event.recipes.createPressing(base, dust);
    }
    /**
     * Crush blocks into their respective dust
     */
    function dust_from_block(material, count) {
        let dust = Item.of(`#forge:dusts/${material}`, count);
        let block = `#forge:storage_blocks/${material}`;
        event.recipes.immersiveengineeringCrusher(dust, block);
        event.recipes.createCrushing(dust, block);
    }
    function dust_from_block_saw(material, count) {
        generic_from_block_saw(material, count, 'dusts/');
    }
    function gem_from_block_saw(material, count) {
        generic_from_block_saw(material, count, 'gems/');
    }
    function base_from_block_saw(material, count) {
        generic_from_block_saw(material, count, '');
    }
    function base_and_dust_from_block_saw(material, count) {
        generic_and_dust_from_block_saw(material, count, '');
    }
    function gem_and_dust_from_block_saw(material, count) {
        generic_and_dust_from_block_saw(material, count, 'gems/');
    }
    /**
     * Add stone cutting recipes to go from one block variant to another
     */
    function unify_storage_blocks(material) {
        let items = get_tag_content(`#forge:storage_blocks/${material}`);
        if (items.length > 1) {
            items.forEach(base => {
                items.forEach(result => {
                    if (base !== result) {
                        event.stonecutting(base, result);
                        event.stonecutting(result, base);
                    }
                });
            });
        }
    }
    /**
     * Add dust to block recipes
     */
    function dust_to_block(material, count) {
        press_block(`forge:storage_blocks/${material}`, `forge:dusts/${material}`, count);
    }
    /**
     * Add gem to block recipes
     */
    function gem_to_block(material, count) {
        press_block(`forge:storage_blocks/${material}`, `forge:gems/${material}`, count);
    }
    /**
     * Add base to block recipes
     */
    function base_to_block(material, count) {
        press_block(`forge:storage_blocks/${material}`, `forge:${material}`, count);
    }
    
/********************************************************************************
 * End of helper functions                                                      *
 ********************************************************************************/

    // Actual content handling
    non_metal_materials_srush.forEach(gem => {
        let gem_count = (gem.count === undefined ? 9 : gem.count);
        ['dusts/', 'gems/', ''].forEach(type => {
            let tag = `#forge:${type}${gem.material}`;
            if (!tag_empty(tag)) {
                remove_conversion_recipes(`#forge:storage_blocks/${gem.material}`, tag, gem_count);
            }
        });
        if (!tag_empty(`#forge:dusts/${gem.material}`)) {
            dust_from_block(gem.material, gem_count);
            if (!tag_empty(`#forge:gems/${gem.material}`)) {
                dust_base_conversation(gem.material, `#forge:gems/${gem.material}`);
                gem_and_dust_from_block_saw(gem.material, gem_count);
            }
            else if (!tag_empty(`#forge:${gem.material}`) && gem.material !== 'gunpowder' && gem.material !== 'sawdust') {
                dust_base_conversation(gem.material, `#forge:${gem.material}`);
                base_and_dust_from_block_saw(gem.material, gem_count);
            }
            if (!tag_empty(`#forge:ores/${gem.material}`)) {
                ore_dust_processing(gem.material, gem.ore_count);
            }
            dust_to_block(gem.material, gem_count);
        }
        if (!tag_empty(`#forge:gems/${gem.material}`)) {
            gem_to_block(gem.material, gem_count);
        }
        if (!tag_empty(`#forge:${gem.material}`)) {
            base_to_block(gem.material, gem_count);
        }
        unify_storage_blocks(gem.material);
    });
    non_metal_materials_saw.forEach(gem => {
        let gem_count = (gem.count === undefined ? 9 : gem.count);
        let dust_count = (gem.dust_count === undefined ? 9 : gem.dust_count);
        ['dusts/', 'gems/', ''].forEach(type => {
            let tag = `#forge:${type}${gem.material}`;
            if (!tag_empty(tag)) {
                remove_conversion_recipes(`#forge:storage_blocks/${gem.material}`, tag, gem_count);
            }
        });
        if (!tag_empty(`#forge:dusts/${gem.material}`)) {
            dust_from_block_saw(gem.material, gem_count);
            if (!tag_empty(`#forge:gems/${gem.material}`)) {
                dust_base_conversation_saw(gem.material, `#forge:gems/${gem.material}`);
            }
            else if (!tag_empty(`#forge:${gem.material}`)) {
                dust_base_conversation_saw(gem.material, `#forge:${gem.material}`);
            }
            if (!tag_empty(`#forge:ores/${gem.material}`)) {
                ore_dust_processing(gem.material, gem.ore_count);
            }
            dust_to_block(gem.material, gem_count);
        }
        else if (!tag_empty(`#forge:gems/${gem.material}`)) {
            gem_from_block_saw(gem.material, gem_count);
        }
        else {
            base_from_block_saw(gem.material, gem_count);
        }
        if (!tag_empty(`#forge:gems/${gem.material}`)) {
            gem_to_block(gem.material, gem_count);
        }
        if (!tag_empty(`#forge:${gem.material}`)) {
            base_to_block(gem.material, gem_count);
        }
        unify_storage_blocks(gem.material);
    });
    // nugget -> ingot -> block gets basin stamping recipes
    // also all of them (plus dust, crushed ore and and gears (where available) get melting mixing recipes)
    // molten metals can be stamped in basin to ingots
    // arc furnace ore is 10s, everything else (alloy/dust melting) is 5s, always 512RF/t
    // dusts, nuggets, ingots, gears, plates, blocks
    // not all have dusts
    // very few don't have nuggets
    // many don't have gears/plates
    metals.forEach(metal => {
        remove_conversion_recipes(`#forge:storage_blocks/${metal.material}`,`#forge:ingots/${metal.material}`, 9);
        remove_conversion_recipes(`#forge:ingots/${metal.material}`, `#forge:nuggets/${metal.material}`, 9);
        remove_smelting_metal(metal.material);
        remove_crushing_metal(metal.material);
        if (metal.alloy !== undefined) {
            add_mixing_metal(metal);
            add_alloying_metal(metal);
        }
        //add_smelting(metal.material, metal.temperature); // ore and dust smelting into ingots
        //add_compacting(metal.material);
        //add_crushing(metal.material);
        unify_storage_blocks(metal.material);
    });
});