// Store the combatant data in an array
var data = monsterdata;
var tableData = [];
var currentOrder = "";
var rollSubmit = d3.select(".roll");
var orderSubmit = d3.select(".order");
var turnSubmit = d3.select(".turn");

var CurrentTurnText = "DM";
d3.select("#CurrentTurnID").text(`${CurrentTurnText}`);
var NextTurnText = "Monsters!";
d3.select("#NextTurnID").text(`${NextTurnText}`);

var encounterNum = 0;
var turnNum = 0;
var roundNum = 0;
var turnLength = 0;
var turnCounter = 0;

function loadTableData(dataArray) {
  d3.select("#order-table tbody").remove();
  const table = d3.select("#order-table");
  const tableBody = table.append("tbody");
 var dcount = 0;
tableBody
  .selectAll("tr")
  .data(dataArray)
  .enter()
  .append("tr")
  .selectAll("td")
  .data(function(row, i) {
    return [{
        column: "ORDER",
        value: dcount = dcount +1
      },
      {
        column: "ID",
        value: row.id
      },
      {
        column: "NAME",
        value: row.name
      },
      {
        column: "RACE",
        value: row.race
      },
      {
        column: "INIT",
        value: row.init
      }
    ];
  })
  .enter()
  .append("td")
  .attr("class", "small")
  .text(function(d) {
    return d.value;
  }); 

};

turnSubmit.on("click", function() {
  
  if (turnLength == 1) {
    console.log(`this turn: ${currentOrder[0].id}`);
    if (currentOrder[0].name == "") {
      d3.select("#CurrentTurnID").text(`${currentOrder[0].id} the ${currentOrder[0].race}`);
    } else {
      d3.select("#CurrentTurnID").text(`${currentOrder[0].name} the ${currentOrder[0].race}`);
    };
  } else {
    console.log(`this turn: ${currentOrder[turnCounter].id}`);
    if (currentOrder[turnCounter].name == "") {
      d3.select("#CurrentTurnID").text(`${currentOrder[turnCounter].id} the ${currentOrder[turnCounter].race}`);
    } else {
      d3.select("#CurrentTurnID").text(`${currentOrder[turnCounter].name} the ${currentOrder[turnCounter].race}`);
    };
    
  };
  
  if (turnLength >> 1) {
    if (turnCounter + 1 == turnLength) {
      console.log(`next turn: ${currentOrder[0].id}`);
      if (currentOrder[0].name == "") {
        d3.select("#NextTurnID").text(`${currentOrder[0].id} the ${currentOrder[0].race}`);
      } else {
        d3.select("#NextTurnID").text(`${currentOrder[0].name} the ${currentOrder[0].race}`);
      };
      
    } else {
      console.log(`next turn: ${currentOrder[turnCounter + 1].id}`);
      if (currentOrder[turnCounter + 1].name == "") {
        d3.select("#NextTurnID").text(`${currentOrder[turnCounter + 1].id} the ${currentOrder[turnCounter + 1].race}`);
      } else {
        d3.select("#NextTurnID").text(`${currentOrder[turnCounter + 1].name} the ${currentOrder[turnCounter + 1].race}`);
      };
      
    };
  };



  turnCounter = turnCounter + 1;
  turnNum = turnNum + 1;
  d3.select(".turnNum").text(turnNum);
  d3.select(".roundNum").text(roundNum);
  if (turnCounter == turnLength) {
    roundNum = roundNum + 1;   
    turnCounter = 0;
  };

  

});
  



