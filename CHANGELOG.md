# Changelog

## [1.0.1]
### Changes: existing functionality that is now different
- item properties (i.e. lineColor, lineWidth, circleSize, etc.) now take preference over timeline properties.  
  - i.e. `const lineColorToUse = item.lineColor || lineColor || DEFAULT_LINE_COLOR`


## [1.0.0]
### Changes: existing functionality that is now different

*[BREAKING]* 

- Replace `<Image>` Tag with provided component (item.icon or icon) in `renderCircle()` ([a428c3c](https://github.com/Johan-dutoit/react-native-timeline-feed/commit/a428c3c) & [175b8e2](https://github.com/Johan-dutoit/react-native-timeline-feed/commit/175b8e2) by [@creambyemute](https://github.com/creambyemute))
  - i.e. You no longer pass in an image source as the icon