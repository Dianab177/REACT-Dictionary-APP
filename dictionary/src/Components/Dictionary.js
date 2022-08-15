import React, { useState } from 'react';
import '../Styles/Dictionary.css';

const Dictionary = () => {
  let [keyword, setKeyword] = useState("");

  function search(event) {
 event.preventDefault();
 alert('Searching');
  }
  function handleKeyWordChange(event) {
    console.log(event);
  }
  return (
    <div className='container'>
    <div className='dictionary'>
     <form onSubmit={search}>
      <input type="search"
      autoFocus={true}
      onChange={handleKeyWordChange}/>
     </form>
    </div>
    </div>
  )
}

export default Dictionary