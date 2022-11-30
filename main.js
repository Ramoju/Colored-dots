(function() {
    'use strict'
    paper.install(window);
    paper.setup(document.getElementById('mainCanvas'));

    var c = Shape.Circle(500, 500, 100); c.fillColor = 'black';
    paper.view.draw();

    var colorarray = ["red", "green", "yellow", "violet", "blue"];


    var tool = new Tool();
    tool.onMouseDown = function(event) {
    var randomcolor = Math.floor(Math.random() * colorarray.length);
    var randomradius = Math.floor(Math.random() * (Math.floor(25)- Math.ceil(10) + 1));
    var c = Shape.Circle(event.point.x, event.point.y, randomradius); 
    c.fillColor = colorarray[randomcolor];
    };
    // your code will start here...
    //console.log('main.js loaded'); // ...and end here
    }())