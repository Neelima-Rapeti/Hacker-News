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
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true)
    axios
      .get(`http://hn.algolia.com/api/v1/search?${query}`)
      .then((response) => {
/*         const list = []
        response.data.hits.forEach((key) => {
          list.push({key})
          console.log(list)
        }) */
        setPosts(response.data.hits);
        setLoading(false);
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
      {loading ? (<div className='loading-message'>
        <img src="https://retchhh.files.wordpress.com/2015/03/loading4.gif" alt="loading-image" style={{height: '100px'}}/>
        </div>) : (<Posts posts={currentPosts}/>)}
        <Pagination postsPerPage={postsPerPage} totalPosts = {posts.length} paginate={paginate}/>
      <Footer setQueryProp={setQuery}/>

    </div>
);
}



