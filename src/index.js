// @flow

import * as React from "react";
import {
  StyleSheet,
  FlatList,
  Image,
  View,
  Text,
  TouchableOpacity
} from "react-native";

import type {
  ViewStyleProp,
  TextStyleProp
} from "react-native/Libraries/StyleSheet/StyleSheet";

const defaultCircleSize = 16;
const defaultCircleColor = "#007AFF";
const defaultLineWidth = 2;
const defaultLineColor = "#007AFF";
const defaultTimeTextColor = "black";
const defaultDotColor = "white";
const defaultInnerCircleType = "none";
const defaultColumnFormat = "single-column-left";

export type Props = {
  data: Array<any>,
  keyExtractor?: (item: any, index: number) => string,
  style?: ViewStyleProp,
  flatListStyle?: ViewStyleProp,
  flatListProps?: Object,
  columnFormat?: "single-column-left" | "single-column-right" | "two-column",
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
  innerCircleType?: "icon" | "dot",
  iconStyle?: ViewStyleProp,
  icon?: any,
  dotColor?: string,
  circleStyle?: ViewStyleProp,
  separator?: boolean,
  separatorStyle?: ViewStyleProp
};

type FlatListItemType = {
  item: any,
  index: number
};

type State = {
  x: number,
  width: number
};

class Timeline extends React.Component<Props, State> {
  state = {
    x: 0,
    width: 0
  };

  render() {
    const {
      style,
      data,
      flatListStyle,
      flatListProps,
      keyExtractor
    } = this.props;

    return (
      <View style={[styles.container, style]}>
        <FlatList
          automaticallyAdjustContentInsets={false}
          data={data}
          keyExtractor={keyExtractor}
          renderItem={this.renderItem}
          style={[styles.listview, this.props.flatListStyle]}
          {...flatListProps}
        />
      </View>
    );
  }

  renderItem = ({ item, index }: FlatListItemType) => {
    let content = null;

    const {
      columnFormat = defaultColumnFormat,
      rowContainerStyle,
      endWithCircle,
      data
    } = this.props;

    switch (columnFormat) {
      case "single-column-left":
        content = (
          <View style={[styles.rowContainer, rowContainerStyle]}>
            {this.renderTime({ item, index })}
            {this.renderEvent({ item, index })}
            {this.renderCircle({ item, index })}
          </View>
        );
        break;
      case "single-column-right":
        content = (
          <View style={[styles.rowContainer, rowContainerStyle]}>
            {this.renderEvent({ item, index })}
            {this.renderTime({ item, index })}
            {this.renderCircle({ item, index })}
          </View>
        );
        break;
      case "two-column":
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
        {isLast &&
          endWithCircle && (
            <View key="lastCircle">{this.renderLastCircle(item)}</View>
          )}
      </React.Fragment>
    );
  };

