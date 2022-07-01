status = "";
objects = [];
sound = "";
video = "";

function preload(){
    sound = loadSound("alarm.mp3");
    video = createCapture();
}

function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
    video.hide();
}

function modelLoaded(){
    console.log("Model Loaded");
    status = true;
    objectDetector.detect(sound, gotResults);
}

function gotResults(error, results){
    if (error){
        console.error(error);
    }
    console.log(results);
    objects = results;
}

function draw(){
    image(video, 0, 0, 480, 380)
    if(status != ""){
        objectDetector.detect(video, gotResults);
        if (objects[i].label == "person"){
            document.getElementById('object_detect').innerHTML = "Status: Object Detected";
            document.getElementById("baby_detect").innerHTML = "baby detected";
    
        } else if (objects[i].label !== "person"){
            document.getElementById('object_detect').innerHTML = "Status: Object Detected";
            document.getElementById("baby_detect").innerHTML = "baby not detected";
            sound.play()
        } else{
            document.getElementById('object_detect').innerHTML = "Status: Object Detected";
            document.getElementById("baby_detect").innerHTML = "baby not detected";
            sound.play()
        }
    }
}