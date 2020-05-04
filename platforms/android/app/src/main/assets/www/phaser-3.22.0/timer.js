var myClock=new Clock({scene:this,secs:60});

 

class Clock extends Phaser.Scene {
    constructor(config) {
        super(config.scene);
        this.scene = config.scene;
        if (!config.secs) {
            this.secs = 60;
        } else {
            this.secs--;
        }

        if (!config.style)
        {
            config.style={fontSize:game.config.width/10,color:'#27ae60',align:'center'};
        }

        this.text1=this.scene.add.text(0,0,"",config.style).setOrigin(0.5,0.5);
        this.add(this.text1);


        this.scene.add.existing(this);

        this.setText();
        this.setSize(this.text1.displayWidth,this.text1.displayHeight);
        ut.emitter.on(G.CLOCK_START,this.startClock,this);
        ut.emitter.on(G.CLOCK_STOP,this.stopClock,this);

    }
    startClock() {
        console.log("startClock");
        this.timer = this.scene.time.addEvent({
            delay: 1000,
            callback: this.tick,
            callbackScope: this,
            loop: true
        });
    }
    stopClock() {
        console.log("stopClock");
        this.timer.remove();
    }
    tick() {
        this.secs--;
        if (this.secs == 0) {
           // this.stopClock();
        }
        this.setText();
    }
    setText() {
        var mins = Math.floor(this.secs / 60);
        var secs = this.secs - (mins * 60);

        secs=this.leadingZeros(secs);
        mins=this.leadingZeros(mins);

        this.text1.setText(mins+":"+secs);
    }
    leadingZeros(num) {
        if (num < 10) {
            return "0" + num;
        }
        return num;
    }

}