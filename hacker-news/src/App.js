import Header  from './Components/Header';
import { useState, useEffect } from "react";
import './App.css';

import Footer from './Components/Footer';
import axios from "axios";

export default function App() {


const [searchKeyword, setSearchKeyword] = useState('');
const [posts, setPosts] = useState([]);
const [query,setQuery]= useState("react");
console.log();

     useEffect(() => {
      axios.get(`http://hn.algolia.com/api/v1/search?query=${query}`)
      .then((response) => {
      setPosts(response.data.hits);
     });
      }, [query]);
  return (
  <div>
    <Header />
    {posts.map((post) => {
                return(
                  <li> {post.title}</li>

                ) })}
  <Footer setQuery={setQuery} />
    </div>
  
  );
}


