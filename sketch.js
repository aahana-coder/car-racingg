var database,form,player,game,allplayers
var gamestate=0
var playercount
var car1,car2,car3,car4,cars
function setup (){
database=firebase.database()//connecting database
createCanvas(displayWidth-20,displayHeight-20)
game=new Game()
game.readstate()
game.start()


}

function draw(){
if(playercount==4){
game.writestate(1)
}
if(gamestate==1){
 //   clear()
   game.play()
}
}



