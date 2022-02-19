
class Loader {
    constructor(color,size,Bg){
        this.color = color || "white";
        this.bg = Bg || "rgb(0,0,0,.6)";
        this.size = size || 100;
    }
    start(){
     this.loading=document.createElement("div");
        
   this.styles=document.createElement("style");
    this.styles.innerHTML=`@keyframes rotate{
        100%{transform:rotate(360deg);}
    }
     @keyframes textanime {
        100%{opacity:0.4;};
        }
   `
          this.loading.innerHTML="<div id='loader'></div><div id='lotext'></div>";
        setTimeout(()=>{
            document.body.appendChild(this.loading);
            document.body.appendChild(this.styles);
            this.addStyles();
        },2);
    }
    addText(text,size,color){
        setTimeout(()=>{
        this.lotext = document.getElementById('lotext');
        this.lotext.innerHTML = text;
        this.lotext.style.fontSize = size;
        this.lotext.style.color = color;
        this.addStyles()
        },2)
    }
    animateText(){
        setTimeout(()=>{this.lotext.style.animation = "textanime 1s alternate infinite"},2)
    }
    
    displayOnlyText(){
        setTimeout(()=>{this.loader = document.getElementById('loader')
        this.loader.style.display = "none"
    },2)
    }
   addStyles(){
        
        this.loading.style.width="100vw";
        this.loading.style.height="100vh";    
        this.loading.style.backgroundColor=this.bg; 
        this.loading.style.justifyContent="center";
        this.loading.style.alignItems= "center";
        this.loading.style.position="fixed";
        this.loading.style.display="flex";
        this.loading.style.flexDirection="column";
        this.loading.style.top="0";
        this.loading.style.left="0";
        this.loader = document.getElementById('loader');
        this.loader=document.getElementById("loader");
        this.loader.style.width=this.size+"px";
        this.loader.style.height=this.size+"px";
        this.loader.style.borderRadius="50%";
        this.loader.style.border='20px solid '+ this.color;
        this.loader.style.borderLeftColor ="transparent";
        this.loader.style.borderRightColor = "transparent";
        this.loader.style.animation = 'rotate 800ms linear infinite'
        this.lotext = document.getElementById('lotext');
        this.lotext.style.fontFamily = "courier";
        this.lotext.style.fontWeight = "bolder";
    }
    
    
    removeWhenLoaded(time){
       setTimeout(()=>{
         this.loading.style.display = "none";
       },time)
    }
    removeWhenWindowLoaded(){
       window.addEventListener("load",()=>{
setTimeout(()=>{
    this.loading.style.display="none";},3);
});
   }
   removeOnTouch(){
       document.body.addEventListener("dblclick",()=>{
             this.loading.style.display="none";
        });
   }
   
}
function sel(n){
     return document.querySelector(n);
}
function pick(n){
    return document.querySelectorAll(n);
}
function random(min,max){
                return Math.floor(Math.random()*(max-min)+1)+min;
            }
            function randomRGBA(){
             return `rgba(${random(0,255)},${random(0,255)},${random(0,255)},${random(0,1)}) `
            }
function random(min,max){
                return Math.floor(Math.random()*(max-min)+1)+min;
            }
            function randomRGBA(){
             return `rgba(${random(0,255)},${random(0,255)},${random(0,255)},${random(0,1)}) `
            }
            function create(m,n,h){
    let elem=document.createElement(m);
    let text=document.createTextNode(n);
    elem.appendChild(text);

    if(h==true){
    setTimeout(()=>{
    document.body.append(elem);},20);}
    else{
        setTimeout(()=>{
 document.body.prepend(elem);},20);}
        
    }
    window.onload=function(){
add=function (type,element,value){
    element.setAttribute(type,value);
}
function hide(elem,n){
    setTimeout(()=>{elem.style.display="none";},n);
}
function show(elem,n){
     setTimeout(()=>{
          elem.style.display="flex";
     },n);
}
let a=sel("div");
function toggle(elem,n) {
  if (elem.style.display === "none") {
   setTimeout(()=>{ elem.style.display = "block";},n);
  } else {
    setTimeout(()=>{ elem.style.display = "none";},n);
  }
}
let style=document.createElement("style");
style.innerHTML=`
@keyframes fadein{
     from{
          opacity:0;
     }
     59%{
          opacity:0.59;
     }
     to{
          opacity:1;
     }
}
@keyframes fadeout{
     from{
          opacity:1;
     }
     50%{
          opacity:0.5;
     }
     
     100%{
          opacity:0;
     }
     
}
`
}

