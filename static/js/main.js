

// setInterval(eyeFrame, 200);
var time=178;
var countA=0;
var countB=0;
var countC=0;
var countD=0;
function eye(){
  document.querySelector("#eye").addEventListener("click",function(){
  document.querySelector("#eye-frame").classList.remove("none");

setInterval(eyeFrame, 200);
Notiflix.Notify.Info('Adjust your eye in the frame correctly');
  })
}

function eyeFrame(){
document.querySelector("#eye-frame").classList.toggle("fade");

}

function adjusted(){
  document.querySelector("#eye-frame").addEventListener("click",function(){
    // Notiflix.Notify.Success('Eye focused');
    Notiflix.Report.Success('Eye focused','Well done your eye was focused perfectly','End');
    document.querySelector("#eye-frame").classList.add("none");
    document.querySelector("#not1").innerHTML="evaluatig";
    document.querySelector("#not2").innerHTML="evaluatig";
    document.querySelector("#not3").innerHTML="evaluatig";
    document.querySelector("#not4").innerHTML="evaluatig";


  })
}


function barcode(){
document.querySelector("#watch").addEventListener("click",function(){
  document.querySelector(".backscreen").classList.remove("none");

  document.querySelector(".bar-code").classList.remove("none");
})


}


function getGender(){
document.querySelector(".gender").addEventListener("click",function(){
  Notiflix.Notify.Success('Gender detected');
  document.querySelector(".gender img").classList.remove("opacity");
  document.querySelector(".gender h5").classList.remove("opacity");


})


}

function getAge(){
document.querySelector(".age").addEventListener("click",function(){
  Notiflix.Notify.Success('Age detected');
  document.querySelector(".age img").classList.remove("opacity");
  document.querySelector(".age h5").classList.remove("opacity");
})
}

setInterval(timer, 1000);
function timer(){
document.querySelector(".time h1").innerHTML=time;
document.querySelector(".bttm p").innerHTML=time;

time++;

}



function submit(){
document.querySelector(".final-submit").addEventListener("click",function(){
document.querySelector(".backscreen").classList.remove("none");
document.querySelector(".results").classList.remove("none");
drawCharts();

})
}


function toLoad(){
document.querySelector(".top").addEventListener("click",function(){

  Notiflix.Notify.Success('Heart rate detected');
  Notiflix.Notify.Success('Body temp detected');
  Notiflix.Notify.Success('Oxygen saturation detected');
  Notiflix.Notify.Success('Respiration rate detected');

setInterval(loadWatch, 30);
})
}

function loadWatch(){
var a=document.querySelector(".heart-beat h5");
var b=document.querySelector(".Bodytemp h5");
var c=document.querySelector(".blood h5");
var d=document.querySelector(".respiration h5");
if(countA<80){
a.innerHTML=countA;
countA++;
}

if(countB<96){
  b.innerHTML=countB;
  countB++;
}
if(countC<97){
  c.innerHTML=countC;
  countC++;
}
if(countD<18){
  d.innerHTML=countD;
  countD++;
}
}


function para(){
document.querySelector("#p2").addEventListener("click",function(){
this.classList.add("active");

})

}

function para3(){
document.querySelector("#p3").addEventListener("click",function(){
this.classList.add("active");

})

}


// Web speech API

function webspeechApi(){
var speechRecognition=window.webkitSpeechRecognition;
var recognition=new speechRecognition();

var textbox=$("#textarea");

var content='';
recognition.continuous=true;
recognition.onstart=function(){
}
recognition.onresult=function(event){
var current=event.resultIndex;
  var transcript=event.results[current][0].transcript;
  content+=transcript;
  textbox.val(content);
}

if(content.length){
  content+='';
}
recognition.start();

}

function startAnswering(){
document.querySelector(".answer").addEventListener("click",function(){
$("#textarea").innerHTML='';

webspeechApi();
})
}




















para3();
para();
toLoad();
submit();
eye();
adjusted();
barcode();
getGender();
getAge();
startAnswering()
 // drawLineChart();
