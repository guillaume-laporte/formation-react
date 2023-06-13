import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './MemeForm.module.css';

export const initialStateMemeForm = {}

const MemeForm = (props) => {
  
  const [state, setstate] = useState(initialStateMemeForm);

  useEffect(() => {
    // componentDidMount
    console.log(`composant MemeForm monté`);
    return () => {
      // cleanup
      console.log(`composant MemeForm démonté`);
    }
  }, []);

  return (
    <div className={styles.MemeForm} data-testid="MemeForm">
      MemeForm Component
    </div>
  );
}

MemeForm.propTypes = {};

MemeForm.defaultProps = {};

export default MemeForm;
