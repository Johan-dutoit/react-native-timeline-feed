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
  children: React.Node,
  style?: ViewStyleProp
};

export type TimeProps = {
  children?: string,
  style?: ViewStyleProp,
  textStyle?: TextStyleProp
};

export type EventProps = {
  children?: React.Node,
  style?: ViewStyleProp
};

export type TitleProps = {
  children?: string,
  textStyle?: TextStyleProp
};

export type DescriptionProps = {
  children?: string,
  textStyle?: TextStyleProp
};

export type VerticalProps = {
  children: React.Node,
  style?: ViewStyleProp
};

export type LineProps = {
  width: number,
  color: string,
  style?: ViewStyleProp
};

export type DotProps = {
  color: string,
  style?: ViewStyleProp
};

export type CircleProps = {
  color: string,
  children?: React.Node,
  style?: ViewStyleProp
};

export type Preset = 'SingleColumnLeft' | 'SingleColumnRight';
