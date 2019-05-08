/**
 * @format
 **/

import * as React from 'react';
import { StyleSheet, View, Text } from 'react-native';

import {
  RowProps,
  TimeProps,
  EventProps,
  TitleProps,
  DescriptionProps,
  VerticalProps,
  LineProps,
  CircleProps,
  DotProps
} from './Types';

import {
  DEFAULT_LINE_WIDTH,
  DEFAULT_LINE_COLOR,
  DEFAULT_CIRCLE_COLOR,
  DEFAULT_DOT_COLOR
} from './Defaults';

export function Row({ children, style }: RowProps) {
  return <View style={[styles.rowContainer, style]}>{children}</View>;
}

export function Time({ children, style, textStyle }: TimeProps) {
  return (
    <View style={[styles.timeContainer, style]}>
      <Text style={textStyle}>{children}</Text>
    </View>
  );
}

export function Event({ children, style }: EventProps) {
  return <View style={[styles.eventContainer, style]}>{children}</View>;
}

export function Title({ children, textStyle }: TitleProps) {
  return (
    <>
      <Text style={[styles.titleText, textStyle]}>{children}</Text>
    </>
  );
}

export function Description({ children, textStyle }: DescriptionProps) {
  return (
    <>
      <Text style={[styles.descriptionText, textStyle]}>{children}</Text>
    </>
  );
}

export function VerticalSeparator({ children, style }: VerticalProps) {
  return <View style={[styles.separatorContainer, style]}>{children}</View>;
}

export function Line({ width = DEFAULT_LINE_WIDTH, color = DEFAULT_LINE_COLOR, style }: LineProps) {
  return <View style={[styles.line, style, { width: width, backgroundColor: color }]} />;
}

export function Circle({ color = DEFAULT_CIRCLE_COLOR, children, style }: CircleProps) {
  return (
    <View style={[styles.circleContainer, style, { backgroundColor: color }]}>{children}</View>
  );
}

export function Dot({ color = DEFAULT_DOT_COLOR, style }: DotProps) {
  return <View style={[styles.dotContainer, style, { backgroundColor: color }]} />;
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
    minHeight: 60,
    alignItems: 'center'
  },
  line: {
    flex: 1,
    backgroundColor: 'black',
    marginHorizontal: 8
  },
  circleContainer: {
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
  },
  descriptionText: {
    fontSize: 14,
    fontWeight: 'normal'
  }
});
