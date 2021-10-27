import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Category from "./Category";
import Footer from "./Footer";
import CategoryDescription from "./CategoryDescription";
import Error from "./Error";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

const navHeader = [
    {"href": "/", "text": "Главная"},
    {"href": "/about", "text": "О сайте"},
    {"href": "/cat", "text": "Категории"}
]

function App() {
  return (
    <>
      <Header nav = {navHeader}/>
      <Footer/>
        <Router>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/about" component={About} />
                <Route exact path="/cat" component={Category} />
                <Route path="/cat/:Name" component={CategoryDescription} />
                <Route component={Error}/>
            </Switch>
        </Router>
    </>
  );
}

export default App;
