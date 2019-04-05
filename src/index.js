/**
 * @format
 * @flow
 **/

import * as React from 'react';
import { StyleSheet, FlatList, View, Text, TouchableOpacity } from 'react-native';
import type { ViewStyleProp, TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';

import { type FlatListItemProps, type Item, type RenderProps, type TimelineProps } from './types';

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

import {
  DEFAULT_CIRCLE_COLOR,
  DEFAULT_DOT_COLOR,
  DEFAULT_LINE_COLOR,
  DEFAULT_LINE_WIDTH
} from './defaults';

import * as presets from './presets';

class Timeline extends React.Component<TimelineProps> {
  static defaultProps = {
    lineWidth: DEFAULT_LINE_WIDTH,
    lineColor: DEFAULT_LINE_COLOR,
    circleColor: DEFAULT_CIRCLE_COLOR,
    dotColor: DEFAULT_DOT_COLOR
  };

  static Row = Row;
  static Time = Time;
  static Event = Event;
  static Title = Title;
  static Description = Description;
  static VerticalSeparator = VerticalSeparator;
  static Line = Line;
  static Circle = Circle;
  static Dot = Dot;

  render() {
    const { ...otherProps } = this.props;

    return (
      <FlatList
        automaticallyAdjustContentInsets={false}
        {...otherProps}
        renderItem={this.renderItem}
      />
    );
  }

  renderItem = ({ item, index }: FlatListItemProps) => {
    const { props } = this;
    const { renderFeedItem, preset = 'SingleColumnLeft' } = props;

    const renderProps: RenderProps = {
      item,
      index,
      props
    };

    if (renderFeedItem) {
      return renderFeedItem(renderProps);
    }

    const Component = presets[preset];
    if (Component == null) {
      console.warn(`Invalid preset (${preset}) specified. See 'Presets' for more options.`);
      return null;
    }

    return <Component {...renderProps} />;
  };
}

export default Timeline;
