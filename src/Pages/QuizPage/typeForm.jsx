import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const buttonStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: 30,
    // margin: '0 auto',
    justifyContent: 'center',
    display: 'flex',
  },
  button: {
    padding: '2px 20px 0',
    fontSize: 17,
    color: 'white',
    backgroundImage: 'linear-gradient(left,#06fef6,#482cf6)',
    // marginRight: 10,
  },
}));

const TypeForm = (props) => {
  const classes = buttonStyles();
  const [current, setCurrent] = useState(0);

  const {
    backBtnOnClick,
    backBtnText,
    children,
    completionText,
    nextBtnOnClick,
    nextBtnText,
    onSubmit,
    showReviewView,
    submitBtnText,
  } = props;

  /** Styles */
  const styles = {
    tfShow: {
      display: 'block',
    },
    tfHide: {
      display: 'none',
    },
  };

  /** Set className for component to show/hide */
  const setClass = (element, tfStyle) => {
    if (!element) {
      return null;
    }
    const Element = element.type;
    return (
      <div style={tfStyle}>
        <Element {...element.props} />
      </div>
    );
  };

  /** Get the current component to show on screen */
  const getCurrentView = (children) => {
    let allChildren = [];
    allChildren = React.Children.map(children, (child, index) => {
      let currentChild = setClass(child, styles.tfHide);
      if (index === current) {
        currentChild = setClass(child, styles.tfShow);
      }
      return currentChild;
    });

    /** If all elements are shown then conditionally show a review screen */
    if (isLastComponent() && showReviewView) {
      React.Children.map(children, (child) =>
        allChildren.push(setClass(child, styles.tfShow))
      );
      if (completionText) {
        allChildren.push(
          <div className="form-completion-text">{completionText}</div>
        );
      }
    }
    return allChildren;
  };

  /** Increment State counter */
  const incState = () => {
    if (current < children.length) {
      setCurrent((c) => c + 1);
    }
    nextBtnOnClick();
  };

  /** Decrement State counter */
  const decState = () => {
    if (current > 0) {
      setCurrent((c) => c - 1);
    }
    backBtnOnClick();
  };

  /** Check if last component */
  const isFirstComponent = () => {
    return current === 0;
  };

  /** Check if last component */
  const isLastComponent = () => {
    return showReviewView
      ? current === children.length
      : current === children.length - 1;
  };

  return (
    <div>
      {getCurrentView(children)}
      <div className={classes.root}>
        {!isFirstComponent() && (
          <Button
            onClick={decState}
            className={classes.button}
            style={{ marginRight: '10px' }}
          >
            {backBtnText}
          </Button>
        )}
        {isLastComponent() ? (
          <Button type="submit" onClick={onSubmit} className={classes.button}>
            {submitBtnText}
          </Button>
        ) : (
          <Button onClick={incState} className={classes.button}>
            {nextBtnText}
          </Button>
        )}
      </div>
    </div>
  );
};

/** Validating propTypes */
TypeForm.propTypes = {
  backBtnClass: PropTypes.string,
  backBtnOnClick: PropTypes.func,
  backBtnText: PropTypes.string,
  children: PropTypes.array.isRequired,
  completionText: PropTypes.string,
  nextBtnClass: PropTypes.string,
  nextBtnOnClick: PropTypes.func,
  nextBtnText: PropTypes.string,
  onSubmit: PropTypes.func,
  showReviewView: PropTypes.bool,
  ss: PropTypes.string,
  submitBtnText: PropTypes.string,
};

/** Default Props */
TypeForm.defaultProps = {
  backBtnOnClick: () => {},
  backBtnText: 'Back',
  nextBtnOnClick: () => {},
  nextBtnText: 'Next',
  onSubmit: () => {},
  showReviewView: true,
  submitBtnText: 'Save',
};

export default TypeForm;
