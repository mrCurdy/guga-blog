import React, { useState } from "react";
import axios from "axios";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Alert from "react-bootstrap/Alert"; // Add missing Alert import

function UploadForm() {
  const [file, setFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState(null);

  // Handle file selection
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
    setUploadStatus(null); // Reset upload status on new file selection
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!file) {
      setUploadStatus({
        type: "danger",
        message: "Please select a file to upload.",
      });
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(
        "http://localhost:8080/upload",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      setUploadStatus({
        type: "success",
        message: `File "${file.name}" uploaded successfully.`,
      });
      setFile(null); // Clear the file input
    } catch (error) {
      console.error("Error uploading file:", error);
      setUploadStatus({
        type: "danger",
        message: "Failed to upload file. Please try again.",
      });
    }
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Stack gap={2} className="col-md-5 mx-auto">
          <h1 className="text-center">Welcome to AirBox</h1>
          <InputGroup className="mb-5">
            <Form.Control type="file" onChange={handleFileChange} />
          </InputGroup>
          <Button variant="secondary" type="submit">
            Upload
          </Button>
          <Button variant="outline-secondary" type="button">
            Back
          </Button>
        </Stack>
      </Form>
      {uploadStatus && (
        <Alert className="mt-3" variant={uploadStatus.type}>
          {uploadStatus.message}
        </Alert>
      )}
    </>
  );
}

export default UploadForm;
