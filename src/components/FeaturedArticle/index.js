//this component returns the latest featured article 
//reccomended: diplay above the article list

import React from "react";

import styled from 'styled-components';


//getFeatured is a function from the store context passed to this component from App
const FeaturedArticle = ({getFeaturedArticle}) => {

    //get the featured article
    const featured=getFeaturedArticle();


    return (
        <FeatureBox>
            <FeatureIMG src="https://via.placeholder.com/100.png"/>
            {/* wait for featured to be available before rendering the featured article */}
            {featured && <FeatureTitle>{featured.fields.title}</FeatureTitle>}
            {featured && <FeatureCategory>{featured.fields.category}</FeatureCategory>}         
        </FeatureBox>
    )
}

const FeatureBox = styled.div`
    position: relative;
    flex: 0 0 48%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background:white;
    margin: 5px;
    height: 600px;
    width: 100%;
    height: fit-content;
    /* background: yellow; */
`;

const FeatureIMG = styled.img`
    flex: 0 0 50%;
    margin: 0 0 15px 0;
`;

const FeatureTitle = styled.h3`  
    
`

const FeatureCategory = styled.div`
    font-size: small;
`;

export default FeaturedArticle;
