import { NavLink } from "react-router-dom";
import logo from "./imgs/IMG_1738.jpg";
import "./style.css";

export default function Contacts(){
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
                 
                >
                  My Works
                </NavLink>
              </li>
              <li>
                <NavLink to="/contacts"
                activeStyle={{
                    backgroundColor: "rgb(0, 128, 128, 0.5)",
                    borderRadius: "10px",
                    
                  }}
                >Contact me
                
                </NavLink>
              </li>
            </section>
          </ul>
        </nav>


       <section class="contacts">
       <dl>
                <dt><b>phone number:</b></dt>
                <dd>123-3445</dd>
                
            </dl>
            <dl>

                <dt><b>e-mail address:</b></dt>
                <dd>xy@gmail.com</dd>
                
            </dl>
          
       </section>
  
  
      </body>
    );
    
}