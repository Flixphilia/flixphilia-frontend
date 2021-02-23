import { makeStyles, withStyles } from '@material-ui/core/styles';

import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';
import PropTypes from 'prop-types';
import Tab from '@material-ui/core/Tab';
import Tabs from '@material-ui/core/Tabs';
import Typography from '@material-ui/core/Typography';
import { useState } from 'react';
import CastWrapper from './castWrapper';

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`tabpanel-${index}`}
      aria-labelledby={`tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
};

function a11yProps(index) {
  return {
    id: `tab-${index}`,
    'aria-controls': `tabpanel-${index}`,
  };
}

const useStyles = makeStyles({
  root: {
    // flexGrow: 1,
    backgroundColor: 'transparent',
    marginTop: '20px',
    marginBottom: '20px',
  },
  tabs: {},
  tab: {
    border: 'none',
    '&:active': {
      color: 'green',
    },
  },
});

const StyledTabs = withStyles({
  indicator: {
    display: 'flex',
    borderBottom: 'none',

    '& > span': {
      width: '100%',
      backgroundColor: 'green',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles({
  root: {
    '&:focus': {
      opacity: 1,
      outline: 'none',
    },
  },
})((props) => <Tab disableRipple {...props} />);

const MoreInfoSection = () => {
  const classes = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container className={classes.root}>
      <StyledTabs
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        <StyledTab label="Cast" {...a11yProps(0)} />
        <StyledTab label="Crew" {...a11yProps(1)} />
        <StyledTab label="Details" {...a11yProps(2)} />
        <StyledTab label="Genre" {...a11yProps(3)} />
      </StyledTabs>

      <TabPanel value={value} index={0}>
        <CastWrapper />
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
    </Container>
  );
};

export default MoreInfoSection;

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
