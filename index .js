
var readlineSync = require("readline-sync")
var user = readlineSync.question("What's your name? ");
console.log("Welcome "+user)
var score =0
function play(question,answer){
  var userAns=readlineSync.question(question)
  if(userAns === answer){
    console.log("You are right")
    score++;
  }
  else{
    console.log("You are wrong!")
  }
  console.log("current score: "+score)
  console.log("----------------")
}

var highScore=[
  {
    name: "kunwar",
    score: 3,
  },
  {
    name: "caesar",
    score: 2,
  }
]
// list of objects

var list =[{
  question:"Where does he live? ",
  answer: "sddn",
},
{
  question:"His favourite superhero would be? ",
  answer: "batman",
},
{
  question:"His favourite cricketer? ",
  answer: "sachin",
}
]
var ask= readlineSync.question("Do you know Kunwar? ")
if(ask === "yes"){
for( var i=0; i<list.length; i++){
  
  play(list[i].question,list[i].answer);
}
}
else{
  console.log("Its ok, No problem!!! ")
}
console.log("Check out the high scores ")
for(var i=0;i<highScore.length;i++){
 
    console.log("name: "+highScore[i].name)
    console.log("score: "+highScore[i].score)

  

}
console.log("--------")

console.log("Hurrah !!! you got the score:"+score+" and")
for(var i=0;i<highScore.length;i++){
  if(highScore[i].score< score){
    console.log("You have beaten "+highScore[i].name)
  }else
  {
    console.log("You have not beaten "+highScore[i].name)
  }

}