import React, { useEffect, useState } from "react";
import "./Header.css";
import Logo from "../../assets/logo.png";
import bars from "../../assets/bars.png";
import { Link } from "react-scroll";

export default function Header() {
  const [menuOpened, setMenuOpened] = useState(false);
  const mobile = window.innerWidth <= 768 ? true : false;
  useEffect(() => {
    console.log(mobile, "mobile");
  }, [mobile]);
  return (
    <div className="header">
      <img src={Logo} alt="logo" className="logo" />
      {menuOpened === false && mobile ? (
        <div className="hamburger" onClick={()=>setMenuOpened(true)}>
          <img src={bars} alt="" style={{ width: "2rem", height: "2rem" }} />
        </div>
      ) : (
        <ul className="header-menu">
          <li><Link onClick={()=>setMenuOpened(false)} spy={true}>Home</Link></li>

          <li ><Link onClick={()=>setMenuOpened(false)} spy={true} to='programs' >Programs</Link>Programs</li>

          <li >
            <Link to='why-us'  onClick={()=>setMenuOpened(false)} spy={true}> Why us</Link>
          </li>

          <li > <Link to='plan'  onClick={()=>setMenuOpened(false)} spy={true}
              smooth={true}>Plans</Link>
          </li>

          <li >
            <Link to='testimonials' 
            onClick={()=>setMenuOpened(false)}
            spy={true}
              smooth={true}
            >
            Testimonial</Link></li>
        </ul>
      )}
    </div>
  );
}
