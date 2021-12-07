lipx="";
lipy="";

function preload(){
lip=loadImage("https://i.postimg.cc/XJKB1xyD/584c61d3269a83097a7d04c9-removebg-preview.png")
}
function setup(){
canvas=createCanvas(300,300);
canvas.center();
video=createCapture(VIDEO);
video.size(300,300);
video.hide()
posenet=ml5.poseNet(video , modelloaded);
posenet.on("pose",getpose);
}
function getpose(results){
    if(results.length>0){
        lipx=results[0].pose.lip.x;
        lipy=results[0].pose.lip.y;
console.log(results);
console.log('nose x'+lipx);
console.log('nose y'+lipy);
    }
}
function modelloaded(){
    console.log("poseNet is loaded");
}
function draw(){
image(video,0,0,300,300);
fill("red");
stroke("brown");
circle(lipx,lipy,10);
image(lip,lipx,lipy,30,30);

}
function sanpshot(){
    save("newpic.jpg");
}