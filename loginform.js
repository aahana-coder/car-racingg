class Form {
    constructor() {
      this.input=createInput('').attribute('placeholder', 'Name');
      this.button=createButton('Play');
      this.greeting=createElement('h3');
      this.reset=createButton('RESET')
      this.title= createElement('h2')
    }
    hide(){
this.input.hide()
this.button.hide()
this.greeting.hide()
this.title.hide()
    }
  
    display(){
      this.title.html("Car Racing Game");
      this.title.position(displayWidth/2-50,250);
  
      this.reset.position(displayWidth-100,20)

      this.input.position(displayWidth/2-40,350); 
     this.button.position(displayWidth/2+30,400);
  
      this.button.mousePressed(()=>{
        
        this.input.hide();
        this.button.hide();
        player.name = this.input.value();
        playercount+=1;
       
        player.writecount(playercount)
        player.writename()
  
player.index=playercount
        this.greeting.html("Hello " + player.name )
        this.greeting.position(displayWidth/2+30,350)
      });
   this.reset.mousePressed(()=>{
player.writecount(0)
game.writestate(0)
database.ref("players").remove()
   })
  }
  }