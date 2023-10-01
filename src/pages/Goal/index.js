import React, { useEffect, useState } from "react";
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
import "../Exercise/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchGoal, addGoal, deleteGoal } from "./goalActions";
import Loader from "../../components/Loader";

const Goal = () => {
  const dispatch = useDispatch();
  const { goalItems, loading } = useSelector((state) => state.goal);
  const [goalName, setGoalName] = useState("");
  const [description, setDescription] = useState("");
  const [calories, setCalories] = useState("");
  const [date, setDate] = useState("");
  const [formError, setFormError] = useState(false);

  const [status, setStatus] = useState("");

  useEffect(() => {
    dispatch(fetchGoal());
  }, [dispatch]);

  const handleAddGoal = () => {
    if (
      goalName.trim() === "" ||
      description.trim() === "" ||
      calories.trim() === "" ||
      date.trim() === "" ||
      status === "" ||
      date.trim() === ""
    ) {
      return setFormError(true);
    }
    const goalData = { goalName, calories, description, status, date };
    dispatch(addGoal(goalData));
    setFormError(false);
    setGoalName("");
    setCalories("");
    setDescription("");
    setStatus("");
    setDate("");
  };

  const handleRemoveGoal = (goalId) => {
    dispatch(deleteGoal(goalId));
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
        Goal Tracker
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
          ) : !loading && goalItems?.length === 0 ? (
            <Typography
              variant="h5"
              mt={2}
              color="#ca661d"
              gutterBottom
              textAlign="center"
            >
              Please Add Goals
            </Typography>
          ) : (
            <Typography
              variant="h5"
              gutterBottom
              color="#ca661d"
              textAlign="center"
            >
              Added Goal
            </Typography>
          )}
          <Grid container spacing={2}>
            {!loading &&
              goalItems?.map((goal, index) => (
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
                          Name : {goal.goalName}
                        </Typography>
                        <Typography variant="body1">
                          Description : {goal.description}
                        </Typography>
                        <Typography variant="body2">
                          Date : {goal.date}
                        </Typography>
                        <Typography variant="body2">
                          Calories : {goal.calories} kcal
                        </Typography>
                        <Typography variant="body2">
                          Status : {goal.status}
                        </Typography>
                      </div>
                      <div>
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={() => handleRemoveGoal(goal._id)}
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
              Add Goal
            </Typography>
            <TextField
              label="Goal Name"
              fullWidth
              className="text-field-exercise"
              value={goalName}
              onChange={(e) => setGoalName(e.target.value)}
            />
            <TextField
              label="Goal Desciption"
              fullWidth
              className="text-field-exercise"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <InputLabel sx={{ background: "white", padding: "0 5px" }}>
              Target Date
            </InputLabel>
            <TextField
              type="date"
              fullWidth
              className="text-field-exercise"
              value={date}
              InputLabelProps={{
                shrink: true // This will make the label shrink when a date is selected
              }}
              onChange={(e) => setDate(e.target.value)}
            />
            <TextField
              label="Calories"
              fullWidth
              type="number"
              className="text-field-exercise"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
            />
            <FormControl fullWidth className="text-field-exercise">
              <InputLabel sx={{ background: "white", padding: "0 5px" }}>
                Status
              </InputLabel>
              <Select
                value={status}
                onChange={(e) => setStatus(e.target.value)}
              >
                <MenuItem value="In Progress">In Progress</MenuItem>
                <MenuItem value="Achieved">Achieved</MenuItem>
                <MenuItem value="Abandoned">Abandoned</MenuItem>
              </Select>
            </FormControl>
            {formError ? (
              <p className="error-message">Please fill all this fields</p>
            ) : null}
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddGoal}
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

export default Goal;
