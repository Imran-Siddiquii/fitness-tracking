import "./styles.css";
import { Grid, Paper, Typography } from "@mui/material";
import useDashboard from "./dashboardApi";
import Loader from "../../components/Loader";
const API_URL = "https://fitness-api.imransiddiqui2.repl.co/api/v1/dashboard";
const Dashboard = () => {
  const { data, loading, error } = useDashboard(API_URL);

  if (loading) {
    return <Loader />;
  }

  if (error) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <div className="dashboard-container">
      <Typography variant="h4" mt={6} textAlign="center" color="#ca661d">
        Calories Tracker
      </Typography>
      <Grid
        container
        spacing={4}
        sx={{
          border: "1px solid #ca661d",
          padding: "1rem",
          margin: "1rem",
          borderRadius: "5px",
          paddingBottom: "43px",
          paddingRight: "38px"
        }}
      >
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} className="dashboard-box">
            <Typography variant="h6">Total Calories Burned</Typography>
            <Typography variant="h4" color="#ca661d">
              {data && data.totalBurnedCalories} kcal
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} className="dashboard-box">
            <Typography variant="h6">Total Calories Consumed</Typography>
            <Typography variant="h4" color="#ca661d">
              {data && data.totalConsumeCalories} kcal
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} className="dashboard-box">
            <Typography variant="h6">Total Calories Goal</Typography>
            <Typography variant="h4" color="#ca661d">
              {data && data.totalGoalCalories} kcal
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper elevation={3} className="dashboard-box">
            <Typography variant="h6">Remaining Calories to Goal</Typography>
            <Typography variant="h4" color="#ca661d">
              {data && data.totalRemainCalories} kcal
            </Typography>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;
