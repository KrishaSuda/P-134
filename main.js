status = "";
objects = [];
sound = "";

function preload(){
    sound = loadSound("alarm.mp3");
}

function setup(){
    canvas = createCanvas(480,380);
    canvas.center();
    
    video = createCapture(VIDEO);
    video.size(480,380);
    video.hide();
    objectDetector = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById('object_detect').innerHTML = "Status: Detecting Objects";
}

function modelLoaded(){
    console.log("Model Loaded");
    status = true;
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
        for(){
            if (objects[i].label == "person"){
                document.getElementById('object_detect').innerHTML = "Status: Object Detected";
                document.getElementById("baby_detect").innerHTML = "baby detected";
                sound.stop();
        
            } else {
                document.getElementById('object_detect').innerHTML = "Status: Object Detected";
                document.getElementById("baby_detect").innerHTML = "baby not detected";
                sound.play();
        }
    }
}
if (objects.length == 0){
    document.getElementById('object_detect').innerHTML = "Status: Object Detected";
        document.getElementById("baby_detect").innerHTML = "baby not detected";
        sound.play();
}
}