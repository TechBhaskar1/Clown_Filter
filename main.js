noseX=0;
noseY=0;
function preload() {
    clownNose=loadImage('https://i.postimg.cc/bvF7Spk7/images-2-removebg-preview.png');
}

function setup() {
    canvas=createCanvas(400,400);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("Model initialized");
}
function gotPoses(results){
    if(results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x;
        noseY=results[0].pose.nose.y;
        console.log("nose x= "+noseX);
        console.log("nose y= "+noseY);
    }
}

function draw() {
    image(video,0,0,400,400);
    image(clownNose,noseX,noseY,30,30);
    
    //fill(255,0,0);
    //stroke(255,0,0);
    //circle(noseX,noseY,30);
}

function snapshot() {
    save("zoker.png");
}

