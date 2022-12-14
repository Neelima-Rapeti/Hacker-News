import React, { useState } from 'react';



function Footer() {
   
    const [searchKeyword, setSearchKeyword] = useState('');

  

    // const addSearchKeyword = ()=>{
    //     if(!inputValue){
    //         return "Type some keywords"
    //     } else {
    //         setSearchKeyword([...searchKeyword, inputValue])
    //         setInputValue("")
    //     }
    // }

  return (
    <div className='container-footer'>
      <div className='row'>
        <div className='col-12'>
            <hr className='horizontal-break'/>
                <nav className='termsAndConditions'>
                    <p>Guidelines </p>
                    <p>FAQ </p>
                    <p>Lists </p>
                    <p>API </p>
                    <p>Security </p>
                    <p>Legal </p>
                    <p>Apply to YC </p>
                    <p>Contact</p>
                </nav>
            <div className='searchField'>
                <input type={"search"}
                   value ={searchKeyword}
                    placeholder="Type new keywords here"
                   
                    onChange ={(e)=> setSearchKeyword(e.target.value)}>
                  
                  
                    
                         )}

                </input>
               
            </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
