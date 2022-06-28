Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:90
});
camera = document.getElementById("Webcam");
Webcam.attach("Webcam")
function Capture(){
    Webcam.snap(function(data_url) {
        document.getElementById("result").innerHTML = '<img id="res_img" src="'+data_url+'"/>';
    });
}
console.log('ml5 version',ml5.version);
classifier = ml5.ImageClassifier('https://teachablemachine.withgoogle.com/models/yB6NTxIMv/model.json',modelLoaded);
function modelLoaded(){
    console.log("modelLoaded");
}

function Identify(){
    img = document.getElementById("result");
    classifier.classify(img, gotResult);
}

function gotResult(error, results){
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("Object_Result").innerHTML = results[0].label;
        document.getElementById("Accuracy").innerHTML = results[0].confidence.toFixed(3)
    }
}