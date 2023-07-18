import React, { useEffect, useState } from "react";
import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import photos from "./mocks/photos";
import topics from "./mocks/topics";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData";



const App = () =>{
  const { selectPhoto, closeModal, getPhotosByTopic, state } = useApplicationData();
  return (
    <div className="App">
      <HomeRoute
        photos={state.photos}
        topics={state.topics}
        onPhotoSelected={selectPhoto}
        getPhotosByTopic = {getPhotosByTopic}
      />
      {state.isModalOpen && (
        <PhotoDetailsModal
          photo={state.selectedPhoto}
          photos={state.photos}
          setModalOpen={closeModal}
        />
      )}
    </div>
  );
};


export default App;