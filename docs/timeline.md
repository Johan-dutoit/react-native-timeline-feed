<!-- @format -->

#### TimelineProps

All [FlatList](https://facebook.github.io/react-native/docs/flatlist) Props (however renderItem is replaced with our own)

| Property      | Type                                              | Default            |
| ------------- | ------------------------------------------------- | ------------------ |
| lineWidth     | number                                            | `2`                |
| lineColor     | string                                            | `#000`             |
| circleColor   | string                                            | `#000`             |
| dotColor      | string                                            | `#FFF`             |
| endWithCircle | boolean                                           | `false`            |
| preset        | Preset                                            | `SingleColumnLeft` |
| renderItem?   | `(props: RenderProps) => React.ReactElement<any>` | undefined          |

Additional Props for styling when using a preset

| Property              | Type      | Default   | Description                                                               |
| --------------------- | --------- | --------- | ------------------------------------------------------------------------- |
| rowStyle?             | ViewStyle | undefined | Container for the entire row (last dot has it's own row)                  |
| timeStyle?            | ViewStyle | undefined | Container for the time                                                    |
| timeTextStyle?        | TextStyle | undefined | Time text                                                                 |
| lineContainerStyle?   | ViewStyle | undefined | Container for the vertical separator (consists of the line, circle & dot) |
| circleStyle?          | ViewStyle | undefined | Circle for each row                                                       |
| dotStyle?             | ViewStyle | undefined | Dot within the circle                                                     |
| lineStyle?            | ViewStyle | undefined | Vertical line                                                             |
| eventStyle?           | ViewStyle | undefined | Event container (consists of the title & description)                     |
| titleTextStyle?       | TextStyle | undefined | Title text                                                                |
| descriptionTextStyle? | TextStyle | undefined | description text                                                          |
