/**
 * @format
 * @flow
 **/

import * as React from 'react';
import { StyleSheet, FlatList, View, Text, TouchableOpacity } from 'react-native';

import {
  type RowProps,
  type EventProps,
  type RenderProps,
  type TimeProps,
  type TitleProps,
  type VerticalProps,
  type CircleProps
} from './types';

import {
  DEFAULT_CIRCLE_COLOR,
  DEFAULT_DOT_COLOR,
  DEFAULT_LINE_COLOR,
  DEFAULT_LINE_WIDTH
} from './defaults';

export function Row({ item, index, props, children, style }: RowProps) {
  return <View style={[styles.rowContainer, style]}>{children}</View>;
}

export function Event({ item, index, props, children, style }: EventProps) {
  return <View style={[styles.eventContainer, style]}>{children}</View>;
}

export function Time({ item, index, props, style, textStyle }: TimeProps) {
  const { time } = item;

  return (
    <View style={[styles.timeContainer, style]}>
      <Text style={textStyle}>{time}</Text>
    </View>
  );
}

export function Title({ item, index, props, textStyle }: TitleProps) {
  const { title } = item;

  return (
    <>
      <Text style={[styles.titleText, textStyle]}>{title}</Text>
    </>
  );
}

export function Description({ item, index, props }: RenderProps) {
  const { description } = item;

  return (
    <>
      <Text>{description}</Text>
    </>
  );
}

export function VerticalSeparator({ item, index, props, children }: VerticalProps) {
  return <View style={styles.separatorContainer}>{children}</View>;
}

export function Line({ item, index, props }: RenderProps) {
  const { lineWidth, lineColor } = item;
  const color = lineColor || props.lineColor || DEFAULT_LINE_COLOR;
  const width = lineWidth || props.lineWidth || DEFAULT_LINE_WIDTH;

  return <View style={[styles.line, { width, backgroundColor: color }]} />;
}

export function Dot({ item, index, props }: RenderProps) {
  const { dotColor } = item;
  const color = dotColor || props.dotColor || DEFAULT_DOT_COLOR;
  return <View style={[styles.dotContainer, { backgroundColor: color }]} />;
}

export function Circle({ item, index, props, children, style }: CircleProps) {
  const { circleColor } = item;

  const color = circleColor || props.circleColor || DEFAULT_CIRCLE_COLOR;

  return (
    <View style={[styles.circleContainer, style, { backgroundColor: color }]}>{children}</View>
  );
}

const styles = StyleSheet.create({
  rowContainer: {
    flex: 12,
    flexDirection: 'row'
  },
  timeContainer: {
    flex: 0.1,
    minWidth: 45
  },
  separatorContainer: {
    flex: 1,
    minHeight: 90,
    alignItems: 'center'
  },
  line: {
    flex: 1,
    backgroundColor: 'black',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    marginHorizontal: 8
  },
  circleContainer: {
    position: 'absolute',
    width: 16,
    height: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dotContainer: {
    width: 8,
    height: 8,
    borderRadius: 4
  },
  eventContainer: {
    flex: 12
  },
  titleText: {
    fontSize: 16,
    fontWeight: 'bold'
  }
});