orderSubmit.on("click", function() {
  d3.event.preventDefault();
  encounterNum = encounterNum + 1;
  d3.select(".encounterNum").text(encounterNum);
  turnNum = 1;
  d3.select(".turnNum").text(turnNum);
  roundNum = 1;
  d3.select(".roundNum").text(roundNum);
  turnCounter = 1;

  console.log(`Getting combatants`);
  
  // Clear table
    var clearTable = Object.keys(tableData).forEach((param) => {
      tableData.pop();
    });
    console.log(`Table is now ${clearTable}`);
  // Build Table

  // Character 1 Ready?
  var char1selected = d3.select("#selChar1race");
  if (char1selected.property("value") == "Char1race") {
    console.log(`Character 1 is not fighting`);
  } 
  else { // Add Character 1 for combat
  console.log(`${char1selected.property("value")} is fighting!`);
  var char1idText = "Character 1";
  var char1nameText = char1name.property("value");
  var char1raceText = char1selected.property("value").split('1')[1];
  var char1initText = char1init.text();
  var char1obj = {id: char1idText, name: char1nameText, race: char1raceText, init: char1initText};
  console.log(char1obj); 
  tableData.push(char1obj);  
  console.log(tableData);
  };

    // Character 2 Ready?
    var char2selected = d3.select("#selChar2race");
    if (char2selected.property("value") == "Char2race") {
      console.log(`Character 2 is not fighting`);
    } 
    else { // Add Character 2 for combat
    console.log(`${char2selected.property("value")} is fighting!`);
    var char2idText = "Character 2";
    var char2nameText = char2name.property("value");
    var char2raceText = char2selected.property("value").split('2')[1];
    var char2initText = char2init.text();
    var char2obj = {id: char2idText, name: char2nameText, race: char2raceText, init: char2initText};
    console.log(char2obj); 
    tableData.push(char2obj);  
    console.log(tableData);
    };

      // Character 3 Ready?
  var char3selected = d3.select("#selChar3race");
  if (char3selected.property("value") == "Char3race") {
    console.log(`Character 3 is not fighting`);
  } 
  else { // Add Character 3 for combat
  console.log(`${char3selected.property("value")} is fighting!`);
  var char3idText = "Character 3";
  var char3nameText = char3name.property("value");
  var char3raceText = char3selected.property("value").split('3')[1];
  var char3initText = char3init.text();
  var char3obj = {id: char3idText, name: char3nameText, race: char3raceText, init: char3initText};
  console.log(char3obj); 
  tableData.push(char3obj);  
  console.log(tableData);
  };

    // Character 4 Ready?
    var char4selected = d3.select("#selChar4race");
    if (char4selected.property("value") == "Char4race") {
      console.log(`Character 4 is not fighting`);
    } 
    else { // Add Character 4 for combat
    console.log(`${char4selected.property("value")} is fighting!`);
    var char4idText = "Character 4";
    var char4nameText = char4name.property("value");
    var char4raceText = char4selected.property("value").split('4')[1];
    var char4initText = char4init.text();
    var char4obj = {id: char4idText, name: char4nameText, race: char4raceText, init: char4initText};
    console.log(char4obj); 
    tableData.push(char4obj);  
    console.log(tableData);
    };

      // Character 5 Ready?
  var char5selected = d3.select("#selChar5race");
  if (char5selected.property("value") == "Char5race") {
    console.log(`Character 5 is not fighting`);
  } 
  else { // Add Character 5 for combat
  console.log(`${char5selected.property("value")} is fighting!`);
  var char5idText = "Character 5";
  var char5nameText = char5name.property("value");
  var char5raceText = char5selected.property("value").split('5')[1];
  var char5initText = char5init.text();
  var char5obj = {id: char5idText, name: char5nameText, race: char5raceText, init: char5initText};
  console.log(char5obj); 
  tableData.push(char5obj);  
  console.log(tableData);
  };

    // Character 6 Ready?
    var char6selected = d3.select("#selChar6race");
    if (char6selected.property("value") == "Char6race") {
      console.log(`Character 6 is not fighting`);
    } 
    else { // Add Character 6 for combat
    console.log(`${char6selected.property("value")} is fighting!`);
    var char6idText = "Character 6";
    var char6nameText = char6name.property("value");
    var char6raceText = char6selected.property("value").split('6')[1];
    var char6initText = char6init.text();
    var char6obj = {id: char6idText, name: char6nameText, race: char6raceText, init: char6initText};
    console.log(char6obj); 
    tableData.push(char6obj);  
    console.log(tableData);
    };

      // Character 7 Ready?
  var char7selected = d3.select("#selChar7race");
  if (char7selected.property("value") == "Char7race") {
    console.log(`Character 7 is not fighting`);
  } 
  else { // Add Character 7 for combat
  console.log(`${char7selected.property("value")} is fighting!`);
  var char7idText = "Character 7";
  var char7nameText = char7name.property("value");
  var char7raceText = char7selected.property("value").split('7')[1];
  var char7initText = char7init.text();
  var char7obj = {id: char7idText, name: char7nameText, race: char7raceText, init: char7initText};
  console.log(char7obj); 
  tableData.push(char7obj);  
  console.log(tableData);
  };

    // Character 8 Ready?
    var char8selected = d3.select("#selChar8race");
    if (char8selected.property("value") == "Char8race") {
      console.log(`Character 8 is not fighting`);
    } 
    else { // Add Character 8 for combat
    console.log(`${char8selected.property("value")} is fighting!`);
    var char8idText = "Character 8";
    var char8nameText = char8name.property("value");
    var char8raceText = char8selected.property("value").split('8')[1];
    var char8initText = char8init.text();
    var char8obj = {id: char8idText, name: char8nameText, race: char8raceText, init: char8initText};
    console.log(char8obj); 
    tableData.push(char8obj);  
    console.log(tableData);
    };

    // Monster 1 Ready?
  var mons1selected = d3.select("#selMons1race");
  if (mons1selected.property("value") == "Mons1race") {
    console.log(`Monster 1 is not fighting`);
  } 
  else { // Add Monster 1 for combat
  console.log(`${mons1selected.property("value")} is fighting!`);
  var mons1idText = "Monster 1";
  var mons1nameText = mons1name.property("value");
  var mons1raceText = mons1selected.property("value").split('1')[1];
  var mons1initText = mons1init.text();
  var mons1obj = {id: mons1idText, name: mons1nameText, race: mons1raceText, init: mons1initText};
  console.log(mons1obj); 
  tableData.push(mons1obj);  
  console.log(tableData);
  };

      // Monster 2 Ready?
      var mons2selected = d3.select("#selMons2race");
      if (mons2selected.property("value") == "Mons2race") {
        console.log(`Monster 2 is not fighting`);
      } 
      else { // Add Monster 2 for combat
      console.log(`${mons2selected.property("value")} is fighting!`);
      var mons2idText = "Monster 2";
      var mons2nameText = mons2name.property("value");
      var mons2raceText = mons2selected.property("value").split('2')[1];
      var mons2initText = mons2init.text();
      var mons2obj = {id: mons2idText, name: mons2nameText, race: mons2raceText, init: mons2initText};
      console.log(mons2obj); 
      tableData.push(mons2obj);  
      console.log(tableData);
      };

          // Monster 3 Ready?
  var mons3selected = d3.select("#selMons3race");
  if (mons3selected.property("value") == "Mons3race") {
    console.log(`Monster 3 is not fighting`);
  } 
  else { // Add Monster 3 for combat
  console.log(`${mons3selected.property("value")} is fighting!`);
  var mons3idText = "Monster 3";
  var mons3nameText = mons3name.property("value");
  var mons3raceText = mons3selected.property("value").split('3')[1];
  var mons3initText = mons3init.text();
  var mons3obj = {id: mons3idText, name: mons3nameText, race: mons3raceText, init: mons3initText};
  console.log(mons3obj); 
  tableData.push(mons3obj);  
  console.log(tableData);
  };

      // Monster 4 Ready?
      var mons4selected = d3.select("#selMons4race");
      if (mons4selected.property("value") == "Mons4race") {
        console.log(`Monster 4 is not fighting`);
      } 
      else { // Add Monster 4 for combat
      console.log(`${mons4selected.property("value")} is fighting!`);
      var mons4idText = "Monster 4";
      var mons4nameText = mons4name.property("value");
      var mons4raceText = mons4selected.property("value").split('4')[1];
      var mons4initText = mons4init.text();
      var mons4obj = {id: mons4idText, name: mons4nameText, race: mons4raceText, init: mons4initText};
      console.log(mons4obj); 
      tableData.push(mons4obj);  
      console.log(tableData);
      };

          // Monster 5 Ready?
  var mons5selected = d3.select("#selMons5race");
  if (mons5selected.property("value") == "Mons5race") {
    console.log(`Monster 5 is not fighting`);
  } 
  else { // Add Monster 5 for combat
  console.log(`${mons5selected.property("value")} is fighting!`);
  var mons5idText = "Monster 5";
  var mons5nameText = mons5name.property("value");
  var mons5raceText = mons5selected.property("value").split('5')[1];
  var mons5initText = mons5init.text();
  var mons5obj = {id: mons5idText, name: mons5nameText, race: mons5raceText, init: mons5initText};
  console.log(mons5obj); 
  tableData.push(mons5obj);  
  console.log(tableData);
  };

      // Monster 6 Ready?
      var mons6selected = d3.select("#selMons6race");
      if (mons6selected.property("value") == "Mons6race") {
        console.log(`Monster 6 is not fighting`);
      } 
      else { // Add Monster 6 for combat
      console.log(`${mons6selected.property("value")} is fighting!`);
      var mons6idText = "Monster 6";
      var mons6nameText = mons6name.property("value");
      var mons6raceText = mons6selected.property("value").split('6')[1];
      var mons6initText = mons6init.text();
      var mons6obj = {id: mons6idText, name: mons6nameText, race: mons6raceText, init: mons6initText};
      console.log(mons6obj); 
      tableData.push(mons6obj);  
      console.log(tableData);
      };

          // Monster 7 Ready?
  var mons7selected = d3.select("#selMons7race");
  if (mons7selected.property("value") == "Mons7race") {
    console.log(`Monster 7 is not fighting`);
  } 
  else { // Add Monster 7 for combat
  console.log(`${mons7selected.property("value")} is fighting!`);
  var mons7idText = "Monster 7";
  var mons7nameText = mons7name.property("value");
  var mons7raceText = mons7selected.property("value").split('7')[1];
  var mons7initText = mons7init.text();
  var mons7obj = {id: mons7idText, name: mons7nameText, race: mons7raceText, init: mons7initText};
  console.log(mons7obj); 
  tableData.push(mons7obj);  
  console.log(tableData);
  };

      // Monster 8 Ready?
      var mons8selected = d3.select("#selMons8race");
      if (mons8selected.property("value") == "Mons8race") {
        console.log(`Monster 8 is not fighting`);
      } 
      else { // Add Monster 8 for combat
      console.log(`${mons8selected.property("value")} is fighting!`);
      var mons8idText = "Monster 8";
      var mons8nameText = mons8name.property("value");
      var mons8raceText = mons8selected.property("value").split('8')[1];
      var mons8initText = mons8init.text();
      var mons8obj = {id: mons8idText, name: mons8nameText, race: mons8raceText, init: mons8initText};
      console.log(mons8obj); 
      tableData.push(mons8obj);  
      console.log(tableData);
      };



  // Sort table
  console.log(`Sorting...`);
  var sortedData = tableData.sort((a, b)=>(b.init - a.init));
  turnLength = sortedData.length;

  console.log(`first: ${sortedData[0].id}`);
  if (sortedData[0].name == ""){
    d3.select("#CurrentTurnID").attr("style", "color: red;").text(`${sortedData[0].id} the ${sortedData[0].race}`);
  }
  else {
    d3.select("#CurrentTurnID").attr("style", "color: red;").text(`${sortedData[0].name} the ${sortedData[0].race}`);
  };
  if (turnLength >> 1) {
    console.log(`second: ${sortedData[1].id}`);
    if (sortedData[1].name == ""){
      d3.select("#NextTurnID").attr("style", "color: blue;").text(`${sortedData[1].id} the ${sortedData[1].race}`);
    }
    else {
      d3.select("#NextTurnID").attr("style", "color: blue;").text(`${sortedData[1].name} the ${sortedData[1].race}`);
    };
    
  };

  currentOrder = sortedData;
  console.log(sortedData);
  loadTableData(sortedData); 

});

function rolld20() {
  var min = 1;
  var max = 20;
  randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
  return randomNumber;
};



