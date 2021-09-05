//priority: 1005
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

/**
 * Check if tag is empty
 */
function tag_empty(tag) {
    try {
        tag = Ingredient.of(tag);
        return tag.stacks.empty;
    }
    catch (e) {
        return false;
    }
}
/**
 * Function that accepts a tag (as string) and returns an array of ingredients.
 * Doesn't check tag existence!
 */
function get_tag_content(tag) {
    if (tag_empty(tag)) {
        return [];
    }
    else {
        tag = Ingredient.of(tag);
        return utils.listOf(Ingredient.of(tag).stacks).toArray();
    }
}