import "./App.css";
import FooterComponent from "./components/FooterComponent";
import HeaderComponent from "./components/HeaderComponent";
import ListEmployeeComponent from "./components/ListEmployeeComponent";
import { Route, Switch } from "react-router-dom";
import CreateEmployeeComponent from "./components/CreateEmployeeComponent";
import ViewEmployeeComponent from "./components/ViewEmployeeComponent";



function App() {
  return (
    <div className="App">
      <HeaderComponent />
      <div className="container">
        <Switch>
          <Route exact path="/" component={ListEmployeeComponent} />
          <Route path="/employees" component={ListEmployeeComponent} />
          <Route path="/add-employee/:id" component={CreateEmployeeComponent} />
          <Route path = "/view-employee/:id" component = {ViewEmployeeComponent}></Route>
        </Switch>
      </div>
      <FooterComponent />
    </div>
  );
}

export default App;