rollSubmit.on("click", function() {
  d3.event.preventDefault();
  d3.select("#order-table tbody").remove();
  // Character 1
  var char1selected = d3.select("#selChar1race");
  if (char1selected.property("value") == "Char1race") {
    console.log(`Character 1 is not selected for combat`);
  } 
  else {
  var thisroll = rolld20();
  console.log(`Rolling for ${char1selected.property("value")}`);
  var char1modText = char1mod.text();
  console.log(`${char1selected.property("value")} Roll: ${thisroll} + Mod: ${char1modText}`);
  char1initVal = parseInt(thisroll) + parseInt(char1modText);
  char1init.text(char1initVal);
  console.log(`${char1selected.property("value")} Init: ${char1initVal}`); };
  
  // Character 2
  var char2selected = d3.select("#selChar2race");
  if (char2selected.property("value") == "Char2race") {
    console.log(`Character 2 is not selected for combat`);
  } 
  else {
  var thisroll = rolld20();
  console.log(`Rolling for ${char2selected.property("value")}`);
  var char2modText = char2mod.text();
  console.log(`${char2selected.property("value")} Roll: ${thisroll} + Mod: ${char2modText}`);
  char2initVal = parseInt(thisroll) + parseInt(char2modText);
  char2init.text(char2initVal);
  console.log(`${char2selected.property("value")} - Init: ${char2initVal}`); };

  // Character 3
  var char3selected = d3.select("#selChar3race");
  if (char3selected.property("value") == "Char3race") {
    console.log(`Character 3 is not selected for combat`);
  } 
  else {
  var thisroll = rolld20();
  console.log(`Rolling for ${char3selected.property("value")}`);
  var char3modText = char3mod.text();
  console.log(`${char3selected.property("value")} Roll: ${thisroll} + Mod: ${char3modText}`);
  char3initVal = parseInt(thisroll) + parseInt(char3modText);
  char3init.text(char3initVal);
  console.log(`${char3selected.property("value")} - Init: ${char3initVal}`); };

  // Character 4
  var char4selected = d3.select("#selChar4race");
  if (char4selected.property("value") == "Char4race") {
    console.log(`Character 4 is not selected for combat`);
  } 
  else {
  var thisroll = rolld20();
  console.log(`Rolling for ${char4selected.property("value")}`);
  var char4modText = char4mod.text();
  console.log(`${char4selected.property("value")} Roll: ${thisroll} + Mod: ${char4modText}`);
  char4initVal = parseInt(thisroll) + parseInt(char4modText);
  char4init.text(char4initVal);
  console.log(`${char4selected.property("value")} - Init: ${char4initVal}`); };

  // Character 5
  var char5selected = d3.select("#selChar5race");
  if (char5selected.property("value") == "Char5race") {
    console.log(`Character 5 is not selected for combat`);
  } 
  else {
  var thisroll = rolld20();
  console.log(`Rolling for ${char5selected.property("value")}`);
  var char5modText = char5mod.text();
  console.log(`${char5selected.property("value")} Roll: ${thisroll} + Mod: ${char5modText}`);
  char5initVal = parseInt(thisroll) + parseInt(char5modText);
  char5init.text(char5initVal);
  console.log(`${char5selected.property("value")} - Init: ${char5initVal}`); };

  // Character 6
  var char6selected = d3.select("#selChar6race");
  if (char6selected.property("value") == "Char6race") {
    console.log(`Character 6 is not selected for combat`);
  } 
  else {
  var thisroll = rolld20();
  console.log(`Rolling for ${char6selected.property("value")}`);
  var char6modText = char6mod.text();
  console.log(`${char6selected.property("value")} Roll: ${thisroll} + Mod: ${char6modText}`);
  char6initVal = parseInt(thisroll) + parseInt(char6modText);
  char6init.text(char6initVal);
  console.log(`${char6selected.property("value")} - Init: ${char6initVal}`); };

  // Character 7
  var char7selected = d3.select("#selChar7race");
  if (char7selected.property("value") == "Char7race") {
    console.log(`Character 7 is not selected for combat`);
  } 
  else {
  var thisroll = rolld20();
  console.log(`Rolling for ${char7selected.property("value")}`);
  var char7modText = char7mod.text();
  console.log(`${char7selected.property("value")} Roll: ${thisroll} + Mod: ${char7modText}`);
  char7initVal = parseInt(thisroll) + parseInt(char7modText);
  char7init.text(char7initVal);
  console.log(`${char7selected.property("value")} - Init: ${char7initVal}`); };

  // Character 8
  var char8selected = d3.select("#selChar8race");
  if (char8selected.property("value") == "Char8race") {
    console.log(`Character 8 is not selected for combat`);
  } 
  else {
  var thisroll = rolld20();
  console.log(`Rolling for ${char8selected.property("value")}`);
  var char8modText = char8mod.text();
  console.log(`${char8selected.property("value")} Roll: ${thisroll} + Mod: ${char8modText}`);
  char8initVal = parseInt(thisroll) + parseInt(char8modText);
  char8init.text(char8initVal);
  console.log(`${char8selected.property("value")} - Init: ${char8initVal}`); };

  // Monster 1
  var mons1selected = d3.select("#selMons1race");
  if (mons1selected.property("value") == "Mons1race") {
    console.log(`Monster 1 is not selected for combat`);
  } 
  else {
  var thisroll = rolld20();
  console.log(`Rolling for ${mons1selected.property("value")}`);
  var mons1modText = mons1mod.text();
  console.log(`${mons1selected.property("value")} Roll: ${thisroll} + Mod: ${mons1modText}`);
  mons1initVal = parseInt(thisroll) + parseInt(mons1modText);
  mons1init.text(mons1initVal);
  console.log(`${mons1selected.property("value")} - Init: ${mons1initVal}`); };

  // Monster 2
  var mons2selected = d3.select("#selMons2race");
  if (mons2selected.property("value") == "Mons2race") {
    console.log(`Monster 2 is not selected for combat`);
  } 
  else {
  var thisroll = rolld20();
  console.log(`Rolling for ${mons2selected.property("value")}`);
  var mons2modText = mons2mod.text();
  console.log(`${mons2selected.property("value")} Roll: ${thisroll} + Mod: ${mons2modText}`);
  mons2initVal = parseInt(thisroll) + parseInt(mons2modText);
  mons2init.text(mons2initVal);
  console.log(`${mons2selected.property("value")} - Init: ${mons2initVal}`); };

  // Monster 3
  var mons3selected = d3.select("#selMons3race");
  if (mons3selected.property("value") == "Mons3race") {
    console.log(`Monster 3 is not selected for combat`);
  } 
  else {
  var thisroll = rolld20();
  console.log(`Rolling for ${mons3selected.property("value")}`);
  var mons3modText = mons3mod.text();
  console.log(`${mons3selected.property("value")} Roll: ${thisroll} + Mod: ${mons3modText}`);
  mons3initVal = parseInt(thisroll) + parseInt(mons3modText);
  mons3init.text(mons3initVal);
  console.log(`${mons3selected.property("value")} - Init: ${mons3initVal}`); };

  // Monster 4
  var mons4selected = d3.select("#selMons4race");
  if (mons4selected.property("value") == "Mons4race") {
    console.log(`Monster 4 is not selected for combat`);
  } 
  else {
  var thisroll = rolld20();
  console.log(`Rolling for ${mons4selected.property("value")}`);
  var mons4modText = mons4mod.text();
  console.log(`${mons4selected.property("value")} Roll: ${thisroll} + Mod: ${mons4modText}`);
  mons4initVal = parseInt(thisroll) + parseInt(mons4modText);
  mons4init.text(mons4initVal);
  console.log(`${mons4selected.property("value")} - Init: ${mons4initVal}`); };

  // Monster 5
  var mons5selected = d3.select("#selMons5race");
  if (mons5selected.property("value") == "Mons5race") {
    console.log(`Monster 5 is not selected for combat`);
  } 
  else {
  var thisroll = rolld20();
  console.log(`Rolling for ${mons5selected.property("value")}`);
  var mons5modText = mons5mod.text();
  console.log(`${mons5selected.property("value")} Roll: ${thisroll} + Mod: ${mons5modText}`);
  mons5initVal = parseInt(thisroll) + parseInt(mons5modText);
  mons5init.text(mons5initVal);
  console.log(`${mons5selected.property("value")} - Init: ${mons5initVal}`); };

  // Monster 6
  var mons6selected = d3.select("#selMons6race");
  if (mons6selected.property("value") == "Mons6race") {
    console.log(`Monster 6 is not selected for combat`);
  } 
  else {
  var thisroll = rolld20();
  console.log(`Rolling for ${mons6selected.property("value")}`);
  var mons6modText = mons6mod.text();
  console.log(`${mons6selected.property("value")} Roll: ${thisroll} + Mod: ${mons6modText}`);
  mons6initVal = parseInt(thisroll) + parseInt(mons6modText);
  mons6init.text(mons6initVal);
  console.log(`${mons6selected.property("value")} - Init: ${mons6initVal}`); };

  // Monster 7
  var mons7selected = d3.select("#selMons7race");
  if (mons7selected.property("value") == "Mons7race") {
    console.log(`Monster 7 is not selected for combat`);
  } 
  else {
  var thisroll = rolld20();
  console.log(`Rolling for ${mons7selected.property("value")}`);
  var mons7modText = mons7mod.text();
  console.log(`${mons7selected.property("value")} Roll: ${thisroll} + Mod: ${mons7modText}`);
  mons7initVal = parseInt(thisroll) + parseInt(mons7modText);
  mons7init.text(mons7initVal);
  console.log(`${mons7selected.property("value")} - Init: ${mons7initVal}`); };

  // Monster 8
  var mons8selected = d3.select("#selMons8race");
  if (mons8selected.property("value") == "Mons8race") {
    console.log(`Monster 8 is not selected for combat`);
  } 
  else {
  var thisroll = rolld20();
  console.log(`Rolling for ${mons8selected.property("value")}`);
  var mons8modText = mons8mod.text();
  console.log(`${mons8selected.property("value")} Roll: ${thisroll} + Mod: ${mons8modText}`);
  mons8initVal = parseInt(thisroll) + parseInt(mons8modText);
  mons8init.text(mons8initVal);
  console.log(`${mons8selected.property("value")} - Init: ${mons8initVal}`); };
  

});




