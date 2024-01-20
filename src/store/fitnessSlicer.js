import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const initialState = {
  goal: "",
  measures: {
    height: 0,
    weight: 0,
    measurementType: "Imperial",
  },
  destructives: [],
  trainingTimes: 0,
  loading: false,
};

// For future ui confirmation
export const confirm = createAsyncThunk("confirm", async () => {
  return [];
});

const fitnessSlicer = createSlice({
  name: "fitness",
  initialState,
  reducers: {
    passGoal(state, action) {
      state.goal = action.payload;
    },
    passMeasures(state, action) {
      state.measures = {
        measurementType: action.payload.measure,
        height: parseFloat(action.payload.height),
        weight: parseFloat(action.payload.weight),
      };
    },
    passDestructives(state, action) {
      state.destructives = [...action.payload];
    },
    passTrainingTimes(state, action) {
      state.trainingTimes = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(confirm.fulfilled, (state, action) => {
      state = { ...initialState };
    });
    builder.addCase(confirm.pending, (state, action) => {
      state.loading = true;
    });
  },
});

export const selectGoal = (state) => state.goal;
export const selectLoading = (state) => state.loading;
export const selectDestructives = (state) => state.destructives;
export const selectMeasures = (state) => state.measures;
export const selectExercise = (state) => state.exercise;

export const { passGoal, passDestructives, passMeasures, passTrainingTimes } =
  fitnessSlicer.actions;

export default fitnessSlicer.reducer;
