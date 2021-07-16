Webcam.set(
    {
        width: 310,
        height: 300,
        image_format: "png",
        png_quality: 90,
        constraints:{
            facingMode: "environment"
        }
    }
);

Webcam.attach("#camera")

function capture_image()
{
    Webcam.snap(
        function (data_uri)
{
    document.getElementById("result").innerHTML = "<img id='captured_image' src= " + data_uri + ">";
}    )
}


console.log("ml5.version", ml5.version)

classify = ml5.imageClassifier("MobileNet", modelloaded)


function modelloaded(){
    console.log("Model Loaded");
}



function identify_image(){
    img = document.getElementById("captured_image");
    classify.classify(img, gotResult);
}

function gotResult(error, results){
if(error){
    console.log(error);
}
if(results){
    console.log(results);
    document.getElementById("object-name").innerHTML = results[0].label;
}
}