  renderLastCircle = (item: any) => {
    const { rowContainerStyle, lastCircleContainerStyle } = this.props;

    return (
      <View
        style={[
          styles.rowContainer,
          styles.lastCircleContainerStyle,
          rowContainerStyle,
          lastCircleContainerStyle
        ]}
      >
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

    const {
      columnFormat = defaultColumnFormat,
      timeContainerStyle,
      timeStyle
    } = this.props;
    var timeWrapper = null;
    switch (columnFormat) {
      case "single-column-left":
        timeWrapper = {
          alignItems: "flex-end"
        };
        break;
      case "single-column-right":
        timeWrapper = {
          alignItems: "flex-start"
        };
        break;
      case "two-column":
        timeWrapper = {
          flex: 1,
          alignItems: index % 2 == 0 ? "flex-end" : "flex-start"
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
    const { renderEvent } = this.props;
    if (renderEvent) {
      return renderEvent({ item, index });
    }

    const {
      columnFormat = defaultColumnFormat,
      lineWidth = item.lineWidth || defaultLineWidth,
      renderFullLine,
      data,
      lineColor = item.lineColor || defaultLineColor
    } = this.props;

    const isLast = renderFullLine ? !renderFullLine : index + 1 === data.length;
    const borderColor = isLast ? "transparent" : lineColor;

    let opStyle = null;

    switch (columnFormat) {
      case "single-column-left":
        opStyle = {
          borderColor: borderColor,
          borderLeftWidth: lineWidth,
          borderRightWidth: 0,
          marginLeft: 20,
          paddingLeft: 20
        };
        break;
      case "single-column-right":
        opStyle = {
          borderColor: borderColor,
          borderLeftWidth: 0,
          borderRightWidth: lineWidth,
          marginRight: 20,
          paddingRight: 20
        };
        break;
      case "two-column":
        opStyle =
          index % 2 == 0
            ? {
                borderColor: borderColor,
                borderLeftWidth: lineWidth,
                borderRightWidth: 0,
                marginLeft: 20,
                paddingLeft: 20
              }
            : {
                borderColor: borderColor,
                borderLeftWidth: 0,
                borderRightWidth: lineWidth,
                marginRight: 20,
                paddingRight: 20
              };
        break;
    }

    const { onEventPress, detailContainerStyle } = this.props;

    return (
      <View
        onLayout={evt => {
          if (!this.state.x && !this.state.width) {
            const { x, width } = evt.nativeEvent.layout;
            this.setState({ x, width });
          }
        }}
        style={[styles.details, opStyle]}
      >
        <TouchableOpacity
          disabled={onEventPress == null}
          onPress={() => (onEventPress ? onEventPress(item) : null)}
          style={detailContainerStyle}
        >
          <View style={styles.detail}>
            {this.renderDetail({ item, index })}
          </View>
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
        <Text style={[styles.description, descriptionStyle]}>
          {item.description}
        </Text>
      </View>
    ) : (
      <Text style={[styles.title, titleStyle]}>{item.title}</Text>
    );

    return <View style={styles.container}>{title}</View>;
  };

  renderCircle({ item, index }: FlatListItemType) {
    const { renderCircle } = this.props;
    if (renderCircle) {
      return renderCircle({ item, index });
    }

    const {
      circleSize = item.circleSize || defaultCircleSize,
      circleColor = item.circleColor || defaultCircleColor,
      lineWidth = item.lineWidth || defaultLineWidth,
      columnFormat = defaultColumnFormat
    } = this.props;

    const { x, width } = this.state;

    let localCircleStyle = null;
    switch (columnFormat) {
      case "single-column-left":
        localCircleStyle = {
          width: x ? circleSize : 0,
          height: x ? circleSize : 0,
          borderRadius: circleSize / 2,
          backgroundColor: circleColor,
          left: x - circleSize / 2 + (lineWidth - 1) / 2
        };
        break;
      case "single-column-right":
        localCircleStyle = {
          width: width ? circleSize : 0,
          height: width ? circleSize : 0,
          borderRadius: circleSize / 2,
          backgroundColor: circleColor,
          left: width - circleSize / 2 - (lineWidth - 1) / 2
        };
        break;
      case "two-column":
        localCircleStyle = {
          width: width ? circleSize : 0,
          height: width ? circleSize : 0,
          borderRadius: circleSize / 2,
          backgroundColor: circleColor,
          left: width - circleSize / 2 - (lineWidth - 1) / 2
        };
        break;
    }

    const {
      innerCircleType = defaultInnerCircleType,
      iconStyle,
      icon,
      dotColor = item.dotColor || defaultDotColor,
      circleStyle
    } = this.props;

    let innerCircleElement = null;
    switch (innerCircleType) {
      case "icon":
        const IconElement = item.icon || icon;
        let localIconStyle = {
          height: circleSize,
          width: circleSize
        };
        innerCircleElement = (
          <IconElement style={[localIconStyle, iconStyle]} />
        );
        break;
      case "dot":
        let dotStyle = {
          height: circleSize / 2,
          width: circleSize / 2,
          borderRadius: circleSize / 4,
          backgroundColor: dotColor
        };
        innerCircleElement = <View style={[styles.dot, dotStyle]} />;
        break;
    }
    return (
      <View style={[styles.circle, localCircleStyle, circleStyle]}>
        {innerCircleElement}
      </View>
    );
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
    flexDirection: "row",
    justifyContent: "center"
  },
  lastCircleContainerStyle: {
    marginBottom: 25
  },
  timeContainer: {
    minWidth: 45
  },
  time: {
    textAlign: "right",
    color: defaultTimeTextColor
  },
  circle: {
    width: 16,
    height: 16,
    borderRadius: 10,
    position: "absolute",
    left: -8,
    alignItems: "center",
    justifyContent: "center"
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: defaultDotColor
  },
  title: {
    fontSize: 16,
    fontWeight: "bold"
  },
  details: {
    borderLeftWidth: defaultLineWidth,
    flexDirection: "column",
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
    backgroundColor: "#aaa",
    marginTop: 10,
    marginBottom: 10
  }
});

export default Timeline;
