<!-- @format -->

You'll need the following imports

```
import Timeline from 'react-native-timeline-feed';
import { Preset } from 'react-native-timeline-feed/lib/Types';
```

### Using statics on Timeline

```
<Timeline.Row>
  <Timeline.Time>{item.time}</Timeline.Time>
  <Timeline.VerticalSeparator>
    {!hideCircle && (
      <Timeline.Circle color="black">
        <Timeline.Dot color="white" />
      </Timeline.Circle>
    )}
    <Timeline.Line color={item.lineColor} width={3} />
  </Timeline.VerticalSeparator>
  <Timeline.Event style={{ marginBottom: 16 }}>
    <Text>{item.title}</Text>
    <Text>{item.description}</Text>
  </Timeline.Event>
</Timeline.Row>
```

### Using named imports

```
import Timeline, { Row, Time, VerticalSeparator, Circle, Dot, Line, Event } from 'react-native-timeline-feed';
```

The following will render a line on the left, with the event body next to it and the time on the right.

```
<Row>
  <VerticalSeparator>
    {!hideCircle && (
      <Circle>
        <Dot />
      </Circle>
    )}
    <Line color={item.lineColor}/>
  </VerticalSeparator>
  <Event style={{ marginBottom: 16 }}>
    <Text>{item.title}</Text>
    <Text>{item.description}</Text>
  </Event>
  <Time>{item.time}</Timeline.Time>
</Row>
```
