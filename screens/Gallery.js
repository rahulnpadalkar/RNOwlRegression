import React, {useEffect, useState} from 'react';
import {API_KEY} from '@env';
import MasonryList from 'react-native-masonry-list';

export const Gallery = () => {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    const getPhotos = async () => {
      const res = await fetch('https://api.pexels.com/v1/curated', {
        method: 'GET',
        headers: {
          Authorization: API_KEY,
          'Content-Type': 'application/json',
        },
      });
      const {photos: photoSource} = await res.json();
      const photoUrls = photoSource.map(({src}) => {
        return {uri: src.medium};
      });
      setPhotos(photoUrls);
    };
    getPhotos();
  }, []);

  return <MasonryList images={photos} />;
};
