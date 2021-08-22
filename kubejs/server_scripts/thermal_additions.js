
var arobor_fertilizers = [
    {item: 'charcoal_pit:fertilizer', output: 2.0},
    {item: 'create:tree_fertilizer', output: 4.0}
];
var arbor_outputs = [
    {
        trunk: 'autumnity:maple_log',
        multiple_entries: true,
        leaves: [ 'autumnity:maple_leaves', 'autumnity:orange_maple_leaves', 'autumnity:red_maple_leaves', 'autumnity:yellow_maple_leaves'],
        result: {
            fluid: 'thermal:sap',
            amount: 50
        }
    },
    {
      trunk: 'minecraft:spruce_log',
        multiple_entries: true,
        leaves: ['quark:blue_blossom_leaves', 'quark:lavender_blossom_leaves', 'quark:pink_blossom_leaves', 'quark:yellow_blossom_leaves', 'quark:red_blossom_leaves'],
        result: {
            fluid: 'thermal:resin',
            amount: 50
        }
    },
    {
        trunk: 'environmental:willow_log',
        leaves: 'environmental:willow_leaves',
        result: {
            fluid: 'thermal:resin',
            amount: 25
        }
    },
    {
        trunk: 'ars_nouveau:red_archwood_log',
        leaves: 'ars_nouveau:red_archwood_leaves',
        result: {
            fluid: 'immersiveengineering:creosote',
            amount: 25
        }
    },
    {
        trunk: 'ars_nouveau:blue_archwood_log',
        leaves: 'ars_nouveau:blue_archwood_leaves',
        result: {
            fluid: 'minecraft:water',
            amount: 100
        }
    },
    {
        trunk: 'ars_nouveau:purple_archwood_log',
        leaves: 'ars_nouveau:purple_archwood_leaves',
        result: {
            fluid: 'tconstruct:ender_slime',
            amount: 2
        }
    },
    {
        trunk: 'ars_nouveau:green_archwood_log',
        leaves: 'ars_nouveau:green_archwood_leaves',
        result: {
            fluid: 'tconstruct:earth_slime',
            amount: 10
        }
    },
    {
        trunk: 'tconstruct:greenheart_log',
        leaves: 'tconstruct:ender_slime_leaves',
        result: {
            fluid: 'tconstruct:earth_slime',
            amount: 25
        }
    },
    {
        trunk: 'tconstruct:greenheart_log',
        leaves: 'tconstruct:earth_slime_leaves',
        result: {
            fluid: 'tconstruct:earth_slime',
            amount: 25
        }
    },
    {
        trunk: 'tconstruct:skyroot_log',
        leaves: 'tconstruct:sky_slime_leaves',
        result: {
            fluid: 'tconstruct:sky_slime',
            amount: 25
        }
    },
    {
        trunk: 'atmospheric:rosewood_log',
        leaves: 'atmospheric:rosewood_leaves',
        result: {
            fluid: 'thermal:resin',
            amount: 25
        }
    },
    {
        trunk: 'atmospheric:morado_log',
        leaves: 'atmospheric:morado_leaves',
        result: {
            fluid: 'thermal:resin',
            amount: 25
        }
    },
    {
        trunk: 'atmospheric:yucca_log',
        leaves: 'atmospheric:yucca_leaves',
        result: {
            fluid: 'thermal:resin',
            amount: 25
        }
    },
    {
        trunk: 'atmospheric:kousa_log',
        leaves: 'atmospheric:kousa_leaves',
        result: {
            fluid: 'thermal:resin',
            amount: 25
        }
    },
    {
        trunk: 'atmospheric:aspen_log',
        leaves: 'atmospheric:aspen_leaves',
        result: {
            fluid: 'thermal:resin',
            amount: 25
        }
    },
    {
        trunk: 'atmospheric:grimwood_log',
        leaves: 'atmospheric:grimwood_leaves',
        result: {
            fluid: 'thermal:resin',
            amount: 25
        }
    },
    {
        trunk: 'bayou_blues:cypress_log',
        leaves: 'bayou_blues:cypress_leaves',
        result: {
            fluid: 'thermal:resin',
            amount: 25
        }
    },
    {
        trunk: 'minecraft:jungle_log',
        leaves: 'charcoal_pit:banana_leaves',
        result: {
            fluid: 'thermal:latex',
            amount: 50
        }
    },
    {
        trunk: 'minecraft:jungle_log',
        leaves: 'charcoal_pit:coconut_leaves',
        result: {
            fluid: 'thermal:latex',
            amount: 50
        }
    },
    {
        trunk: 'tconstruct:bloodshroom_log',
        leaves: 'tconstruct:blood_slime_leaves',
        result: {
            fluid: 'tconstruct:blood',
            amount: 10
        }
    },
    {
        trunk: 'minecraft:crimson_stem',
        leaves: 'minecraft:nether_wart_block',
        result: {
            fluid: 'tconstruct:magma',
            amount: 5
        }
    },
    {
        trunk: 'minecraft:warped_stem',
        leaves: 'minecraft:warped_wart_block',
        result: {
            fluid: 'tconstruct:liquid_soul',
            amount: 1
        }
    }
];


onEvent('recipes', event => {
    
    
    arobor_fertilizers.forEach(fertilizer => {
        event.custom({
            type: 'thermal:tree_extractor_boost',
            ingredient: {
                item: fertilizer.item
            },
            output: fertilizer.output,
            cycles: 16
        });
    });
    arbor_outputs.forEach(tree => {
        if (tree.multiple_entries) {
            tree.leaves.forEach(leave_set => {
                event.custom({
                    type: 'thermal:tree_extractor',
                    trunk: tree.trunk,
                    leaves: leave_set,
                    result: {
                        fluid: tree.result.fluid,
                        amount: tree.result.amount
                    }
                });
            });
        }
        else {
            event.custom({
                type: 'thermal:tree_extractor',
                trunk: tree.trunk,
                leaves: tree.leaves,
                result: {
                    fluid: tree.result.fluid,
                    amount: tree.result.amount
                }
            });
        }
    });
});