import React from 'react';

import '../styles/TopicListItem.scss';


const TopicListItem = ({id, slug, title}) => {
  return (
    <div className="topic-list__item">
      {/* Insert React */}
      <a href = {`/topics/${slug}`} className="">
        {title}
      </a>
    </div>
  );
};

TopicListItem.defaultProps =   {
  "id": "1",
  "slug": "topic-1",
  "title": "Nature"
};

export default TopicListItem;