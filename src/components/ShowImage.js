import React from 'react';
import FastImage from 'react-native-fast-image';

const ShowImage = ({url, width, height}) => {
  return (
    <FastImage
      source={{
        uri: `https://smlv01.s3-sa-east-1.amazonaws.com/${url}`,
      }}
      style={{
        width,
        height,
      }}
      resizeMode="contain"
    />
  );
};

export default ShowImage;
