import { React, useState, useEffect } from 'react';
import News from './News';
import { useSearchParams } from 'react-router-dom';



export default function Sportnews() {
  const [articles, setArticles] = useState([])
  const [searchParams] = useSearchParams();


  useEffect(() => {
   const fetchIt = async ()=>{
    await fetch(`/api/v2/everything?q=${searchParams.get('q')}&apiKey=a85abafdd40249398d40a7794a9506a1`)
      .then(res => res.json())
      .then(data => {
        setArticles(data.articles)

      })
   }
   

   

   fetchIt()
  })

  
  
  return (
          <div className="news">
     {
        articles.length !== 0 ? articles.map((news,index)=><News  key={index} data={news}/>):'no news found'
      }
     </div>
  )
}



// import React, { useState, useEffect } from 'react';
// import SearchBar from './SearchBar';
// import NewsList from './NewsList';
// import { useSearchParams } from 'react-router-dom';
// const SearchPage = (props) => {
//   const [input, setInput] = useState('');
//   const [newsListDefault, setNewsListDefault] = useState();
//   const [newsList, setNewsList] = useState([]);
//   const [searchParams] = useSearchParams();


//   useEffect(() => {
//     const fetchData = async () => {
//       return await fetch(`https://newsapi.org/v2/everything?q=${searchParams.get('q')}&apiKey=a85abafdd40249398d40a7794a9506a1`)
//         .then(response => response.json())
//         .then(data => {
//           setNewsList(data.articles);
          
//         });
//     }
//     fetchData()
//     console.log(searchParams.get('q'));
//   }, []);

//   return (
//     <>
//       <h1>News List</h1>
//       {console.log(newsList)}
//       <div className='searchList'>
//       {
//         newsList.length !==0 ?
//         newsList.map((news, index) => {
//           return (
//             <NewsList key={index} news={news} />
//           )
//         })
//         :
//         'No news found'
//       }
//       </div> 
//     </>
//   );
// }

// export default SearchPage

