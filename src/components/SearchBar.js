import React from 'react';

const SearchBar = ({keyword,keywordHandler}) => {
 
  return (
    <input 
     
     key="random1"
     className='inputSearch'
    
     placeholder={"search news"}
     onChange={(e) => keywordHandler(e.target.value)}
    />
  );
}

export default SearchBar