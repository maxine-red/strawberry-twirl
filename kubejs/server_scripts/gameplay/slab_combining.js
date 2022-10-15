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
onEvent('recipes', event => {
    get_tag_content("#minecraft:slabs").forEach(slab => {
        if (slab.id !== 'snowrealmagic:slab' && slab.id.indexOf('vertical') < 0) {
            let slab_id = slab.id;
            let block_id = slab_id.substring(0, slab_id.indexOf("_slab"));
            let block = Item.of(block_id);
            let planks = Item.of(block_id + "_planks");
            // There is some overlap here with othr mod stuff. Also not all slabs are added.
            if (block !== Item.empty) {
                event.shaped(block, ['x','x'], {x: slab_id});
            }
            else if (planks !== Item.empty) {
                event.shaped(planks, ['x','x'], {x: slab_id});
            }
        }
    });
});
