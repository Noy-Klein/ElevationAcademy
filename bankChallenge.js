var bank = 200;
var wallet = 100;
/*  a function that is given an argument which represents an 
amount of money, and subtracts it from the bank, and adds it
to the wallet*/
function withdraw(amount1) {
  if (bank > 0) {
    bank = bank - amount1;
    wallet = wallet + amount1;
  } else {
    console.log("bank empty");
  }
}
/* a function that is given an argument which represents an 
amount of money, and adds it to the bank, and substracts it
from the wallet */
function deposit(amount2) {
  if (wallet > 0) {
    wallet = wallet - amount2;
    bank = bank + amount2;
  } else {
    console.log("wallet empty");
  }
}
