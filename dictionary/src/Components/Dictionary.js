import React, { useState } from "react";
import axios from "axios";
import Results from "./Results";
import "../Styles/Dictionary.css";

const Dictionary = (props) => {
  let [keyword, setKeyword] = useState(props.defaultKeyWord);
  let [results, setResults] = useState(null);
  let [loaded, setLoaded] = useState(false);

  function handleResponse(response) {
    setResults(response.data[0]);
  }

  function search() {
    let apiUrl = `https://api.dictionaryapi.dev/api/v2/entries/en_US/${keyword}`;
    axios.get(apiUrl).then(handleResponse);
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
        <section>
          <h1>What word do you want to look up?</h1>
        <form onSubmit={handleSubmit}>
          <input type="search" onChange={handleKeyWordChange}
          defaultValue={props.defaultKeyWord} />

        </form>
        <div className="hint">Suggested words: sunset, wine, yoga...</div>
        </section>
        <Results results={results}/>
      </div>
  );
  } else {
    load();

  }
  
};

export default Dictionary;
