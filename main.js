function setup(){
    video = createCapture(VIDEO);
    video.size(400,300);
    video.position(20,150)

    canvas = createCanvas(550, 500);
    canvas.position(470, 150); 
    
    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on("pose", gotPoses);
}

function draw(){
    background("#FFFFFF");
}
function modelLoaded(){
    console.log("Pose Is Initialized!");
}

function gotPoses(results){
    if(results.length >0){
        console.log(results);
    }
}