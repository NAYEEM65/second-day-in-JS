//  function myFunc(a, b, c){
//     return ((a+b)*c);
// }
// var x = myFunc(6, 3, 6);
// var y = myFunc(6, 3, 10);
// console.log(x);
// console.log(y);

// function toFarenhite(c){
//     return ((9*c)+160)/5;
// }
//  var celcious = toFarenhite(40);
//  console.log(celcious);

// function hourToSecond(h){
//     return (h*60*60);
// }
// function minuteToScond(m){
//     return (m*60);
// }
//  var htoSecond = hourToSecond(3);
//  var mtoSecond = minuteToScond(30);

//  var total = htoSecond + mtoSecond;

//  console.log(total);


// var address = {fName: "Emon", lName:"Howlader", age:"20", district:"Barisal"};
// console.log("Your Name is: ", address.fName +' '+ address.lName);


var identity = `emon "howlader"`;
console.log(identity.slice(0, 4));//(start, end)
console.log(identity.substr(2, 10));//(start, length)
console.log(identity.substring(0, 4));
