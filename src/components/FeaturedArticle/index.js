//this component returns the latest featured article 
//reccomended: diplay above the article list

import React from "react";


const FeaturedArticle = (articles) => {

    const featuredArticle = articles.articles.filter((item) => {
        return item.fields.featured;
    })

    

    // console.log(featuredArticle.fields(date).sort((a,b) => b[1] - a[1]));

    return (


        <div>Featured Article</div>




    )





}


export default FeaturedArticle;
