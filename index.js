let engine = Matter.Engine.create();

let render = Matter.Render.create({
    element: document.body,
    engine:engine,
    options : {
        width : 1340 ,
        height : 650,
        wireframe : false 
    }
});


// in rectangle class the first and the second i.e 400 and 600 represents the 
// position (co-ordinates that where the recatngle is going to be placed )


//whereas the 3rd and the 4th number position represents
// the length and the breadth of the rectangle respectively


let ground = Matter.Bodies.rectangle(400,500,1500,30, { isStatic: true})


let mouse = Matter.Mouse.create(render.canvas)
let mouseConstraint = Matter.MouseConstraint.create(engine,{
    mouse:mouse,
    constraint: {
        render: {visible: true}
    }
})
render.mouse = mouse

//creating a stack //matter.js provide a class called composites
//  the first two numbersi.e 200 200 is the cordinates from where the stack is going to be placed
// first 200 is for x -axis and --------- the second 200 is for y-axis agar value y -axis ki choti 
//hogi toh woh utne hi upar se  girega

/**
   the 3rd and the 4th number i.e 4,4 is represting the stack of size matlab total 16 blocks banenge
   aur woh 4x4 k arrangement honge
 */

/**
  the 5th and 6 th number is used t represent the gap between the blocks
 */

let stack = Matter.Composites.stack(200,200,4,4,0,0, function(x,y){
    let sides = Math.round(Matter.Common.random(2,8))
    return Matter.Bodies.polygon(x,y,sides,Matter.Common.random(20,50))
})

Matter.World.add(engine.world,[stack,ground,mouseConstraint])
Matter.Engine.run(engine);
Matter.Render.run(render);