import React, { useEffect, useState, memo } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Cow from '../Cow/Cow';
import styles from './style';

const useStyles = makeStyles(styles);

const Pastures = () => {
  const classes = useStyles();
  const [cows, setCows] = useState([]);

  useEffect(() => {
    let n = Math.ceil(Math.random() * 3) + 3;
    setCows(new Array(n).fill(0));
  }, []);

  return (
    <div className={classes.root}>
      <img
        alt="Ceazor"
        src={require(`images/table.png`)}
        height={'200px'}
        width={'100%'}
        className={classes.logo}
      />
      {cows &&
        cows.map((_, index) => <Cow key={`cow${index}`} total={cows.length} index={index} />)}
    </div>
  );
};

export default memo(Pastures);
