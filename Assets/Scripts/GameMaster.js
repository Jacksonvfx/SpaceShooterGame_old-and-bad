#pragma strict

import UnityEngine.UI;
var PowerSlider: UnityEngine.UI.Slider;

static var currentScore : int = 0;
static var lives : int = 3;
static var ammo : float = 10.0;
static var power : int = 0;
static var bulletDamage : int = 1;

function Start () {
    currentScore = 0;
    lives = 3;
    PowerSlider = GameObject.Find("PowerSlider").GetComponent(UnityEngine.UI.Slider);
}


function OnGUI ()
{
    GUI.Box (new Rect (0,0,100,50), "Score " + currentScore);
    GUI.Box (new Rect (0,20,100,50), "Health x " + lives);
    GUI.Box (new Rect (0,40,100,50), "Ammo x " + ammo);
    //GUI.Box (new Rect (0,60,100,50), "Power " + power);

    //GUI.Box (Rect (Screen.width - 100,0,100,50), "Top-right");
    //GUI.Box (Rect (0,Screen.height - 50,100,50), "Bottom-left");
    //GUI.Box (Rect (Screen.width - 100,Screen.height - 50,100,50), "Bottom-right");
}

function Update ()
{
    PowerSlider.value = power;
}
