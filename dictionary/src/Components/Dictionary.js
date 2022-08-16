import React, { useState } from 'react';
import '../Styles/Dictionary.css';

const Dictionary = () => {
  let [keyword, setKeyword] = useState("");

  function search(event) {
 event.preventDefault();
 alert(`Searching for ${keyword} definition`);
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