// Character 1

var char1up = d3.select(".char1up");
var char1down = d3.select(".char1down");

var char1mod = d3.select(".char1mod");
var char1init = d3.select(".char1init");

var char1modsubmit = d3.select(".char1modsubmit");
var char1initMod = d3.select("#char1initMod");
var char1modInput = d3.select("#char1modInput");

var char1rollsubmit = d3.select(".char1rollsubmit");
var char1initRoll = d3.select("#char1initRoll");
var char1initInput = d3.select("#char1initInput");

var char1submit = d3.select(".char1submit");
var char1name = d3.select("#char1name");
var char1nameInput = d3.select("#char1nameInput");





char1submit.on("click", function() {
  d3.event.preventDefault();
  var char1nameText = char1name.property("value");
  // d3.select("label").text(char1nameText);
  if (char1nameText == "") char1nameText = "Character 1";
  console.log(`Character 1 - Name: ${char1nameText}`);
});


char1modsubmit.on("click", function() {
  d3.event.preventDefault();
  var char1modText = char1initMod.property("value");
  if (char1modText == "") char1modText = "0";
  char1mod.text(char1modText);
  char1initMod.text(char1modText);
  console.log(`Character 1 - Mod: ${char1modText}`);
});



char1rollsubmit.on("click", function() {
  d3.event.preventDefault();
  var char1rollText = char1initRoll.property("value");
  if (char1rollText == "") char1rollText = "0";
  var char1modText = char1mod.text();
  if (char1modText == "") char1modText = "0";
  console.log(`Character 1 - Roll: ${char1rollText} + Mod: ${char1modText}`);
  char1initVal = parseInt(char1rollText) + parseInt(char1modText);
  char1init.text(char1initVal);
    
  console.log(`Character 1 - Init: ${char1initVal}`);
});

 // Use D3 `.on` to attach a click handler for the up  
 char1up.on("click", function() {
  // Select the current count
  var currentCount = parseInt(char1mod.text());

  // Up  s should increment the counter
  currentCount += 1;
  
  // Set the counter h1 text to the new count
  char1mod.text(currentCount);
  char1initMod.text(currentCount);
  //   Save the    data
  data.push(["up  ", currentCount]);
  console.log(`Character 1 - Mod: ${currentCount}`);
});

// Use d3 `.on` to attach a click handler for the down  
char1down.on("click", function() {
  // Select the current count
  var currentCount = parseInt(char1mod.text());

  // Down  s should decrement the counter
  currentCount -= 1;

  // Set the counter h1 text to the new count
  char1mod.text(currentCount);
  char1initMod.text(currentCount);
  //   Save the    data
  data.push(["up  ", currentCount]);
  console.log(`Character 1 - Mod: ${currentCount}`);
});

// Character 2

var char2up = d3.select(".char2up");
var char2down = d3.select(".char2down");

var char2mod = d3.select(".char2mod");
var char2init = d3.select(".char2init");

var char2modsubmit = d3.select(".char2modsubmit");
var char2initMod = d3.select("#char2initMod");
var char2modInput = d3.select("#char2modInput");

var char2rollsubmit = d3.select(".char2rollsubmit");
var char2initRoll = d3.select("#char2initRoll");
var char2initInput = d3.select("#char2initInput");

var char2submit = d3.select(".char2submit");
var char2name = d3.select("#char2name");
var char2nameInput = d3.select("#char2nameInput");



char2submit.on("click", function() {
  d3.event.preventDefault();
  var char2nameText = char2name.property("value");
  // d3.select("label").text(char1nameText);
  if (char2nameText == "") char2nameText = "Character 2";
  console.log(`Character 2 - Name: ${char2nameText}`);
});


char2modsubmit.on("click", function() {
  d3.event.preventDefault();
  var char2modText = char2initMod.property("value");
  if (char2modText == "") char2modText = "0";
  char2mod.text(char2modText);
  char2initMod.text(char2modText);
  console.log(`Character 2 - Mod: ${char2modText}`);
});



char2rollsubmit.on("click", function() {
  d3.event.preventDefault();
  var char2rollText = char2initRoll.property("value");
  if (char2rollText == "") char2rollText = "0";
  var char2modText = char2mod.text();
  if (char2modText == "") char2modText = "0";
  console.log(`Character 2 - Roll: ${char2rollText} + Mod: ${char2modText}`);
  char2initVal = parseInt(char2rollText) + parseInt(char2modText);
  char2init.text(char2initVal);
    
  console.log(`Character 2 - Init: ${char2initVal}`);
});

 // Use D3 `.on` to attach a click handler for the up  
 char2up.on("click", function() {
  // Select the current count
  var currentCount = parseInt(char2mod.text());

  // Up  s should increment the counter
  currentCount += 1;
  
  // Set the counter h1 text to the new count
  char2mod.text(currentCount);
  char2initMod.text(currentCount);
  //   Save the    data
  data.push(["up  ", currentCount]);
  console.log(`Character 2 - Mod: ${currentCount}`);
});

// Use d3 `.on` to attach a click handler for the down  
char2down.on("click", function() {
  // Select the current count
  var currentCount = parseInt(char2mod.text());

  // Down  s should decrement the counter
  currentCount -= 1;

  // Set the counter h1 text to the new count
  char2mod.text(currentCount);
  char2initMod.text(currentCount);
  //   Save the    data
  data.push(["up  ", currentCount]);
  console.log(`Character 2 - Mod: ${currentCount}`);
});

// Character 3

var char3up = d3.select(".char3up");
var char3down = d3.select(".char3down");

var char3mod = d3.select(".char3mod");
var char3init = d3.select(".char3init");

var char3modsubmit = d3.select(".char3modsubmit");
var char3initMod = d3.select("#char3initMod");
var char3modInput = d3.select("#char3modInput");

var char3rollsubmit = d3.select(".char3rollsubmit");
var char3initRoll = d3.select("#char3initRoll");
var char3initInput = d3.select("#char3initInput");

var char3submit = d3.select(".char3submit");
var char3name = d3.select("#char3name");
var char3nameInput = d3.select("#char3nameInput");



char3submit.on("click", function() {
  d3.event.preventDefault();
  var char3nameText = char3name.property("value");
  // d3.select("label").text(char1nameText);
  if (char3nameText == "") char3nameText = "Character 3";
  console.log(`Character 3 - Name: ${char3nameText}`);
});


char3modsubmit.on("click", function() {
  d3.event.preventDefault();
  var char3modText = char3initMod.property("value");
  if (char3modText == "") char3modText = "0";
  char3mod.text(char3modText);
  char3initMod.text(char3modText);
  console.log(`Character 3 - Mod: ${char3modText}`);
});



char3rollsubmit.on("click", function() {
  d3.event.preventDefault();
  var char3rollText = char3initRoll.property("value");
  if (char3rollText == "") char3rollText = "0";
  var char3modText = char3mod.text();
  if (char3modText == "") char3modText = "0";
  console.log(`Character 3 - Roll: ${char3rollText} + Mod: ${char3modText}`);
  char3initVal = parseInt(char3rollText) + parseInt(char3modText);
  char3init.text(char3initVal);
    
  console.log(`Character 3 - Init: ${char3initVal}`);
});

 // Use D3 `.on` to attach a click handler for the up  
 char3up.on("click", function() {
  // Select the current count
  var currentCount = parseInt(char3mod.text());

  // Up  s should increment the counter
  currentCount += 1;
  
  // Set the counter h1 text to the new count
  char3mod.text(currentCount);
  char3initMod.text(currentCount);
  //   Save the    data
  data.push(["up  ", currentCount]);
  console.log(`Character 3 - Mod: ${currentCount}`);
});

// Use d3 `.on` to attach a click handler for the down  
char3down.on("click", function() {
  // Select the current count
  var currentCount = parseInt(char3mod.text());

  // Down  s should decrement the counter
  currentCount -= 1;

  // Set the counter h1 text to the new count
  char3mod.text(currentCount);
  char3initMod.text(currentCount);
  //   Save the    data
  data.push(["up  ", currentCount]);
  console.log(`Character 3 - Mod: ${currentCount}`);
});

// Character 4

var char4up = d3.select(".char4up");
var char4down = d3.select(".char4down");

var char4mod = d3.select(".char4mod");
var char4init = d3.select(".char4init");

var char4modsubmit = d3.select(".char4modsubmit");
var char4initMod = d3.select("#char4initMod");
var char4modInput = d3.select("#char4modInput");

var char4rollsubmit = d3.select(".char4rollsubmit");
var char4initRoll = d3.select("#char4initRoll");
var char4initInput = d3.select("#char4initInput");

var char4submit = d3.select(".char4submit");
var char4name = d3.select("#char4name");
var char4nameInput = d3.select("#char4nameInput");



