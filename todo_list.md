# TODO

# Mod changes
- [x] remove thermal mods and requirements
- [x] add occultism mod
- [x] add crock pot mod
- [x] add mana & artifice mod
- [x] replace tinker with tetra
- [x] remove appleskin, when done
- [x] remove pain in the glass
- [x] go through list of mods open in firefox tabs
- [x] think about replacing ambient sounds with dynamic surroundings (dynamic also ads visuals and reverb)

# Notes

- some mods might rely on the forge:tools tag, need to check when playing

# Tasks to be done, for pack to be considered complete

- [ ] add akashic tome with pack guide and an antique atlas to first login loot
- [x] look through existing tags and recipes and see which one shall stay and which one shouldn't
- [x] look over recipe removal and JEI hiding code, to see what should stay and what shouldn'table
- [ ] add a small guide (just barebones to go over the changes, most players won't expect)
- [x] change backpack tiers to have only more upgrade slots, one per tier (starting at 1)
- [x] diamond gets double space (netherrite inherits this)

- [ ] make an automatic release script, like I have for companion mod
- [ ] update mod lists (mods.json, REAME.md)

- [ ] add tips for several things / add to guide
	- [ ] astral sorcery is included
	- [ ] immersive engineering is included
	- [ ] ars noveau is included
	- [ ] the one probe note being craftable
	- [ ] about seasons (being a thing)
	- [ ] chainmail is craftable
	- [ ] crystals are craftable
	- [ ] rich soil grows mushroom colonies
	- [ ] mushroom colonies can be taken, by shearing (otherwise drop mushrooms)
	- [ ] ham drops from pigs, when killed with knife
	- [ ] path from dirt and also waterloggable path
	- [ ] add more tips to content that isn't obvious
    - [ ] don't try to make honey bottles in the immersive engineering bottler
    - [ ] you can get different metal blocks variants on the stone cutter
    - [ ] you can sleep in a hammock, to pass the day
    - [ ] sleeping bags are good for travels, they pass the night, without setting your spawn point
    - [ ] when a liquid reservior is empty, it is empty (no trace amounts)
    - [ ] flags go on placed down sticks
    - [ ] you can hang up flower pots
    - [ ] bricks can be thrown (keep away from glass)
    - [ ] to make bottle o' enchanting, use a bottle on an enchanting table (this hurts!)
    - [ ] go to undergarden, by building a nether portal out of stone bricks and activate with a catalyst
    - [ ] bottle o' enchanting can be made by using an empty bottle on an enchanting table (hurts)
	
# Recipes

## Sophisticated backpacks
- [x] remove upgrades, except very few (like the jukebox one)
- [x] hide removed recipes for backpacks from JEI

## Druidcraft
- [x] remove tempred hellkin + igniter and heart of blaze from JEI
- [x] add names for
    - [x] crushed fiery glass
    - [x] tempered fiery glass
    - [x] brightstone
    - [x] blazing steel
    - [x] heart of blaze
- [x] add heart of blaze as a rare drop from blazes
- [x] add recipe to crush/mill fiery glass into crushed one
- [x] add smelting/blasting recipe to temper fiery glass
- [x] add recipe to craft bright stone from crushed fiery glass, soulfire and heart of blaze
- [x] add recipe to make blazing steel from pressing steel and crushed fiery glass
- [x] add tetra stats for
    - [x] amber
    - [x] moonstone (material)
    - [x] tempered fiery glass (not the fiery glass) (socket gem)
    - [x] bright stone (socket gem)
    - [x] blazing steel (material)
    - [x] chitin (material)
    - [x] rockroot (material)
    - [x] darkwood
    - [x] elder

## Nature's Aura
- [x] add ways to turn rotten meat into other meats for mob calling
    - [x] beef
    - [x] mutton
    - [x] porkchop
    - [x] chicken
    - [x] rabbit
    
## Mana & Artifice
- [x] remove vintium smelting, blasting recipes
- [x] add crushing recipes instead

## Feywild
- [x] remove fey dust smelting/blsting recipe
- [x] add lesser feygem to fey dust milling, crushing recipes

## Atral sorcery
- [x] add crushing recipe for aquamarine (same as redstone)

## Mystical world
- [x] add crushing (immersive) recipes for ore -> dust for ore doubling
    - [x] copper
    - [x] silver
    - [x] tin
    - [x] quicksilver
    - [x] lead
 - [x] add crushing recipes for amethyst (like diamond)
    
## Immersive, Environmental & Druidcraft
- [x] add mixing recipes for dust blends of allowys
    - [x] electrum
    - [x] constantan

## waystones
- [ ] add recipes for warp dusts and warp stones

## Immersive
- [x] add fertilizers to garden gloche
- [x] find all ores that need crushing recipes
- [x] add crushing recipes
    - [x] ender pearl
    - [x] stardust
    - [x] lapis
    - [x] amber ore
    - [x] ender ore
    - [x] aurora crystals
- [x] add script that adds all wood types to sawmill (only vanilla currently)
- [x] add graphite dust crushing to mill and crushing wheel
- [x] all reserviors should have 0 traces, so when empty, then empty

## Create
- [ ] add heating to the following mixing recipes
    - [ ] sweet berry cookies
    - [ ] cookies
    - [ ] honey cookies
- [ ] remove mixing recipe for cabbage slices
- [ ] add mixing (heated) recipe for
    - [ ] gooseberry cookies
    - [ ] source berry roll
- [ ] mixer can make sweet dough and cinder dough, that then needs to be stamped
- [z] remove smelting recipes for crushed ores
- [ ] add sourdough mixing recipe

# mana and artifice
- [ ] add recipes to make magical flowers (like soaking them in botania mana)

## Serene seasons
- [ ] ad seasons to crops that mis them
- [ ] add seasons for (I can remove specific tag entries with kubejs)

## Misc
- [ ] make stick chewable
- [ ] add bees wax to buzzier bee candle base tag
- [x] add slabs to blocks recipes (just two slabs over each other)
- [x] update recipes that use leaves, to make tea, to use actual tea leaves (tag)
- [ ] sweet bun has 2 hunger haunches and 2.5 saturation
- [x] change recipes to use crafters, make more expensive and use the precision thing from create
    - [x] garden cloche
- [ ] alias gelatines together (pack and better end)
- [ ] alias betterend sulfur with sulfur dust
- [ ] adapat better end jelly to fit it with pack jelly
- [x] change potion effects on purple jelly, magic butter bred, and mysterious sandwich (also maybe make it from chorus fruit again?), only vanilla potion effects work. Also would be good to give them a reason to be amde (like giving fire resistance for 30 seconds), but also negatives (not insignificant chance for 10 seconds wither)
- [x] remove broken recipes from charcoal and abnormals delight
- [x] remove crafting recipes for nuggets/ingots/blocks of metal (requires deciding what type of nuggets/ingots to keep)
- [x] remove recipes for pickaxes, axes swords, etc so tinker needs to be used
- [x] remove netherrite crafting recipe
- [x] remove wheat to bread cooking recipe
- [x] add different weather sensor recipe
- [ ] change sweet roll recipe to use sweet bun first (sweet bun needs to be added and is baked from sweet dough, need to decide on food values)
- [x] add recipes for soul salt and void salt making
- [ ] add charcoal pit banana to banana tag (forge:fruits/banana)
- [x] add stone cutting reciepes for metal blocks (to change between variants)

- [ ] unify pies, use cooking recipes with pie crust as the bowl
    - [ ] pumpkin pie (2 slices of pumpkin and one sugar)
    - [ ] gooseberry pie (3x gooseberry 1x sugar)
    - [ ] source berry pie (3x source berry, 1x sugar, 1x mage bloom)
    - [ ] cherry pie (3x cherry, 1x sugar)
    - [ ] apple pie (2x apple, 1x sugar)
    - [ ] truffle pie (3x mushrrom, 1x truffle)
 - [ ] unify cakes
    - [ ] replace wheat with flour (one to one)
    - [ ] use egg tag, instead of egg
    - [ ] replace wheat with flour in yucca gateau
- [ ] unify food recipes
    - [ ] adzuki bun (replace wheat with dough, not sweet)
    - [ ] replace wheat in sushi with rice (cooked and uncooked)
    - [ ] remove pasta crafting recipes (not cutting or mixing)
    - [ ] change source berry roll to use 1x sweet dough and 2x source berry
    - [ ] change strawberry cones to sweet dough and strawberry (1:1) and keep output count
    - [ ] replace wheat with flour in pan cakes
    - [ ] replace wheat with flour in pumpkin bread recipe
    - [ ] make banana bread recipe with flour, banana, egg and sugar
    - [ ] remove omlette recipe and alias omlette with fried eggs
    - [ ] have different recipes for fried eggs (farmers delight, environmental and  charcoal pit)

- [ ] add baking recipe (furnace, smoker) to make sweet bun from sweet dough
- [ ] add heated recipe for mixer that uses sweet dough to sweet bun

- [ ] change waystone recipes, to require mana gems instead of purple dye
- [ ] make warp dust from ender pearl dust and purple die

- [X] alias chocolate bars together and unify recipes
- [X] have one bar of chocolate be made by stamping (create one) and the other being cooked (neapolitan one)
- [x] add recipe to melt chocolate in basin and also tinker
- [ ] change netherite tank size to 256B
- [ ] allow plantinum as an alternative (ore/ingot) for magic metals (starmetal, manasteel, vinteum ingots)
- [ ] use mana glass (panws) for tank creation (or mana glass for create tanks)
- [ ] add starlight infusion from managem to sapphire (or diamond to sapphire)
- [ ] add mixing recipe to use lava and creosote to make charcoal (only immersive mixer)
    - also make it craftable by hand

# Changes when played

## Crock pot
- [ ] look through ingredients and see which ones are missing stuff

## Crockpot, Serene Seasons & Diet
- [ ] add ingredients, edibles and crops to categories while playing (only very obvious right now)

## Quark
- [ ] look through quark and see what storage block overlap there is
- [ ] add storage blocks to relevant tags
- [ ] add recipes to make storage blocks from quark (mostly with cutting, likely)

## immersive
- [ ] add missing crops to garden cloche

# serene seasons
- [ ] add seasons to crops that miss them or change seasons for crops that feel wrongly placed

## Diet
- [ ] add tags to foodstuffs that miss them

# Worldgen
- [x] remove duplicate ores, decide which ones stay
    - ores that stay
    - [ ] mystical world copper
    - [ ] mystical world silver
    - [ ] mystical world lead
- [ ] make duplicate ores not spawn in world