import React from 'react';
const Header = () => {
  return (
    <>
   
    <nav className="navbar-background">
      <a className="font-color" href="#">
      Hacker News
      </a>
      

      <div  >
        <ul className="flex-box">
          <li className="nav-item active nav-li">
            <a className="nav-link font-color" href="#">
              new 
            </a>
           
          </li>
          <li className="nav-item nav-li">
            <a className="nav-link font-color" href="#">
              past
            </a>
          </li>
          <li className="nav-item nav-li">
            <a className="nav-link font-color" href="#">
            comments
            </a>
          </li>
          
        
          <li className="nav-item nav-li">
            <a className="nav-link font-color" href="#">
            ask
            </a>
          </li>
          <li className="nav-item nav-li">
            <a className="nav-link font-color" href="#">
            show
            </a>
          </li>
          <li className="nav-item nav-li">
            <a className="nav-link font-color" href="#">
            jobs
            </a>
            </li>
            <li className="nav-item nav-li">
            <a className="nav-link font-color" href="#">
            submit
            </a>
            </li>
        </ul>
      </div>
    </nav>
    </>
  );
};
     

  
export default Header;