char4submit.on("click", function() {
  d3.event.preventDefault();
  var char4nameText = char4name.property("value");
  // d3.select("label").text(char1nameText);
  if (char4nameText == "") char4nameText = "Character 4";
  console.log(`Character 4 - Name: ${char4nameText}`);
});


char4modsubmit.on("click", function() {
  d3.event.preventDefault();
  var char4modText = char4initMod.property("value");
  if (char4modText == "") char4modText = "0";
  char4mod.text(char4modText);
  char4initMod.text(char4modText);
  console.log(`Character 4 - Mod: ${char4modText}`);
});



char4rollsubmit.on("click", function() {
  d3.event.preventDefault();
  var char4rollText = char4initRoll.property("value");
  if (char4rollText == "") char4rollText = "0";
  var char4modText = char4mod.text();
  if (char4modText == "") char4modText = "0";
  console.log(`Character 4 - Roll: ${char4rollText} + Mod: ${char4modText}`);
  char4initVal = parseInt(char4rollText) + parseInt(char4modText);
  char4init.text(char4initVal);
    
  console.log(`Character 4 - Init: ${char4initVal}`);
});

 // Use D3 `.on` to attach a click handler for the up  
 char4up.on("click", function() {
  // Select the current count
  var currentCount = parseInt(char4mod.text());

  // Up  s should increment the counter
  currentCount += 1;
  
  // Set the counter h1 text to the new count
  char4mod.text(currentCount);
  char4initMod.text(currentCount);
  //   Save the    data
  data.push(["up  ", currentCount]);
  console.log(`Character 4 - Mod: ${currentCount}`);
});

// Use d3 `.on` to attach a click handler for the down  
char4down.on("click", function() {
  // Select the current count
  var currentCount = parseInt(char4mod.text());

  // Down  s should decrement the counter
  currentCount -= 1;

  // Set the counter h1 text to the new count
  char4mod.text(currentCount);
  char4initMod.text(currentCount);
  //   Save the    data
  data.push(["up  ", currentCount]);
  console.log(`Character 4 - Mod: ${currentCount}`);
});

// Character 5

var char5up = d3.select(".char5up");
var char5down = d3.select(".char5down");

var char5mod = d3.select(".char5mod");
var char5init = d3.select(".char5init");

var char5modsubmit = d3.select(".char5modsubmit");
var char5initMod = d3.select("#char5initMod");
var char5modInput = d3.select("#char5modInput");

var char5rollsubmit = d3.select(".char5rollsubmit");
var char5initRoll = d3.select("#char5initRoll");
var char5initInput = d3.select("#char5initInput");

var char5submit = d3.select(".char5submit");
var char5name = d3.select("#char5name");
var char5nameInput = d3.select("#char5nameInput");



char5submit.on("click", function() {
  d3.event.preventDefault();
  var char5nameText = char5name.property("value");
  // d3.select("label").text(char1nameText);
  if (char5nameText == "") char5nameText = "Character 5";
  console.log(`Character 5 - Name: ${char5nameText}`);
});


char5modsubmit.on("click", function() {
  d3.event.preventDefault();
  var char5modText = char5initMod.property("value");
  if (char5modText == "") char5modText = "0";
  char5mod.text(char5modText);
  char5initMod.text(char5modText);
  console.log(`Character 5 - Mod: ${char5modText}`);
});



char5rollsubmit.on("click", function() {
  d3.event.preventDefault();
  var char5rollText = char5initRoll.property("value");
  if (char5rollText == "") char5rollText = "0";
  var char5modText = char5mod.text();
  if (char5modText == "") char5modText = "0";
  console.log(`Character 5 - Roll: ${char5rollText} + Mod: ${char5modText}`);
  char5initVal = parseInt(char5rollText) + parseInt(char5modText);
  char5init.text(char5initVal);
    
  console.log(`Character 5 - Init: ${char1initVal}`);
});

 // Use D3 `.on` to attach a click handler for the up  
 char5up.on("click", function() {
  // Select the current count
  var currentCount = parseInt(char5mod.text());

  // Up  s should increment the counter
  currentCount += 1;
  
  // Set the counter h1 text to the new count
  char5mod.text(currentCount);
  char5initMod.text(currentCount);
  //   Save the    data
  data.push(["up  ", currentCount]);
  console.log(`Character 5 - Mod: ${currentCount}`);
});

// Use d3 `.on` to attach a click handler for the down  
char5down.on("click", function() {
  // Select the current count
  var currentCount = parseInt(char5mod.text());

  // Down  s should decrement the counter
  currentCount -= 1;

  // Set the counter h1 text to the new count
  char5mod.text(currentCount);
  char5initMod.text(currentCount);
  //   Save the    data
  data.push(["up  ", currentCount]);
  console.log(`Character 5 - Mod: ${currentCount}`);
});

// Character 6

var char6up = d3.select(".char6up");
var char6down = d3.select(".char6down");

var char6mod = d3.select(".char6mod");
var char6init = d3.select(".char6init");

var char6modsubmit = d3.select(".char6modsubmit");
var char6initMod = d3.select("#char6initMod");
var char6modInput = d3.select("#char6modInput");

var char6rollsubmit = d3.select(".char6rollsubmit");
var char6initRoll = d3.select("#char6initRoll");
var char6initInput = d3.select("#char6initInput");

var char6submit = d3.select(".char6submit");
var char6name = d3.select("#char6name");
var char6nameInput = d3.select("#char6nameInput");



char6submit.on("click", function() {
  d3.event.preventDefault();
  var char6nameText = char6name.property("value");
  // d3.select("label").text(char1nameText);
  if (char6nameText == "") char6nameText = "Character 6";
  console.log(`Character 6 - Name: ${char6nameText}`);
});


char6modsubmit.on("click", function() {
  d3.event.preventDefault();
  var char6modText = char6initMod.property("value");
  if (char6modText == "") char6modText = "0";
  char6mod.text(char6modText);
  char6initMod.text(char6modText);
  console.log(`Character 6 - Mod: ${char6modText}`);
});



char6rollsubmit.on("click", function() {
  d3.event.preventDefault();
  var char6rollText = char6initRoll.property("value");
  if (char6rollText == "") char6rollText = "0";
  var char6modText = char6mod.text();
  if (char6modText == "") char6modText = "0";
  console.log(`Character 6 - Roll: ${char6rollText} + Mod: ${char6modText}`);
  char6initVal = parseInt(char6rollText) + parseInt(char6modText);
  char6init.text(char6initVal);
    
  console.log(`Character 6 - Init: ${char2initVal}`);
});

 // Use D3 `.on` to attach a click handler for the up  
 char6up.on("click", function() {
  // Select the current count
  var currentCount = parseInt(char6mod.text());

  // Up  s should increment the counter
  currentCount += 1;
  
  // Set the counter h1 text to the new count
  char6mod.text(currentCount);
  char6initMod.text(currentCount);
  //   Save the    data
  data.push(["up  ", currentCount]);
  console.log(`Character 6 - Mod: ${currentCount}`);
});

// Use d3 `.on` to attach a click handler for the down  
char6down.on("click", function() {
  // Select the current count
  var currentCount = parseInt(char6mod.text());

  // Down  s should decrement the counter
  currentCount -= 1;

  // Set the counter h1 text to the new count
  char6mod.text(currentCount);
  char6initMod.text(currentCount);
  //   Save the    data
  data.push(["up  ", currentCount]);
  console.log(`Character 6 - Mod: ${currentCount}`);
});

// Character 7

var char7up = d3.select(".char7up");
var char7down = d3.select(".char7down");

var char7mod = d3.select(".char7mod");
var char7init = d3.select(".char7init");

var char7modsubmit = d3.select(".char7modsubmit");
var char7initMod = d3.select("#char7initMod");
var char7modInput = d3.select("#char7modInput");

var char7rollsubmit = d3.select(".char7rollsubmit");
var char7initRoll = d3.select("#char7initRoll");
var char7initInput = d3.select("#char7initInput");

var char7submit = d3.select(".char7submit");
var char7name = d3.select("#char7name");
var char7nameInput = d3.select("#char7nameInput");



char7submit.on("click", function() {
  d3.event.preventDefault();
  var char7nameText = char7name.property("value");
  // d3.select("label").text(char1nameText);
  if (char7nameText == "") char7nameText = "Character 7";
  console.log(`Character 7 - Name: ${char7nameText}`);
});


char7modsubmit.on("click", function() {
  d3.event.preventDefault();
  var char7modText = char7initMod.property("value");
  if (char7modText == "") char7modText = "0";
  char7mod.text(char7modText);
  char7initMod.text(char7modText);
  console.log(`Character 7 - Mod: ${char7modText}`);
});



