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

/*var arc_metals = {
    minecraft: ['iron', 'gold', 'netherite'],
    astralsorcery: ['starmetal'],
    betterendforge: ['aeternium', 'thallasium', 'terminite'],
    create: ['copper', 'zinc', 'brass'],
    immersiveengineering: ['aluminum', 'uranium', 'steel'],
    materialis: ['fairy'],
    tconstruct: ['cobalt', 'slimesteel', 'tinkers_bronze', 'rose_gold', 'pig_iron', 'queens_slime', 'manyullyn', 'hepatizon'],
    thermal: ['tin', 'silver', 'lead', 'nickel', 'bronze', 'electrum', 'invar', 'constantan', 'signalum', 'lumium', 'enderium']
};

var surplus_metals = {
    copper: ['tconstruct', 'thermal', 'immersiveengineering'],
    lead: ['immersiveengineering'],
    silver: ['immersiveengineering'],
    nickel: ['immersiveengineering'],
    electrum: ['immersiveengineering'],
    constantan: ['immersiveengineering']
};*/

onEvent('recipes', event => {
    /*for (mod_id in arc_metals) {
        arc_metals[mod_id].forEach(metal => {
            let ingots = `${mod_id}:${metal}_ingot`;
            let nuggets = `${mod_id}:${metal}_nugget`;
            let block = `${mod_id}:${metal}`;
            if (mod_id == 'immersiveengineering') {
                ingots = `${mod_id}:ingot_${metal}`;
                nuggets = `${mod_id}:nugget_${metal}`;
                block = `${mod_id}:storage_${metal}`;
            }
            let grid_ingots = `9x ${ingots}`;
            if (!(mod_id === 'astralsorcery' || mod_id === 'immersiveengineering')) {
                block += '_block';
            }
            event.recipes.immersiveengineeringArcFurnace(block, grid_ingots);
            event.recipes.immersiveengineeringArcFurnace(grid_ingots, block);
            event.remove({input: ingots, output: nuggets});
            event.remove({input: nuggets, output: ingots});
            event.remove({input: ingots, output: block});
            event.remove({input: block, output: ingots});
        });
    }
    for (metal in surplus_metals) {
        surplus_metals[metal].forEach(mod_id => {
            let ingots = `${mod_id}:${metal}_ingot`;
            let nuggets = `${mod_id}:${metal}_nugget`;
            let block = `${mod_id}:${metal}_block`;
            if (mod_id == 'immersiveengineering') {
                ingots = `${mod_id}:ingot_${metal}`;
                nuggets = `${mod_id}:nugget_${metal}`;
                block = `${mod_id}:storage_${metal}`;
            }
            event.remove({input: ingots, output: nuggets});
            event.remove({input: nuggets, output: ingots});
            event.remove({input: ingots, output: block});
            event.remove({input: block, output: ingots});
            if (metal === 'copper') {
                event.stonecutting(block, 'create:copper_block');
                event.stonecutting('create:copper_block', block);
            }
            else {
            event.stonecutting(block, `thermal:${metal}_block`);
                event.stonecutting(`thermal:${metal}_block`, block);
            }
        });
    }
    event.remove({id: 'tconstruct:common/materials/netherite_ingot_from_nuggets'});
    event.remove({id: 'tconstruct:common/materials/netherite_nugget_from_ingot'});*/
});
