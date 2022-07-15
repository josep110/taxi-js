var canvas = document.getElementById("canv");
var ctx = canvas.getContext("2d");


let p1_s = 0;
let p2_s = 0;

let b_x = canvas.width/2;
let b_y = canvas.height/2;

let p1_x = 50;
let p1_y = canvas.height/2;

let p2_x = 430;
let p2_y = canvas.height/2;

let p_w = 10;
let p_h = 100;

let dx = 0;
let dy = 0;
            
let b_rad = 10;





function drawScores(){
    ctx.fillText(p1_s,100,50);
    ctx.fillText(p2_s,380,50);
}

function drawBall(){
    ctx.beginPath();
    ctx.arc(b_x, b_y, b_rad, 0, Math.PI*2);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
}

function drawPaddles(){
    ctx.beginPath();
    ctx.fillRect(p1_x,p1_y,p_w,p_h);
    ctx.fillRect(p2_x,p2_y,p_w,p_h);
    ctx.closePath();
}


function rb(){
    b_x = canvas.width/2;
    b_y = canvas.height/2;

    let n = Math.random()*16;
    if (n < 5){
        dx = 2;
        dy = -2;
    }
    else if (n < 9){
        dx = -2;
        dy = 2;
    }
    else if (n < 13){
        dx = 2;
        dy = 2;
    } else {
        dx = -2;
        dy = -2;
    }  
}

function bounceLoop(){

    ctx.clearRect(0,0,canvas.width,canvas.height);

    if (b_x < 0){
        p1_s += 1;
        rb();
    }

    if (b_x > canvas.width){
        p2_s += 1;
        rb();
    }

    if (b_y == canvas.height - b_rad || b_y == 0 + b_rad){
        dy = 0 - dy;
    }

    if (p1_x < b_x < p1_x+p_w && p1_y < b_y < p1_y+p_h){
        //dx = 0 - dx;
    }

    document.addEventListener('keydown', (event) => {
        var name = event.key;
        if (name == 'w'){
            p1_y += 1;
        }
        if (name == 's'){
            p1_y -= 1;
        }
        if (name == 'u'){
            p2_y += 1;
        }
        if (name == 'j'){
            ps_y -= 1;
        }
    })

    drawScores();
    drawBall();
    drawPaddles();

    b_x += dx;
    b_y += dy;
}

rb();
setInterval(bounceLoop, 10);
