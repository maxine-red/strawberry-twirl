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

var molten_fluids = [
    // thermal
	{id: 'lumium', color: 0xfff1aa, name: 'Molten Lumium', thick: true},
	{id: 'signalum', color: 0xef3706, name: 'Molten Signalum', thick: true},
	{id: 'enderium', color: 0x0c5e7c, name: 'Molten Enderium', thick: true},
    // betterendforge
	{id: 'aeternium', color: 0x2f877e, name: 'Molten Aeternium', thick: true},
	{id: 'thallasium', color: 0x71f3e8, name: 'Molten Thallasium', thick: true},
	{id: 'terminite', color: 0xa4e8da, name: 'Molten Terminite', thick: true}
];

events.listen('fluid.registry', (event) => {
	molten_fluids.forEach(fluid => {
		if (fluid.thick === true) {
			event.create("molten_" + fluid.id).textureThick(fluid.color).displayName(fluid.name);
		}
	});
});