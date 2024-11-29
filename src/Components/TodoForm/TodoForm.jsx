import React, { useState } from "react";
import { TextField, Button, Box, Typography } from "@mui/material";
import { nanoid } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import { CreateNewTask } from "../TodoCounterSlice/TodoCounterSlice";

const TodoForm = ({ setOpen }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create the task object
    const todoData = {
      id: nanoid(), // Generate a unique ID for the task
      title,
      description,
      stage: "todo", // Default stage for new tasks
    };

    // Dispatch the action to create a new task
    dispatch(CreateNewTask(todoData));

    // Clear the form fields
    setTitle("");
    setDescription("");

    // Close the form
    setOpen(false);
  };

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 2,
        maxWidth: 400,
        margin: "0 auto",
        padding: 2,
        border: "1px solid #ccc",
        borderRadius: 2,
      }}
    >
      <Typography variant="h6" textAlign="center">
        Create New Task
      </Typography>
      <TextField
        label="Title"
        variant="outlined"
        fullWidth
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <TextField
        label="Description"
        variant="outlined"
        fullWidth
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        multiline
        rows={3}
        required
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        SUBMIT
      </Button>
    </Box>
  );
};

export default TodoForm;
