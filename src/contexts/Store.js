import React, { useState, useEffect, useContext } from "react";
import { getAllArticles } from "../services/contentful";

//import moment for timestamp comparison
import moment from 'moment';

export const StoreContext = React.createContext();

export const StoreProvider = ({ children }) => {
  const [featuredArticle, setFeaturedArticle] = useState(null);
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    (async function fetchArticles() {
      setArticles(await getAllArticles());
    }());
  }, []);

  useEffect(() => {
    (async function fetchFeatured() {
      setFeaturedArticle(await getFeatured());
    }());
  }, [articles]);


  // TODO: Update the method below to return the latest featured article from the list of articles
  
  const getFeatured = () => {   
    
      //return an array of all articles flagged as featured
        const articleArray = articles.filter((item) => {
        return item.fields.featured;
      })
      //convert date with getTime to sort by number - sort all articles flagged as featured      
      articleArray.sort((a,b) => {return moment.unix(b.fields.date.moment) - moment.unix(a.fields.date.moment)});

      
      
      //return the first (most recent) article in the array
      return articleArray[0];
  };


  return (
    <StoreContext.Provider
      value={{ featuredArticle, getFeaturedArticle: getFeatured, articles}}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
