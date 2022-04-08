class meplane{
    constructor(x,y,level){
        this.meplane=document.createElement('div');
        this.meplane.className='my1plane';
        this.meplane.style.left = `${x}px`;
        this.meplane.style.top = `${y}px`;
        this.speed=1;
        this.level=1;
        this.health=6;
        document.querySelector('.gameenter').appendChild(this.meplane);
        /*setInterval(() => {
            this.automove();
        }, 15);*/
        this.delplane=setInterval(() => {
            this.ruin();
        }, 500);
        return true;
    }
    fire()
    {
        new Bullet(this.meplane.offsetLeft+40,this.meplane.offsetTop,1,this.level);
    }
    befired()
    {
        this.health--;      
        if(this.health<=0)
        {
            this.meplane.className+=" my1plane_down1";
        }
    }
    ruin()
    {
        if(this.health<=0){
            document.querySelector('.gameenter').removeChild(this.meplane);
        }
    }
    levelup()
    {
        this.level++;
    }
    
}