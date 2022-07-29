import React, { useCallback } from 'react';
import { Accordion, AccordionDetails, Grid, makeStyles, Typography } from '@material-ui/core';
import Disclaimer from 'components/Disclaimer/Disclaimer';
import styles from './styles/list';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { fantomStakePools } from 'features/configure';
import CheeseQA from './CheeseQA';
const useStyles = makeStyles(styles);

export default function FAQ() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('faq-1');
  //todo: make work with other chains
  const openFantomStakePools = fantomStakePools.filter(({ status }) => status !== 'closed');
  const handleChange = useCallback(
    panel => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    },
    [setExpanded]
  );

  return (
    <Grid container>
      <Grid container spacing={4} justify={'center'}>
        <Grid className={classes.faq} item xs={12} lg={9}>
          <Accordion square expanded={expanded === 'faq-1'} onChange={handleChange('faq-1')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>How do I get Extra Cheese?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Stake your tokens in a vault to gain a ceazTOKEN, ie ceazFBEETS, then stake your
                ceazTOKEN in an appliciable farm on Extra Cheese 🧀 to earn additional rewards.
                These rewards may come from various sources suchs as bribes, rewards incentives, or
                fee sharing.
              </Typography>
            </AccordionDetails>
          </Accordion>
          {openFantomStakePools.map(t => (
            <CheeseQA
              description={t.faq.description}
              extraCheeseAddress={t.earnContractAddress}
              handleChange={handleChange}
              showCheeseRate={t.faq.showCheeseRate}
              strategyAddress={t.strategyAddress}
              vaultAddress={t.tokenAddress}
              expanded={expanded}
              tokenName={t.token}
            />
          ))}
        </Grid>
        <Grid item xs={12}>
          <Disclaimer />
        </Grid>
      </Grid>
    </Grid>
  );
}
FAQ.defaultProps = {
  fromPage: 'page',
};
