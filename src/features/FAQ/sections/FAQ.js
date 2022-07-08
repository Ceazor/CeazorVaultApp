import React, { useCallback } from 'react';
import { Accordion, AccordionDetails, Grid, makeStyles, Typography } from '@material-ui/core';
import Disclaimer from 'components/Disclaimer/Disclaimer';
import styles from './styles/list';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const useStyles = makeStyles(styles);

export default function FAQ() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('faq-1');

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
          <Accordion square expanded={expanded === 'faq-2'} onChange={handleChange('faq-2')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>How does ceazFBEETS earn?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This vault accepts fBEETS tokens and stakes them on Beethoven-X to earn more fBEETS.
                It then harvests the rewards, takes out the 1% performance fee, and compounds the
                rest into more fBEETS to increase APY. The voting power of the fBEETS is used to
                vote on the CRE8R:FTM Beethoven-X pool to direct rewards there. Any bribes are sent
                to the extra cheese staker above.
                <br />
                Contracts:
                <br />
                <a href="https://ftmscan.com/address/0x58e0ac1973f9d182058e6b63e7f4979bc333f493">
                  Vault: 0x58e0ac1973f9d182058e6b63e7f4979bc333f493
                </a>
                <br />
                <a href="https://ftmscan.com/address/0x38a206688332674be5ed20b5a65282224b43c189">
                  Strategy: 0x38a206688332674be5ed20b5a65282224b43c189
                </a>
                <br />
                <a href="https://ftmscan.com/address/0xae71e0aeada3bf9a188f06464528313ce8d3e740">
                  ExtraCheese: 0xae71e0aeada3bf9a188f06464528313ce8d3e740
                </a>
              </Typography>
            </AccordionDetails>
          </Accordion>
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
