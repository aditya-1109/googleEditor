import React from "react";
import { AppBar, Toolbar, Typography, Button, Drawer, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Home, Edit, CloudUpload, Logout } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Clear user session (Adjust based on auth logic)
    localStorage.removeItem("userToken");
    navigate("/login");
  };

  return (
    <div style={{ display: "flex" }}>
      {/* Sidebar */}
      <Drawer variant="permanent" sx={{ width: 240, flexShrink: 0, "& .MuiDrawer-paper": { width: 240, boxSizing: "border-box" } }}>
        <Toolbar />
        <List>
          <ListItem button onClick={() => navigate("/")}>
            <ListItemIcon><Home /></ListItemIcon>
            <ListItemText primary="Home" />
          </ListItem>
          <ListItem button onClick={() => navigate("/editor")}>
            <ListItemIcon><Edit /></ListItemIcon>
            <ListItemText primary="Create Letter" />
          </ListItem>
          <ListItem button onClick={() => navigate("/upload")}>
            <ListItemIcon><CloudUpload /></ListItemIcon>
            <ListItemText primary="Upload to Drive" />
          </ListItem>
        </List>
      </Drawer>

      {/* Main Content */}
      <div style={{ flexGrow: 1, padding: 20 , display: "flex", justifyContent: "flex-start", alignItems: "center", flexDirection: "column", width: "80vw", }}>
      <Typography variant="h2" sx={{m: 5}}>Letter App</Typography>
        <AppBar position="static">
        
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>Dashboard</Typography>
            <Button color="inherit" startIcon={<Logout />} onClick={handleLogout}>Logout</Button>
          </Toolbar>
        </AppBar>
        <Typography variant="h4" style={{ marginTop: 20 }}>Welcome to Your Dashboard</Typography>
        <Typography variant="body1">Use the sidebar to navigate.</Typography>
      </div>
    </div>
  );
};

export default Dashboard;
