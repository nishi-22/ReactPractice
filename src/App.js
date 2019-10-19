import React from "react";
import "./App.css";
import DisplayItems from "./components/DisplayItems";
import Form from "./components/form";
import Api from "./components/Api";
import ClickCounter from "./components/hoc/ClickCounter";
import { Route, Link, BrowserRouter } from "react-router-dom";
import Hooks from "./components/hooks";
import HoverCounter from "./components/hoc/HoverCounter";
import ComponentC from "./components/contex/ComponentC";
import { UserProvider } from "./components/contex/userContext";
import FragmentDemo from './components/fragmentDemo';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      items: [
        { id: 1, name: "Nishi" },
        { id: 2, name: "hardik" },
        { id: 3, name: "Smit" }
      ],
      flag: false,
      text: "show"
    };
  }

  handleShowHide = () => {
    this.setState({
      flag: !this.state.flag,
      text: "hide"
    });
    console.log(this.state.flag);
  };

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <h1>component life</h1>
          <button type="button" onClick={this.handleShowHide}>
            {this.state.text}
          </button>
       {this.state.flag && <DisplayItems items={this.state.items} />} 

          <nav>
            <ul>
              <li style={{ display: "inline-block", margin: "20px" }}>
                <Link to="/">Home</Link>
              </li>
              <li style={{ display: "inline-block", margin: "20px" }}>
                <Link to="/form">Form Page</Link>
              </li>
              <li style={{ display: "inline-block", margin: "20px" }}>
                <Link to="/hooks">React Hooks</Link>
              </li>
            </ul>
          </nav>
          <Route path="/" component={Api} exact />
          <Route path="/form" component={Form} exact />
          <Route path="/hooks" component={Hooks} exact />

          <ClickCounter />
          <HoverCounter />
     {/*  //Providing value to app component */}
          <UserProvider value='Vishwas'>
            <ComponentC />
          </UserProvider>

          <FragmentDemo/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
