//Enemy encounters
function draculaEncounter(){
    document.getElementById('enemyDiv').innerHTML = `<h1 style="color:red">DRACULA! He thinks you will taste good!</h1>`;
    model.currentDialogue ="";
    model.currentMusic = draculaEncounterMusic;
    encounterMusic(draculaEncounterMusic, 'play');
    model.currentEnemies = [];
    model.turnTimer = "enemy";
    for (i = 0; i < 3; i++) {
        if (i == 1) {
        model.currentEnemies.push({
            attacked: false,
            alive: true,
            name : "Dracula",
            hp : model.enemies[6].hp,
            mana : model.enemies[6].mana,
            str : model.enemies[6].str,
            img : model.enemies[6].img,
            abilities:["Attack","Drain"],
            id: model.currentEnemies.length
        })
    } else {
            model.currentEnemies.push({
                attacked: false,
                alive: true,
                name : model.enemies[0].name,
                hp : model.enemies[0].hp,
                mana : model.enemies[0].mana,
                str : model.enemies[0].str,
                img : model.enemies[0].img,
                abilities:["Attack"],
                id: model.currentEnemies.length,
        })
          }
      }
      drawEncounterMap();
      startBattle();
}
//Fight the snottlers in the cave
function caveSnottlerEncounter(){
    document.getElementById('enemyDiv').innerHTML = `<h1 style="color:red">They seem angry!</h1>`;
    model.currentDialogue ="";
    model.currentMusic = randomEncounterMusic;
    encounterMusic(randomEncounterMusic, 'play');
    model.currentEnemies = [];
    model.turnTimer = "enemy";
    for (i = 0; i < 4; i++) {
        model.currentEnemies.push({
            attacked: false,
            alive: true,
            name : "Angry Snottler",
            hp : model.enemies[3].hp,
            mana : model.enemies[3].mana,
            str : model.enemies[3].str,
            img : model.enemies[3].img,
            abilities:["Attack","Spit"],
            id: model.currentEnemies.length
        })
      }
      drawEncounterMap();
      startBattle();
}
function randomEncounter(min, max) {
    model.currentDialogue ="";
    model.turnTimer = "enemy";
    model.currentMusic = randomEncounterMusic;
    encounterMusic(randomEncounterMusic, 'play');
    let enemies = Math.floor(Math.random() * (max - min)) + min + 1;
    for (i = 0; i < enemies; i++) {
    let cEnemy = Math.floor(Math.random() * (model.enemies.length - 0));
    model.currentEnemies.push({
        attacked: false,
        alive: true,
        name : model.enemies[cEnemy].name,
        hp : model.enemies[cEnemy].hp,
        mana : model.enemies[cEnemy].mana,
        str : model.enemies[cEnemy].str,
        img : model.enemies[cEnemy].img,
        abilities:["Attack","Drain"],
        id: model.currentEnemies.length
    })
      }
      drawEncounterMap();
      startBattle();
  }
  function getTarget(id) {
      model.currentTarget = model.currentEnemies[id]
  }
