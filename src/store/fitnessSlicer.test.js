import fitnessReducer, {
  passGoal,
  passMeasures,
  passDestructives,
  passTrainingTimes,
  confirm,
} from "./fitnessSlicer";

describe("Fitness Reducer", () => {
  it("should handle passGoal", () => {
    const initialState = { goal: "" };
    const nextState = fitnessReducer(initialState, passGoal("New Goal"));
    expect(nextState.goal).toEqual("New Goal");
  });

  it("should handle passMeasures", () => {
    const initialState = {
      measures: { height: 0, weight: 0, measurementType: "Imperial" },
    };
    const payload = { measure: "Metric", height: "180", weight: "75" };
    const nextState = fitnessReducer(initialState, passMeasures(payload));
    expect(nextState.measures).toEqual({
      measurementType: "Metric",
      height: 180,
      weight: 75,
    });
  });

  it("should handle passDestructives", () => {
    const initialState = { destructives: [] };
    const payload = ["destructive1", "destructive2"];
    const nextState = fitnessReducer(initialState, passDestructives(payload));
    expect(nextState.destructives).toEqual(payload);
  });

  it("should handle passTrainingTimes", () => {
    const initialState = { trainingTimes: "" };
    const nextState = fitnessReducer(
      initialState,
      passTrainingTimes("New Training Times")
    );
    expect(nextState.trainingTimes).toEqual("New Training Times");
  });

  it("should handle confirm.pending", () => {
    const initialState = { loading: false };
    const nextState = fitnessReducer(initialState, confirm.pending);
    expect(nextState.loading).toEqual(true);
  });

  it("should handle confirm.fulfilled", () => {
    const initialState = {
      goal: "Old Goal",
      measures: { height: 0, weight: 0, measurementType: "Imperial" },
      destructives: [],
      trainingTimes: "",
      loading: false,
    };
    const nextState = fitnessReducer(initialState, confirm.fulfilled);
    expect(nextState).toEqual({
      goal: "Old Goal",
      measures: {
        height: 0,
        weight: 0,
        measurementType: "Imperial",
      },
      destructives: [],
      trainingTimes: "",
      loading: false,
    });
  });
});
