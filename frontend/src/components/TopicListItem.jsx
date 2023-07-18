import React from 'react';

import '../styles/TopicListItem.scss';
const TopicListItem = ({id, title, getPhotosByTopic}) => {
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