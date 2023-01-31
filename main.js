var plaeta1=15;
var plaeta2=15;
var plaeta1X=250;
var paleta2X=250;
var paleta1Y=125;
var paleta2Y=125;
var player1score="0";
var player2score="0";
var bolita={
    ejeX:125,ejeY:62,radio:10,direccionY:3,direccionX:3
}
noarrayX=0;
noarrayY=0;
socreRight=0;
status="";

function preLoad()
{
Punto=loadSound("missed.wav");
}

function setup()
{
 var canvas=createCanvas(500,250);
canvas.parent('canvas');
video=createCapture(VIDEO);
video.size(500,250);
video.hide();
poseNet=ml5.poseNet(video,modelLoaded);
poseNet.on('pose',gotPoses);
}

function draw()
{

}