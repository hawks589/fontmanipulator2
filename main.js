leftWristX =0;
rightWristX = 0;
difference = 0;

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
    textSize(difference);
    fill("#3515e8");
    text("Tegveer",50,400);
}
function modelLoaded(){
    console.log("Pose Is Initialized!");
}

function gotPoses(results){
    if(results.length >0){

        console.log(results);
        leftWristX=results[0].pose.leftWrist.x;
        rightWristX=results[0].pose.rightWrist.x;
        console.log("Left Wrist = " +leftWristX+"Right Wrist ="+rightWristX);
        difference = floor(leftWristX-rightWristX);
        console.log(leftWristX,rightWristX,difference);

    }
}