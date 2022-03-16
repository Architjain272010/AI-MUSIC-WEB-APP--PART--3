song1="";
song2="";
function setup(){
    canvas=createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
}
function preload(){
song1= loadSound("music.mp3");
song2= loadSound("music2.mp3");
}
function draw(){
    image(video,0,0,600,500);
}
function setup(){
    canvas= createCanvas(600,500);
    canvas.center();
    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose',gotPosses);
}
function gotPosses(results){
if(results.length >0){
    console.log(results);
    leftWristx=results[0].pose.leftWrist.x;
    leftWristy=results[0].pose.leftWrist.y;
    console.log("leftWristx="+leftWristx+"leftWristy"+leftWristy);
    rightWristx=results[0].pose.rightWrist.x;
    rightWristy=results[0].pose.rightWrist.y;
    console.log("rightWristx="+rightWristx+"rightWristy"+rightWristy);
}
}
function modelLoaded(){
    console.log("Posenet is initialized");
}
function Play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}
function Stop(){
    song.stop();
}