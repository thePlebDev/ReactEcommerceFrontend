import React,{ useState,useRef,useEffect } from 'react';
import {Switch,Link} from 'react-router-dom';


const NavBar = ({navLinks,icon})=>{
  const [hoverIndex,setHoverIndex] = useState(-1)
  const [navOpen,setNavOpen] = useState(false)
  const ulRef = useRef(null);

  const handleClick =(e)=>{
    if( !e || ulRef.current.contains(e.target)){
      console.log('inside')
    }else{
      setNavOpen(false)
    }

  }


  useEffect(()=>{
    console.log('mounted')

    document.addEventListener('mousedown',handleClick,true)
    return()=>{
      document.removeEventListener('mousedown',handleClick,true)

    }
  },[])


  return(
    <nav
      className="responsive-toolbar"
      style={{ background:'background'}}>
      <ul
        style={{ background:'background'}}
        className={navOpen? 'active':''}
        ref={ulRef}
        onClick={()=>handleClick()}>
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
