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
    })();
  }, []);

  // TODO: Update the method below to return the latest featured article from the list of articles
  
  

  const getFeatured = () => {

    console.log(articles);

    const findArticle = articles.filter((item) => {
      return item.fields.featured;
    })

    //convert date with getTime to sort by number      
    findArticle.sort((a,b) => {return moment.unix(b.fields.date.moment) - moment.unix(a.fields.date.moment)});

    // console.log(findArticle);

    // return null;
    return findArticle[0];
  };

  return (
    <StoreContext.Provider
      value={{ featuredArticle, getFeaturedArticle: getFeatured, articles }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);
