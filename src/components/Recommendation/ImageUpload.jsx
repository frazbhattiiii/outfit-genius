import React, { useState } from "react";
import { Box, IconButton, TextField, Button } from "@mui/material";
import { useTheme } from "@mui/system";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

const ImageUpload = ({}) => {
  const [file, setFile] = useState();
  const [image, setImage] = useState();

  const theme = useTheme();

  const handleChange = (e) => {
    console.log(e.target.files[0]);
    setFile(URL.createObjectURL(e.target.files[0]));
    setImage(e.target.files[0]);
  };

  const handleUpload = () => {
    const formData = new FormData();
    formData.append("image", image);
    console.log(formData);

    if (image) {
      axios
        .post("http://localhost:3000/image/upload", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then(() => {
          toast.success("Image Uploaded!");
        })
        .catch((err) => toast.error("Error uploading image"));
    } else {
      alert("Please upload an image!");
    }
  };

  return (
    <>
    <ToastContainer />
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
          padding: "2rem",
          maxWidth: "60rem",
          maxHeight: "30rem",
        }}
      >
        <Box
          sx={{
            display: "flex",
            width: "100%",
            height: "40rem",
            border: "1px dashed",
            borderRadius: "5px",
            justifyContent: "center",
            alignItems: "center",
            "@media (max-width: 724px)": {
              height: "20rem",
            },
          }}
        >
          {!file && (
            <IconButton
              color="primary"
              aria-label="upload picture"
              component="label"
            >
              <input
                hidden
                accept="image/*"
                type="file"
                onChange={handleChange}
              />
              <CloudUploadIcon />
            </IconButton>
          )}
          {file && (
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img
                src={file}
                alt=""
                style={{
                  width: "90%",
                  height: "90%",
                }}
              />
            </Box>
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            sx={{
              margin: "1rem",
              padding: "1rem 2rem",
              fontSize: ".76rem",
              fontWeight: "bold",
              color: "white",
              backgroundColor: "GrayText",
              "&:hover": {
                backgroundColor: "brown",
              },
            }}
            onClick={handleUpload}
          >
            Recommend
          </Button>
        </Box>
      </Box>
    </>
  );
};

export default ImageUpload;
