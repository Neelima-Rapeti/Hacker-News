import React from 'react';
const Header = () => {
  return (
    <>
   
    <nav className="navbar-background nav-style login ">

        <div className='login' >
        <div className='hacker'>
            
        <a className="font-color" href="#">
      Hacker News
      </a>
      
        </div>
      

      <div>
        <ul className="nav-style">
        <li className="nav-item active nav-li">
            <a className="font-color">
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
      </div> 
      <div>
      <div className="nav-style">
        
        <a className="font-color" href="#">
      login
      </a>
        </div>
        </div>
    </nav>
    </>
  );
};
     

  
export default Header;