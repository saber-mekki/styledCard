import React from "react";
//import { useHistory } from "react-router-dom";
import { Card, CardBody } from "reactstrap";
import IconLinux from "./linuxIcon";
import IconIos from "./iosIcons";
import IconWindows from "./windowsIcons";
import { DashboardIcon } from "./DashboardIcon";
import classnames from "classnames";

import "./styles.css";

export default function App() {
  return (
    <React.Fragment>
      <div className="container ">
        <Card>
          <div className="imgBx">
            {
              <img
                src="https://sp-ao.shortpixel.ai/client/to_auto,q_glossy,ret_img,w_2000/https://aures.com/wp-content/uploads/2022/09/YUNO-II_6589-768x656.png"
                alt=""
              />
            }
            {
              //<DashboardIcon fill="white" width="450px" height="100px" />
            }
          </div>
          <div className="contentBx">
            <h2>Title</h2>
            <div className="size">
              <div className="pl-2">
                {" "}
                <IconLinux
                  style={{ width: "81px", height: "53px", fill: "beige" }}
                />{" "}
              </div>
              <div className="pl-2">
                {" "}
                <IconIos
                  style={{ width: "81px", height: "53px", fill: "beige" }}
                />{" "}
              </div>
              <div className="pl-2">
                {" "}
                <IconWindows
                  style={{ width: "81px", height: "53px", fill: "beige" }}
                />{" "}
              </div>
            </div>
            {
              // <div className="color">
              //<h3>Color :</h3>
              //  <span></span>
              //  <span></span>
              // <span></span>
              //  </div>
            }
            {
              //<a href="#">Buy Now</a>
            }
          </div>
        </Card>
      </div>
    </React.Fragment>
  );
}
