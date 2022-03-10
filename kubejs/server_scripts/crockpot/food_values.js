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


onEvent('recipes', event => {
    event.recipes.crockpot.foodValues({SWEETENER: 1.0}, false, "minecraft:sugar");
    //event.recipes.crockpot.foodValues({SWEETENER: 1.0, VEGGIE: 0.5}, false, "druidcraft:cactus_syrup", "druidcraft:dandelion_cordial", "druidcraft:lilac_cordial", "druidcraft:poeny_cordial", "druidcraft:rose_cordial");
    //event.recipes.crockpot.foodValues({SWEETENER: 1.0, FRUIT: 0.5}, false, "druidcraft:apple_cordial");
    event.recipes.crockpot.foodValues({MONSTER: 1.0, INEDIBLE: 0.5}, true, "forge:slimeballs");
    event.recipes.crockpot.foodValues({MONSTER: 1.0, INEDIBLE: 1.0}, false, "create:blaze_cake");
});