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

events.listen('player.logged_in', function (event) {
	event.player.tell('Hi! ^-^');
});

// Listen to player login event
onEvent('player.logged_in', event => {
  // Check if player doesn't have "starting_items" stage yet
  if (!event.player.stages.has('starting_items')) {
    // Add the stage
    event.player.stages.add('starting_items')
    // Give some items to player
    event.player.give('antiqueatlas:empty_antique_atlas')
    event.player.give(Item.of('akashictome:tome', '{"akashictome:is_morphing":1b,"akashictome:data":{theoneprobe:{id:"theoneprobe:probenote",Count:1b,tag:{display:{Name:\'{"text":"The One Probe Read Me"}\'}}}}}'))
    event.player.give(Item.of('patchouli:guide_book', '{"patchouli:book":"patchouli:strawberry_guide",display:{Name:\'{"text":"Strawberry Guide Book"}\'}}'))
    event.player.give('comforts:sleeping_bag_pink');
  }
})