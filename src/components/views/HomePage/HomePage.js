import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import { Container, Row, Col } from 'react-bootstrap';
import styles from './HomePage.module.scss';

// import { reduxSelector, reduxActionCreator } from '../../../redux/exampleRedux.js';

const Component = ({ children }) => {
  console.log(`HomePage`);
  // const dispatch = useDispatch();

  useEffect(() => {
    // dispatch(actionName(`whatToDispatch`));
  }, []);
  return (
    <div className={styles.root}>
      <Container>
        <Row>
          <Col>
            <h2>HomePage</h2>
          </Col>
        </Row>
        <main>{children}</main>
      </Container>
    </div>
  );
};

Component.propTypes = {
  children: PropTypes.node,
};

export { Component as HomePage, Component as HomePageComponent };