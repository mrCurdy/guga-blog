import React, { useEffect, useState } from "react";
import axios from "axios";
import { ListGroup, Stack } from "react-bootstrap";
// import port from '../constants.js';

const FileList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    // Fetch file list from the server
    const fetchFiles = async () => {
      try {
        const response = await axios.get("http://localhost:8080/file-list"); //const port
        setFiles(response.data);
      } catch (error) {
        console.error("Error fetching file list:", error);
      }
    };

    fetchFiles();
  }, []);

  return (
    <Stack gap={2} className="col-md-5 mx-auto mt-2">
      <ListGroup>
        {files.length > 0 ? (
          files.map((file, index) => (
            <ListGroup.Item key={index}>
              <a
                href={`http://localhost:8080/uploads/${file}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {file}
              </a>
            </ListGroup.Item>
          ))
        ) : (
          <p>No files available.</p>
        )}
      </ListGroup>
    </Stack>
  );
};

export default FileList;
