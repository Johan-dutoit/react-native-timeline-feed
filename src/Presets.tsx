/**
 * @format
 **/

import * as React from 'react';
import { StyleSheet } from 'react-native';

import { RenderProps } from './Types';

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

  const {
    endWithCircle,
    rowStyle,
    timeStyle,
    timeTextStyle,
    lineContainerStyle,
    circleStyle,
    dotStyle,
    lineStyle,
    eventStyle,
    titleTextStyle,
    descriptionTextStyle
  } = props;

  return (
    <React.Fragment>
      <Row style={rowStyle}>
        <Time style={timeStyle} textStyle={timeTextStyle}>
          {item.time}
        </Time>
        <VerticalSeparator style={lineContainerStyle}>
          <Circle style={circleStyle} color={circleColor}>
            <Dot style={dotStyle} color={dotColor} />
          </Circle>
          <Line style={lineStyle} color={lineColor} width={lineWidth} />
        </VerticalSeparator>
        <Event style={eventStyle}>
          <Title textStyle={titleTextStyle}>{item.title}</Title>
          <Description textStyle={descriptionTextStyle}>{item.description}</Description>
        </Event>
      </Row>
      {isLast && endWithCircle && (
        <Row key={`${index}_last`} style={rowStyle}>
          <Time />
          <VerticalSeparator>
            <Circle style={circleStyle} color={circleColor}>
              <Dot style={dotStyle} color={dotColor} />
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

  const {
    endWithCircle,
    rowStyle,
    timeStyle,
    timeTextStyle,
    lineContainerStyle,
    circleStyle,
    dotStyle,
    lineStyle,
    eventStyle,
    titleTextStyle,
    descriptionTextStyle
  } = props;

  return (
    <React.Fragment>
      <Row style={rowStyle}>
        <Event style={{ ...eventStyle, ...styles.rightAlign }}>
          <Title textStyle={titleTextStyle}>{item.title}</Title>
          <Description textStyle={descriptionTextStyle}>{item.description}</Description>
        </Event>
        <VerticalSeparator style={lineContainerStyle}>
          <Circle style={circleStyle} color={circleColor}>
            <Dot style={dotStyle} color={dotColor} />
          </Circle>
          <Line style={lineStyle} color={lineColor} width={lineWidth} />
        </VerticalSeparator>
        <Time style={timeStyle} textStyle={timeTextStyle}>
          {item.time}
        </Time>
      </Row>
      {isLast && endWithCircle && (
        <Row key={`${index}_last`} style={rowStyle}>
          <Event />
          <VerticalSeparator>
            <Circle style={circleStyle} color={circleColor}>
              <Dot style={dotStyle} color={dotColor} />
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
  SingleColumnLeft: SingleColumnLeft,
  SingleColumnRight: SingleColumnRight
};
