import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  ms: any= "0" +0;
  sec: any= "0" +0;
  min: any= "0" +0;
  h: any= "0" +0;

  lapNr: any= 1;
  startT: any;
  running= false;


  constructor() {}
  start() {
    if(!this.running){
      this.running =true;
      this.startT =setInterval(()=>{
        this.ms++;
        this.ms =this.ms<10?"0"+this.ms:this.ms;

      if(this.ms ===100){
        this.sec++;
        this.sec =this.sec<10?"0"+this.sec:this.sec;
        this.ms="0"+0;

      } 
      if(this.sec===60){
        this.min++;
        this.min =this.min<10?"0"+this.min:this.min;
        this.sec="0"+0;
      }
      if(this.min===60){
        this.h++;
        this.h =this.h<10?"0"+this.h:this.h;
        this.min="0"+0;
      } 
      }, 10);
    }
   console.log("start")
  }
  stop() {
    clearInterval(this.startT);
    this.running=false;
    //console.log("stop")
  }
  reset(){
    clearInterval(this.startT);
    this.running=false;
    this.h=this.min=this.sec=this.ms="0"+0
    document.getElementById('lap').innerHTML = '';
    this.lapNr = 1;
  }
   
  lap(){
    const cont = document.getElementById('lap');
    const temp = document.createElement('tr');
    temp.innerHTML=this.lapNr+" lap "+this.h+":"+this.min+":"+this.sec+":"+this.ms;
    //console.log(this.lapNr);
    cont.appendChild(temp);
    this.lapNr++;
    }
  

}
