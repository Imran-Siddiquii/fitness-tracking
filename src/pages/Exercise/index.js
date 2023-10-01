import "./styles.css";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getExercises, addExercise, deleteExercise } from "./exerciseActions";
import {
  TextField,
  Button,
  Paper,
  Typography,
  IconButton,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Grid
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import Loader from "../../components/Loader";
const Exercise = () => {
  const [exerciseName, setExerciseName] = useState("");
  const [duration, setDuration] = useState("");
  const [exerciseType, setExerciseType] = useState("");
  const [formError, setFormError] = useState(false);

  const dispatch = useDispatch();
  const { exercises, loading } = useSelector((state) => state.exercise);

  useEffect(() => {
    dispatch(getExercises());
  }, [dispatch]);
  const handleAddExercise = () => {
    if (
      exerciseName.trim() === "" ||
      duration.trim() === "" ||
      exerciseType === ""
    ) {
      return setFormError(true);
    }

    const caloriesBurned = calculateCaloriesBurned(
      exerciseType,
      parseInt(duration)
    );

    const exercise = {
      exerciseName,
      duration: parseInt(duration),
      exerciseType,
      calories: caloriesBurned
    };
    dispatch(addExercise(exercise));
    setFormError(false);
    setExerciseName("");
    setDuration("");
    setExerciseType("");
  };

  const handleRemoveExercise = (id) => {
    dispatch(deleteExercise(id));
  };

  const calculateCaloriesBurned = (type, duration) => {
    // Your calorie calculation logic.
    return duration * (type === "running" ? 10 : type === "swimming" ? 15 : 5);
  };

  return (
    <div className="exercise-container" sx={{ border: "1px solid gray" }}>
      <Typography
        variant="h4"
        mt={6}
        textAlign="center"
        color="#ca661d"
        gutterBottom
      >
        Exercise Tracker
      </Typography>
      <Grid
        container
        spacing={2}
        sx={{
          border: "1px solid #ca661d",
          padding: "1rem",
          margin: "1rem",
          borderRadius: "5px"
        }}
      >
        <Grid item xs={12} sm={8}>
          {loading ? (
            <Loader />
          ) : !loading && exercises?.length === 0 ? (
            <Typography
              variant="h5"
              mt={2}
              color="#ca661d"
              gutterBottom
              textAlign="center"
            >
              Please Add Exercises
            </Typography>
          ) : (
            <Typography
              variant="h5"
              color="#ca661d"
              gutterBottom
              textAlign="center"
            >
              Added Exercises
            </Typography>
          )}
          <Grid container spacing={2}>
            {!loading &&
              exercises?.map((exercise, index) => (
                <Grid item xs={12} sm={6} key={index}>
                  <Paper elevation={3} className="exercise-list-item">
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "space-between",
                        padding: "15px"
                      }}
                    >
                      <div>
                        <Typography variant="h6" color="#ca661d">
                          Name : {exercise.exerciseName}
                        </Typography>
                        <Typography variant="body1">
                          Duration : {exercise.duration} minutes
                        </Typography>
                        <Typography variant="body2">
                          Calories Burned : {exercise.calories} kcal
                        </Typography>
                        <Typography variant="body2">
                          Type : {exercise.exerciseType}
                        </Typography>
                      </div>
                      <div>
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={() => handleRemoveExercise(exercise._id)}
                        >
                          <DeleteIcon style={{ color: "#ca661d" }} />
                        </IconButton>
                      </div>
                    </div>
                  </Paper>
                </Grid>
              ))}
          </Grid>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Paper elevation={3} className="exercise-form">
            <Typography variant="h5" gutterBottom color="#ca661d">
              Add Exercise
            </Typography>
            <TextField
              label="Exercise Name"
              fullWidth
              className="text-field-exercise"
              value={exerciseName}
              onChange={(e) => setExerciseName(e.target.value)}
            />
            <TextField
              label="Duration (minutes)"
              fullWidth
              className="text-field-exercise"
              type="number"
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
            />
            <FormControl fullWidth className="text-field-exercise">
              <InputLabel sx={{ background: "white", padding: "0 5px" }}>
                Exercise Type
              </InputLabel>
              <Select
                value={exerciseType}
                onChange={(e) => setExerciseType(e.target.value)}
              >
                <MenuItem value="running">Running</MenuItem>
                <MenuItem value="swimming">Swimming</MenuItem>
                <MenuItem value="cycling">Cycling</MenuItem>
              </Select>
            </FormControl>
            {formError ? (
              <p className="error-message">Please fill all this fields</p>
            ) : null}
            <Button
              variant="contained"
              onClick={handleAddExercise}
              style={{
                marginTop: "16px",
                backgroundColor: "#ca661d",
                color: "white"
              }}
            >
              Add Exercise
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Exercise;
