function setup() {
  canvas = createCanvas(300, 300);
  canvas.center();
  video = createCapture( VIDEO);
  video.hide();
  classifier=ml5.imageClassifier("MobileNet", modelLoaded);
}
function modelLoaded(){
  console.log("Model has been loaded")
}

function draw(){
  image(video,0, 0, 300, 300);
  classifier.classify(video, getresult);
}
function getresult(error, results){
  if(error){
    console.log(error);
  }
  else{
    console.log(results);
    document.getElementById("object").innerHTML=results[0].label;
    document.getElementById("accuracy").innerHTML=results[0].confidence.toFixed(3);
  }
}


