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

- [x] add akashic tome with pack guide and an antique atlas to first login loot
- [x] look through existing tags and recipes and see which one shall stay and which one shouldn't
- [x] look over recipe removal and JEI hiding code, to see what should stay and what shouldn'table
- [x] add a small guide (just barebones to go over the changes, most players won't expect)
- [x] change backpack tiers to have only more upgrade slots, one per tier (starting at 1)
- [x] diamond gets double space (netherrite inherits this)

- [ ] make an automatic release script, like I have for companion mod
- [ ] update mod lists (mods.json, REAME.md)
- [x] add JEI notes (via script) about all tinker fuels /kubejs/data/tconstuct/smeltery/melting/fuel

- [ ] add tips for several things / add to guide
	- [x] astral sorcery is included
	- [x] immersive engineering is included
	- [x] ars noveau is included
	- [x] the one probe note being craftable
	- [x] about seasons (being a thing)
	- [x] chainmail is craftable
	- [x] crystals are craftable
	- [x] rich soil grows mushroom colonies
	- [x] mushroom colonies can be taken, by shearing (otherwise drop mushrooms)
	- [x] ham drops from pigs, when killed with knife
	- [x] path from dirt and also waterloggable path
    - [x] don't try to make honey bottles in the immersive engineering bottler!
    - [ ] you can get different metal blocks variants on the stone cutter (WIP)
    - [x] you can sleep in a hammock, to pass the day
    - [x] sleeping bags are good for travels, they pass the night, without setting your spawn point
    - [x] when a liquid reservior is empty, it is empty (no trace amounts)
    - [x] flags go on placed down sticks
    - [x] you can hang up flower pots
    - [x] bricks can be thrown (keep away from glass)
    - [x] to make bottle o' enchanting, use a bottle on an enchanting table (this hurts!)
    - [x] go to undergarden, by building a nether portal out of stone bricks and activate with a catalyst
    - [x] beds can have bed sheats (banners)
    - [x] add a catergory about how to get into mods (just how to obtain their guide books)
    - [x] add explanation on how to get psi book or give it from start (in akashic tome for example)
    - [x] creepers don't mess up environment
    - [x] fire doesn't spread
    - [x] information about dimensions
    - [x] inform about wall jump
	
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
- [x] add recipes for warp dusts and warp stones

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
- [x] add rambutan and ancient wood to sawmill

## Create
- [z] remove smelting recipes for crushed ores
- [x] add sourdough mixing recipe


## Serene seasons
- [x] add seasons to crops that mis them

## Misc
- [x] add recipes to make coins
- [x] add bees wax to buzzier bee candle base tag
- [x] add slabs to blocks recipes (just two slabs over each other)
- [x] update recipes that use leaves, to make tea, to use actual tea leaves (tag)
- [x] change recipes to use crafters, make more expensive and use the precision thing from create
    - [x] garden cloche
- [x] change potion effects on purple jelly, magic butter bred, and mysterious sandwich (also maybe make it from chorus fruit again?), only vanilla potion effects work. Also would be good to give them a reason to be amde (like giving fire resistance for 30 seconds), but also negatives (not insignificant chance for 10 seconds wither)
- [x] remove broken recipes from charcoal and abnormals delight
- [x] remove crafting recipes for nuggets/ingots/blocks of metal (requires deciding what type of nuggets/ingots to keep)
- [x] remove recipes for pickaxes, axes swords, etc so tinker needs to be used
- [x] remove netherrite crafting recipe
- [x] remove wheat to bread cooking recipe
- [x] add different weather sensor recipe
- [x] add recipes for soul salt and void salt making
- [x] add stone cutting reciepes for metal blocks (to change between variants)

- [X] alias chocolate bars together and unify recipes
- [X] have one bar of chocolate be made by stamping (create one) and the other being cooked (neapolitan one)
- [x] add recipe to melt chocolate in basin and also tinker
- [x] change netherite tank size to 256B

# Changes when played

 - [ ] add sleeping bag to login loot
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
    - [x] mystical world copper
    - [x] mystical world silver
    - [x] mystical world lead
- [x] make duplicate ores not spawn in world