import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";
import dictionary from "../assets/dictionary.png";
import "../Styles/Dictionary.css";


const Dictionary = (props) => {
  let [keyword, setKeyword] = useState(props.defaultKeyWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);
  let [photos, setPhotos] = useState(null);

  function handleDictionaryResponse(response) {
    setResults(response.data[0]);
  }
  
  function handlePexelsResponse(response) {
    setPhotos(response.data.photos);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleDictionaryResponse);

    let pexelsApiKey = '563492ad6f91700001000001a21448e4d7f04896bc2a33937d70f6bf';
    let pexelsUrl =`https://api.pexels.com/v1/search?query=${keyword}&per_page=8`;
    let headers={Authorization:`Bearer ${pexelsApiKey}`};
    axios.get(pexelsUrl, { headers: headers }).then(handlePexelsResponse);
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
    }
  function handleKeyWordChange(event) {
    setKeyword(event.target.value);
  }

  function load() {
    setLoaded(true);
    search();
  }

  if (loaded) {
    return (
      <div className="dictionary">
        <img className="logo" src={dictionary} alt='logo'/>
        <section>
          <h1>What word do you want to look up?</h1>
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={handleKeyWordChange}
          defaultValue={props.defaultKeyWord} className="mb-2" /></form>
        <div className="hint">Suggested words: sunset, wine, yoga...</div>
        </section>
        <Results results={results}/>
        <Photos photos={photos}/>
      </div>
  );
  } else {
    load();

  }
  
};

export default Dictionary;
