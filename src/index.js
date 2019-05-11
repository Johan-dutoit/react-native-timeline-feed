// @flow

import * as React from 'react';
import { StyleSheet, FlatList, View, Text, TouchableOpacity } from 'react-native';

import type { ViewStyleProp, TextStyleProp } from 'react-native/Libraries/StyleSheet/StyleSheet';

const DEFAULT_CIRCLE_SIZE = 16;
const DEFAULT_CIRCLE_COLOR = '#007AFF';
const DEFAULT_LINE_WIDTH = 2;
const DEFAULT_LINE_COLOR = '#007AFF';
const DEFAULT_TIME_TEXT_COLOR = 'black';
const DEFAULT_DOT_COLOR = 'white';
const DEFAULT_INNER_CIRCLE_TYPE = 'none';
const DEFAULT_COLUMN_FORMAT = 'single-column-left';

export type Props = {
  data: Array<Item>,
  keyExtractor?: (item: Item, index: number) => string,
  style?: ViewStyleProp,
  flatListStyle?: ViewStyleProp,
  flatListProps?: Object,
  columnFormat?: 'single-column-left' | 'single-column-right' | 'two-column',
  rowContainerStyle?: ViewStyleProp,
  lastCircleContainerStyle?: ViewStyleProp,
  showTime?: boolean,
  renderTime?: FlatListItemType => React.Element<any>,
  timeContainerStyle?: ViewStyleProp,
  timeStyle?: TextStyleProp,
  renderEvent?: FlatListItemType => React.Element<any>,
  lineWidth?: number,
  renderFullLine?: boolean,
  endWithCircle?: boolean,
  lineColor?: string,
  onEventPress?: (rowData: any) => void,
  detailContainerStyle?: ViewStyleProp,
  renderDetail?: FlatListItemType => React.Element<any>,
  titleStyle?: TextStyleProp,
  descriptionStyle?: TextStyleProp,
  renderCircle?: FlatListItemType => React.Element<any>,
  circleSize?: number,
  circleColor?: string,
  innerCircleType?: 'icon' | 'dot',
  iconStyle?: ViewStyleProp,
  icon?: React.Element<any>,
  dotColor?: string,
  circleStyle?: ViewStyleProp,
  separator?: boolean,
  separatorStyle?: ViewStyleProp,
  centerLineAndCircle?: boolean
};

export type Item = {
  time?: string,
  title?: string,
  description?: string,
  lineWidth?: number,
  lineColor?: string,
  circleSize?: number,
  circleColor?: string,
  dotColor?: number,
  icon?: React.Element<any>
};

type FlatListItemType = {
  item: Item,
  index: number
};

type State = {
  x: number,
  width: number
};

class Timeline extends React.Component<Props, State> {
  state = {
    x: 0,
    width: 0,
    maxLineWidth: DEFAULT_LINE_WIDTH,
  };

  static getDerivedStateFromProps (props, state) {
    let maxLineWidth = props.lineWidth || DEFAULT_LINE_WIDTH

    (props.data || []).forEach(function (item) {
      maxLineWidth = Math.max(maxLineWidth, item.lineWidth || maxLineWidth)
    })

    return {
      ...state,
      maxLineWidth,
    }
  }

  render() {
    const { style, data, flatListStyle, flatListProps, keyExtractor } = this.props;

    return (
      <View style={[styles.container, style]}>
        <FlatList
          automaticallyAdjustContentInsets={false}
          data={data}
          keyExtractor={keyExtractor}
          renderItem={this.renderItem}
          style={[styles.listview, flatListStyle]}
          {...flatListProps}
        />
      </View>
    );
  }

  renderItem = ({ item, index }: FlatListItemType) => {
    let content = null;

    const {
      columnFormat = DEFAULT_COLUMN_FORMAT,
      rowContainerStyle,
      endWithCircle,
      data
    } = this.props;

    switch (columnFormat) {
      case 'single-column-left':
        content = (
          <View style={[styles.rowContainer, rowContainerStyle]}>
            {this.renderTime({ item, index })}
            {this.renderEvent({ item, index })}
            {this.renderCircle({ item, index })}
          </View>
        );
        break;
      case 'single-column-right':
        content = (
          <View style={[styles.rowContainer, rowContainerStyle]}>
            {this.renderEvent({ item, index })}
            {this.renderTime({ item, index })}
            {this.renderCircle({ item, index })}
          </View>
        );
        break;
      case 'two-column':
        content =
          index % 2 == 0 ? (
            <View style={[styles.rowContainer, rowContainerStyle]}>
              {this.renderTime({ item, index })}
              {this.renderEvent({ item, index })}
              {this.renderCircle({ item, index })}
            </View>
          ) : (
            <View style={[styles.rowContainer, rowContainerStyle]}>
              {this.renderEvent({ item, index })}
              {this.renderTime({ item, index })}
              {this.renderCircle({ item, index })}
            </View>
          );
        break;
    }

    const isLast = index + 1 === data.length;
    return (
      <React.Fragment>
        <View key={index}>{content}</View>
        {isLast && endWithCircle && <View key="lastCircle">{this.renderLastCircle(item)}</View>}
      </React.Fragment>
    );
  };

