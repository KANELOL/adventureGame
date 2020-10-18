
function startGame() {
    app.innerHTML = `<div>Good Luck, You wont survive playing this</div></br>
    <input onchange="model.player.name = this.value"></input></br>
    <div>Choose Name And Start: <button onclick="drawSkeleton()">StartGame</button>`
}
function drawSkeleton() {
    app.innerHTML = `
    <div class="wrapper">
    <div id="playerInfo" class="playerGrid"></div>
   <div id="mapDiv" class="mapGrid"></div>
   <div id="adventureLog" class="adventureLogGrid">Adventure Log</div>
   <div id="enemyDiv" class="playerGrid"></div>

   </div>`;
   drawPlayer();
   createLevel(1);
}
function drawPlayer() {
    html = `<div class="playerInfo">Name: ${model.player.name}</div>
        <div class="playerInfo">Health: ${model.player.hp}</div>
        <div class="playerInfo">Mana: ${model.player.mana}</div>
        <div class="playerInfo">Stamina: 100</div>`;
        document.getElementById("playerInfo").innerHTML = html;
}
function drawPlayerAbilities() {
    return `<div class="abilityInfo" onclick="selectAttack('attack')">Attack</div>
        <div class="abilityInfo" onclick="selectAttack('magic')">Magic</div>
        <div class="abilityInfo" onclick="selectAttack('items')">Items</div>
        <div class="abilityInfo" onclick="randomEncounter(0, 3)">Get Encounter</div>
        <div class="abilityInfo" onclick="createLevel(1)">Draw Level1</div>`;
}
function drawEncounterMap() {
    let html = model.currentEnemies.map(enemy => `<div id="enemy${enemy.id}" onclick="inspectEnemies(${enemy.id})" class="mapItem">${enemy.name}${enemy.img}</div>`).join('')
    document.getElementById('mapDiv').innerHTML = html
}
function inspectEnemies(id){
    getTarget(id);
    let enemy = model.currentEnemies[id];
    html = `<div class="playerInfo">${enemy.name}</div>
    <div class="playerInfo">Health: ${enemy.hp}</div>
    <div class="playerInfo">Mana: ${enemy.mana}</div>
    <div class="playerInfo">Str: ${enemy.str}</div>
    <div id="playerMenu"></div>`;
    document.getElementById('enemyDiv').innerHTML = html
    playerAbilityOptions();
}
// Use Ability:${playerAbilityOptions()}
function playerAbilityOptions(){
    console.log("PlayerAbilities")
    if (model.turnTimer == "enemy") {
        html = `<div id="playerMenu">Enemy is attacking!</div>`
        document.getElementById('playerMenu').innerHTML = html;
    }
    html = model.player.abilities.map(ability => `<button onclick="player${ability}()">${ability}</button>`).join("")
    document.getElementById('playerMenu').innerHTML = `<div id="playerMenu">${html}</div>`;
}
//Drawing Player Magic
function playerMagic() {
    let playerAbilityHtml = model.player.magic.map(mgi => `<button onclick="playerSpell('${mgi}')">${mgi}</button>`).join("");
document.getElementById('playerMenu').innerHTML = `<div id="playerMenu">Use Magic: ${playerAbilityHtml}<button onclick="playerAbilityOptions()">Back</button></div>`;
 }
 //Drawing All Player Items
 function playerItems() {
   let playerAbilityHtml = model.player.items.map(item => `<button onclick="playerItem('${item}')">${item}</button>`).join("");
document.getElementById('playerMenu').innerHTML = `<div id="playerMenu">Use Item: ${playerAbilityHtml}<button onclick="playerAbilityOptions()">Back</button></div>`;
}
//Drawing the level
function drawLevel() {
    html = model.currentMap.map(obj =>`<div id="obj${obj.id}" onclick="inspectMap(${obj.id})" class="mapItem">${obj.img}</div>`).join('');
    document.getElementById('mapDiv').innerHTML = html;
}
//Inspect a level object
function inspectMap(id){
    getTarget(id);
    let mapObject = model.currentMap[id];
    html = `<div class="playerInfo">${mapObject.name}</div></br>
    <div class="playerInfo">Options:<button onclick="${mapObject.action}"> ${mapObject.options || ""}</button></div>`;
    document.getElementById('enemyDiv').innerHTML = html
}
//What is going on, updating Adventure Log
function updateAdventureLog(){
    html = `<div>${model.currentDialogue}</div>`
    document.getElementById('adventureLog').innerHTML = html
    document.getElementById('adventureLog').scrollTop = document.getElementById('adventureLog').scrollHeight;
}

//    <div id="actionDiv">Action Tab</div>
//    <div class="abilityGrid">${drawPlayerAbilities()}</div>