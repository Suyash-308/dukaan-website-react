import './header.css'
import PrimaryBtn from './PrimaryBtn';
import dukaanLogo from "/logo.svg"


function Header() {
    const links=["Product","Company","Resource","Pricing"]
  return (
    <header>
        <div className='header-left'>
            <a href="/">
            <img src={dukaanLogo} alt="dukaan logo"  className='logo'/>
            </a>
            <ul>
                {links.map((link)=>{
                    return ( <li key={link}>
                    <a href="/" >{link}</a>
                </li>
                );
                })}
            </ul>
        </div>
        <div className="header-right">
            <a href="/">Sign in</a>
           <PrimaryBtn title={"Start free"}/>
        </div>
    </header>

  )
}

export default Header