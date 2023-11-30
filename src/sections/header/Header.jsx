import "./header.css"

import headerData from "../../data/headerData"
import myPics from "../../asset/myPics.jpg"

const Header = () => {
  return (
   <header id="header">
    <div className="container header__container">
      <div className="header__profile">
<img src={myPics} alt="myPics"/>

      </div>
<h3>Onu Princeley Toochukwu</h3>
<p>Take a step closer to realizing your dream website or web app. Share your project details now for a contemporary, mobile-responsive, and high-performance website!</p>
   <div className="header__cta">
<a href="#contact" className="btn primary">Lets Talk</a>
<a href="#portfolio" className="btn light">My Works</a>
   </div>
   <div className="header__socials">
{headerData.map(item=><a key={item.id} href={item.link} 
target="_blank" rel="noopener noreferrer">{item.icon}</a>)}
   </div>
    </div>

   </header>
  )
}

export default Header
