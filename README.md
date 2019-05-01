<!-- @format -->

# React Native Timeline feed

Highly customizable Timeline component for React Native (Android and iOS) and works with Expo.

![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)
[![NPM Version](https://img.shields.io/npm/v/react-native-timeline-feed.svg?style=flat)](https://www.npmjs.com/package/react-native-timeline-feed)
[![NPM Downloads](https://img.shields.io/npm/dt/react-native-timeline-feed.svg?style=flat)](https://www.npmjs.com/package/react-native-timeline-feed)

# Demo

A demos can be found on [expo](https://snack.expo.io/@johan-dev/react-native-timeline-feed@2.0.1).

## Configuration

When using presets, Color/Width specificity is as follows (highest priority to lowest): `ItemProps -> TimelineProps -> defaults`.

#### ItemProps

| Property     | Type   | Default |
| ------------ | ------ | ------- |
| title?       | string | null    |
| time?        | string | null    |
| description? | string | null    |
| lineWidth?   | number | `2`     |
| lineColor?   | string | `#000`  |
| circleColor? | string | `#000`  |
| dotColor?    | string | `#FFF`  |

#### TimelineProps

All [FlatList](https://facebook.github.io/react-native/docs/flatlist) Props (except renderItem)

| Property        | Type                                              | Default                   |
| --------------- | ------------------------------------------------- | ------------------------- |
| lineWidth?      | number                                            | `2`                       |
| lineColor?      | string                                            | `#000`                    |
| circleColor?    | string                                            | `#000`                    |
| dotColor?       | string                                            | `#FFF`                    |
| endWithCircle?  | boolean                                           | `false`                   |
| preset?         | Preset                                            | `Preset.SingleColumnLeft` |
| renderFeedItem? | `(props: RenderProps) => React.ReactElement<any>` | null                      |

#### Preset

| Preset            | Description            |
| ----------------- | ---------------------- |
| SingleColumnLeft  | Left aligned timeline  |
| SingleColumnRight | Right aligned timeline |

### Configuration for custom timeline

#### RenderProps

| Property | Type          | Description                        |
| -------- | ------------- | ---------------------------------- |
| item     | ItemProps     | Props of the item                  |
| index    | number        | Position of the item               |
| isLast   | ItemProps     | Is the item last                   |
| Props    | TimelineProps | All props passed into the timeline |

#### RowProps

| Property | Type            | Default |
| -------- | --------------- | ------- |
| children | React.ReactNode | N/A     |
| style    | ViewStyle       | null    |

#### TimeProps

| Property  | Type      | Default |
| --------- | --------- | ------- |
| children  | string    | null    |
| style     | ViewStyle | null    |
| TextStyle | TextStyle | null    |

#### EventProps

| Property | Type            | Default |
| -------- | --------------- | ------- |
| children | React.ReactNode | N/A     |
| style    | ViewStyle       | null    |

#### TitleProps

| Property  | Type            | Default |
| --------- | --------------- | ------- |
| children  | React.ReactNode | N/A     |
| textStyle | TextStyle       | null    |

#### DescriptionProps

| Property  | Type            | Default |
| --------- | --------------- | ------- |
| children  | React.ReactNode | N/A     |
| textStyle | TextStyle       | null    |

#### VerticalProps

| Property | Type            | Default |
| -------- | --------------- | ------- |
| children | React.ReactNode | N/A     |
| style    | ViewStyle       | null    |

#### LineProps

| Property | Type      | Default |
| -------- | --------- | ------- |
| width    | number    | N/A     |
| color    | string    | N/A     |
| style    | ViewStyle | null    |

#### DotProps

| Property | Type      | Default |
| -------- | --------- | ------- |
| color    | string    | N/A     |
| style    | ViewStyle | null    |

#### CircleProps

| Property | Type            | Default |
| -------- | --------------- | ------- |
| color    | string          | N/A     |
| children | React.ReactNode | null    |
| style    | ViewStyle       | null    |
