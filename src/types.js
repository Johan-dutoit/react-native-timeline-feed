/**
 * @format
 * @flow
 **/
import * as React from 'react';
import {
  type ViewStyleProp,
  type TextStyleProp
} from 'react-native/Libraries/StyleSheet/StyleSheet';

export type TimelineProps = {
  data: Array<Item>,
  lineWidth: number,
  lineColor: string,
  circleColor: string,
  dotColor: string,
  preset?: Preset,
  renderFeedItem?: RenderProps => React.Element<any>
};

export type Item = {
  title?: string,
  time?: string,
  description?: string,
  lineWidth?: number,
  lineColor?: string,
  circleColor?: string,
  dotColor?: string
};

export type FlatListItemProps = {
  item: Item,
  index: number
};

export type RenderProps = {
  item: Item,
  index: number,
  props: TimelineProps
};

export type RowProps = {
  item: Item,
  index: number,
  props: TimelineProps,
  children: React.Node,
  style?: ViewStyleProp
};

export type TimeProps = {
  item: Item,
  index: number,
  props: TimelineProps,
  style?: ViewStyleProp,
  textStyle?: TextStyleProp
};

export type EventProps = {
  item: Item,
  index: number,
  props: TimelineProps,
  children: React.Node,
  style?: ViewStyleProp
};

export type TitleProps = {
  item: Item,
  index: number,
  props: TimelineProps,
  textStyle?: TextStyleProp
};

export type CircleProps = {
  item: Item,
  index: number,
  props: TimelineProps,
  children: React.Node,
  style?: ViewStyleProp
};

export type VerticalProps = {
  item: Item,
  index: number,
  props: TimelineProps,
  children: React.Node,
  style?: ViewStyleProp
};

export type Preset = 'SingleColumnLeft' | 'SingleColumnRight';
