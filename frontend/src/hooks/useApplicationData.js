import { useState } from 'react';
import photos from "../mocks/photos";

const useApplicationData = () => {
  const [selectedPhoto, setSelectedPhoto] = useState({});
  const [isModalOpen, setModalOpen] = useState(false);

  const selectPhoto = (id) => {
    const filterPhotos = photos.filter(photo => photo.id === id);
    setModalOpen(true);
    setSelectedPhoto(filterPhotos[0]);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return {
    selectedPhoto,
    isModalOpen,
    selectPhoto,
    closeModal
  };
};

export default useApplicationData;