import React, { useEffect, useState } from 'react';
import { Accordion, AccordionDetails, Typography } from '@material-ui/core';
// import styles from './styles/list';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Web3 from 'web3';
import { getRpcUrl } from 'common/networkSetup';
import CHEESE_ABI from 'abi/strategy-extracheese.json';

const web3 = new Web3(getRpcUrl());
function CheeseQA({
  tokenName,
  description,
  vaultAddress,
  strategyAddress,
  extraCheeseAddress,
  showCheeseRate,
  handleChange,
  expanded,
}) {
  const [cheese, setCheese] = useState('');
  useEffect(() => {
    (async () => {
      if (!showCheeseRate) {
        return;
      }
      if (!web3 || !strategyAddress) return;
      const ceazorVault = new web3.eth.Contract(CHEESE_ABI, strategyAddress);
      const cheeseRate = await ceazorVault.methods.xCheeseRate().call();
      console.log(cheeseRate);
      setCheese(cheeseRate);
    })();
  }, [strategyAddress, showCheeseRate]);
  return (
    <Accordion square expanded={expanded === tokenName} onChange={handleChange(tokenName)}>
      <AccordionSummary expandIcon={<ExpandMoreIcon />}>
        <Typography>How does {tokenName} earn?</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          {description}
          <br />
          Contracts:
          <br />
          <a href={`https://optimistic.etherscan.io/address/${vaultAddress}`}>
            Vault: {vaultAddress}
          </a>
          <br />
          <a href={`https://optimistic.etherscan.io/address/${strategyAddress}`}>
            Strategy: {strategyAddress}
          </a>
          <br />
          <a href={`https://optimistic.etherscan.io/address/${extraCheeseAddress}`}>
            ExtraCheese: {extraCheeseAddress}
          </a>
          {cheese && (
            <>
              <br />
              <div>ExtraCheese Rate: {cheese}</div>
            </>
          )}
        </Typography>
      </AccordionDetails>
    </Accordion>
  );
}

export default CheeseQA;
