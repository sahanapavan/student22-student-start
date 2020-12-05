
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var myengine,myworld;
var box;

function setup() {
var canvas=createCanvas(1000,800);
 
myengine = Engine.create();
    myworld = myengine.world;

    var options={
      isStatic:true
    }

box=Bodies.rectangle(200,100,50,50,options);
World.add(myworld,box);

console.log(box);
console.log(box.type);
console.log(box.position.x);
console.log(box.position.y);
}

function draw() {
  background(0); 

  Engine.update(myengine);

 rectMode(CENTER);
  //rect(200,200,50,50); 

  rect(box.position.x,box.position.y,50,50)
  
}