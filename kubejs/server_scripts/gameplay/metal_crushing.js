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

var metals = [
    {metal: 'iron', dust: 'mysticalworld:iron_dust', secondary: {dust: 'immersiveengineering:dust_nickel', chance: 0.1}, ingot: 'minecraft:iron_ingot'},
    {metal: 'gold', dust: 'mysticalworld:gold_dust', ingot: 'minecraft:gold_ingot'},
    {metal: 'copper', dust: 'mysticalworld:copper_dust', secondary: {dust: 'mysticalworld:gold_dust', chance: 0.1}, ingot: 'mysticalworld:copper_ingot'},
    {metal: 'silver', dust: 'mysticalworld:silver_dust', secondary: {dust: 'mysticalworld:lead_dust', chance: 0.1}, ingot: 'mysticalworld:silver_ingot'},
    {metal: 'lead', dust: 'mysticalworld:lead_dust', secondary: {dust: 'mysticalworld:silver_dust', chance: 0.1}, ingot: 'mysticalworld:lead_ingot'},
    {metal: 'nickel', dust: 'immersiveengineering:dust_nickel', ingot: 'immersiveengineering:ingot_nickel'},
    {metal: 'aluminum', dust: 'immersiveengineering:dust_aluminum', ingot: 'immersiveengineering:ingot_aluminum'},
    {metal: 'uranium', dust: 'immersiveengineering:dust_uranium', secondary: {dust: 'mysticalworld:lead_dust', chance: 0.1}, ingot: 'immersiveengineering:ingot_uranium'},
    {metal: 'starmetal', dust: 'astralsorcery:stardust', secondary: {dust: 'mysticalworld:quicksilver_dust', chance: 0.1}, ingot: 'astralsorcery:starmetal_ingot'},
    {metal: 'quicksilver', dust: 'mysticalworld:quicksilver_dust', secondary: {dust: 'astralsorcery:stardust', chance: 0.1}, ingot: 'mysticalworld:quicksilver_ingot'},
    {metal: 'tin', dust: 'mysticalworld:tin_dust', ingot: 'mysticalworld:tin_ingot'},
    {metal: 'iesnium', dust: 'occultism:iesnium_dust', ingot: 'occultism:iesnium_ingot'},
    {metal: 'zinc', dust: 'create:crushed_zinc_ore', ingot: 'create:zinc_ingot'},
    {metal: 'platinum', dust: 'create:crushed_platinum_ore', ingot: 'wyrmroost:platinum_ingot'}
];

function hammerCrushingRecipe(dust, ore) {
    return {
        type: 'immersiveengineering:hammer_crushing',
        result: {
            item: dust
        },
        input: {
            tag: `forge:ores/${ore}`
        }
    };
}

function crushingSpiritOreRecipe(dust, ore) {
    return  {
        type: 'occultism:crushing',
        ingredient: {
            tag: `forge:ores/${ore}`
        },
        result: {
            item: dust,
            count: 2
        },
        crushing_time: 200
    }
}

function crushingSpiritIngotRecipe(dust, ingot) {
    return  {
        type: 'occultism:crushing',
        ingredient: {
            tag: `forge:ingots/${ingot}`
        },
        result: {
            item: dust
        },
        crushing_time: 200
    }
}

onEvent('recipes', event => {
    metals.forEach(metal => {
        event.remove({type: 'immersiveengineering:hammer_crushing', input: `#forge:ores/${metal.metal}`});
        event.remove({type: 'occultism:crushing', input: `#forge:ores/${metal.metal}`});;
        event.remove({type: 'occultism:crushing', input: `#forge:ingots/${metal.metal}`});
        event.remove({type: 'immersiveengineering:crusher', input: `#forge:ores/${metal.metal}`});
        event.remove({type: 'immersiveengineering:crusher', input: `#forge:ingots/${metal.metal}`});
        event.remove({type: 'create:crushing', input: `#forge:ores/${metal.metal}`});
        event.remove({type: 'create:milling', input: `#forge:ores/${metal.metal}`});
        event.remove({type: 'minecraft:smelting', input: `create:crushed_${metal.metal}_ore`});
        event.remove({type: 'minecraft:blasting', input: `create:crushed_${metal.metal}_ore`});
        event.remove({type: 'minecraft:smelting', input: `#forge:ores/${metal.metal}`});
        event.remove({type: 'minecraft:blasting', input: `#forge:ores/${metal.metal}`});
        event.remove({type: 'minecraft:smelting', input: `#forge:dusts/${metal.metal}`});
        event.remove({type: 'minecraft:blasting', input: `#forge:dusts/${metal.metal}`});
        event.smelting(metal.ingot, metal.dust);
        event.blasting(metal.ingot, metal.dust);
        event.smelting(metal.ingot, `#forge:ores/${metal.metal}`);
        event.blasting(metal.ingot, `#forge:ores/${metal.metal}`);
        event.custom(hammerCrushingRecipe(metal.dust, metal.metal));
        event.custom(crushingSpiritOreRecipe(metal.dust, metal.metal));
        event.custom(crushingSpiritIngotRecipe(metal.dust, metal.metal));
        event.custom(crushingPressureChamberRecipe(Item.of(metal.dust, 4), `#forge:ores/${metal.metal}`));
        if (metal.secondary === undefined) {
            event.recipes.immersiveengineering.crusher(Item.of(metal.dust, 2), `#forge:ores/${metal.metal}`);
            event.recipes.create.crushing([Item.of(metal.dust, 2), Item.of('minecraft:cobblestone').withChance(0.125)], `#forge:ores/${metal.metal}`);
        }
        else {
            event.recipes.immersiveengineering.crusher(Item.of(metal.dust, 2), `#forge:ores/${metal.metal}`, Item.of(metal.secondary.dust).withChance(metal.secondary.chance));
            event.recipes.create.crushing([Item.of(metal.dust, 2), Item.of(metal.secondary.dust).withChance(metal.secondary.chance), Item.of('minecraft:cobblestone').withChance(0.125)], `#forge:ores/${metal.metal}`);
        }
        event.recipes.immersiveengineering.crusher(metal.dust, `#forge:ingots/${metal.metal}`);
        event.recipes.create.milling(metal.dust, `#forge:ores/${metal.metal}`);
        event.recipes.create.milling(metal.dust, `#forge:ingots/${metal.metal}`);
    });
});