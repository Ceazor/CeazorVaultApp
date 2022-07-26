import React, { useCallback, useEffect } from 'react';
import { Accordion, AccordionDetails, Grid, makeStyles, Typography } from '@material-ui/core';
import Disclaimer from 'components/Disclaimer/Disclaimer';
import styles from './styles/list';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Web3 from 'web3';
import CHEESE_ABI from 'abi/strategy-extracheese.json';
const useStyles = makeStyles(styles);

export default function FAQ() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('faq-1');
  const [cheese1, setCheese1] = React.useState('-');
  const [cheese2, setCheese2] = React.useState('-');
  const handleChange = useCallback(
    panel => (event, newExpanded) => {
      setExpanded(newExpanded ? panel : false);
    },
    [setExpanded]
  );

  useEffect(() => {
    (async () => {
      console.log('hi');
      //Todo - refactor so that the addresses are pulling from the vault and not repeating contract calls
      const web3 = new Web3('https://rpc.ankr.com/fantom/');
      const vaultAddress1 = '0xecaa165bA692a256C47306149816D7083628a367';
      const vaultAddress2 = '0xC7FEc1F4A0Ef5c3014e53b8b4926FE05B63dBE3F';
      const ceazorVault1 = new web3.eth.Contract(CHEESE_ABI, vaultAddress1);
      const ceazorVault2 = new web3.eth.Contract(CHEESE_ABI, vaultAddress2);
      const cheeseRate1 = await ceazorVault1.methods.xCheeseRate().call();
      const cheeseRate2 = await ceazorVault2.methods.xCheeseRate().call();
      setCheese1(cheeseRate1);
      setCheese2(cheeseRate2);
    })();
  }, [Web3]);

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
                It then harvests the rewards and takes out the 1% performance fee. It then compounds
                the rest into more fBEETS to increase APY. The voting power of the fBEETS is used to
                vote on the CRE8R:FTM Beethoven-X pool to direct rewards there. Any bribes are sent
                to the ExtraCheese.
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
                <a href="https://ftmscan.com/address/0xd526b031Eb14323c93D615fb3fc03a2689e92356">
                  ExtraCheese: 0xd526b031Eb14323c93D615fb3fc03a2689e92356
                </a>
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === 'faq-3'} onChange={handleChange('faq-3')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>How does ceazCRE8RBPT earn?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This vault accepts CRE8R In F-Major Beethoven-X Liquidity Pool tokens and stakes
                them on Beethoven-X to earn BEETS and CRE8R tokens. It then harvests the rewards and
                takes out the 1% performance fee. It then uses all of the CRE8R and half of the
                BEETS to add to the liquidity pool. The other half to it zaps into the
                autocompounding ceazFBEETS vault and sends the ceazFBEETS tokens to ExtraCheese. To
                get the ExtraCheese ceazFBEETS, stake your ceazCRE8RBPT vault token in Extra Cheese.
                <br />
                Contracts:
                <br />
                <a href="https://ftmscan.com/address/0xC93dd4F61C4598192f6c150Af38a58514eB3abbe">
                  Vault: 0xC93dd4F61C4598192f6c150Af38a58514eB3abbe
                </a>
                <br />
                <a href="https://ftmscan.com/address/0xecaa165bA692a256C47306149816D7083628a367">
                  Strategy: 0xecaa165bA692a256C47306149816D7083628a367
                </a>
                <br />
                <a href="https://ftmscan.com/address/0x27987E15D6aF423340F9ed0797E388b2f46930Ca">
                  ExtraCheese: 0x27987E15D6aF423340F9ed0797E388b2f46930Ca
                </a>
                <br />
                ExtraCheese Rate: {cheese1}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === 'faq-4'} onChange={handleChange('faq-4')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>How does ceazliHND earn?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This vault accepts Valhalla Calling By LiquidDriver tokens and stakes them on
                LiquidDriver to earn LQDR tokens. It then harvests the rewards and takes out the 1%
                performance fee. It then sells half of LQDR add to the liquidity pool. The other
                half it zaps sends to ExtraCheese. To get the Extra Cheese, stake your ceazliHND
                vault tokens in ExtraCheese.
                <br />
                Contracts:
                <br />
                <a href="https://ftmscan.com/address/0xd5Ab59A02E8610FCb9E7c7d863A9A2951dB33148">
                  Vault: 0xd5Ab59A02E8610FCb9E7c7d863A9A2951dB33148
                </a>
                <br />
                <a href="https://ftmscan.com/address/0xC7FEc1F4A0Ef5c3014e53b8b4926FE05B63dBE3F">
                  Strategy: 0xC7FEc1F4A0Ef5c3014e53b8b4926FE05B63dBE3F
                </a>
                <br />
                <a href="https://ftmscan.com/address/0x93695F2A73439C4700dD1C4d6A58FFA0f570Da8e">
                  ExtraCheese: 0x93695F2A73439C4700dD1C4d6A58FFA0f570Da8e
                </a>
                <br />
                ExtraCheese Rate: {cheese2}
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion square expanded={expanded === 'faq-5'} onChange={handleChange('faq-5')}>
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>How does ceazlinSpiritBPT earn?</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                This vault accepts Water Music By LiquidDriver tokens and stakes them on BeethovenX
                to earn BEETS tokens. It then harvests the rewards and takes out the 1% performance
                fee. It then sells 10% of BEETS to add to the liquidity pool. The remainder zaps to
                ceazFBeets and sends them to ExtraCheese. To get the Extra Cheese, stake your
                ceazlinSpiritBPT vault tokens in ExtraCheese.
                <br />
                Contracts:
                <br />
                <a href="https://ftmscan.com/address/0x47198f4151f7aF48200999439B100d85a5697c00">
                  Vault: 0x47198f4151f7aF48200999439B100d85a5697c00
                </a>
                <br />
                <a href="https://ftmscan.com/address/0xd814bd9B1C6E9fB00654819DE646C318FDd09ED0">
                  Strategy: 0xd814bd9B1C6E9fB00654819DE646C318FDd09ED0
                </a>
                <br />
                <a href="https://ftmscan.com/address/0x7A3dc192B4Fce1b0Db0f9bF7Ee4e034315441bC3">
                  ExtraCheese: 0x7A3dc192B4Fce1b0Db0f9bF7Ee4e034315441bC3
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
