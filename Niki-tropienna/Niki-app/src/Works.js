import { NavLink } from "react-router-dom";

import "./style.css";
import logo from "./imgs/IMG_1738.jpg";
import img1 from "./imgs/13b6f27d-91f0-4f39-b781-4eefde03d10e.JPG";
import img2 from "./imgs/IMG_1350.jpg"
import img3 from "./imgs/IMG_1349.jpg";
import img4 from "./imgs/IMG_1348.jpg";
import img5 from "./imgs/IMG_2202.jpg";
import img6 from "./imgs/IMG_2203.jpg";
import img7 from "./imgs/IMG_2204.jpg";
import img8 from "./imgs/IMG_2205.jpg";


export default function Works(){
    return(
        <body id="home">
        <nav>
          <ul id="nav">
            <li>
              {" "}
              <img src={logo} alt="" />{" "}
            </li>
            <li>
              <h3>Eni is drawing</h3>
            </li>
            <section class="item">
              <li>
                <NavLink
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li>
              <NavLink
                  to="/works"
                  activeStyle={{
                    backgroundColor: "rgb(0, 128, 128, 0.5)",
                    borderRadius: "10px",
                    
                  }}
                >
                  My Works
                </NavLink>
              </li>
              <li>
                <NavLink to="/contacts">Contact me</NavLink>
              </li>
            </section>
          </ul>
        </nav>


        <figure>
        <ul class="gallery">
            <li>
                <img 
               class="img1"
                src={img1} alt="kuty1" />
                <figcaption>utcai vegyes</figcaption>
            </li>
            <li>
                <img class="img2" src={img2} alt="kuty2" />
                <figcaption>utcai vegyes</figcaption>
            </li>

            <li>
                <img class="img3" src={img3} alt="alt3" />
                <figcaption>utcai vegyes</figcaption>
            </li>

            <li>
                <img class="img4" src={img4} alt="alt4" />
                <figcaption>utcai vegyes</figcaption>
            </li>
            <li>
                <img class="img5" src={img5} alt="alt4" />
                <figcaption>utcai vegyes</figcaption>
            </li>
            <li>
                <img class="img6" src={img6} alt="alt4" />
                <figcaption>utcai vegyes</figcaption>
            </li>
            <li>
                <img class="img7" src={img7} alt="alt4" />
                <figcaption>utcai vegyes</figcaption>
            </li>
            <li>
                <img class="img8" src={img8} alt="alt4" />
                <figcaption>utcai vegyes</figcaption>
            </li>
        </ul>
    </figure>
  
  
      </body>
    );
    
}