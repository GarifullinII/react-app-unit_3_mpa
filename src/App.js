import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Category from "./Category";
import Footer from "./Footer";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <>
      <Header/>
      <Footer/>
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/cat" component={Category} />
            </Switch>
        </Router>
    </>
  );
}

export default App;
