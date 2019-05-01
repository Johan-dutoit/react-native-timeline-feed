/**
 * @format
 **/

import * as React from 'react';
import { StyleSheet } from 'react-native';

import { RenderProps, Preset } from './Types';

import {
  DEFAULT_CIRCLE_COLOR,
  DEFAULT_DOT_COLOR,
  DEFAULT_LINE_COLOR,
  DEFAULT_LINE_WIDTH
} from './Defaults';

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
} from './Components';

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

export const SingleColumnLeft = ({ item, index, isLast, props }: RenderProps) => {
  const { lineColor, lineWidth, circleColor, dotColor } = getItemProps({
    item,
    index,
    isLast,
    props
  });

  const { endWithCircle } = props;

  return (
    <React.Fragment>
      <Row>
        <Time>{item.time}</Time>
        <VerticalSeparator>
          <Circle color={circleColor}>
            <Dot color={dotColor} />
          </Circle>
          <Line color={lineColor} width={lineWidth} />
        </VerticalSeparator>
        <Event>
          <Title>{item.title}</Title>
          <Description>{item.description}</Description>
        </Event>
      </Row>
      {isLast && endWithCircle && (
        <Row key={`${index}_last`}>
          <Time />
          <VerticalSeparator>
            <Circle color={circleColor}>
              <Dot color={dotColor} />
            </Circle>
          </VerticalSeparator>
          <Event />
        </Row>
      )}
    </React.Fragment>
  );
};

export const SingleColumnRight = ({ item, index, isLast, props }: RenderProps) => {
  const { lineColor, lineWidth, circleColor, dotColor } = getItemProps({
    item,
    index,
    isLast,
    props
  });

  const { endWithCircle } = props;

  return (
    <React.Fragment>
      <Row>
        <Event style={styles.rightAlign}>
          <Title>{item.title}</Title>
          <Description>{item.description}</Description>
        </Event>
        <VerticalSeparator>
          <Circle color={circleColor}>
            <Dot color={dotColor} />
          </Circle>
          <Line color={lineColor} width={lineWidth} />
        </VerticalSeparator>
        <Time>{item.time}</Time>
      </Row>
      {isLast && endWithCircle && (
        <Row key={`${index}_last`}>
          <Event />
          <VerticalSeparator>
            <Circle color={circleColor}>
              <Dot color={dotColor} />
            </Circle>
          </VerticalSeparator>
          <Time />
        </Row>
      )}
    </React.Fragment>
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

export default {
  [Preset.SingleColumnLeft]: SingleColumnLeft,
  [Preset.SingleColumnRight]: SingleColumnRight
};
