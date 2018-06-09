var clerks = ["Ron", "Ohad", "Ehud"];
var managers = ["Dan", "Maor", "Aviv", "Yoni"];
var ceo = ["Noach"];

/*
a function which promotes the name it is given
*/
function promotion(name) {
  for (var i = 0; i < clerks.length; i++) {
    if (name === clerks[i]) {
      managers.push(name); // adding the name to higher rank array
      clerks.splice(i, 1); // removing the name from the original array
      console.log(name + " has been promoted to a manager!");
      return; // stopping the function incase of finding the name
    }
  }
  for (var j = 0; j < managers.length; j++) {
    if (name === managers[j]) {
      ceo.push(name);
      managers.splice(j, 1);
      console.log(name + " has been promoted to ceo!");
      return;
    }
  }
  for (var k = 0; k < ceo.length; k++) {
    if (name === ceo[k])
      console.log(name + " can be promoted to a higher job than a ceo");
  }
}

/*
a function that demotes the name it is given
*/
function demotion(name) {
  for (var i = 0; i < ceo.length; i++) {
    if (name === ceo[i]) {
      managers.push(name); // adding the name to lower rank array
      ceo.splice(i, 1); // removing the name from the original array
      console.log(name + " has been demoted to a manager.");
      return; // stopping the function incase of finding the name
    }
  }
  for (var j = 0; j < managers.length; j++) {
    if (name === managers[j]) 
    {
      clerks.push(name);
      managers.splice(j, 1);
      console.log(name + " has been demoted to a clerk.");
      return;
    }
  }
  for (var k = 0; k < clerks.length; k++) {
    if (name === clerks[k])
      console.log(
        name + " cant be demoted to a lower job than a clerk, he could be fired"
      );
  }
}
