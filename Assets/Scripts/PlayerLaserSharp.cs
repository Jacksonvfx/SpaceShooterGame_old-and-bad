using UnityEngine;
using System.Collections;
using System;



public class PlayerLaserSharp : MonoBehaviour 
{
    LineRenderer line;

    void Start () 
    {
        line = gameObject.GetComponent<LineRenderer>();
        line.enabled = false;
    }
    void Update () 
    {
        if(Input.GetKeyDown("z"))
        {
            StopCoroutine("FireLaser");
            StartCoroutine("FireLaser");
        }
    }
    IEnumerator FireLaser()
    {
        line.enabled = true;

        while(Input.GetKey("z"))
        {
            Ray ray = new Ray(transform.position, transform.forward);
            RaycastHit hit;

            line.SetPosition(0, ray.origin);

            if(Physics.Raycast(ray, out hit, 100))
            {
				
				line.SetPosition(1, hit.point);
                if(hit.rigidbody)
                {
					if(hit.rigidbody.tag=="Enemy"){
						
						
					}
                  // hit.rigidbody.AddForceAtPosition(transform.forward * 10, hit.point);
                }
            }
            else
                line.SetPosition(1, ray.GetPoint(100));

            yield return null;
        }

        line.enabled = false;
    }
}