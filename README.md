<!-- @format -->

# React Native Timeline feed

Highly customizable Timeline component for React Native (Android and iOS) and works with Expo.

![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)
[![NPM Version](https://img.shields.io/npm/v/react-native-timeline-feed.svg?style=flat)](https://www.npmjs.com/package/react-native-timeline-feed)
[![NPM Downloads](https://img.shields.io/npm/dt/react-native-timeline-feed.svg?style=flat)](https://www.npmjs.com/package/react-native-timeline-feed)

# Migrating from react-native-timeline-listview

If you're coming from `react-native-listview` and simply want to use a `FlatList` instead, then use the latest v1.x.x package instead. It'll be the path of least resistance.

# Demo

A demo can be found on [expo](https://snack.expo.io/@johan-dev/react-native-timeline-feed@2.0.1).

# Getting Started

`yarn add react-native-timeline-feed` or your favorite way...

You'll need the following imports

```
import Timeline from 'react-native-timeline-feed';

// only needed if you're going to select a non-default preset
import { Preset } from 'react-native-timeline-feed/lib/Types';
```

### Minimum

```
<Timeline data={data} />
```

or one of the presets

```
<Timeline
  data={data}
  preset={Preset.SingleColumnRight} />
```

## Configuration

```
Note. Color/Width specificity is as follows (highest priority to lowest): ItemProps -> TimelineProps -> defaults.
```

[`<Timeline />` Component API](docs/timeline.md)

[Other Component APIs](docs/components.md)

## Other Examples

[Custom Setup](examples/custom.md)
