class Game{
    constructor(){

    }
   
readstate(){
   var  gamestateref=database.ref("gamestate")
   gamestateref.on("value",function(data) {
       gamestate=data.val()
   })
}

writestate(state){
    database.ref("/").update({
     gamestate:state
    })
    
}
async start(){
    if (gamestate==0){
        form =new Form()
          form.display()
          player=new Player()
          var playercountref=await database.ref("playercount").once("value")
          if(playercountref.exists()){
              playercount=playercountref.val()
              player.readcount()
          }
        

    }
    car1=createSprite(100,200)
    car2=createSprite(300,200)
    car3=createSprite(500,200)
    car4=createSprite(700,200)
    
    cars=[car1,car2,car3,car4]
}
    play(){
    form.hide()
    Player.getplayersinfo()
    if(allplayers!==undefined){
  background(255)

       var index=0
        var x=175
        var y
for(var p in allplayers){
 index++
 x=x+200
 cars[index-1].x=x

 y=displayHeight-allplayers[p].distance
 cars[index-1].y=y
}




    }
if(keyIsDown(UP_ARROW)&& player.index!==null){
    player.distance+=10
    player.writename()
}

drawSprites()
}
   


}