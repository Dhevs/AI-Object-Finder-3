objects=[];
status1="";

function preload(){

}

function setup(){
canvas=createCanvas(380,180);
canvas.center();
video=createCapture(VIDEO);
video.size(380,180);
video.hide();
}

function start(){
objectdetector=ml5.objectDetector("cocossd",modaloaded);
document.getElementById("status").innerHTML="Status = Detecting Objects";
var object_name=document.getElementById("object_name").value;
}

function modaloaded(){
console.log("Modal is Loaded");
status1=true;
}

function draw(){
image(video,0,0,380,180);
if(status1!=""){
objectdetector.detect(video,getresults);
for (i = 0; i < objects.length; i++){
document.getElementById("status").innerHTML="Status = Object Detected";
if(objects[i].label == object_name){
video.stop();
objectdetector.detect(getresults);
document.getElementById("no.ofobjects").innerHTML=object_name + "Found";
}
else{document.getElementById("no.ofobjects").innerHTML=object_name + "Not Found";}
}
}    
}

function getresults(error,results){
if(error){console.log(error);}
console.log(results);
objects=results;
}