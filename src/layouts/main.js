// import  { BrowserRouter, HashRouter, Switch, Route } from "react-router-dom";
import  { BrowserRouter, HashRouter, Switch, Route } from "react-router-dom";

import Navbar from "../components/navbar/navbar";
import Home from "../components/home/home";
import About from "../components/about/about";
import Contact from "../components/contact/contact";
import Message from "../components/message/message";

function Main() {
    return (
        <div>
        <HashRouter>
            <Navbar></Navbar>
            <div className="content">
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/about" component={About}/>
                <Route path="/message" component={Message}/>
            </Switch>
            </div>
        </HashRouter>
        </div>
    )
}


export default Main;