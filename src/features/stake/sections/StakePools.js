import React, { useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { Accordion, AccordionDetails, Grid, makeStyles, Typography } from '@material-ui/core';
import Disclaimer from 'components/Disclaimer/Disclaimer';
import styles from './styles/list';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { ToggleButton, ToggleButtonGroup } from '@material-ui/lab';
import { useLaunchpoolUpdates } from '../redux/hooks';
import { launchpools, appNetworkId } from '../../helpers/getNetworkData';
import { StakePoolsPool } from './StakePoolsPool';

const useStyles = makeStyles(styles);

export default function StakePools() {
  const classes = useStyles();
  const { t } = useTranslation();
  const [expanded, setExpanded] = React.useState('faq-1');
  const [showPools, setShowActive] = React.useState('active');
  useLaunchpoolUpdates();

  const handleChange = useCallback(
    panel => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    },
    [setExpanded]
  );

  const handleShowPools = useCallback(
    (event, value) => {
      setShowActive(value);
    },
    [setShowActive]
  );

  return (
    <Grid container>
      <Grid item xs={12}>
        <div className={classes.launchpool}>
          <img alt="Launchpool" src={require('images/stake/extracheese.png')} />
        </div>
      </Grid>
      <Grid item xs={12} style={{ paddingBottom: '20px', textAlign: 'right' }}>
        <ToggleButtonGroup value={showPools} exclusive onChange={handleShowPools}>
          <ToggleButton value="all">All</ToggleButton>
          <ToggleButton value="active">Live</ToggleButton>
          <ToggleButton value="closed">Finished</ToggleButton>
        </ToggleButtonGroup>
      </Grid>
      <Grid container spacing={4} justify={'center'}>
        {Object.values(launchpools).map(pool => (
          <StakePoolsPool key={pool.id} pool={pool} showPools={showPools} classes={classes} t={t} />
        ))}
      </Grid>
      <Grid item xs={12}>
        <Disclaimer />
      </Grid>
    </Grid>
  );
}

StakePools.defaultProps = {
  fromPage: 'page',
};