char7rollsubmit.on("click", function() {
  d3.event.preventDefault();
  var char7rollText = char7initRoll.property("value");
  if (char7rollText == "") char7rollText = "0";
  var char7modText = char7mod.text();
  if (char7modText == "") char7modText = "0";
  console.log(`Character 7 - Roll: ${char7rollText} + Mod: ${char7modText}`);
  char7initVal = parseInt(char7rollText) + parseInt(char7modText);
  char7init.text(char7initVal);
    
  console.log(`Character 7 - Init: ${char1initVal}`);
});


 char7up.on("click", function() {
  // Select the current count
  var currentCount = parseInt(char7mod.text());

  // increment the counter
  currentCount += 1;
  
  // Set the counter h1 text to the new count
  char7mod.text(currentCount);
  char7initMod.text(currentCount);
  // Save the data
  data.push(["up  ", currentCount]);
  console.log(`Character 7 - Mod: ${currentCount}`);
});

// Use d3 `.on` to attach a click handler
char7down.on("click", function() {
  // Select the current count
  var currentCount = parseInt(char7mod.text());

  // decrement the counter
  currentCount -= 1;

  // Set the counter h1 text to the new count
  char7mod.text(currentCount);
  char7initMod.text(currentCount);
  // Save the data
  data.push(["up  ", currentCount]);
  console.log(`Character 7 - Mod: ${currentCount}`);
});

// Character 8

var char8up = d3.select(".char8up");
var char8down = d3.select(".char8down");

var char8mod = d3.select(".char8mod");
var char8init = d3.select(".char8init");

var char8modsubmit = d3.select(".char8modsubmit");
var char8initMod = d3.select("#char8initMod");
var char8modInput = d3.select("#char8modInput");

var char8rollsubmit = d3.select(".char8rollsubmit");
var char8initRoll = d3.select("#char8initRoll");
var char8initInput = d3.select("#char8initInput");

var char8submit = d3.select(".char8submit");
var char8name = d3.select("#char8name");
var char8nameInput = d3.select("#char8nameInput");



char8submit.on("click", function() {
  d3.event.preventDefault();
  var char8nameText = char8name.property("value");
  // d3.select("label").text(char1nameText);
  if (char8nameText == "") char8nameText = "Character 8";
  console.log(`Character 8 - Name: ${char8nameText}`);
});


char8modsubmit.on("click", function() {
  d3.event.preventDefault();
  var char8modText = char8initMod.property("value");
  if (char8modText == "") char8modText = "0";
  char8mod.text(char8modText);
  char8initMod.text(char8modText);
  console.log(`Character 8 - Mod: ${char8modText}`);
});



char8rollsubmit.on("click", function() {
  d3.event.preventDefault();
  var char8rollText = char8initRoll.property("value");
  if (char8rollText == "") char8rollText = "0";
  var char8modText = char8mod.text();
  if (char8modText == "") char8modText = "0";
  console.log(`Character 8 - Roll: ${char8rollText} + Mod: ${char8modText}`);
  char8initVal = parseInt(char8rollText) + parseInt(char8modText);
  char8init.text(char8initVal);
    
  console.log(`Character 8 - Init: ${char8initVal}`);
});

 // Use D3 `.on` to attach a click handler 
 char8up.on("click", function() {
  // Select the current count
  var currentCount = parseInt(char8mod.text());

  // increment the counter
  currentCount += 1;
  
  // Set the counter h1 text to the new count
  char8mod.text(currentCount);
  char8initMod.text(currentCount);
  // Save the data
  data.push(["up  ", currentCount]);
  console.log(`Character 8 - Mod: ${currentCount}`);
});

// Use d3 `.on` to attach a click handler 
char8down.on("click", function() {
  // Select the current count
  var currentCount = parseInt(char8mod.text());

  // decrement the counter
  currentCount -= 1;

  // Set the counter h1 text to the new count
  char8mod.text(currentCount);
  char8initMod.text(currentCount);
  // Save the data
  data.push(["up  ", currentCount]);
  console.log(`Character 8 - Mod: ${currentCount}`);
});

// Monster 1

var mons1up = d3.select(".mons1up");
var mons1down = d3.select(".mons1down");
var mons1mod = d3.select(".mons1mod");
var mons1init = d3.select(".mons1init")
var monster1text = d3.select("#mons1text");

var mons1modsubmit = d3.select(".mons1modsubmit");
var mons1initMod = d3.select("#mons1initMod");
var mons1modInput = d3.select("#mons1modInput");

var mons1rollsubmit = d3.select(".mons1rollsubmit");
var mons1initRoll = d3.select("#mons1initRoll");
var mons1initInput = d3.select("#mons1initInput");

var mons1submit = d3.select(".mons1submit");
var mons1name = d3.select("#mons1name");
var mons1nameInput = d3.select("#mons1nameInput");



mons1submit.on("click", function() {
  d3.event.preventDefault();
  var mons1nameText = mons1name.property("value");
  // d3.select("label").text(char1nameText);
  if (mons1nameText == "") mons1nameText = "Monster 1";
  console.log(`Monster 1 - Name: ${mons1nameText}`);
});


mons1modsubmit.on("click", function() {
  d3.event.preventDefault();
  var mons1modText = mons1initMod.property("value");
  if (mons1modText == "") mons1modText = "0";
  mons1mod.text(mons1modText);
  mons1initMod.text(mons1modText);
  console.log(`Monster 1 - Mod: ${mons1modText}`);
});



mons1rollsubmit.on("click", function() {
  d3.event.preventDefault();
  var mons1rollText = mons1initRoll.property("value");
  if (mons1rollText == "") mons1rollText = "0";
  var mons1modText = mons1mod.text();
  if (mons1modText == "") mons1modText = "0";
  console.log(`Monster 1 - Roll: ${mons1rollText} + Mod: ${mons1modText}`);
  mons1initVal = parseInt(mons1rollText) + parseInt(mons1modText);
  mons1init.text(mons1initVal);
    
  console.log(`Monster 1 - Init: ${mons1initVal}`);
});


// Use D3 `.on` to attach a click handler
mons1up.on("click", function() {
  // Select the current count
  var currentCount = parseInt(mons1mod.text());

  //  increment the counter
  currentCount += 1;

  // Set the counter h1 text to the new count
  mons1mod.text(currentCount);

  // Save the  data
  data.push(["up  ", currentCount]);
});

// Use d3 `.on` to attach a click handler for the down  
mons1down.on("click", function() {
  // Select the current count
  var currentCount = parseInt(mons1mod.text());

  // decrement the counter
  currentCount -= 1;

  // Set the counter h1 text to the new count
  mons1mod.text(currentCount);

  //  Save the  data
  data.push(["up  ", currentCount]);
});

// Monster 2

var mons2up = d3.select(".mons2up");
var mons2down = d3.select(".mons2down");
var mons2mod = d3.select(".mons2mod");
var mons2init = d3.select(".mons2init")
var monster2text = d3.select("#mons2text");

var mons2modsubmit = d3.select(".mons2modsubmit");
var mons2initMod = d3.select("#mons2initMod");
var mons2modInput = d3.select("#mons2modInput");

var mons2rollsubmit = d3.select(".mons2rollsubmit");
var mons2initRoll = d3.select("#mons2initRoll");
var mons2initInput = d3.select("#mons2initInput");

var mons2submit = d3.select(".mons2submit");
var mons2name = d3.select("#mons2name");
var mons2nameInput = d3.select("#mons2nameInput");



mons2submit.on("click", function() {
  d3.event.preventDefault();
  var mons2nameText = mons2name.property("value");
  // d3.select("label").text(char1nameText);
  if (mons1nameText == "") mons1nameText = "Monster 2";
  console.log(`Monster 2 - Name: ${mons2nameText}`);
});


mons2modsubmit.on("click", function() {
  d3.event.preventDefault();
  var mons2modText = mons2initMod.property("value");
  if (mons2modText == "") mons2modText = "0";
  mons2mod.text(mons2modText);
  mons2initMod.text(mons2modText);
  console.log(`Monster 2 - Mod: ${mons2modText}`);
});



mons2rollsubmit.on("click", function() {
  d3.event.preventDefault();
  var mons2rollText = mons2initRoll.property("value");
  if (mons2rollText == "") mons2rollText = "0";
  var mons2modText = mons2mod.text();
  if (mons2modText == "") mons2modText = "0";
  console.log(`Monster 2 - Roll: ${mons2rollText} + Mod: ${mons2modText}`);
  mons2initVal = parseInt(mons2rollText) + parseInt(mons2modText);
  mons2init.text(mons2initVal);
    
  console.log(`Monster 2 - Init: ${mons2initVal}`);
});

// Use D3 `.on` to attach a click handler 
mons2up.on("click", function() {
  // Select the current count
  var currentCount = parseInt(mons2mod.text());

  // increment the counter
  currentCount += 1;

  // Set the counter h1 text to the new count
  mons2mod.text(currentCount);

  // Save the data
  data.push(["up  ", currentCount]);
});

