import { React, useContext } from 'react';
import { Database } from '../components/context/index';
import News from './News';
import "./home.css"

export default function Home() {

  const articles = useContext(Database)


  return (
    <>
      {/* {articles.articles.map(article =>{
            return(
             <News 
             author={article.author}
             title={article.title}
             description={article.description}
             url={article.url}
             urlToImage={article.urlToImage}
             publishedAt={article.publishedAt}


             />   
            )
      })} */}
    
     <div className="news" id='home'>
     
     {
      articles.length !== 0 ? articles.map((news,index)=><News key={index} data={news}/>):'yok'
      }
     </div>
     
    </>
  )
}