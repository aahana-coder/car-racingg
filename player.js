class Player{
constructor(){
this.index=null
this.distance=0
this.name=null
}
readcount(){
    var playercountref=database.ref("playercount")
    playercountref.on("value",(data)=> {
        playercount=data.val()
    })
 }
 
 writecount(count){
     database.ref("/").update({
      playercount:count
     })
     
 }
 

 writename(){
    var playerindex="players/player"+this.index
    database.ref(playerindex).update({
    playername:this.name,
    distance:this.distance
    })
}

static getplayersinfo(){
    var playerinforef=database.ref("players")
    playerinforef.on("value",(data)=> {
        allplayers=data.val()
    
    })




}
















}
































