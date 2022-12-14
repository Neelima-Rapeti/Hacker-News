import Header  from './Components/Header';
import { useState, useEffect } from "react";
import './App.css';

import Footer from './Components/Footer';
import axios from "axios";

export default function App() {

const [post, setPost] = useState([]);
console.log();

     useEffect(() => {
      axios.get("http://hn.algolia.com/api/v1/search?tags=front_page")
      .then((response) => {
      setPost(response.data.hits);
     });
      }, []);
  return (
  <div>
    <Header />
    {post?.map((posts) => {
                return(
                  <li> {posts.title}</li>

                ) })}
  <Footer post={post} />
    </div>
  
  );
}


