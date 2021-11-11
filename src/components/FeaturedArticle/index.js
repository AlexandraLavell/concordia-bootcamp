//this component returns the latest featured article 
//reccomended: diplay above the article list

import React from "react";

import styled from 'styled-components';



const FeaturedArticle = ({getFeaturedArticle}) => {

    const article = getFeaturedArticle();
    console.log(article);

    return (
        <FeatureBox>
        <FeatureIMG src="https://via.placeholder.com/100.png"/>
        <FeatureTitle>{article.fields.title}</FeatureTitle>
        <FeatureCategory>{article.fields.category}</FeatureCategory>          
    </FeatureBox>
    )
}

const FeatureBox = styled.div`
    position: relative;
    flex: 0 0 48%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    background:white;
    margin: 5px;
    height: 600px;
    width: 100%;
    /* height: fit-content; */
`;

const FeatureIMG = styled.img`
    flex: 0 0 50%;
    margin: 0 0 15px 0;
`;

const FeatureTitle = styled.h3`  
    
`

const FeatureCategory = styled.div`
    position: absolute;
    bottom: 10px;
    font-size: small;
`;

export default FeaturedArticle;
