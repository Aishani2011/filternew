noseY = 0;
noseX = 0;

function preload() {
    mus_nose = loadImage('https://i.postimg.cc/3x3QzSGq/m.png');
}

function setup() {

canvas = createCanvas(300, 300);
canvas.center();
video = createCapture(VIDEO);
video.size(300, 300);
video.hide();

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
}

function modelLoaded(){

console.log('Posenet is Initialized');

}

function gotPoses(results) {

if (results.length > 0) {

console.log(results);
noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.x;
console.log("Nose x =" + noseX);
console.log("Nose y =" + noseY);

}

}


function draw() {
    image(video, 0, 0, 300, 300);
    image(mus_nose, noseX, noseY, 50, 50);

}

function take_snapshot() {
    save('mustachefilter.png');
}