# React Native Timeline feed

Timeline component for React Native App work for Android and iOS

![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)
[![NPM Version](https://img.shields.io/npm/v/react-native-timeline-feed.svg?style=flat)](https://www.npmjs.com/package/react-native-timeline-feed)
[![NPM Downloads](https://img.shields.io/npm/dm/react-native-timeline-feed.svg?style=flat)](https://www.npmjs.com/package/react-native-timeline-feed)

Thanks to the contributors of [react-native-timeline-listview](https://github.com/thegamenicorus/react-native-timeline-listview), as this is heavily based off that and amended with the newer React Native features (incl. flatlist).

![Examples](https://cloud.githubusercontent.com/assets/21040043/24750025/8c8d044e-1aef-11e7-8fd7-7d64431af7e4.png)

# IMPORTANT

Migrating from [react-native-timeline-listview](https://github.com/thegamenicorus/react-native-timeline-listview)? Note the following breaking changes:

- `innerCircle` to `innerCircleType`
- `options` to `flatlistProps`
- `renderXXX(rowData, sectionID, rowID)` to `renderXXX({ item, index })`

# Table of Contents

- [Installation](#installation)
- Usage
  - [Basic usage](#basic-usage)
  - [Custom example](#custom)
  - [Circle dot example](#circle-dot)
  - [Icon example](#icon)
  - [Override render example](#override-render)
  - [Pull to refresh and load more example](#pull-to-refresh-and-load-more)
  - [Single column right](#single-column-right)
  - [Two column](#two-column)
  - [Time container hiding](#hide-time)
- Configuration
  - [Data Object](#data-object)
  - [Timeline](#timeline)
- [Shift problem](#shift-problem)

## Installation

```
npm i react-native-timeline-feed --save
```

## Expo

[Playground](https://snack.expo.io/@johan-dev/react-native-timeline-feed)

## Basic Usage

![image2](https://cloud.githubusercontent.com/assets/21040043/24320617/6a7494ea-116b-11e7-9cf5-12244f5eec58.png)

```jsx
import Timeline from 'react-native-timeline-feed'

constructor(){
    super()
    this.data = [
      {time: '09:00', title: 'Event 1', description: 'Event 1 Description'},
      {time: '10:45', title: 'Event 2', description: 'Event 2 Description'},
      {time: '12:00', title: 'Event 3', description: 'Event 3 Description'},
      {time: '14:00', title: 'Event 4', description: 'Event 4 Description'},
      {time: '16:30', title: 'Event 5', description: 'Event 5 Description'}
    ]
  }

render(){
    return(
        <Timeline
          data={this.data}
        />
    )
}
```

## Custom

![image3](https://cloud.githubusercontent.com/assets/21040043/24320631/9df21a86-116b-11e7-8865-2631d35bc640.png)

```jsx
render(){
    return(
        <Timeline
          //..other props
          circleSize={20}
          circleColor='rgb(45,156,219)'
          lineColor='rgb(45,156,219)'
          timeContainerStyle={{minWidth:52, marginTop: -5}}
          timeStyle={{textAlign: 'center', backgroundColor:'#ff9797', color:'white', padding:5, borderRadius:13}}
          descriptionStyle={{color:'gray'}}
          flatListProps={{
            style:{paddingTop:5}
          }}
        />
    )
}
```

## Circle Dot

![image4](https://cloud.githubusercontent.com/assets/21040043/24320644/f5bc5b0a-116b-11e7-9252-2c9fc2361dc9.png)

```jsx
render(){
    return(
        <Timeline
          //..other props
          innerCircleType='dot'
        />
    )
}
```

## Icon

![image5](https://cloud.githubusercontent.com/assets/21040043/24320654/1c5de27e-116c-11e7-95cc-750d55e001b8.png)

```jsx
constructor(){
    super()

    // Either of these will work and others should as well. You can provide your own icon component to be displayed.
    // Image Component
    const archeryImgSource = require('../img/archery.png');
    const badmintonImgSource = require('../img/badminton.png');
    const lunchImgSource = require('../img/lunch.png');
    const soccerImgSource = require('../img/soccer.png');
    const dumbbellImgSource = require('../img/dumbbell.png');
    const vectorIconImgSource = await MaterialIcon.getImageSource("new-releases", 30, "black");
    const ArcheryImage = (props) => <Image source={archeryImgSource} {...props} />;
    const BadmintonImage = (props) => <Image source={badmintonImgSource} {...props} />;
    const LunchImage = (props) => <Image source={lunchImgSource} {...props} />;
    const SoccerImage = (props) => <Image source={soccerImgSource} {...props} />;
    const DumbbellImage = (props) => <Image source={dumbbellImgSource} {...props} />;
    const VectorIconImage = (props) => <Image source={vectorIconImgSource} {...props} />;

    // VectorIcon Component
    const NewIcon = (props) => <MaterialIcon name="new-releases" size={30} color="black" {...props} />;

    this.data = [
      {time: '09:00', title: 'Archery Training', description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ',lineColor:'#009688', icon: ArcheryImage},
      {time: '10:45', title: 'Play Badminton', description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.', icon: BadmintonImage},
      {time: '12:00', title: 'Lunch', icon: LunchImage},
      {time: '14:00', title: 'Watch Soccer', description: 'Team sport played between two teams of eleven players with a spherical ball. ',lineColor:'#009688', icon: SoccerImage},
      {time: '16:30', title: 'Go to Fitness center', description: 'Look out for the Best Gym & Fitness Centers around me :)', icon: DumbbellImage}
    ]
  }
render(){
    return(
        <Timeline
          //..other props
          innerCircleType='icon'
        />
    )
}
```

## Override Render

![image6](https://cloud.githubusercontent.com/assets/21040043/24320661/36fe76e8-116c-11e7-950f-2968aef312bb.png)

```jsx
constructor(){
    super()

    // Either of these will work and others should as well. You can provide your own icon component to be displayed.
    // Image Component
    const archeryImgSource = require('../img/archery.png');
    const badmintonImgSource = require('../img/badminton.png');
    const lunchImgSource = require('../img/lunch.png');
    const soccerImgSource = require('../img/soccer.png');
    const dumbbellImgSource = require('../img/dumbbell.png');
    const vectorIconImgSource = await MaterialIcon.getImageSource("new-releases", 30, "black");
    const ArcheryImage = (props) => <Image source={archeryImgSource} {...props} />;
    const BadmintonImage = (props) => <Image source={badmintonImgSource} {...props} />;
    const LunchImage = (props) => <Image source={lunchImgSource} {...props} />;
    const SoccerImage = (props) => <Image source={soccerImgSource} {...props} />;
    const DumbbellImage = (props) => <Image source={dumbbellImgSource} {...props} />;
    const VectorIconImage = (props) => <Image source={vectorIconImgSource} {...props} />;

    // VectorIcon Component
    const NewIcon = (props) => <MaterialIcon name="new-releases" size={30} color="black" {...props} />;

    this.data = [
      {
        time: '09:00',
        title: 'Archery Training',
        description: 'The Beginner Archery and Beginner Crossbow course does not require you to bring any equipment, since everything you need will be provided for the course. ',
        lineColor:'#009688',
        icon: ArcheryImage,
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240340/c0f96b3a-0fe3-11e7-8964-fe66e4d9be7a.jpg'
      },
      {
        time: '10:45',
        title: 'Play Badminton',
        description: 'Badminton is a racquet sport played using racquets to hit a shuttlecock across a net.',
        icon: BadmintonImage,
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240405/0ba41234-0fe4-11e7-919b-c3f88ced349c.jpg'
      },
      {
        time: '12:00',
        title: 'Lunch',
        icon: LunchImage,
      },
      {
        time: '14:00',
        title: 'Watch Soccer',
        description: 'Team sport played between two teams of eleven players with a spherical ball. ',
        lineColor:'#009688',
        icon: SoccerImage,
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240419/1f553dee-0fe4-11e7-8638-6025682232b1.jpg'
      },
      {
        time: '16:30',
        title: 'Go to Fitness center',
        description: 'Look out for the Best Gym & Fitness Centers around me :)',
        icon: DumbbellImage,
        imageUrl: 'https://cloud.githubusercontent.com/assets/21040043/24240422/20d84f6c-0fe4-11e7-8f1d-9dbc594d0cfa.jpg'
      }
    ]
  }

renderDetail = ({ item, index })=> {
  return (
    <View style={{ flex: 1 }}>
      <Text style={[styles.title]}>{item.title}</Text>;
      <View style={{ height: 75 }}>
        {item.imageUrl && (
          <Image
            source={{ uri: item.imageUrl, width: 50, height: 50 }}
            style={{ borderRadius: 25 }}
          />
        )}
        <Text>{item.description}</Text>
      </View>
    </View>
  );
}

render(){
  return(
      <Timeline
        //..other props
        renderDetail={this.renderDetail}
      />
  )
}
```

## Pull to refresh and load more

![rflm](https://cloud.githubusercontent.com/assets/21040043/26756369/304d2e7a-48cb-11e7-816d-66e8d40a97ee.png)

```jsx
onRefresh = () => {
  //set initial data
}

onEndReached = () => {
  //fetch next data
}

renderFooter = () => {
    //show loading indicator
    if (this.state.waiting) {
        return <ActivityIndicator />;
    } else {
        return <Text>~</Text>;
    }
}

render(){
    return(
        <Timeline
          //..other props
          flatListProps={{
            refreshControl: (
              <RefreshControl
                refreshing={this.state.isRefreshing}
                onRefresh={this.onRefresh}
              />
            ),
            renderFooter: this.renderFooter,
            onEndReached: this.onEndReached
          }}
        />
    )
}
```

## Column Format

### Single Column Right

![simulator screen shot apr 6 2560 be 5 19 51 pm](https://cloud.githubusercontent.com/assets/21040043/24749469/60a7869e-1aed-11e7-9c41-f87f866b2d8d.png)

```jsx
render(){
    return(
        <Timeline
          //..other props
          columnFormat='single-column-right'
        />
    )
}
```

### Two Column

![simulator screen shot apr 6 2560 be 5 05 32 pm](https://cloud.githubusercontent.com/assets/21040043/24749638/0515f210-1aee-11e7-82af-082d93efb618.png)

```jsx
render(){
    return(
        <Timeline
          //..other props
          columnFormat='two-column'
        />
    )
}
```

### Time container hiding

![showTime](https://user-images.githubusercontent.com/6987730/35145888-fae0f1e2-fd3b-11e7-9571-2143342512c8.png)

```jsx
render(){
    return(
        <Timeline
          //..other props
          showTime={false}
        />
    )
}
```

## Configuration

#### Data Object:

| Property    | Type                        | Default                           | Description                               |
| ----------- | --------------------------- | --------------------------------- | ----------------------------------------- |
| time        | string                      | null                              | event time                                |
| title       | string                      | null                              | event title                               |
| description | string                      | null                              | event description                         |
| lineWidth   | int                         | same as lineWidth of 'Timeline'   | event line width                          |
| lineColor   | string                      | same as lineColor of 'Timeline'   | event line color                          |
| circleSize  | int                         | same as circleSize of 'Timeline'  | event circle size                         |
| circleColor | string                      | same as circleColor of 'Timeline' | event circle color                        |
| dotColor    | string                      | same as dotColor of 'Timeline'    | event dot color (innerCircleType = 'dot') |
| icon        | React.ReactNode (component) | same as icon of 'Timeline'        | event icon (innerCircleType = 'color')    |

#### Timeline:

| Property                 | Type                              | Default       | Description                                                                                                              |
| ------------------------ | --------------------------------- | ------------- | ------------------------------------------------------------------------------------------------------------------------ |
| data                     | data object                       | null          | timeline data                                                                                                            |
| innerCircleType          | string                            | null          | timeline mode : 'none', 'dot', 'icon'                                                                                    |
| separator                | bool                              | true          | render separator line of events                                                                                          |
| columnFormat             | string                            | 'single-left' | can be 'single-column-left', 'single-column-right', 'two-column'                                                         |
| lineWidth                | int                               | 2             | timeline line width                                                                                                      |
| lineColor                | string                            | '#007AFF'     | timeline line color                                                                                                      |
| circleSize               | int                               | 16            | timeline circle size                                                                                                     |
| circleColor              | string                            | '#007AFF'     | timeline circle color                                                                                                    |
| dotColor                 | string                            | 'white'       | timeline dot color (innerCircleType = 'dot')                                                                             |
| icon                     | React.ReactNode (component)       | null          | timeline icon (innerCircleType = 'color')                                                                                |
| style                    | object                            | null          | custom styles of Timeline container                                                                                      |
| flatlistStyle            | object                            | null          | custom styles of inner FlatList                                                                                          |
| timeStyle                | object                            | null          | custom styles of event time                                                                                              |
| titleStyle               | object                            | null          | custom styles of event title                                                                                             |
| descriptionStyle         | object                            | null          | custom styles of event description                                                                                       |
| iconStyle                | object                            | null          | custom styles of event icon                                                                                              |
| separatorStyle           | object                            | null          | custom styles of separator                                                                                               |
| rowContainerStyle        | object                            | null          | custom styles of event container                                                                                         |
| timeContainerStyle       | object                            | null          | custom styles of container of event time                                                                                 |
| lastCircleContainerStyle | object                            | null          | custom styles of container for the last circle (used in conjuction with `endWithCircle`)                                 |
| detailContainerStyle     | object                            | null          | custom styles of container of event title and event description                                                          |
| onEventPress             | function(event)                   | null          | function to be invoked when event was pressed                                                                            |
| renderTime               | function({ item, index })         | null          | custom render event time                                                                                                 |
| renderDetail             | function({ item, index })         | null          | custom render event title and event description                                                                          |
| renderCircle             | function({ item, index, isLast }) | null          | custom render circle (`isLast` will be true on the last item if when `endWithCircle` is set to true with an index of -1) |
| renderFullLine           | bool                              | false         | render event border on last timeline item                                                                                |
| endWithCircle            | bool                              | false         | render a circle at the end of the last timeline item                                                                     |
| flatListProps            | object                            | null          | FlatList properties (excling keyExtractor, see next)                                                                     |
| keyExtractor             | function(item)                    | null          | FlatList keyExtractor                                                                                                    |
| showTime                 | boolean                           | true          | Time container options                                                                                                   |

## Shift problem

Text width of event time may not be the same.

![untitled-1](https://cloud.githubusercontent.com/assets/21040043/24321589/78d0c77c-1182-11e7-9c0f-69ebe591cb14.png)

fix by add 'minWidth' in 'timeContainerStyle' to appropriate value

```jsx
render(){
    return(
        <Timeline
          //..other props
          timeContainerStyle={{minWidth:72}}
        />
    )
}
```

<!-- ## Timeline is rendered, but not displayed until scroll

fix by add removeClippedSubviews: false into options

```jsx
render(){
    return(
        <Timeline
          //..other props
          flatListProps={{
            removeClippedSubviews: false
          }}
        />
    )
}
``` -->

## Adapt vectorIcon to be smaller than circleSize

If you want to make the VectorIcon, or in general the Component you provide smaller than the circleSize (default 16), set an `iconStyle` of `iconStyle: { width: iconSize || undefined height: iconSize || undefined }`
