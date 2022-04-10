noseX=0
noseY=0
function preload(){
    eat=loadImage("mousetache.png")
}

function setup(){
    canvas=createCanvas(300,300)
    canvas.center()
    video=createCapture(VIDEO)
    video.size(300,300)
    video.hide()

    posenet=ml5.poseNet(video,modelloaded)
    posenet.on("pose",gotPoses)
}

function modelloaded(){
    console.log("posenet is successufully loaded")
}

function gotPoses(results){
if(results.length>0){
    console.log(results)
    noseX=results[0].pose.nose.x-40
    noseY=results[0].pose.nose.y-10
}
}

function draw(){
    image(video,0,0,300,300)
    image(eat,noseX,noseY,70,70)
}

function Snap(){
    save('thatmonkey.png')
}