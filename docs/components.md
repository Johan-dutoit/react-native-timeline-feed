<!-- @format -->

#### ItemProps

| Property     | Type   | Default   |
| ------------ | ------ | --------- |
| title?       | string | undefined |
| time?        | string | undefined |
| description? | string | undefined |
| lineWidth    | number | `2`       |
| lineColor    | string | `#000`    |
| circleColor  | string | `#000`    |
| dotColor     | string | `#FFF`    |

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

| Property | Type            | Default   |
| -------- | --------------- | --------- |
| children | React.ReactNode | undefined |
| style?   | ViewStyle       | undefined |

#### TimeProps

| Property   | Type      | Default   |
| ---------- | --------- | --------- |
| children?  | string    | undefined |
| style?     | ViewStyle | undefined |
| TextStyle? | TextStyle | undefined |

#### EventProps

| Property  | Type            | Default   |
| --------- | --------------- | --------- |
| children? | React.ReactNode | undefined |
| style?    | ViewStyle       | undefined |

#### TitleProps

| Property   | Type            | Default   |
| ---------- | --------------- | --------- |
| children?  | React.ReactNode | undefined |
| textStyle? | TextStyle       | undefined |

#### DescriptionProps

| Property   | Type            | Default   |
| ---------- | --------------- | --------- |
| children?  | React.ReactNode | undefined |
| textStyle? | TextStyle       | undefined |

#### VerticalProps

| Property  | Type            | Default   |
| --------- | --------------- | --------- |
| children? | React.ReactNode | undefined |
| style?    | ViewStyle       | undefined |

#### LineProps

| Property | Type      | Default   |
| -------- | --------- | --------- |
| width    | number    | `2`       |
| color    | string    | `#000`    |
| style?   | ViewStyle | undefined |

#### DotProps

| Property | Type      | Default   |
| -------- | --------- | --------- |
| color    | string    | `#FFF`    |
| style?   | ViewStyle | undefined |

#### CircleProps

| Property  | Type            | Default   |
| --------- | --------------- | --------- |
| color     | string          | `#000`    |
| children? | React.ReactNode | undefined |
| style?    | ViewStyle       | undefined |
