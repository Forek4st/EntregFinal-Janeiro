import CarWidget from '../carwidget/CarWidget.jsx'

const NavBar = () => {
  return (
    <header>
      
      <nav>
        <a href="index.html" className="navLogo">
          <img src="" alt="" />
        </a>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="index.html">My Account</a></li>
          <li><CarWidget /></li>      
        </ul>
        </nav>

    </header>
    
  )
}

export default NavBar