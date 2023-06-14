import React from 'react';
import { useSelector } from 'react-redux';
import { MemeSVGViewer } from 'orsys-tjs-meme'

export const MemeSVGViewerStoredConnected = (props) => {
  const storeProps = useSelector(storeState => {
    return {
      image: storeState.ressources.images.find(img => img.id === storeState.current.imageId),
      meme: storeState.current
    };
  });
  return (
    <MemeSVGViewer {...props} {...storeProps} />
  );
}
