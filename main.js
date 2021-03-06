var mouseEvent="empty";
var lastPositionOfx,lastPositionOfy;
canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");
color="black";
widthofline=1;
canvas.addEventListener("mousedown",my_mousedown);

function my_mousedown(e)
{
    mouseEvent="mouseDown";
    color=document.getElementById("color").value;
    width_of_line=document.getElementById("Width_of_line").value;
}

canvas.addEventListener("mousemove",my_mousemove);

function my_mousemove(e)
{
    current_position_of_mouse_x=e.clientX-canvas.offsetleft;
    current_position_of_mouse_y=e.clientY-canvas.offsettop;
    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width_of_line;
        console.log("last position of x and y coordinates= ");
        console.log("x= "+lastPositionOfx + "y= " + lastPositionOfy );
        ctx.moveTo(lastPositionOfx,lastPositionOfy);
        console.log("current position of x and y coordinates= ");
        console.log("x= "+current_position_of_mouse_x+"y= "+ current_position_of_mouse_y);
        ctx.lineTo(current_position_of_mouse_x,current_position_of_mouse_y);
        ctx.stroke();
    }
    lastPositionOfx=current_position_of_mouse_x; 
    lastPositionOfy=current_position_of_mouse_y;
}

canvas.addEventListener("mouseup",my_mouseup);

function my_mouseup(e)
{
    mouseEvent="mouseUP";
}

canvas.addEventListener("mouseleave",my_mouseleave);

function my_mouseleave(e)
{
    mouseEvent="mouseLEAVE";
}

function cleararea()
{
ctx.clearRect(0,0,ctx.canvas.width,ctx.camvas.height);
}
