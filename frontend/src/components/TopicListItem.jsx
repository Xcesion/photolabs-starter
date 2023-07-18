import React from 'react';

import '../styles/TopicListItem.scss';
//when a user clicks on a topic it should make a GET request to /api/topic/:topic:id
//if a user clicks on nature the app should make a GET request /api/topic/photos/2 becasue the id of the nature topic is photo/2

const TopicListItem = ({id, slug, title, getPhotosByTopic}) => {
  return (
    <div className="topic-list__item" onClick={()=> getPhotosByTopic(id)}>
      {/* <a href = {`/topics/${slug}`} className="" > */}
      {title}
      {/* </a> */}
    </div>
  );
};

TopicListItem.defaultProps =   {
  "id": "1",
  "slug": "topic-1",
  "title": "Nature"
};

export default TopicListItem;