import "./App.css";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Layout from "./Components/Layout/Layout";

function App() {
  return (
    <div className="App">
      <Layout>
        <Header />
        <Main />
        <Footer />
      </Layout>
    </div>
  );
}

export default App;
