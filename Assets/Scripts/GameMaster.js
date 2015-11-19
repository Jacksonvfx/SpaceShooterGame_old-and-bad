#pragma strict

static var currentScore : int = 0;
static var lives : int = 3;
static var ammo : int = 10;
static var power : int = 0;
var player : GameObject;


function Start () {
    currentScore = 0;
    lives = 3;
}


function OnGUI () 
{
    GUI.Box (new Rect (0,0,100,50), "Score " + currentScore);
    GUI.Box (new Rect (0,20,100,50), "Health x " + lives);
    GUI.Box (new Rect (0,40,100,50), "Ammo x " + ammo);
    GUI.Box (new Rect (0,60,100,50), "Power " + power);

    //GUI.Box (Rect (Screen.width - 100,0,100,50), "Top-right");
    //GUI.Box (Rect (0,Screen.height - 50,100,50), "Bottom-left");
    //GUI.Box (Rect (Screen.width - 100,Screen.height - 50,100,50), "Bottom-right");
}