//this component returns a list of articles sourced from Contentful

import React, { useState } from "react";

//remove once the style components have been moved to local styled components file
import styled from "styled-components";

//import componenets
import Article from "../Article";

export const ArticleList = (articles) => {

    //state variable for pagination
    const [page, setPage] = useState(articles.articles.slice(0,6));
    const [pageNumber, setPageNumber] = useState(1);

    // console.log(page);
    //


    // const loadMore = () => {

    //     setPage([...page, articles.articles.slice((pageNumber*6, pageNumber*6+6))])

    //     setPageNumber(pageNumber + 1);

    // }

    return (
        <ListWrapper>
            {/* populate the list */}
            {articles.articles.map((item) =>{
                return (                    
                <Article key={Math.floor(Math.random()*42000000)} article={item}/>                     )
            })}      
            <LoadMoreButton>Load more</LoadMoreButton>           
        </ListWrapper>



    )





}


//start with the style here and then move it to the local styled-components

const ListWrapper = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: flex-start;
    padding: 10px;
    background: peachpuff;
    width: fit-content;
    height: fit-content;
`;

const LoadMoreButton = styled.button`
    color: white;
    font-size: large;
    width: 150px;
    height: 60px;
    background: black;
    border-color: white;
    border-style: solid;
    border-width: 2px;
    border-radius: 30px;
    cursor: pointer;
`;

export default ArticleList;
