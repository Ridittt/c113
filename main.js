function preload()
{

}
function setup()
{
   canvas=createCanvas(640,480);
   canvas.position(110,250);
   video=createCapture(VIDEO);
   video.hide();
   tint_colour="";
}
function draw()
{
    image(video,90,100,200,200);
    fill(0,0,255);
    stroke(255,255,255);
    rect(40,74,20,270);
    fill(0,0,255);
    stroke(255,255,255);
    rect(40,74,20,270);
    fill(0,0,255);
    stroke(255,255,255);
    rect(40,74,20,270);
    fill(0,0,255);
    stroke(255,255,255);
    rect(40,74,20,270);
    fill(0,0,255);
    stroke(255,255,255);
    rect(40,74,20,270);
    fill(0,0,255);
    stroke(255,255,255);
    circle(50,80,50);
}
function take_snapshot()
{
    save('RIDIT JAIN.png');
}