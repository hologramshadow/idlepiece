window.onload = ()=> {

  setInterval(perTick, 1000);
  setInterval(screenTick,1);  
};

var gPtick=0,  gem=0, dCounter= 0;
var cPclick=1, gMax=20, cMin=1, gMin= 1;
var halflife = 20;
var halfratio =50;
var coin =parseInt(localStorage.coin);
if(coin){
  var cPtick = parseInt(localStorage.cPtick);
  var cMax = parseInt(localStorage.cMax);
}else{
  var coin=0; cPtick=1, cMax=1;
}
var getcPs = function(){
  if(coin>=cMax*10){
    coin -=cMax*10;
  cMax +=1;
  document.getElementById("cPsMaxBoard").innerHTML = cMax;
  }
}
var cPsreroll = function () {
  //cPsの再抽選
  cPtick=Math.floor((cMax-cMin+1)*Math.random())+cMin;
}
var perTick = function () {
  //tickごとの処理
  coin +=cPtick;
  gem +=gPtick;
  dCounter++;
  if(dCounter>=halflife){
    halve();
    dCounter=0;
  } 
}
var saveData = function () {
  //セーブの処理
   localStorage.coin = coin;
   localStorage.cPtick = cPtick;
   localStorage.cMax = cMax;
   console.warn('セーブ機能を作りたい');
  
}
var halve = function(){
  //半減期ごとの処理
  if(cPtick>cMin){
  cPtick=cPtick-1;
  }
}
var screenTick = function(){
  document.getElementById("coinBoard").innerHTML = coin;
  document.getElementById("gemBoard").innerHTML = gem;
  document.getElementById("cPtBoard").innerHTML = cPtick;
  
}
