import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";

// styles
import "./styles/index.scss";

// components
import StyledHeader from "./components/StyledHeader/StyledHeader";
import Goal from "./components/Goal/Goal";
import MeasureWeight from "./components/MeasureWeight/MeasureWeight";
import DestructiveBehavior from "./components/DestructiveBehavior/DestructiveBehavior";
import PhysicalExercise from "./components/PhysicalExercise/PhysicalExercise";

function App() {
  const location = useLocation();

  return (
    <div className="container">
      <StyledHeader />
      <AnimatePresence mode="wait">
        <Routes key={location.pathname} location={location}>
          <Route path="/" element={<Goal />} />
          <Route path="/weight" element={<MeasureWeight />} />
          <Route
            path="/destructive-behavior"
            element={<DestructiveBehavior />}
          />
          <Route path="/physical-exercise" element={<PhysicalExercise />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
