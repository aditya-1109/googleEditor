import React, { useState } from "react";
import { TextField, Button, Container, Typography, Paper, Drawer, ListItem, ListItemIcon, Toolbar, List, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { Home, Edit, CloudUpload } from "@mui/icons-material";
const CreateLetter = () => {
  const [letter, setLetter] = useState("");
  const navigate= useNavigate();
  const handleSaveDraft = () => {
    localStorage.setItem("draftLetter", letter);
    alert("Letter saved as draft!");
  };

  return (
    <Container maxWidth="lg"
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minHeight: "100vh",

    }}>

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
      <Paper elevation={3} style={{ padding: "20px", marginTop: "20px" , width: "90vw", height: "80vh", display: "flex", flexDirection:"column", justifyContent: "center", alignItems: "flex-start"}}>
        <Typography variant="h5" gutterBottom>
          Create a Letter
        </Typography>
        <TextField
          fullWidth
          multiline
          rows={18}
          variant="outlined"
          label="Write your letter here..."
          value={letter}
          onChange={(e) => setLetter(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          style={{ marginTop: "10px" }}
          onClick={handleSaveDraft}
        >
          Save Draft
        </Button>
      </Paper>
    </Container>
  );
};

export default CreateLetter;