//   function selectAttack(atk) {
//  console.log(atk);
//     console.log(model.currentTarget.hp);
//     if (atk == "Attack") {
//         console.log("Attacking for:", 3*model.player.str);
//         model.currentTarget.hp -= 3*model.player.str
//         inspectEnemies(model.currentTarget.id)
//         // && model.currentTarget.hp < 0)
//     }
//     updateAttackDiv();
//   }
  function playerAttack() {
       console.log(model.currentTarget.hp);
      let playerAttackDamage = 3*model.player.str;
           model.currentTarget.hp -= playerAttackDamage;
           inspectEnemies(model.currentTarget.id)
           model.turnTimer ="enemy";
           model.currentDialogue += `${model.player.name} attacks ${model.currentTarget.name} for ${playerAttackDamage}</br>`
        drawPlayer();
        updateAdventureLog();
           startBattle();
     }
      function playerSpell(spell) {
          let fireBallCost = 10;
          let healCost = 10;
          if (spell == "Fireball" && model.player.mana >= fireBallCost){
            let playerSpellDamage = Math.floor(Math.random() * ((model.player.int*10) - model.player.int));
            model.currentTarget.hp -= playerSpellDamage;
            model.player.mana -= fireBallCost;
            console.log("SpellDmg: ", playerSpellDamage);
            model.currentDialogue += `${model.player.name} use ${spell} for ${playerSpellDamage} on ${model.currentTarget.name}</br>`
            inspectEnemies(model.currentTarget.id)
            updateAdventureLog();
            drawPlayer();
            model.turnTimer ="enemy";
           startBattle();
          } else if (spell == "Heal" && model.player.mana >= healCost) {
            let playerSpellDamage = Math.floor(Math.random() * ((model.player.int*10) - model.player.int));
            model.player.hp += playerSpellDamage;
            model.player.mana -= healCost;
            model.currentDialogue += `${model.player.name} use ${spell} for ${playerSpellDamage} on ${model.player.name}</br>`
            noOverHeal();
            updateAdventureLog();
            drawPlayer();
            model.turnTimer ="enemy";
           startBattle();
          } else {
            model.currentDialogue += `<h4 style="color:red">${model.player.name} No Mana!</h4>`
            updateAdventureLog();
          }
      }
      function noOverHeal() {
          if (model.player.hp > model.player.maxHp) {
            model.currentDialogue += `<h4 style="color:red">${model.player.name} OVERHEAL!</h4>`
              model.player.hp = 200;
          }
      }
  //Create a map in the model.
  function createLevel(mapLevel) {
      model.currentMap = [];
      if(mapLevel == 1){
        model.currentLevel ="createLevel(1)";
level1();
      }
      if(mapLevel == 2){
        model.currentLevel ="createLevel(2)";
        level2();
              }
              if(mapLevel == 3) {
                model.currentLevel ="createLevel(3)";
                level3();
              }
              if(mapLevel == 4) {
                model.currentLevel ="createLevel(4)";
                level4();
              }
      drawLevel();
  }
  //Creating map for level1
  function level1(){
    model.currentDialogue ="Forest Of Vitis"
    encounterMusic(worldMusic, 'play');
    updateAdventureLog();
    for (i = 0; i < 100; i++) {
        if( i == 1){
            model.currentMap.push({
                name: model.worldObject[5].name,
                img: model.worldObject[5].img,
                id: i,
                options: model.worldObject[5].options,
                action: "createLevel(3), encounterMusic(worldMusic, 'pause')"
            })
        }
        else if ( i == 6){
            model.currentMap.push({
                name: model.worldObject[7].name,
                img: model.worldObject[7].img,
                id: i,
                options: model.worldObject[7].options,
                action: "createLevel(4), encounterMusic(worldMusic, 'pause')"
            })
        }
       else if ( i == 49){
            model.currentMap.push({
                name: model.worldObject[1].name+" Dracula",
                img: model.worldObject[1].img,
                id: i,
                options: model.worldObject[1].options,
                action: "createLevel(2), encounterMusic(worldMusic, 'pause')"
            })
        } else if ( i == 29){
            model.currentMap.push({
                name: model.worldObject[8].name,
                img: model.worldObject[8].img,
                id: i,
                options: model.worldObject[8].options,
                action: `randomEncounter(${model.player.level}, 3), encounterMusic(worldMusic, 'pause')`
            })
        }else {
      model.currentMap.push({
         name: model.worldObject[0].name,
          img: model.worldObject[0].img,
          id: i,
      })
  }}}
  //Castle Dracula
  function level2(){
    model.currentDialogue ="Draculas Castle!"
    playDraculaIntro();
    updateAdventureLog();
    for (i = 0; i < 100; i++) {
        //Create Doors To Exit
        if( i == 0 || i == 99){
            model.currentMap.push({
                name: model.worldObject[4].name,
                img: model.worldObject[4].img,
                id: i,
                options: model.worldObject[4].options,
                action: "createLevel(1)"
            })
        } 
         //Create Dracula
         else if( i == 15){
            model.currentMap.push({
                name: "Dracula",
                img: model.enemies[6].img,
                id: i,
                options: "Talk",
                action:"talkDracula()",
            })
        }
        //Create Guards
        else if( i == 14 || i == 16){
            model.currentMap.push({
                name: model.enemies[0].name,
                img: model.enemies[0].img,
                id: i,
                options: "Talk",
                action:"talkDraculaGuard()",
            })
        }
        //The Throne
        else if( i == 5){
            model.currentMap.push({
                name: model.worldObject[2].name,
                img: model.worldObject[2].img,
                id: i,
                options: model.worldObject[2].options
            })
        } else {
      model.currentMap.push({
         name: model.worldObject[3].name,
          img: model.worldObject[3].img,
          id: i,
      })
  }}}
  //The Little Village
  function level3(){
    model.currentDialogue ="Village Of Vitis"
    encounterMusic(villageMusic, 'play')
    updateAdventureLog();
    for (i = 0; i < 100; i++) {
        if (i == 0) {
        model.currentMap.push({
            name: model.worldObject[4].name,
            img: model.worldObject[4].img,
            id: i,
            options: model.worldObject[4].options,
            action: "createLevel(1), encounterMusic(villageMusic, 'pause')"
        })}
        //Create a WTF
            else if( i == 15 || i == 45){
            model.currentMap.push({
                name: "Villager",
                img: model.enemies[5].img,
                id: i,
                options: "Talk",
                action:"talkVillager()",
            })
        }
        //Create a Teacher
        else if( i == 47){
            model.currentMap.push({
                name: "Hidden Teacher",
                img: model.worldObject[9].img,
                id: i,
                options: "Talk",
                action:"talkTeacher()",
            })
        }
        //Create The Happy Villager
       else if ( i == 49){
            model.currentMap.push({
                name: model.enemies[7].name+" Villager",
                img: model.enemies[7].img,
                id: i,
                options: "Talk",
                action: "talkHappyVillager()"
            })
        } else {
      model.currentMap.push({
         name: model.worldObject[6].name,
          img: model.worldObject[6].img,
          id: i,
      })}}}
      function level4(){
        model.currentDialogue ="Snot Cave"
        model.currentMusic = boringSnottlingEncounterMusic;
    encounterMusic(boringSnottlingEncounterMusic, 'play');
        updateAdventureLog();
        for (i = 0; i < 100; i++) {
           //Create Doors To Exit
           if( i == 0 || i == 99){
            model.currentMap.push({
                name: model.worldObject[4].name,
                img: model.worldObject[4].img,
                id: i,
                options: model.worldObject[4].options,
                action: "createLevel(1), encounterMusic(boringSnottlingEncounterMusic, 'pause')"
            })
        } 
         //Create The Happy Villager
       else if ( i == 49 || i == 48 || i == 38 || i == 39){
        model.currentMap.push({
            name: model.enemies[3].name+" Villager",
            img: model.enemies[3].img,
            id: i,
            options: "Talk",
            action: "talkSnottler()"
        })
    }
         else {
            model.currentMap.push({
               name: model.worldObject[3].name,
                img: model.worldObject[3].img,
                id: i,
            })
        }}}

  //Dialogues
  //Dialogues in Draculas Castle
  function talkDracula(){
    playDraculaTalk1()
      model.currentDialogue = "Dracula: You came here, to disturb my vampiric Kingdom!, Good I am having dinner now anyways!"
      updateAdventureLog();
  }
  function talkDraculaGuard(){
    playDraculaGuardTalk()
      model.currentDialogue = "Bodyguard: Our lord is hungry, thank you for coming."
      updateAdventureLog();
  }
  //Play Ambient Music
  function playDraculaIntro() {
      console.log("Play Dracula Intro!")
      var draculaAmbient = new Audio(src="/assets/sounds/DraculaIntro.mp3");
      draculaAmbient.play();
  }
  function playDraculaTalk1() {
    console.log("Play Dracula Talk!")
     var draculaTalk1 = new Audio(src="/assets/sounds/draculaYouCameHere.mp3");
     draculaTalk1.play();
     setTimeout(function() { draculaEncounter(); }, 5000);
}
function playDraculaGuardTalk() {
    var draculaGuardTalk1 = new Audio(src="/assets/sounds/guardOurLordIsHungry.mp3");
     draculaGuardTalk1.play();
}
//Dialogues in small Village
function talkHappyVillager(){
    playHappytVillagerTalk()
    model.currentDialogue = "Happy Villager: We are so lucky to be blessed by nature! hihi."
      updateAdventureLog();
}
      function talkVillager(){
        playVillagerTalk()
        model.currentDialogue = "Villager: WREEEEEE! - Not much talk from this one."
          updateAdventureLog();
}
function talkTeacher(){
    playTeacherTalk1();
    model.currentDialogue = `Teacher: Woah, before you fight anything. You better take my two spellsgems!</br><h4 style="color:red"> ${model.player.name}</h4>
    Learned Fireball and Heal! Nice.`
    model.player.magic.push("Fireball", "Heal");
      updateAdventureLog();
}
function playTeacherTalk1() {
    var teacherTalk1 = new Audio(src="/assets/sounds/teacherTalk1.mp3");
    teacherTalk1.play();
}
function playVillagerTalk() {
    var villagerTalk1 = new Audio(src="/assets/sounds/wree.mp3");
    villagerTalk1.play();
}
function playHappytVillagerTalk() {
    var happyVillagerTalk1 = new Audio(src="/assets/sounds/happyVillagerBlessedByNature.mp3");
    happyVillagerTalk1.play();
}
//Dialogues in the Cave
function talkSnottler(){
    playSnottlerTalk1()
    model.caveSnottlerEncounter += 1;
    model.currentDialogue = "Snottler: Snuffs, hark. Spit.. *It looks at you*- Wonder what diet it has?"
      updateAdventureLog();
      if(model.caveSnottlerEncounter == 3){
        encounterMusic(model.currentMusic, 'pause');
        caveSnottlerEncounter();
      }
}
function playSnottlerTalk1() {
    var snottlerTalk1 = new Audio(src="/assets/sounds/snottlerTalk1.mp3");
    snottlerTalk1.play();
}
//Encounter Music
function encounterMusic(currentMusic, playorpause){
    if (playorpause == "play") {
        currentMusic.play();
} else if (playorpause == "pause") {
    currentMusic.pause();
}}
//Start Battle
function startBattle() {
    model.combatTurn++
    if (model.turnTimer == "enemy") {
        model.currentDialogue += `<h4 style="color:red" "text-decoration:underline">Enemy on turn ${model.combatTurn}</h4>`
        enemyAttack();
    }else if(model.player.hp <= 0) {
        encounterMusic(model.currentMusic, 'pause');
        document.getElementById('enemyDiv').innerHTML = `<h1 style="color:red">You Died Try Again :D</h1>`;
        model.player.hp = 200;
        model.currentEnemies = [];
        createLevel(1);
        drawPlayer();
    } else {
        model.currentDialogue += `<h4 style="color:green" "text-decoration:underline">${model.player.name} on turn ${model.combatTurn}</h4></br>`
        updateAdventureLog();
    }
}
//NPC AI
function enemyAttack() {
    numberOfEnemies = model.currentEnemies.length
    for (let i = 0; i < numberOfEnemies; i++) {
        let currentEnemyAbilities = model.currentEnemies[i].abilities.length
        let enemyAttack = Math.floor(Math.random() * (currentEnemyAbilities - 0));
        let whatEnemy = model.currentEnemies[i];
        let whatAbility = model.currentEnemies[i].abilities[enemyAttack];
        if( whatEnemy.hp > 0) {

       enemyGoHam(whatEnemy, whatAbility);
} else {
    whatEnemy.alive = false;
    checkAllEnemiesAreDead();
}}
model.turnTimer = "player";
startBattle();
}
function checkAllEnemiesAreDead() {
    let nrOfDeadEnemies = 0;
    for (let i = 0; i < numberOfEnemies; i++) {
        let whatEnemy = model.currentEnemies[i];
        if (whatEnemy.alive == false) {
nrOfDeadEnemies++;
        }}
        if (nrOfDeadEnemies == model.currentEnemies.length) {
            document.getElementById('enemyDiv').innerHTML = `<h1 style="color:Green">You Won Continue The Journey :D</h1>`;
        model.player.hp = 200;
        encounterMusic(model.currentMusic, 'pause');
        createLevel(1);
        model.currentEnemies = [];
        drawPlayer();
        }
}
// Shitty delay funksjon
// function attackDelay(i){
//     setTimeout(() => {
//         let currentEnemyAbilities = model.currentEnemies[i].abilities.length
//         let enemyAttack = Math.floor(Math.random() * (currentEnemyAbilities - 0));
//         let whatEnemy = model.currentEnemies[i];
//         let whatAbility = model.currentEnemies[i].abilities[enemyAttack];
//        enemyGoHam(whatEnemy, whatAbility);
//     }, 2000);
// }
function enemyGoHam(enemy, ability) {
    if (ability == "Attack") {
        let enemyDmg = enemy.str * 1;
        model.player.hp -= enemyDmg;
        model.currentDialogue += `${enemy.name} use ${ability} for ${enemyDmg}</br>`
        drawPlayer();
        updateAdventureLog();
    } else if (ability == "Drain") {
        let enemyDmg = 5;
        model.player.hp -= enemyDmg;
        enemy.hp += enemyDmg;
        model.currentDialogue += `${enemy.name} use ${ability} for ${enemyDmg}</br>${enemy.name} restore ${enemyDmg} with ${ability}</br>`
        drawPlayer();
        updateAdventureLog();
    }else if (ability == "Spit") {
        let enemyDmg = 7;
        model.player.hp -= enemyDmg;
        enemy.hp += enemyDmg;
        model.currentDialogue += `${enemy.name} use ${ability} for ${enemyDmg}, DISGUSTING!</br> ${enemy.name} grows stronger from disgust.</br>`
        drawPlayer();
        updateAdventureLog();
    }
}