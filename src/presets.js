/**
 * @format
 * @flow
 **/
import * as React from 'react';
import { StyleSheet } from 'react-native';

import { type RenderProps } from './types';

import {
  Row,
  Time,
  Event,
  Title,
  Description,
  VerticalSeparator,
  Line,
  Circle,
  Dot
} from './components';

export const SingleColumnLeft = (renderProps: RenderProps) => (
  <Row {...renderProps}>
    <Time {...renderProps} />
    <VerticalSeparator {...renderProps}>
      <Line {...renderProps} />
      <Circle {...renderProps}>
        <Dot {...renderProps} />
      </Circle>
    </VerticalSeparator>
    <Event {...renderProps}>
      <Title {...renderProps} />
      <Description {...renderProps} />
    </Event>
  </Row>
);

export const SingleColumnRight = (renderProps: RenderProps) => (
  <Row {...renderProps}>
    <Event {...renderProps} style={styles.rightAlign}>
      <Title {...renderProps} />
      <Description {...renderProps} />
    </Event>
    <VerticalSeparator {...renderProps}>
      <Line {...renderProps} />
      <Circle {...renderProps}>
        <Dot {...renderProps} />
      </Circle>
    </VerticalSeparator>
    <Time {...renderProps} />
  </Row>
);

/*
if (index % 2 === 0) {
  return (
    <Timeline.Row key={index}>
      <Timeline.Time {...renderProps} style={styles.time} />
      <Timeline.VerticalSeparator {...renderProps}>
        <Timeline.Line {...renderProps} />
        <Timeline.Circle {...renderProps}>
          <Timeline.Dot {...renderProps} />
        </Timeline.Circle>
      </Timeline.VerticalSeparator>
      <Timeline.Event {...renderProps} style={styles.event}>
        <Timeline.Title {...renderProps} />
        <Timeline.Description {...renderProps} />
      </Timeline.Event>
    </Timeline.Row>
  );
} else {
  return (
    <Timeline.Row key={index}>
      <Timeline.Event {...renderProps} style={styles.event}>
        <Timeline.Title {...renderProps} />
        <Timeline.Description {...renderProps} />
      </Timeline.Event>
      <Timeline.VerticalSeparator {...renderProps} >
        <Timeline.Line {...renderProps} />
        <Timeline.Circle {...renderProps}>
          <Timeline.Dot {...renderProps} />
        </Timeline.Circle>
      </Timeline.VerticalSeparator>
      <Timeline.Time {...renderProps} style={styles.time} />
    </Timeline.Row>
  );
}
*/

const styles = StyleSheet.create({
  rightAlign: {
    alignItems: 'flex-end'
  },
  leftAlign: {
    alignItems: 'flex-start'
  }
});
