/*--Webcam.set({
    width:350,
    height:300,
    image_format:"png",
    png_quality:90
});

Webcam.attach("#camera");


function selfie() {
Webcam.snap({
    function(data_url){
        document.getElementById("result").innerHTML='<img src="'+data_url+'">';
    }
});
}--*/

vedio=document.getElementById("camera");
    navigator.mediaDevices.getUserMedia({video:true})
    .then(stream=> {
        vedio.srcObject=stream;
    }).catch(function(err){
        console.log("Something went wrong");
        console.log(err);
    });

function selfie() {
    document.getElementById("result").innerHTML="<canvas width='800' height='600' id='main'></canvas><img src='' id='ii'>"
    camera=document.getElementById("camera");
    main=document.getElementById("main");
    ctx=main.getContext('2d');
    ctx.drawImage(camera,0,0,800,600);
   var imgData = ctx.getImageData(0, 0, main.width, main.height);
   document.getElementById("ii").src=imgData;
}

console.log("ml5 version",ml5.version);