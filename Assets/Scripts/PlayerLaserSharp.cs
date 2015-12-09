using UnityEngine;
using System.Collections;
using System;



public class PlayerLaserSharp : MonoBehaviour
{
    public GameObject PlayerLaserCollider;

    private GameObject laserCollider = null;

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
        } else {
            Destroy(laserCollider);
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
                hit.collider.gameObject.SendMessage("TakeDamage", 0.1);
                line.SetPosition(1, hit.point);
                if (hit.rigidbody && hit.rigidbody.tag == "Enemy") {
                    if (laserCollider == null) {
                        laserCollider = Instantiate(PlayerLaserCollider) as GameObject;
                        laserCollider.transform.parent = this.transform;
                        laserCollider.transform.localPosition = Vector2.zero;
                        laserCollider.transform.position = hit.point;
                    }
                }

                if (hit.collider == null) {
                    Destroy(laserCollider);
                }
            }
            else
                line.SetPosition(1, ray.GetPoint(100));
            yield return null;
        }

        line.enabled = false;
    }
}
