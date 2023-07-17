import React, { useEffect, useState } from "react";
import "./App.scss";
import HomeRoute from "./routes/HomeRoute";
import photos from "./mocks/photos";
import topics from "./mocks/topics";
import PhotoDetailsModal from "./routes/PhotoDetailsModal";
import useApplicationData from "./hooks/useApplicationData";



const App = () => {
  const { selectedPhoto, isModalOpen, selectPhoto, closeModal } =
    useApplicationData();

  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch("./api/photos")
      .then((res) => res.json()) // Parse the response as JSON
      .then((data) => setPhotos(data)) // Update the state with the data
      .catch((error) => {
        console.error("Error fetching data:", error);
      });

    fetch("./api/topics")
      .then((res) => res.json())
      .then((data) => setTopics(data))
      .catch((error) => {
        console.error("Error fetching topics:", error);
      });
  }, []);

  return (
    <div className="App">
      <HomeRoute
        photos={photos}
        topics={topics}
        onPhotoSelected={selectPhoto}
      />
      {isModalOpen && (
        <PhotoDetailsModal
          photo={selectedPhoto}
          photos={photos}
          setModalOpen={closeModal}
        />
      )}
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
