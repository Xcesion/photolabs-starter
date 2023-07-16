import React from "react";
import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import photos from "./mocks/photos";
import topics from "./mocks/topics";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData";

const App = () => {
  const { selectedPhoto, isModalOpen, selectPhoto, closeModal } = useApplicationData();

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        onPhotoSelected={selectPhoto}
      />
      {isModalOpen && <PhotoDetailsModal photo={selectedPhoto} photos={photos} setModalOpen={closeModal} />}
    </div>
  );
};

export default App;

// import React, { useState } from "react";
// import "./App.scss";
// import HomeRoute from "./routes/HomeRoute";
// import photos from "./mocks/photos";
// import topics from "./mocks/topics";

// import PhotoDetailsModal from "./routes/PhotoDetailsModal";
// const App = () => {
//   // Note: Rendering a single component to build components in isolation
//   const [selectedPhoto, setSelectedPhoto] = useState({});
//   console.log("show this",selectedPhoto);
  
//   const [isModalOpen, setModalOpen] = useState(false);
  
//   const selectPhoto = (id) => {
//     const filterPhotos = photos.filter(photo => photo.id === id);//return the array of selcted photo
//     console.log("show what's id", id);
//     setModalOpen(true);
//     setSelectedPhoto(filterPhotos[0]);
//   };
  
//   return (
//     <div className="App">
//       <HomeRoute
//         photos={photos}
//         topics={topics}
//         onPhotoSelected={selectPhoto}
//       />
//       {isModalOpen && <PhotoDetailsModal photo={selectedPhoto} photos={photos} setModalOpen={setModalOpen} />}
//     </div>
//   );
// };

// export default App;