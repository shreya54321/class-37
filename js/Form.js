class Form{
    constructor(){
this.input =createInput("Name");
this.button =createButton('Play');
this.greeting = createElement('h2')
    }
    hide(){
        this.greeting.hide();
        this.button.hide();
        this.input.hide();
    }

    display(){
        var title = createElement('h2');
        title.html("CAR RACING GAME");
        title.position(330,0);

       this.input.position(330,160);
        this.button.position(350,200);

        this.button.mousePressed(()=>{

            this.input.hide();
            this.button.hide();

         player.name =this.input.value();

            playerCount+=1;
            player.index=playerCount;
            player.update();
            player.updateCount(playerCount);

            greeting.html("Hello " +player.name);
            greeting.position(330,160)
        });
    }
}