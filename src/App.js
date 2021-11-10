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
  const { articles } = store;

  return (
    <>
      <GlobalStyle />
      <main className="App">
        <Header />       

        {/* TODO: Blog things goes here. Use the components folder! */}
        <Container>
          <h1>Hello 🌎</h1>
          {/* featured article container */}
          <FeaturedArticle />
          <ArticleList articles={articles} />
        </Container>

        <Footer />
      </main>
    </>
  );
}

export default App;