  renderLastCircle = (item: Item) => {
    const { rowContainerStyle, lastCircleContainerStyle } = this.props;

    return (
      <View
        style={[
          styles.rowContainer,
          styles.lastCircleContainerStyle,
          rowContainerStyle,
          lastCircleContainerStyle
        ]}>
        {this.renderCircle({ item, index: -1, isLast: true })}
      </View>
    );
  };

  renderTime = ({ item, index }: FlatListItemType) => {
    const { showTime = true, renderTime } = this.props;

    if (!showTime) {
      return null;
    }

    if (renderTime) {
      return renderTime({ item, index });
    }

    const { columnFormat = DEFAULT_COLUMN_FORMAT, timeContainerStyle, timeStyle } = this.props;
    var timeWrapper = null;
    switch (columnFormat) {
      case 'single-column-left':
        timeWrapper = {
          alignItems: 'flex-end'
        };
        break;
      case 'single-column-right':
        timeWrapper = {
          alignItems: 'flex-start'
        };
        break;
      case 'two-column':
        timeWrapper = {
          flex: 1,
          alignItems: index % 2 == 0 ? 'flex-end' : 'flex-start'
        };
        break;
    }

    return (
      <View style={timeWrapper}>
        <View style={[styles.timeContainer, timeContainerStyle]}>
          <Text style={[styles.time, timeStyle]}>{item.time}</Text>
        </View>
      </View>
    );
  };

  renderEvent = ({ item, index }: FlatListItemType) => {
    const { renderEvent, centerLineAndCircle } = this.props;
    if (renderEvent) {
      return renderEvent({ item, index });
    }

    const {
      columnFormat = DEFAULT_COLUMN_FORMAT,
      lineWidth,
      renderFullLine,
      data,
      lineColor
    } = this.props;

    const lineColorToUse = item.lineColor || lineColor || DEFAULT_LINE_COLOR;
    const lineWidthToUse = item.lineWidth || lineWidth || DEFAULT_LINE_WIDTH;
    const margin = centerLineAndCircle
      ? Math.floor((this.state.maxLineWidth - lineWidthToUse) / 2.0)
      : 0;

    const isLast = renderFullLine ? !renderFullLine : index + 1 === data.length;
    const borderColor = isLast ? 'transparent' : lineColorToUse;

    let opStyle = null;

    switch (columnFormat) {
      case 'single-column-left':
        opStyle = {
          borderColor: borderColor,
          borderLeftWidth: lineWidthToUse,
          borderRightWidth: 0,
          marginLeft: 20 + margin,
          paddingLeft: 20 + margin
        };
        break;
      case 'single-column-right':
        opStyle = {
          borderColor: borderColor,
          borderLeftWidth: 0,
          borderRightWidth: lineWidthToUse,
          marginRight: 20 + margin,
          paddingRight: 20 + margin
        };
        break;
      case 'two-column':
        opStyle =
          index % 2 == 0
            ? {
                borderColor: borderColor,
                borderLeftWidth: lineWidthToUse,
                borderRightWidth: 0,
                marginLeft: 20 + margin,
                paddingLeft: 20 + margin
              }
            : {
                borderColor: borderColor,
                borderLeftWidth: 0,
                borderRightWidth: lineWidthToUse,
                marginRight: 20 + margin,
                paddingRight: 20 + margin
              };
        break;
    }

    const { onEventPress, detailContainerStyle, centerLineAndCircle } = this.props;

    return (
      <View
        onLayout={evt => {
          const { x, width } = evt.nativeEvent.layout;
          if (!this.state.x && !this.state.width) {
            this.setState({ x, width });
          }
        }}
        style={[styles.details, opStyle]}>
        <TouchableOpacity
          disabled={onEventPress == null}
          onPress={() => (onEventPress ? onEventPress(item) : null)}
          style={detailContainerStyle}>
          <View style={styles.detail}>{this.renderDetail({ item, index })}</View>
          {this.renderSeparator()}
        </TouchableOpacity>
      </View>
    );
  };

