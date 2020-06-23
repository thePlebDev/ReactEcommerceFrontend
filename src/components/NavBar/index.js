import React,{ useState } from 'react';
import {Switch,Link} from 'react-router-dom';


const NavBar = ({navLinks})=>{
  const [ hoverIndex,setHoverIndex ] = useState(-1)
  const [ navOpen,setNavOpen ] = useState(false)

  return(
    <nav className="responsive-toolbar">
      <ul className={navOpen? 'active': ''}>
        <figure onClick={()=>{setNavOpen(!navOpen)}}>
          <i class="fas fa-bars fa-2x"></i>
        </figure>
        {navLinks.map((links,index)=>{
          return<li onMouseEnter={()=>setHoverIndex(index)}
                    onMouseLeave={()=>setHoverIndex(-1)}
                    style={{ background: hoverIndex === index ?('#999' || ''):''}}>
              <Link to={`${links.path}`} >
                {links.text}
              </Link>
            </li>
        })}
      </ul>
    </nav>
  )
}

export default NavBar
