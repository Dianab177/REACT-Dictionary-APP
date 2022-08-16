import React, { useState } from 'react';
import axios from "axios";
import '../Styles/Dictionary.css';

const Dictionary = () => {
  let [keyword, setKeyword] = useState("");

function handleResponse(response) {
  console.log(response.data[0]);
}

  function search(event) {
 event.preventDefault();
 alert(`Searching for ${keyword} definition`);
 let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en/${keyword}`;
 axios.get(apiUrl).then(handleResponse);
  }
 

  function handleKeyWordChange(event) {
    setKeyword(event.target.value);
    console.log(event);
  }
  return (
    <div className='container'>
    <div className='dictionary'>
     <form onSubmit={search}>
      <input type="search"
      onChange={handleKeyWordChange}/>
     </form>
    </div>
    </div>
  )
}

export default Dictionary