// Use d3 `.on` to attach a click handler 
mons2down.on("click", function() {
  // Select the current count
  var currentCount = parseInt(mons2mod.text());

  //  decrement the counter
  currentCount -= 1;

  // Set the counter h1 text to the new count
  mons2mod.text(currentCount);

  //  Save the  data
  data.push(["up  ", currentCount]);
});

// Monster 3

var mons3up = d3.select(".mons3up");
var mons3down = d3.select(".mons3down");
var mons3mod = d3.select(".mons3mod");
var mons3init = d3.select(".mons3init")
var monster3text = d3.select("#mons3text");

var mons3modsubmit = d3.select(".mons3modsubmit");
var mons3initMod = d3.select("#mons3initMod");
var mons3modInput = d3.select("#mons3modInput");

var mons3rollsubmit = d3.select(".mons3rollsubmit");
var mons3initRoll = d3.select("#mons3initRoll");
var mons3initInput = d3.select("#mons3initInput");

var mons3submit = d3.select(".mons3submit");
var mons3name = d3.select("#mons3name");
var mons3nameInput = d3.select("#mons3nameInput");



mons3submit.on("click", function() {
  d3.event.preventDefault();
  var mons3nameText = mons3name.property("value");
  // d3.select("label").text(char1nameText);
  if (mons3nameText == "") mons3nameText = "Monster 3";
  console.log(`Monster 3 - Name: ${mons3nameText}`);
});


mons3modsubmit.on("click", function() {
  d3.event.preventDefault();
  var mons3modText = mons3initMod.property("value");
  if (mons3modText == "") mons3modText = "0";
  mons3mod.text(mons3modText);
  mons3initMod.text(mons3modText);
  console.log(`Monster 3 - Mod: ${mons3modText}`);
});



mons3rollsubmit.on("click", function() {
  d3.event.preventDefault();
  var mons3rollText = mons3initRoll.property("value");
  if (mons3rollText == "") mons3rollText = "0";
  var mons3modText = mons3mod.text();
  if (mons3modText == "") mons3modText = "0";
  console.log(`Monster 3 - Roll: ${mons3rollText} + Mod: ${mons3modText}`);
  mons3initVal = parseInt(mons3rollText) + parseInt(mons3modText);
  mons3init.text(mons3initVal);
    
  console.log(`Monster 3 - Init: ${mons3initVal}`);
});

// Use D3 `.on` to attach a click handler for the up  
mons3up.on("click", function() {
  // Select the current count
  var currentCount = parseInt(mons3mod.text());

  // Up  s should increment the counter
  currentCount += 1;

  // Set the counter h1 text to the new count
  mons3mod.text(currentCount);

  //   Save the    data
  data.push(["up  ", currentCount]);
});

// Use d3 `.on` to attach a click handler for the down  
mons3down.on("click", function() {
  // Select the current count
  var currentCount = parseInt(mons3mod.text());

  // Down  s should decrement the counter
  currentCount -= 1;

  // Set the counter h1 text to the new count
  mons3mod.text(currentCount);

  //   Save the    data
  data.push(["up  ", currentCount]);
});

// Monster 4

var mons4up = d3.select(".mons4up");
var mons4down = d3.select(".mons4down");
var mons4mod = d3.select(".mons4mod");
var mons4init = d3.select(".mons4init")
var monster4text = d3.select("#mons4text");

var mons4modsubmit = d3.select(".mons4modsubmit");
var mons4initMod = d3.select("#mons4initMod");
var mons4modInput = d3.select("#mons4modInput");

var mons4rollsubmit = d3.select(".mons4rollsubmit");
var mons4initRoll = d3.select("#mons4initRoll");
var mons4initInput = d3.select("#mons4initInput");

var mons4submit = d3.select(".mons4submit");
var mons4name = d3.select("#mons4name");
var mons4nameInput = d3.select("#mons4nameInput");



mons4submit.on("click", function() {
  d3.event.preventDefault();
  var mons4nameText = mons4name.property("value");
  // d3.select("label").text(char1nameText);
  if (mons4nameText == "") mons4nameText = "Monster 4";
  console.log(`Monster 4 - Name: ${mons4nameText}`);
});


mons4modsubmit.on("click", function() {
  d3.event.preventDefault();
  var mons4modText = mons4initMod.property("value");
  if (mons4modText == "") mons4modText = "0";
  mons4mod.text(mons4modText);
  mons4initMod.text(mons4modText);
  console.log(`Monster 4 - Mod: ${mons4modText}`);
});



mons4rollsubmit.on("click", function() {
  d3.event.preventDefault();
  var mons4rollText = mons4initRoll.property("value");
  if (mons4rollText == "") mons4rollText = "0";
  var mons4modText = mons4mod.text();
  if (mons4modText == "") mons4modText = "0";
  console.log(`Monster 4 - Roll: ${mons4rollText} + Mod: ${mons4modText}`);
  mons4initVal = parseInt(mons4rollText) + parseInt(mons4modText);
  mons4init.text(mons4initVal);
    
  console.log(`Monster 1 - Init: ${mons1initVal}`);
});

// Use D3 `.on` to attach a click handler for the up  
mons4up.on("click", function() {
  // Select the current count
  var currentCount = parseInt(mons4mod.text());

  // Up  s should increment the counter
  currentCount += 1;

  // Set the counter h1 text to the new count
  mons4mod.text(currentCount);

  //   Save the    data
  data.push(["up  ", currentCount]);
});

// Use d3 `.on` to attach a click handler for the down  
mons4down.on("click", function() {
  // Select the current count
  var currentCount = parseInt(mons4mod.text());

  // Down  s should decrement the counter
  currentCount -= 1;

  // Set the counter h1 text to the new count
  mons4mod.text(currentCount);

  //   Save the    data
  data.push(["up  ", currentCount]);
});

// Monster 5

var mons5up = d3.select(".mons5up");
var mons5down = d3.select(".mons5down");
var mons5mod = d3.select(".mons5mod");
var mons5init = d3.select(".mons5init")
var monster5text = d3.select("#mons5text");

var mons5modsubmit = d3.select(".mons5modsubmit");
var mons5initMod = d3.select("#mons5initMod");
var mons5modInput = d3.select("#mons5modInput");

var mons5rollsubmit = d3.select(".mons5rollsubmit");
var mons5initRoll = d3.select("#mons5initRoll");
var mons5initInput = d3.select("#mons5initInput");

var mons5submit = d3.select(".mons5submit");
var mons5name = d3.select("#mons5name");
var mons5nameInput = d3.select("#mons5nameInput");



mons5submit.on("click", function() {
  d3.event.preventDefault();
  var mons5nameText = mons5name.property("value");
  // d3.select("label").text(char1nameText);
  if (mons5nameText == "") mons5nameText = "Monster 5";
  console.log(`Monster 5 - Name: ${mons5nameText}`);
});


mons5modsubmit.on("click", function() {
  d3.event.preventDefault();
  var mons5modText = mons5initMod.property("value");
  if (mons5modText == "") mons5modText = "0";
  mons5mod.text(mons5modText);
  mons5initMod.text(mons5modText);
  console.log(`Monster 5 - Mod: ${mons5modText}`);
});



mons5rollsubmit.on("click", function() {
  d3.event.preventDefault();
  var mons5rollText = mons5initRoll.property("value");
  if (mons5rollText == "") mons5rollText = "0";
  var mons5modText = mons5mod.text();
  if (mons5modText == "") mons5modText = "0";
  console.log(`Monster 5 - Roll: ${mons5rollText} + Mod: ${mons5modText}`);
  mons5initVal = parseInt(mons5rollText) + parseInt(mons5modText);
  mons5init.text(mons5initVal);
    
  console.log(`Monster 5 - Init: ${mons1initVal}`);
});

// Use D3 `.on` to attach a click handler for the up  
mons5up.on("click", function() {
  // Select the current count
  var currentCount = parseInt(mons5mod.text());

  // Up  s should increment the counter
  currentCount += 1;

  // Set the counter h1 text to the new count
  mons5mod.text(currentCount);

  //   Save the    data
  data.push(["up  ", currentCount]);
});

// Use d3 `.on` to attach a click handler for the down  
mons5down.on("click", function() {
  // Select the current count
  var currentCount = parseInt(mons5mod.text());

  // Down  s should decrement the counter
  currentCount -= 1;

  // Set the counter h1 text to the new count
  mons5mod.text(currentCount);

  //   Save the    data
  data.push(["up  ", currentCount]);
});

// Monster 6

var mons6up = d3.select(".mons6up");
var mons6down = d3.select(".mons6down");
var mons6mod = d3.select(".mons6mod");
var mons6init = d3.select(".mons6init")
var monster6text = d3.select("#mons6text");

