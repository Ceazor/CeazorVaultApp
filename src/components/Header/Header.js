import React, { memo, useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import Hidden from '@material-ui/core/Hidden';
import Drawer from '@material-ui/core/Drawer';
import Menu from '@material-ui/icons/Menu';
import Close from '@material-ui/icons/Close';
import WbSunny from '@material-ui/icons/WbSunny';
import NightsStay from '@material-ui/icons/NightsStay';
import { getNetworkBuyUrl } from '../../features/helpers/getNetworkData';
import { Dialog, withStyles } from '@material-ui/core';
import CustomButton from '../../components/CustomButtons/Button';
import styles from './styles';

const useStyles = makeStyles(styles);

const StyledDialog = withStyles(theme => ({
  paper: {
    margin: '16px',
    backgroundColor: theme.palette.background.primary,
  },
  paperScrollPaper: {
    maxHeight: 'calc(100% - 32px)',
  },
}))(Dialog);

const Header = ({ links, isNightMode, setNightMode }) => {
  const { chain } = useParams();

  const [mobileOpen, setMobileOpen] = React.useState(false);
  const classes = useStyles();
  const { t } = useTranslation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar className={`${classes.appBar} ${classes.dark}`} position="relative">
      <Toolbar className={classes.container}>
        <Link to={`/${chain}`}>
          <Button className={classes.title}>
            <Hidden xsDown>
              <img
                alt="Ceazor"
                src={require(`images/$CEAZOR.png`)}
                height={'40px'}
                className={classes.logo}
              />
              Ceazor Vaults
            </Hidden>
            <Hidden smUp>
              <img
                alt="Ceazor"
                src={require(`images/$CEAZOR.png`)}
                height={'35px'}
                className={classes.logo}
              />
            </Hidden>
          </Button>
        </Link>

        <div className={classes.middleNav}>
          <Link className={classes.btnBoost} to={`/${chain}/stake`}>
            <img alt="Boost" src={require('images/stake/extracheese.png')} />
          </Link>
        </div>

        <div className={classes.middleNav}>
          <Link className={classes.btnBoost} to={`/${chain}/FAQ`}>
            <img alt="Boost" src={require('images/Sandwich.png')} />
          </Link>
        </div>

        <Hidden smDown implementation="css">
          <div className={classes.collapse}>{links}</div>
        </Hidden>
        <Hidden mdUp>
          <IconButton
            className={classes.iconButton}
            aria-label="open drawer"
            onClick={handleDrawerToggle}
          >
            <Menu />
          </IconButton>
        </Hidden>
      </Toolbar>

      <Hidden mdUp implementation="js">
        <Drawer
          variant="temporary"
          anchor={'right'}
          open={mobileOpen}
          classes={{
            paper: classes.drawerPaper,
          }}
          onClose={handleDrawerToggle}
        >
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerToggle}
            className={classes.closeButtonDrawer}
          >
            <Close />
          </IconButton>
          <div className={classes.appResponsive}>{links}</div>
          <div style={{ textAlign: 'center' }}>
            <LinkSidebar name="vote" label={t('vote')} icon="vote-yea" classes={classes} />
            <LinkSidebar name="dashboard" label={t('stats')} icon="chart-bar" classes={classes} />
            <LinkSidebar name="docs" label={t('docs')} icon="book" classes={classes} />
            <LinkSidebar name="blog" label={t('blog')} icon="file-alt" classes={classes} />
            <LinkSidebar name="forum" label={t('forum')} icon="comments" classes={classes} />
            <InsureLinkSidebar key="insure" t={t} classes={classes} />
            <IconButton onClick={setNightMode} className={classes.icon}>
              {isNightMode ? <WbSunny /> : <NightsStay />}
            </IconButton>
          </div>
        </Drawer>
      </Hidden>
    </AppBar>
  );
};

const InsureLinkSidebar = memo(function InsureLinkSidebar(props) {
  return (
    <div style={{ width: '100%', paddingTop: '10px' }}>
      <InsureLink {...props} />
    </div>
  );
});

const InsureLink = memo(function InsureLink({ t, classes }) {
  const [isOpen, setIsOpen] = useState(false);
  const handleClose = useCallback(() => setIsOpen(false), [setIsOpen]);
  const handleOpen = useCallback(
    e => {
      e.preventDefault();
      setIsOpen(true);
    },
    [setIsOpen]
  );

  return (
    <>
      <Button
        className={classes.link}
        style={{ marginLeft: '5px', marginRight: '5px' }}
        onClick={handleOpen}
      >
        <i className={`fas fa-shield-alt ${classes.icon}`} />
        <span>{t('insure')}</span>
      </Button>
      <StyledDialog open={isOpen} onClose={handleClose} fullWidth={true} maxWidth="sm">
        <div className={classes.modalInner}>
          <IconButton className={classes.modalClose} onClick={handleClose}>
            <Close />
          </IconButton>
          <h1 className={classes.modalTitle}>{t('InsurAce-Title')}</h1>
          <div className={classes.modalSections}>
            {t('InsurAce-Sections', { returnObjects: true }).map(section => (
              <div key={section.title} className={classes.modalSection}>
                <h2 className={classes.modalSectionTitle}>{section.title}</h2>
                {section.content.map(paragraph => (
                  <p key={paragraph} className={classes.modalSectionText}>
                    {paragraph}
                  </p>
                ))}
              </div>
            ))}
          </div>
          <CustomButton
            href="https://d1dlh1v05qf6d3.cloudfront.net/information/uploads/2018/02/ham-sandwich-better.jpg"
            target="_blank"
            className={classes.modalButton}
          >
            {t('InsurAce-Button')}
          </CustomButton>
        </div>
      </StyledDialog>
    </>
  );
});

const renderLink = (name, label, icon, classes) => {
  return (
    <a
      href={getLinkUrl(name)}
      target="_blank"
      rel="noopener noreferrer"
      className={classes.link}
      style={{ marginLeft: '5px', marginRight: '5px' }}
    >
      <i className={`fas fa-${icon} ${classes.icon}`} />
      <span>{label}</span>
    </a>
  );
};

const LinkSidebar = ({ name, label, icon, classes }) => (
  <div style={{ width: '100%', paddingTop: '10px' }}>{renderLink(name, label, icon, classes)}</div>
);

const getLinkUrl = name => {
  return name === 'buy' ? getNetworkBuyUrl() : `https://${name}.beefy.finance`;
};

export default Header;
