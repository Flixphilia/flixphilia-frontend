// import React from 'react';
// import styled from 'styled-components';
import { fade } from '@material-ui/core';
import makeStyles from '@material-ui/styles/makeStyles';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import Link from '@material-ui/core/Link';

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
    position: 'fixed',
    bottom: 0,
    width: '100%',
    justifyContent: 'center',
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
    <footer className={classes.root}>
      <div className={classes.social}>
        <span>Social</span>
        <Link
          href="https://instagram.com"
          target="_blank"
          className={classes.icons}
        >
          <InstagramIcon />
        </Link>
        <Link
          href="https://facebook.com"
          target="_blank"
          className={classes.icons}
        >
          <FacebookIcon />
        </Link>
        <Link
          href="https://twitter.com"
          target="_blank"
          className={classes.icons}
        >
          <TwitterIcon />
        </Link>
      </div>
      <span className={classes.copyright}>© FlixPhilia | 2020</span>
    </footer>
  );
};

export default Footer;
