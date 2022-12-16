import React, { useState } from "react";

function Footer({setQueryProp}) {
    
    const [inputValue, setInputValue] = useState("");

    const saveInput = (event)=>{
        setInputValue(event.target.value)
    }

    const addSearchKeyword = ()=>{
        if(!inputValue){
            return alert("No results found without any keywords");
        } else {
            setQueryProp(`query=${inputValue}`)
            setInputValue("")
        }
    }

  return (
    <div className='container-footer'>
      <div className='row'>
        <div className='col-12'>
            <hr className='horizontal-break'/>
                <nav className='termsAndConditions'>
                    <p>Guidelines </p> |
                    <p>FAQ </p> |
                    <p>Lists </p> |
                    <p>API </p> |
                    <p>Security </p> |
                    <p>Legal </p> |
                    <p>Apply to YC </p> |
                    <p>Contact</p>
                </nav>
            <div className='searchField'>
                <input type={"text"}
                    value={inputValue}
                    placeholder="Type new keywords here"
                    onChange={saveInput}
                >
                </input>
                <button onClick={addSearchKeyword}>Search</button>
            </div>
function Footer({ setQuery }) {
  const [searchKeyword, setSearchKeyword] = useState("");

  // const addSearchKeyword = ()=>{
  //     if(!inputValue){
  //         return "Type some keywords"
  //     } else {
  //         setSearchKeyword([...searchKeyword, inputValue])
  //         setInputValue("")
  //     }
  // }

  return (
    <div className="container-footer">
      <div className="row">
        <div className="col-12">
          <hr className="horizontal-break" />
          <nav className="termsAndConditions">
            <p>Guidelines </p>
            <p>FAQ </p>
            <p>Lists </p>
            <p>API </p>
            <p>Security </p>
            <p>Legal </p>
            <p>Apply to YC </p>
            <p>Contact</p>
          </nav>
          <div className="searchField">
            <input
              type={"search"}
              value={searchKeyword}
              placeholder="Type new keywords here"
              onChange={(e) => setSearchKeyword(e.target.value)}
            />

            <button onClick={()=> {setQuery(searchKeyword)}}>search</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
