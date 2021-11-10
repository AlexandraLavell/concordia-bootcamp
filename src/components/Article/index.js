//this component returns an individual article component
//for use in the Article List component

//TODO add onclick funtion to the article

import React from "react";

//remove once the style components have been moved to local styled components file
import styled from "styled-components";

export const Article = (article) => {

   
    const articleFields = article.article.fields;
    
    // console.log(article.article.fields.title);


    return (
        <ArticleBox tabindex="1">
            <ArticleIMG src="https://via.placeholder.com/100.png"/>
            <ArticleTitle>{articleFields.title}</ArticleTitle>
            <ArticleCategory>{articleFields.category}</ArticleCategory>          
        </ArticleBox>
    )
}

// placeholder

//start with the style here and then move it to the local styled-components


const ArticleBox = styled.button`
    position: relative;
    flex: 0 0 48%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background:white;
    margin: 5px;
    height: 400px;
    cursor: pointer;
`;

const ArticleIMG = styled.img`
    flex: 0 0 50%;
    margin: 0 0 15px 0;
`;

const ArticleTitle = styled.h3`  
    
`

const ArticleCategory = styled.div`
    position: absolute;
    bottom: 10px;
    font-size: small;
`;

export default Article;
