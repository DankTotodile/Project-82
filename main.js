mouseevent = "noevent";
color = "";
width = 0;
radius = 0;
cx = 0;
cy = 0;
lx = 0;
ly = 0;
canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");
canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e)
{
    color = document.getElementById("colour").value;
    radius = document.getElementById("radius").value;
    width = document.getElementById("width").value;
    mouseevent = "mousedown"; 
    console.log(mouseevent);
}
canvas.addEventListener("mouseup", my_mouseup);
function my_mouseup(e)
{
    mouseevent = "mouseup";
    console.log(mouseevent);
}
canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e)
{
    mouseevent = "mouseleave";
    console.log(mouseevent);
}
canvas.addEventListener("mousemove", my_mousemove);
function my_mousemove(e)
{
    cx = e.clientX - canvas.offsetLeft;
    cy = e.clientY - canvas.offsetTop;
    if (mouseevent == "mousedown")
    {
        color = document.getElementById("colour").value;
        radius = document.getElementById("radius").value;
        width = document.getElementById("width").value;
        ctx.beginPath();
        ctx.strokeStyle = color;
        ctx.lineWidth = width;
        ctx.arc(cx, cy, radius, 0, 2*Math.PI);
        ctx.stroke();
    }
    
}

