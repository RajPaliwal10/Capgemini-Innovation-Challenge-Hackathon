import { AppBar, Box, Toolbar, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
import { getToken } from "../services/LocalStorageService";
const Navbar = () => {
  const token = getToken("token");
  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{backgroundColor:'white'}}>
          <Toolbar>
            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              <img className="mainlogo" src="images/logo.png" alt="" />
            </Typography>

            <Button
              component={NavLink}
              to="/"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "yellow" : "" };
              }}
              sx={{ color: "black", textTransform: "none" }}
            >
              Home
            </Button>
            <Button
              component={NavLink}
              to="/radar"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "yellow" : "" };
              }}
              sx={{ color: "black", textTransform: "none" }}
            >
              My Radar
            </Button>

            <Button
              component={NavLink}
              to="/roadmap"
              style={({ isActive }) => {
                return { backgroundColor: isActive ? "yellow" : "" };
              }}
              sx={{ color: "black", textTransform: "none" }}
            >
              Roadmap
            </Button>

            {token ? (
              <Button
                component={NavLink}
                to="/tmap"
                style={({ isActive }) => {
                  return { backgroundColor: isActive ? "yellow" : "" };
                }}
                sx={{ color: "black", textTransform: "none" }}
              >
                T-Map
              </Button>
            ) : (
              <Button
                component={NavLink}
                to="/login"
                style={({ isActive }) => {
                  return { backgroundColor: isActive ? "yellow" : "" };
                }}
                sx={{ color: "black", textTransform: "none" }}
              >
                Login/Registration
              </Button>
            )}
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
};

export default Navbar;
