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

onEvent('item.modification', event => {
    event.modify('immersiveengineering:dust_sulfur', item => {
        item.burnTime = 800
    });
    event.modify('mana-and-artifice:purified_vinteum_coated_iron', item => {
        item.name = 'Purified Vinteum Coated Platinum';
    });
    event.modify('mana-and-artifice:vinteum_coated_iron', item => {
        item.name = 'Vinteum Coated Platinum';
    });
    event.modify('minecraft:stick', item => {
        item.alwaysEdible(true);
    });
});