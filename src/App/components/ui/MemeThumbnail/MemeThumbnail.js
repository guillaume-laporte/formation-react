import React from 'react';
import PropTypes from 'prop-types';
import style from './MemeThumbnail.module.css';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { MemeSVGViewer } from 'orsys-tjs-meme';

const MemeThumbnail = (props) => {
  return (
    <div className={style.MemeThumbnail} data-testid="MemeThumbnail">
      {
        props.memes.map((m, i) => <div key={`thumbnail-meme-` + i}> 
          <Link to={'/meme/' + m.id}>
            <MemeSVGViewer image={props.images.find(img => img.id === m.imageId)} meme={m} basePath='' />
            <br />
            {m.titre}
          </Link>
        </div>)
      }
    </div>
  );
}

MemeThumbnail.propTypes = {
  // children: PropTypes.any.isRequired
};

export default MemeThumbnail;

export const MemeThumbnailStoredConnected = (props) => {
  const storeProps = useSelector(storeState => {
    return {
      images: storeState.ressources.images,
      memes: storeState.ressources.memes
    };
  });
  return (
    <MemeThumbnail {...storeProps} />
  );
}