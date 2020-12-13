// import React from 'react';
// import styled from 'styled-components';
import { fade } from '@material-ui/core';
import makeStyles from '@material-ui/styles/makeStyles';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';

// const StyledFooter = styled.footer`
//   display: flex;
//   height: 20px;
//   position: sticky;
//   bottom: 0;
// `;

// const Copyright = styled.span`
//   color: white;
//   font-size: 16px;
//   width: 100%;
//   text-align: center;
//   margin-top: 180px;
// `;

// const Footer = () => {
//   return (
//     <StyledFooter>
// <Copyright>© FlixPhilia | 2020</Copyright>
//     </StyledFooter>
//   );
// };

// export default Footer;
const footerStyles = makeStyles({
  root: {
    backgroundColor: fade('#fff', 0.15),
    display: 'flex',
    marginTop: '53px',
    height: '250px',
    // position: 'sticky',
    bottom: 0,
  },
  copyright: {
    color: 'white',
    fontSize: '16px',
    width: '100%',
    textAlign: 'center',
    marginTop: '220px',
  },
  social: {},
  icons: {
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
  },
});

const Footer = () => {
  const classes = footerStyles();
  return (
    <div className={classes.root}>
      <div className={classes.social}>
        <span>Social</span>
        <a href="" className={classes.icons}>
          <InstagramIcon />
        </a>
        <a href="" className={classes.icons}>
          <FacebookIcon />
        </a>
        <a href="" className={classes.icons}>
          <TwitterIcon />
        </a>
      </div>
      <span className={classes.copyright}>© FlixPhilia | 2020</span>
    </div>
  );
};

export default Footer;
