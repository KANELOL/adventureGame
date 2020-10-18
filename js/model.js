const draculaEncounterMusic = new Audio(src="/assets/sounds/draculaEncounterMusic.mp3");
const villageMusic = new Audio(src="/assets/sounds/villageMusic.mp3");
const worldMusic = new Audio(src="/assets/sounds/worldMusic.mp3");
const randomEncounterMusic = new Audio(src="/assets/sounds/encounterBetaMusic.mp3");
const boringSnottlingEncounterMusic = new Audio(src="/assets/sounds/boringSnottlingMusic.mp3")
model = {
    turnTimer:"",
    allEnemiesDead: false,
    combatTurn:0,
    currentMusic:'',
    currentAttack:'',
    currentTarget:'',
    currentLevel:"createLevel(1)",
    currentDialogue:"",
    currentEnemies:[],
    currentMap:[],
    caveSnottlerEncounter:0,
    player:{
        name:'The Mighty',
        maxHp: 200,
        hp: 100,
        mana:100,
        str: 10,
        int: 10,
        levelPoints: 0,
        level: 1,
        ability:"",
        abilities:["Attack", "Magic", "Items"],
        magic:[],
        items:["Healing Potion", "Fire Bomb","Items Not Implemented Yet!!!"]
    }
    ,
    //For Creating a new enemy
    newEnemy:{
        name:'',
        hp: '',
        mana:'',
        str: '',
        img:'',
        id:'',
    },
    //List of world Objects
    worldObject:[{
        name:"Tree",
        img:`<img src="/assets/trees/001-tree.png" alt="Tree1"></div>`
    },
    {
        name:"Castle",
        img:`<img src="/assets/buildings/003-castle.png" alt="Castle"></div>`,
        options:["Travel"]
    },
    {
        name:"Throne",
        img:`<img src="/assets/buildings/027-throne.png" alt="Throne"></div>`,
        options:["Sit"]
    },
    {
        name:"Floor",
        img:`<img src="/assets/buildings/floor.png" alt="Floor"></div>`,
        options:["Lol"]
    },
    {
        name:"Door",
        img:`<img src="/assets/buildings/door.png" alt="Door"></div>`,
        options:["Exit"]
    },
    {
        name:"Village",
        img:`<img src="/assets/buildings/village.png" alt="Village"></div>`,
        options:["Travel"]
    },
    {
        name:"Grass",
        img:`<img src="/assets/buildings/grass.png" alt="Grass"></div>`,
        options:["Pretend to be a cow..."]
    },
    {
        name:"Cave",
        img:`<img src="/assets/buildings/cave.png" alt="Cave"></div>`,
        options:["Travel"]
    }
    ,{
        name:"WildEncounter",
        img:`<img src="/assets/buildings/ravine.png" alt="Ravine"></div>`,
        options:["Fight!"]
    },{
        name:"Teacher",
        img:`<img src="/assets/016-superhero.png" alt="SuperHero"></div>`,
        options:["Fight!"]
    }],
    //List of possible encounters
enemies: [{
    name:"Guard",
    hp: 100,
    mana:10,
    str: 6,
    img:`<img src="/assets/guard.png" alt="Guard"></div>`
},
{
    name:"Pirate",
    hp: 120,
    mana:30,
    str: 5,
    img:`<img src="/assets/pirate.png" alt="Pirate"></div>`
},
{
    name:"Elf",
    hp: 100,
    mana:130,
    str: 5,
    img:`<img src="/assets/elf.png" alt="Elf"></div>`
},
{
    name:"Snottler",
    hp: 60,
    mana:10,
    str: 4,
    img:`<img src="/assets/snottler.png" alt="Snottler"></div>`
},
{
    name:"Witch",
    hp: 60,
    mana:150,
    str: 3,
    img:`<img src="/assets/witch.png" alt="Witch"></div>`
},

{
    name:"Goddess",
    hp: 50,
    mana:200,
    str: 2,
    img:`<img src="/assets/goddess.png" alt="Goddess"></div>`
},{
    name:"Vampire",
    hp: 200,
    mana:1000,
    str: 10,
    img:`<img src="/assets/vampire.png" alt="Vampire"></div>`
},{
    name:"Happy",
    hp: 10,
    mana:10,
    str: 1,
    img:`<img src="/assets/cheerWoman.png" alt="cheerWoman"></div>`
},]
}