  renderDetail = ({ item, index }: FlatListItemType) => {
    const { renderDetail, titleStyle, descriptionStyle } = this.props;

    if (renderDetail) {
      return renderDetail({ item, index });
    }

    let title = item.description ? (
      <View>
        <Text style={[styles.title, titleStyle]}>{item.title}</Text>
        <Text style={[styles.description, descriptionStyle]}>{item.description}</Text>
      </View>
    ) : (
      <Text style={[styles.title, titleStyle]}>{item.title}</Text>
    );

    return <View style={styles.container}>{title}</View>;
  };

  renderCircle({ item, index }: FlatListItemType) {
    const { renderCircle, centerLineAndCircle } = this.props;

    if (renderCircle) {
      return renderCircle({ item, index });
    }

    const { circleSize, circleColor, lineWidth, columnFormat = DEFAULT_COLUMN_FORMAT } = this.props;

    const circleSizeToUse = item.circleSize || circleSize || DEFAULT_CIRCLE_SIZE;
    const circleColorToUse = item.circleColor || circleColor || DEFAULT_CIRCLE_COLOR;
    const lineWidthToUse = centerLineAndCircle
      ? this.state.maxLineWidth
      : item.lineWidth || lineWidth || DEFAULT_LINE_WIDTH;

    const { x, width } = this.state;

    let localCircleStyle = null;
    switch (columnFormat) {
      case 'single-column-left':
        localCircleStyle = {
          width: x ? circleSizeToUse : 0,
          height: x ? circleSizeToUse : 0,
          borderRadius: circleSizeToUse / 2,
          backgroundColor: circleColorToUse,
          left: x - circleSizeToUse / 2 + (lineWidthToUse - 1) / 2
        };
        break;
      case 'single-column-right':
        localCircleStyle = {
          width: width ? circleSizeToUse : 0,
          height: width ? circleSizeToUse : 0,
          borderRadius: circleSizeToUse / 2,
          backgroundColor: circleColorToUse,
          left: width - circleSizeToUse / 2 - (lineWidthToUse - 1) / 2
        };
        break;
      case 'two-column':
        localCircleStyle = {
          width: width ? circleSizeToUse : 0,
          height: width ? circleSizeToUse : 0,
          borderRadius: circleSizeToUse / 2,
          backgroundColor: circleColorToUse,
          left: width - circleSizeToUse / 2 - (lineWidthToUse - 1) / 2
        };
        break;
    }

    if (centerLineAndCircle) {
      localCircleStyle.top = - circleSizeToUse;
    }

    const {
      innerCircleType = DEFAULT_INNER_CIRCLE_TYPE,
      iconStyle,
      icon,
      dotColor,
      circleStyle
    } = this.props;

    const dotColorTouse = item.dotColor || dotColor || DEFAULT_DOT_COLOR;

    let innerCircleElement = null;
    switch (innerCircleType) {
      case 'icon':
        {
          const IconElement = item.icon || icon;
          if (IconElement == null) {
            console.warn(
              'Expecting `icon` for item but found nothing on both the item and the Timeline.'
            );
          } else {
            let localIconStyle = {
              height: circleSizeToUse,
              width: circleSizeToUse
            };

            innerCircleElement = <IconElement style={[localIconStyle, iconStyle]} />;
          }
        }
        break;
      case 'dot':
        {
          let dotStyle = {
            height: circleSizeToUse / 2,
            width: circleSizeToUse / 2,
            borderRadius: circleSizeToUse / 4,
            backgroundColor: dotColorTouse
          };
          innerCircleElement = <View style={[styles.dot, dotStyle]} />;
        }
        break;
    }

    return <View style={[styles.circle, localCircleStyle, circleStyle]}>{innerCircleElement}</View>;
  }

  renderSeparator() {
    const { separator = false, separatorStyle } = this.props;
    if (!separator) {
      return null;
    }
    return <View style={[styles.separator, separatorStyle]} />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listview: {
    flex: 1
  },
  rowContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  lastCircleContainerStyle: {
    marginBottom: 25
  },
  timeContainer: {
    minWidth: 45
  },
  time: {
    textAlign: 'right',
    color: DEFAULT_TIME_TEXT_COLOR
  },
  circle: {
    width: DEFAULT_CIRCLE_SIZE,
    height: DEFAULT_CIRCLE_SIZE,
    borderRadius: 10,
    position: 'absolute',
    left: -8,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: DEFAULT_DOT_COLOR
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  details: {
    borderLeftWidth: DEFAULT_LINE_WIDTH,
    flexDirection: 'column',
    flex: 1
  },
  detail: {
    paddingTop: 10,
    paddingBottom: 10
  },
  description: {
    marginTop: 10
  },
  separator: {
    height: 1,
    backgroundColor: '#aaa',
    marginTop: 10,
    marginBottom: 10
  }
});

export default Timeline;
