import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// styles
import "./styles/index.scss";

// components
import StyledHeader from "./components/StyledHeader/StyledHeader";
import Goal from "./components/Goal/Goal";
import MeasureWeight from "./components/MeasureWeight/MeasureWeight";
import DestructiveBehavior from "./components/DestructiveBehavior/DestructiveBehavior";
import PhysicalExercise from "./components/PhysicalExercise/PhysicalExercise";

function App() {
  return (
    <Router>
      <div className="container">
        <StyledHeader />
        <Routes>
          <Route path="/" element={<Goal />} />
          <Route path="/weight" element={<MeasureWeight />} />
          <Route
            path="/destructive-behavior"
            element={<DestructiveBehavior />}
          />
          <Route path="/final" element={<PhysicalExercise />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
