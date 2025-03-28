import React, { useState } from "react";
import { Button, Container, Typography, Paper, Drawer, Toolbar, ListItem, ListItemIcon, ListItemText, List } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Home, Edit, CloudUpload } from "@mui/icons-material";

const UploadToDrive = () => {
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate= useNavigate()

  const handleUpload = async () => {
    setUploading(true);
    setMessage("");

    try {
      const letter = localStorage.getItem("draftLetter") || "No content available.";
      
      const response = await axios.post("https://editor-backend-woad.vercel.app/auth/upload", { letter });

      if (response.data.success) {
        setMessage("Letter successfully uploaded to Google Drive!");
      } else {
        setMessage("Upload failed. Please try again.");
      }
    } catch (error) {
      setMessage("An error occurred while uploading.");
      console.log(error);
    }

    setUploading(false);
  };

  return (
    <>
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
    <Container
      maxWidth="md"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-start",
        minHeight: "80vh",
        marginLeft: "20vw",
        
      }}
    >
      <Paper
        elevation={3}
        style={{
          padding: "30px",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Upload Letter to Google Drive
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={handleUpload}
          disabled={uploading}
        >
          {uploading ? "Uploading..." : "Upload to Drive"}
        </Button>
        {message && (
          <Typography
            variant="body1"
            style={{ marginTop: "10px", color: "green" }}
          >
            {message}
          </Typography>
        )}
      </Paper>
    </Container>
    </>
  );
};

export default UploadToDrive;
