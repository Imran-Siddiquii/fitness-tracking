import React, { useState, useEffect } from "react";
import {
  TextField,
  Button,
  Paper,
  Typography,
  IconButton,
  Grid
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import "../Exercise/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchFood, addFood, deleteFood } from "./foodActions";
import Loader from "../../components/Loader";

const Food = () => {
  const [foodName, setFoodName] = useState("");
  const [calories, setCalories] = useState("");
  const [protein, setProtein] = useState("");
  const [carbohydrates, setCarbohydrates] = useState("");
  const [fat, setFat] = useState("");
  const dispatch = useDispatch();
  const { foodItems, loading } = useSelector((state) => state.food);
  const [formError, setFormError] = useState(false);
  useEffect(() => {
    dispatch(fetchFood());
  }, [dispatch]);
  const handleAddFood = () => {
    if (
      foodName.trim() === "" ||
      calories.trim() === "" ||
      protein.trim() === "" ||
      carbohydrates.trim() === "" ||
      fat.trim() === ""
    ) {
      return setFormError(true);
    }

    const foodData = {
      foodName,
      calories,
      protein,
      carbohydrates,
      fat
    };
    dispatch(addFood(foodData));
    setFormError(false);
    setFoodName("");
    setCalories("");
    setProtein("");
    setCarbohydrates("");
    setFat("");
  };

  const handleRemoveFood = (foodId) => {
    dispatch(deleteFood(foodId));
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
        Food Tracker
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
          ) : !loading && foodItems?.length === 0 ? (
            <Typography
              variant="h5"
              mt={2}
              color="#ca661d"
              gutterBottom
              textAlign="center"
            >
              Please Add Foods
            </Typography>
          ) : (
            <Typography
              variant="h5"
              color="#ca661d"
              gutterBottom
              textAlign="center"
            >
              Added Food
            </Typography>
          )}
          <Grid container spacing={2}>
            {!loading &&
              foodItems?.map((food, index) => (
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
                          Name: {food.foodName}
                        </Typography>
                        <Typography variant="body1">
                          Calories : {food.calories} kcal
                        </Typography>
                        <Typography variant="body2">
                          Protein : {food.protein} grams
                        </Typography>
                        <Typography variant="body2">
                          Carbohydrates : {food.carbohydrates} grams
                        </Typography>
                        <Typography variant="body2">
                          Fat : {food.fat} grams
                        </Typography>
                      </div>
                      <div>
                        <IconButton
                          edge="end"
                          aria-label="delete"
                          onClick={() => handleRemoveFood(food._id)}
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
              Add Food
            </Typography>
            <TextField
              label="Food Name"
              fullWidth
              className="text-field-exercise"
              value={foodName}
              onChange={(e) => setFoodName(e.target.value)}
            />
            <TextField
              label="Calories"
              fullWidth
              type="number"
              className="text-field-exercise"
              value={calories}
              onChange={(e) => setCalories(e.target.value)}
            />
            <TextField
              label="Protein (in grams)"
              fullWidth
              type="number"
              className="text-field-exercise"
              value={protein}
              onChange={(e) => setProtein(e.target.value)}
            />
            <TextField
              label="Carbohydrates (in grams)"
              fullWidth
              className="text-field-exercise"
              type="number"
              variant="outlined"
              value={carbohydrates}
              onChange={(e) => setCarbohydrates(e.target.value)}
              InputProps={{
                style: { borderColor: "#ca661d" } // Outline color
              }}
            />
            <TextField
              label="Fat (in grams)"
              fullWidth
              className="text-field-exercise"
              type="number"
              variant="outlined"
              value={fat}
              onChange={(e) => setFat(e.target.value)}
              InputProps={{
                style: { borderColor: "#ca661d" } // Outline color
              }}
            />
            {formError ? (
              <p className="error-message">Please fill all this fields</p>
            ) : null}
            <Button
              variant="contained"
              color="primary"
              onClick={handleAddFood}
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

export default Food;
