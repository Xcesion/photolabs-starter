export const ACTIONS = {
  FAV_PHOTO_ADDED: "FAV_PHOTO_ADDED",
  FAV_PHOTO_REMOVED: "FAV_PHOTO_REMOVED",
  SET_PHOTO_DATA: "SET_PHOTO_DATA",
  SET_TOPIC_DATA: "SET_TOPIC_DATA",
  SELECT_PHOTO: "SELECT_PHOTO",
  DISPLAY_PHOTO_DETAILS: "DISPLAY_PHOTO_DETAILS",
  CLOSE_MODEL: "CLOSE_MODEL",
  GET_PHOTOS_BY_TOPIC: "GET_PHOTOS_BY_TOPIC"
};

const reducer = (state, action) => {
  switch (action.type) {
  case ACTIONS.FAV_PHOTO_ADDED: {
    const currentFavPhotos = [...state.likedPhotos];
    currentFavPhotos.push(action.payload.id);
    return { ...state, likedPhotos: currentFavPhotos };
  }
  case ACTIONS.FAV_PHOTO_REMOVED: {
    const currentFavPhotos = [...state.likedPhotos];
    const photoIndex = currentFavPhotos.findIndex(
      (favId) => favId === action.payload.id
    );
    currentFavPhotos.splice(photoIndex, 1);
    return {
      ...state,
      likedPhotos: currentFavPhotos,
    };
  }
  case ACTIONS.SET_PHOTO_DATA: {

    return {
      ...state,
      photos: action.payload
    };
  }
  case ACTIONS.SET_TOPIC_DATA: {

    return {
      ...state,
      topics: action.payload
    };
  }
  case ACTIONS.SELECT_PHOTO: {
    const filterPhotos = state.photos.filter((photo) => photo.id === action.payload);
    // setModalOpen(true);
    return {
      ...state,
      selectedPhoto: filterPhotos[0],
      isModalOpen: true
    };
  }
  case ACTIONS.CLOSE_MODEL: {
    return {
      ...state,
      isModalOpen: false
    };
  }


  default:
    throw new Error(
      `Tried to reduce with unsupported action type: ${action.type}`
    );
  }
};

export default reducer;