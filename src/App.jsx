import React from "react";
import UploadForm from "./UploadForm/UploadForm";
import FileList from "../FileList/FileList";

function App() {
  return (
    <div className="container mt-5">
      {/* <p>Hey I'm not builded</p> */}
      <UploadForm />
      <FileList />
    </div>
  );
}

export default App;
// ..
