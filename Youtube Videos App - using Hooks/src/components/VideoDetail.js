import React from 'react';

import Spin from 'antd/es/spin';
import { LoadingOutlined } from '@ant-design/icons';

const VideoDetail = ({ video }) => {
  const antIcon = <LoadingOutlined style={{ fontSize: 100 }} spin />;
  if (!video) {
    return <Spin indicator={antIcon} />
  
  }

  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return (
    <div>
      <div className="ui embed">
        <iframe title="video player" src={videoSrc} />
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;