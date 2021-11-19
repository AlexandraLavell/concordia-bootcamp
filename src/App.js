import GlobalStyle from "./base-styles";
import { useStore } from "./contexts/Store";

import Container from "./components/Container";
import Header from "./components/Header";
import Footer from "./components/Footer";

//workshop components
import ArticleList from "./components/ArticleList";
import FeaturedArticle from "./components/FeaturedArticle";

function App() {
  const store = useStore();

  // console.log("TODO: use the store to create the base UI", store);

  //consume content object with a key/value "articles"
  const { articles, getFeaturedArticle, featuredArticle } = store;

  return (
    <>
      <GlobalStyle />
      <main className="App">
        <Header />       

        {/* TODO: Blog things goes here. Use the components folder! */}
        <Container>
          {/* featured article container send the state variable featured article */}
          <FeaturedArticle getFeaturedArticle={getFeaturedArticle} featuredArticle={featuredArticle} />
          <ArticleList articles={articles} featuredArticle={featuredArticle} />
        </Container>

        <Footer />
      </main>
    </>
  );
}

export default App;
