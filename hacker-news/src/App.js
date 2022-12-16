import Header  from './Components/Header';
import './App.css';
import Footer from './Components/Footer';
import Posts from './Components/Posts';
import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Pagination from './Components/Pagination';


export default function App() {

  const [posts, setPosts] = useState([]);
  const [query, setQuery] = useState("tags=front_page");
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(5);


  useEffect(() => {
    axios
      .get(`http://hn.algolia.com/api/v1/search?${query}`)
      .then((response) => {
/*         const list = []
        response.data.hits.forEach((key) => {
          list.push({key})
          console.log(list)
        }) */
        setPosts(response.data.hits);
      })
      .catch((err) => {
        console.log(err);
        console.log("check for error!!");
      });
  }, [query]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber)=> setCurrentPage(pageNumber);

  return (
    <div className="mainContainer">
      <Header />
        
      <Posts posts={currentPosts}/>
        {/* if the length (total numbers) of the posts is zero, that means if no posts are found, display a content with warning message */}
        {posts.length === 0 && <h2 id='no-match-found'>No match found, try again!</h2>}
        <Pagination postsPerPage={postsPerPage} totalPosts = {posts.length} paginate={paginate}/>
      <Footer setQueryProp={setQuery}/>

    </div>
);
}



