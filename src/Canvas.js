import React, { Component } from 'react';

class Canvas extends Component {

    componentDidMount() {
        const canvas = this.refs.canvas;
        canvas.height = document.body.clientHeight;
        canvas.width = document.body.clientWidth;
        const context = canvas.getContext("2d");
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

    render() {
        return(
            <div>
                <canvas id = "myCanvas" ref = "canvas"/>
            </div>
        )
    }
}

export default Canvas;