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

var bricks = ['minecraft:brick', 'minecraft:nether_brick', 'createdeco:worn_brick', 'createdeco:blue_brick', 'createdeco:dean_brick', 'createdeco:dusk_brick', 'createdeco:pearl_brick', 'createdeco:scarlet_brick'];


onEvent('recipes', event => {
    bricks.forEach(brick => {
        event.custom(PressureChamberRecipe(Item.of(brick, 4), Ingredient.of(`${brick}s`), -0.75));
        if (brick !== 'minecraft:brick' && brick !== 'minecraft:nether_brick') {
            event.custom(cuttingBoardRecipe(Item.of(brick, 4), 'pickaxe', Ingredient.of(`${brick}s`)));
        }
    });
});