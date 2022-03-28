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

function inputsConversion(ingredient) {
    if (ingredient.count > 1.0) {
        let inputs = [];
        for (var i = 0; i < ingredient.count; i++) {
            inputs.push(Ingredient.of(ingredient.item).toJson());
        }
        return inputs;
    }
    else {
        return ingredient.toJson();
    }
}

/**
 * Create pressure chamber recipes
 */
function PressureChamberRecipe(outputs, ingredients, pressure) {
    if (pressure === undefined) {
        pressure = 4.0;
    }
    let results;
    if (Array.isArray(outputs)) {
        results = outputs.map(o=>{return o.toResultJson();});
    }
    else {
        results = [outputs.toResultJson()];
    }
    let inputs;
    if (Array.isArray(ingredients)) {
        inputs = ingredients.map(i=>{inputsConversion(i)});
    }
    else {
        inputs = inputsConversion(ingredients);
        if (!Array.isArray(inputs)) {
            inputs = [inputs];
        }
    }
    return {
        type: "pneumaticcraft:pressure_chamber",
        inputs: inputs,
        pressure: pressure,
        results: results
    };
}

function hammerCrushingRecipe(output, input) {
    return {
        type: 'immersiveengineering:hammer_crushing',
        result: output.toResultJson(),
        input: input.toJson()
    };
}

function starlightInfusionRecipe(ingredient, output, consumptionChance, consumeMultiple) {
    if (consumeMultiple === undefined) {
        consumeMultiple = false;
    }
    if (consumptionChance === undefined) {
        consumptionChance = 0.1;
    }
    return {
        type: 'astralsorcery:infuser',
        fluidInput: 'astralsorcery:liquid_starlight',
        input: ingredient,
        output: output,
        consumptionChance: consumptionChance,
        duration: 100,
        consumeMultipleFluids: consumeMultiple,
        acceptChaliceInput: true,
        copyNBTToOutputs: false
    }
}

function crushingSpiritRecipe(ingredient, output) {
    return  {
        type: 'occultism:crushing',
        ingredient: ingredient.toJson(),
        result: output.toResultJson(),
        crushing_time: 200 * output.count
    }
}