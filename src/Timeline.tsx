/**
 * @format
 **/

import * as React from 'react';
import { FlatList, ListRenderItemInfo } from 'react-native';

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

import {
  DEFAULT_CIRCLE_COLOR,
  DEFAULT_DOT_COLOR,
  DEFAULT_LINE_COLOR,
  DEFAULT_LINE_WIDTH,
  DEFAULT_END_WITH_CIRCLE,
  DEFAULT_PRESET
} from './Defaults';

import Presets from './Presets';

import { TimelineProps, ItemProps, RenderProps } from './Types';

class Timeline extends React.PureComponent<TimelineProps> {
  static defaultProps = {
    lineWidth: DEFAULT_LINE_WIDTH,
    lineColor: DEFAULT_LINE_COLOR,
    circleColor: DEFAULT_CIRCLE_COLOR,
    dotColor: DEFAULT_DOT_COLOR,
    endWithCircle: DEFAULT_END_WITH_CIRCLE,
    preset: DEFAULT_PRESET
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

  renderItem = ({ item, index }: ListRenderItemInfo<ItemProps>) => {
    const { renderItem, preset, data } = this.props;
    const isLast = data.length - 1 === index;

    const renderProps: RenderProps = {
      item,
      index,
      isLast,
      props: this.props
    };

    if (renderItem) {
      return renderItem(renderProps);
    }

    const Component = Presets[preset];
    if (Component == null) {
      console.warn(`Invalid preset (${preset}) specified. See 'Presets' for more options.`);
      return null;
    }

    return <Component {...renderProps} />;
  };
}

export default Timeline;
