import React, { Component } from 'react';

class PrecipitationCanvas extends Component {

    componentDidMount() {
        const canvas = this.refs.canvas;
        canvas.height = document.body.clientHeight;
        canvas.width = document.body.clientWidth;
        const context = canvas.getContext("2d");
        this.rain(canvas);
        this.drawCloud(context);
    }

    
    drawCloud(context) {
        context.beginPath();
        context.moveTo(170, 80);
        context.bezierCurveTo(130, 100, 130, 150, 230, 150);
        context.bezierCurveTo(250, 180, 320, 180, 340, 150);
        context.bezierCurveTo(420, 150, 420, 120, 390, 100);
        context.bezierCurveTo(430, 40, 370, 30, 340, 50);
        context.bezierCurveTo(320, 5, 250, 20, 250, 50);
        context.bezierCurveTo(200, 5, 150, 20, 170, 80);
        context.closePath();
        context.lineWidth = 5;
        context.fillStyle = '#8ED6FF';
        context.fill();
        context.strokeStyle = '#0000ff';
        context.stroke();
    }

    rain(canvas) {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            
            if(canvas.getContext) {
              var ctx = canvas.getContext('2d');
              var w = canvas.width;
              var h = canvas.height;
              ctx.strokeStyle = 'rgba(174,194,224,0.5)';
              ctx.lineWidth = 0.5;
              ctx.lineCap = 'round';
              
              
              var init = [];
              var maxParts = 100;
              for(var a = 0; a < maxParts; a++) {
                init.push({
                  x: Math.random() * w,
                  y: Math.random() * h,
                  l: Math.random() * 1,
                  xs: 1,
                  ys: Math.random() * 10 + 10
                })
              }
              
              var particles = [];
              for(var b = 0; b < maxParts; b++) {
                particles[b] = init[b];
              }
              
              function draw() {
                ctx.clearRect(0, 0, w, h);
                for(var c = 0; c < particles.length; c++) {
                  var p = particles[c];
                  ctx.beginPath();
                  ctx.moveTo(p.x, p.y);
                  ctx.lineTo(p.x + p.l * p.xs, p.y + p.l * p.ys);
                  ctx.stroke();
                }
                move();
              }
              
              function move() {
                for(var b = 0; b < particles.length; b++) {
                  var p = particles[b];
                  p.x += p.xs;
                  p.y += p.ys;
                  if(p.x > w || p.y > h) {
                    p.x = Math.random() * w;
                    p.y = -10;
                  }
                }
              }
              
              setInterval(draw, 30);
              
            }
    }

    render() {
        return(
            <canvas id = "precipitationCanvas" ref = "canvas"/>
        )
    }
}

export default PrecipitationCanvas;