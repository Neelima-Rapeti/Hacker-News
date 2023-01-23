import axios from 'axios';
import React, { useState, useEffect } from 'react'
import Posts from "./Posts";

function New () {
    const [posts, setPosts] = useState([]);
    const [query, setQuery] = useState("");

    useEffect(() => {
      axios
        .get(`http://hn.algolia.com/api/v1/search_by_date?query=${query}`)
        .then((response) => {
          console.log(response.data);
          setPosts(response.data.hits);
        })
        .catch((err) => {
          console.log(err);
        });
    }, [query]);

    return (
      <Posts posts={setPosts} />
      );
  }

export default New
