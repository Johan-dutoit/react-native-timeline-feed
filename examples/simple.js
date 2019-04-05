/**
 * @format
 * @flow
 **/

import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

// You can import from local files
import Timeline from '../src/index';
import { type FlatListItemProps, type RenderProps } from '../src/types';
import { Time } from '../src/components';

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
    description: 'Event 5 Description'
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

  renderFeedItem = ({ item, index }: RenderProps) => {
    return (
      <Timeline.Row>
        <Timeline.Time>{item.time}</Timeline.Time>
      </Timeline.Row>
    );
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 20,
    backgroundColor: '#ecf0f1',
    padding: 8
  }
});
