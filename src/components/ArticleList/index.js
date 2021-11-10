//this component returns a list of articles sourced from Contentful

import React from "react";

//remove once the style components have been moved to local styled components file
import styled from "styled-components";

//import componenets
import Article from "../Article";

export const ArticleList = (articles) => {

    console.log(articles.articles);
    //

    return (
        <ListWrapper>
            {/* populate the list */}
            {articles.articles.map((item) =>{
                return (                    
                <Article article={item}/>                     )
            })}                 
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

export default ArticleList;
