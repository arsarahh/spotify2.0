var i = 0
var j = 0
var p = 0
var v = 0

// ENCHANTED11111!!!!!

var x = document.getElementById("myaudio")
function playaudio(){
  if(i==0){
    x.play()
    i = 1
    j=0
    p=0
    v=0
  }
  
  else {
    x.pause();
    i=0;
  }
}


// RED1111!!!!

var y = document.getElementById("myaudio1")
function playaudio1(){
  if(j==0){
    y.play()
    j = 1
    i=0
    p=0
    v=0
  }
  
  else {
    y.pause();
    j=0;
  }
}

// DICE11111!!!1

var q = document.getElementById("myaudio2")
function playaudio2(){
  if(p==0){
    q.play()
    p = 1
    i=0
    v=0
    j=0
  }
  
  else {
    q.pause();
    p=0;
  }
}

