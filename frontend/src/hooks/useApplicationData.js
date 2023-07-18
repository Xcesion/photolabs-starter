import { useState, useReducer, useEffect } from "react";
import photos from "../mocks/photos";
import reducer, {ACTIONS} from "../reducer/reducer";

/* insert app levels actions below */

const useApplicationData = () => {
  const initialState = {
    likedPhotos: [],
    photos: [],
    topics: [],
    selectedPhoto: [],
    isModalOpen: false
  };

  const [likedPhotos, setLikedPhotos] = useState([]);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handlePhotoLike = (photoId) => {
    if (likedPhotos.includes(photoId)) {
      setLikedPhotos(likedPhotos.filter((id) => id !== photoId));
    } else {
      setLikedPhotos([...likedPhotos, photoId]);
    }
  };

  const getPhotosByTopic = async(topicId) => {
    try {
      const response = await fetch(`http://localhost:8001/api/topics/photos/${topicId}`);
      const data = await response.json();
      dispatch({ type: ACTIONS.SET_PHOTO_DATA, payload: data });//this dispatch return from the useReducer line 9
    } catch (error) {
      console.error("Error fetching photos by topic:", error);
    }
  };
  // console.log(state.photos);

  // const [selectedPhoto, setSelectedPhoto] = useState({});
  // const [isModalOpen, setModalOpen] = useState(false);
  
  const [photos, setPhotos] = useState([]);
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    fetch("./api/photos")
      .then((res) => res.json())
      // .then((data) => setPhotos(data))
      .then((data) => dispatch({type: ACTIONS.SET_PHOTO_DATA, payload: data}))
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
    
    fetch("./api/topics")
      .then((res) => res.json())
      // .then((data) => setTopics(data))
      .then((data) => dispatch({type: ACTIONS.SET_TOPIC_DATA, payload: data}))
      .catch((error) => {
        console.error("Error fetching topics:", error);
      });
  }, []);

  const selectPhoto = (id) => {
    dispatch({type: ACTIONS.SELECT_PHOTO, payload: id});
  };
  
  const closeModal = () => {
    dispatch({type: ACTIONS.CLOSE_MODEL});
  };

  return {
    selectPhoto,
    closeModal,
    getPhotosByTopic,
    state
  };
};

export default useApplicationData;