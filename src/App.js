import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

// styles
import "./styles/index.scss";

// components
import StyledHeader from "./components/StyledHeader/StyledHeader";
import Goal from "./components/Goal/Goal";

function App() {
  return (
    <Router>
      <div>
        <StyledHeader />
        <Switch>
          <Route path="/" exact component={Goal} />
          <Route path="/goal" component={GoalPage} />
          <Route path="/next" component={NextPage} />
          <Route path="/final" component={FinalPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
