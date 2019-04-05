/**
 * @format
 * @flow
 **/

import * as React from 'react';
import { StyleSheet } from 'react-native';

import { type RenderProps } from './types';

import {
  DEFAULT_CIRCLE_COLOR,
  DEFAULT_DOT_COLOR,
  DEFAULT_LINE_COLOR,
  DEFAULT_LINE_WIDTH
} from './defaults';

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

const getItemProps = ({ item, props }: RenderProps) => {
  const lineColor = item.lineColor || props.lineColor || DEFAULT_LINE_COLOR;
  const lineWidth = item.lineWidth || props.lineWidth || DEFAULT_LINE_WIDTH;

  const circleColor = item.circleColor || props.circleColor || DEFAULT_CIRCLE_COLOR;

  const dotColor = item.dotColor || props.dotColor || DEFAULT_DOT_COLOR;

  return {
    lineColor,
    lineWidth,
    circleColor,
    dotColor
  };
};

export const SingleColumnLeft = ({ item, index, props }: RenderProps) => {
  const { lineColor, lineWidth, circleColor, dotColor } = getItemProps({ item, index, props });

  return (
    <Row>
      <Time time={item.time} />
      <VerticalSeparator>
        <Line color={lineColor} width={lineWidth} />
        <Circle color={circleColor}>
          <Dot color={dotColor} />
        </Circle>
      </VerticalSeparator>
      <Event>
        <Title>{item.title}</Title>
        <Description>{item.description}</Description>
      </Event>
    </Row>
  );
};

export const SingleColumnRight = ({ item, index, props }: RenderProps) => {
  const { lineColor, lineWidth, circleColor, dotColor } = getItemProps({ item, index, props });

  return (
    <Row>
      <Event style={styles.rightAlign}>
        <Title>{item.title}</Title>
        <Description>{item.description}</Description>
      </Event>
      <VerticalSeparator>
        <Line color={lineColor} width={lineWidth} />
        <Circle color={circleColor}>
          <Dot color={dotColor} />
        </Circle>
      </VerticalSeparator>
      <Time time={item.time} />
    </Row>
  );
};

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
