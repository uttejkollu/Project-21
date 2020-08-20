var wall, thickness;
var bullet, speed, weight;


function setup() {
  createCanvas(1600,400);
  
  speed = random(223,321);
  weight = random(30,52);

  bullet = createSprite(50,200,50,20);
  bullet.shapeColor = "white"

  wall = createSprite(1200,200,thickness,height/2);
  wall.shapeColor = color(80,80,80);

  bullet.velocityX = speed;

}

function draw() {
  background(128,128,128);  


  if(wall.x-bullet.x < (bullet.width-wall.width)/2)
  {
    bullet.velocityX = 0;
    var durability = 0.5 * weight * speed * speed/22500;
    if(durability>180)
    {
      bullet.shapeColor = color(255,0,0);
    }

    if(durability<180 && durability>100)
    {
      bullet.shapeColor = color(230,230,0);
    }
  
    if(durability<100)
    {
      bullet.shapeColor = color(0,255,0);
    }
    
    //bullet and wall collision
    if(hasCollided(bullet,wall))
    {
      bullet.velocityX = 0;
      var damage=0.5 * weight * speed * speed/(thickness*thickness*thickness);

      if(damage>10)
      {
        wall.shapeColor = color(255,0,0);
        fill("black");
        textSize(25);
        text("Material Uneffective", 800, 300);
      }



      if (damage<10)
      {
        wall.shapeColor = color(0,255,0);
        fill("black");
        textSize(25);
        text("Material Effective", 800, 300);
      }

    }


    fill("black");
    textSize(20);
    text("Durability and Effectiveness:" + Math.round(durability),50,50);

  }

  drawSprites();
}

function hasCollided(lbullet,lwall)
{
  bulletRightEdge = lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge)
  {
    return true
  }
  return false;
}