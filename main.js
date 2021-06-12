difference = 0;
leftWrist = 0;
rightWrist = 0;
function setup(){
    canvas = createCanvas(700,500);
    canvas.position(600,150);
    video = createCapture(VIDEO);
    video.size(500,500)
    video.position(50,150)
    posenet =  ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPoses);
}
function modelLoaded(){
    console.log("model is loaded");
}
function draw(){
    background('#969A97');
    fill('#b39eb5');
    stroke('purple');
    text('CODING',10,250);
    textSize(difference);
    document.getElementById("text_side").innerHTML = "Side of the text = "+difference+"px";
}
function gotPoses(result){
    if(result.length > 0){
        console.log(result);
        leftWrist = result[0].pose.leftWrist.x;
        rightWrist = result[0].pose.rightWrist.x;
        console.log(leftWrist);
        console.log(rightWrist);
        difference = floor(leftWrist - rightWrist);
    }
}