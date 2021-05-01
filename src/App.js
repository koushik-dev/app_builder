import { Route, Switch } from "react-router-dom";
import "./App.css";
import Layout from "./components/layout/Layout";
import Home from "./views/home/Home";

function App() {
  return (
    <Layout>
      <Home>
        <Switch>
          <Route exact path="/router">
            <p>Router</p>
          </Route>
          <Route exact path="/design">
            <p>Design</p>
          </Route>
        </Switch>
      </Home>
    </Layout>
  );
}

export default App;