var mons6modsubmit = d3.select(".mons6modsubmit");
var mons6initMod = d3.select("#mons6initMod");
var mons6modInput = d3.select("#mons6modInput");

var mons6rollsubmit = d3.select(".mons6rollsubmit");
var mons6initRoll = d3.select("#mons6initRoll");
var mons6initInput = d3.select("#mons6initInput");

var mons6submit = d3.select(".mons6submit");
var mons6name = d3.select("#mons6name");
var mons6nameInput = d3.select("#mons6nameInput");



mons6submit.on("click", function() {
  d3.event.preventDefault();
  var mons6nameText = mons6name.property("value");
  // d3.select("label").text(char1nameText);
  if (mons6nameText == "") mons6nameText = "Monster 6";
  console.log(`Monster 6 - Name: ${mons6nameText}`);
});


mons6modsubmit.on("click", function() {
  d3.event.preventDefault();
  var mons6modText = mons6initMod.property("value");
  if (mons6modText == "") mons6modText = "0";
  mons6mod.text(mons6modText);
  mons6initMod.text(mons6modText);
  console.log(`Monster 6 - Mod: ${mons6modText}`);
});



mons6rollsubmit.on("click", function() {
  d3.event.preventDefault();
  var mons6rollText = mons6initRoll.property("value");
  if (mons6rollText == "") mons6rollText = "0";
  var mons6modText = mons6mod.text();
  if (mons6modText == "") mons6modText = "0";
  console.log(`Monster 6 - Roll: ${mons6rollText} + Mod: ${mons6modText}`);
  mons6initVal = parseInt(mons6rollText) + parseInt(mons6modText);
  mons6init.text(mons6initVal);
    
  console.log(`Monster 6 - Init: ${mons6initVal}`);
});

// Use D3 `.on` to attach a click handler for the up  
mons6up.on("click", function() {
  // Select the current count
  var currentCount = parseInt(mons6mod.text());

  // Up  s should increment the counter
  currentCount += 1;

  // Set the counter h1 text to the new count
  mons6mod.text(currentCount);

  //   Save the    data
  data.push(["up  ", currentCount]);
});

// Use d3 `.on` to attach a click handler for the down  
mons6down.on("click", function() {
  // Select the current count
  var currentCount = parseInt(mons6mod.text());

  // Down  s should decrement the counter
  currentCount -= 1;

  // Set the counter h1 text to the new count
  mons6mod.text(currentCount);

  //   Save the    data
  data.push(["up  ", currentCount]);
});

// Monster 7

var mons7up = d3.select(".mons7up");
var mons7down = d3.select(".mons7down");
var mons7mod = d3.select(".mons7mod");
var mons7init = d3.select(".mons7init")
var monster7text = d3.select("#mons7text");

var mons7modsubmit = d3.select(".mons7modsubmit");
var mons7initMod = d3.select("#mons7initMod");
var mons7modInput = d3.select("#mons7modInput");

var mons7rollsubmit = d3.select(".mons7rollsubmit");
var mons7initRoll = d3.select("#mons7initRoll");
var mons7initInput = d3.select("#mons7initInput");

var mons7submit = d3.select(".mons7submit");
var mons7name = d3.select("#mons7name");
var mons7nameInput = d3.select("#mons7nameInput");



mons7submit.on("click", function() {
  d3.event.preventDefault();
  var mons7nameText = mons7name.property("value");
  // d3.select("label").text(char1nameText);
  if (mons7nameText == "") mons7nameText = "Monster 7";
  console.log(`Monster 7 - Name: ${mons7nameText}`);
});


mons7modsubmit.on("click", function() {
  d3.event.preventDefault();
  var mons7modText = mons7initMod.property("value");
  if (mons7modText == "") mons7modText = "0";
  mons7mod.text(mons7modText);
  mons7initMod.text(mons7modText);
  console.log(`Monster 7 - Mod: ${mons7modText}`);
});



mons7rollsubmit.on("click", function() {
  d3.event.preventDefault();
  var mons7rollText = mons7initRoll.property("value");
  if (mons7rollText == "") mons7rollText = "0";
  var mons7modText = mons7mod.text();
  if (mons7modText == "") mons7modText = "0";
  console.log(`Monster 7 - Roll: ${mons7rollText} + Mod: ${mons7modText}`);
  mons7initVal = parseInt(mons7rollText) + parseInt(mons7modText);
  mons7init.text(mons7initVal);
    
  console.log(`Monster 7 - Init: ${mons1initVal}`);
});

// Use D3 `.on` to attach a click handler for the up  
mons7up.on("click", function() {
  // Select the current count
  var currentCount = parseInt(mons7mod.text());

  // Up  s should increment the counter
  currentCount += 1;

  // Set the counter h1 text to the new count
  mons7mod.text(currentCount);

  //   Save the    data
  data.push(["up  ", currentCount]);
});

// Use d3 `.on` to attach a click handler for the down  
mons7down.on("click", function() {
  // Select the current count
  var currentCount = parseInt(mons7mod.text());

  // Down  s should decrement the counter
  currentCount -= 1;

  // Set the counter h1 text to the new count
  mons7mod.text(currentCount);

  //   Save the    data
  data.push(["up  ", currentCount]);
});

// Monster 8

var mons8up = d3.select(".mons8up");
var mons8down = d3.select(".mons8down");
var mons8mod = d3.select(".mons8mod");
var mons8init = d3.select(".mons8init")
var monster8text = d3.select("#mons8text");

var mons8modsubmit = d3.select(".mons8modsubmit");
var mons8initMod = d3.select("#mons8initMod");
var mons8modInput = d3.select("#mons8modInput");

var mons8rollsubmit = d3.select(".mons8rollsubmit");
var mons8initRoll = d3.select("#mons8initRoll");
var mons8initInput = d3.select("#mons8initInput");

var mons8submit = d3.select(".mons8submit");
var mons8name = d3.select("#mons8name");
var mons8nameInput = d3.select("#mons8nameInput");



mons8submit.on("click", function() {
  d3.event.preventDefault();
  var mons8nameText = mons8name.property("value");
  // d3.select("label").text(char1nameText);
  if (mons8nameText == "") mons8nameText = "Monster 8";
  console.log(`Monster 8 - Name: ${mons8nameText}`);
});


mons8modsubmit.on("click", function() {
  d3.event.preventDefault();
  var mons8modText = mons8initMod.property("value");
  if (mons8modText == "") mons8modText = "0";
  mons8mod.text(mons8modText);
  mons8initMod.text(mons8modText);
  console.log(`Monster 8 - Mod: ${mons8modText}`);
});



mons8rollsubmit.on("click", function() {
  d3.event.preventDefault();
  var mons8rollText = mons8initRoll.property("value");
  if (mons8rollText == "") mons8rollText = "0";
  var mons8modText = mons8mod.text();
  if (mons8modText == "") mons1modText = "0";
  console.log(`Monster 8 - Roll: ${mons8rollText} + Mod: ${mons8modText}`);
  mons8initVal = parseInt(mons8rollText) + parseInt(mons8modText);
  mons8init.text(mons8initVal);
    
  console.log(`Monster 8 - Init: ${mons8initVal}`);
});

// Use D3 `.on` to attach a click handler for the up  
mons8up.on("click", function() {
  // Select the current count
  var currentCount = parseInt(mons8mod.text());

  // Up  s should increment the counter
  currentCount += 1;

  // Set the counter h1 text to the new count
  mons8mod.text(currentCount);

  //   Save the    data
  data.push(["up  ", currentCount]);
});

// Use d3 `.on` to attach a click handler for the down  
mons8down.on("click", function() {
  // Select the current count
  var currentCount = parseInt(mons8mod.text());

  // Down  s should decrement the counter
  currentCount -= 1;

  // Set the counter h1 text to the new count
  mons8mod.text(currentCount);

  //   Save the    data
  data.push(["up  ", currentCount]);
});


 
function getData(monster) {  

switch (monster) {
  case "Mons1type":
    currentCount = 0;
    mons1mod.text(currentCount);
    console.log(`Monster 1 - None: ${currentCount}`);
    break;
  
  case "Mons1ogre":
    currentCount = 2;
    mons1mod.text(currentCount);
    console.log(`Monster 1 - Ogre: ${currentCount}`);
    break;
  case "Mons1orc":
    currentCount = 1;
    mons1mod.text(currentCount);
    console.log(`Monster 1 - Orc: ${currentCount}`);
    break;
  case "Mons1dragon":
    currentCount = 5;
    mons1mod.text(currentCount);
    console.log(`Monster 1 - Dragon: ${currentCount}`);
    break;
  default:
    currentCount = 0;
    mons1mod.text(currentCount);
    console.log(`Monster 1 - None: ${currentCount}`);
    break;
  }
};
