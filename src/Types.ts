/** @format */

import * as React from 'react';
import { ViewStyle, TextStyle, FlatListProps } from 'react-native';

import { Omit } from './Utils';

export interface ItemProps {
  title?: string;
  time?: string;
  description?: string;
  lineWidth?: number;
  lineColor?: string;
  circleColor?: string;
  dotColor?: string;
}

export interface RenderProps {
  item: ItemProps;
  index: number;
  isLast: boolean;
  props: TimelineProps;
}

type LocalFlatListProps = Omit<FlatListProps<ItemProps>, 'renderItem'>;

export interface TimelineProps extends LocalFlatListProps {
  lineWidth: number;
  lineColor: string;
  circleColor: string;
  dotColor: string;
  endWithCircle: boolean;
  preset: Preset;
  data: ReadonlyArray<ItemProps>;
  renderFeedItem?: (props: RenderProps) => React.ReactElement<any>;
}

export interface RowProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export interface TimeProps {
  children?: string;
  style?: ViewStyle;
  textStyle?: TextStyle;
}

export interface EventProps {
  children?: React.ReactNode;
  style?: ViewStyle;
}

export interface TitleProps {
  children?: string;
  textStyle?: TextStyle;
}

export interface DescriptionProps {
  children?: string;
  textStyle?: TextStyle;
}

export interface VerticalProps {
  children: React.ReactNode;
  style?: ViewStyle;
}

export interface LineProps {
  width: number;
  color: string;
  style?: ViewStyle;
}

export interface DotProps {
  color: string;
  style?: ViewStyle;
}

export interface CircleProps {
  color: string;
  children?: React.ReactNode;
  style?: ViewStyle;
}

export enum Preset {
  'SingleColumnLeft',
  'SingleColumnRight'
}
