import React,{ useState } from 'react';
import {Switch,Link} from 'react-router-dom';


const NavBar = ({navLinks,icon})=>{
  const [hoverIndex,setHoverIndex] = useState(-1)
  const [navOpen,setNavOpen] = useState(false)
  const [mouseState,setMouseState] = useState(false)

  return(
    <nav
      className="responsive-toolbar"
      style={{ background:'background'}}>
      <ul
        style={{ background:'background'}}
        className={navOpen? 'active':''}
        onMouseEnter={()=>console.log('mouse on')}
        onMouseLeave={()=>console.log('mouse off')}
        >
        <figure onClick={()=>{setNavOpen(!navOpen)}}>
            <i className="fas fa-bars"></i>
        </figure>
        {navLinks.map((link,index)=>{
          return<li key={index}
                    onMouseEnter={()=>setHoverIndex(index)}
                    onMouseLeave={()=>setHoverIndex(-1) }
                    style={{background:hoverIndex === index? ('#999' || '#999'):''}}>
            <Link to={`${link.path}`} >
              { link.text }
              <i className={link.icon}></i>
            </Link>
          </li>
        })}
      </ul>
    </nav>
  )
}

export default NavBar
