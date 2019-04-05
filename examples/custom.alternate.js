/**
 * @format
 * @flow
 **/

import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// You can import from local files
import Timeline from '../src/index';
import { type FlatListItemProps, type RenderProps } from '../src/types';

const data = [
  {
    time: '09:03',
    title: 'Event 1',
    description: 'Event 1 Description'
  },
  {
    time: '10:45',
    title: 'Event 2',
    description: 'Event 2 Description'
  },
  {
    time: '12:00',
    title: 'Event 3',
    description: 'Event 3 Description',
    circleColor: 'pink',
    lineColor: 'pink',
    lineWidth: 5
  },
  {
    time: '14:00',
    title: 'Event 4',
    description: 'Event 4 Description'
  },
  {
    time: '16:30',
    title: 'Event 5',
    description: 'Event 5 Description',
    imageUrl:
      'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg'
  }
];

export default class App extends React.Component<*> {
  render() {
    return (
      <View style={styles.container}>
        <Timeline
          data={data}
          circleColor="lightblue"
          lineColor="lightblue"
          lineWidth={2}
          renderFeedItem={this.renderFeedItem}
        />
      </View>
    );
  }

  renderFeedItem = ({ item, index, props }: RenderProps) => {
    if (index % 2 === 0) {
      return (
        <View style={styles.row} key={index}>
          <Timeline.Time>{item.time}</Timeline.Time>
          <Timeline.VerticalSeparator>
            <Timeline.Circle color="black">
              <Timeline.Dot color="white" />
            </Timeline.Circle>
          </Timeline.VerticalSeparator>
          <Timeline.Event style={styles.event}>
            <Timeline.Title>{item.title}</Timeline.Title>
            <Timeline.Description>{item.description}</Timeline.Description>
          </Timeline.Event>
        </View>
      );
    } else {
      return (
        <View style={styles.row} key={index}>
          <Timeline.Event style={styles.event}>
            <Timeline.Title>{item.title}</Timeline.Title>
            <Timeline.Description>{item.description}</Timeline.Description>
          </Timeline.Event>
          <Timeline.VerticalSeparator>
            <Timeline.Circle color="black">
              <Timeline.Dot color="white" />
            </Timeline.Circle>
          </Timeline.VerticalSeparator>
          <Timeline.Time>{item.time}</Timeline.Time>
        </View>
      );
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#ecf0f1',
    padding: 8
  },
  row: {
    flex: 1,
    flexDirection: 'row'
  },
  event: {
    backgroundColor: 'lightyellow',
    borderRadius: 10,
    marginBottom: 8
  }
});
