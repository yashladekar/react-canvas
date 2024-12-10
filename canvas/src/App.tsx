/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRef } from 'react';
import { Stage, Layer, Text, Rect, Group } from 'react-konva';
import { shapeData } from "../shapes"
// const squareProperties = {
//   x: window.innerWidth / 2 - 50, // Center the square horizontally
//   y: window.innerHeight / 2 - 50, // Center the square vertically
//   width: 100,

//   height: 140,
//   fill: 'gray',
//   stroke: 'black',
//   strokeWidth: 4,
//   text: {
//     content: 'red',
//     fontSize: 20,
//     fill: 'yellow',
//   },
// };

const squareProperties = shapeData[0];

function App() {
  const shapeRef = useRef(null);

  return (
    <Stage
      width={window.innerWidth}
      height={window.innerHeight}
    >
      <Layer>
        <Text text="Click on any place to see an animation" />
        <Group
          ref={shapeRef}
          x={squareProperties.x}
          y={squareProperties.y}
        >
          <Rect
            width={squareProperties.width}
            height={squareProperties.height}
            fill={squareProperties.fill}
            stroke={squareProperties.stroke}
            strokeWidth={squareProperties.strokeWidth}
          />
          <Text
            text={squareProperties.text.content}
            fontSize={squareProperties.text.fontSize}
            fill={squareProperties.text.fill}
            x={squareProperties.width / 2}
            y={squareProperties.height / 2}
            offsetX={squareProperties.text.fontSize / 2} // Half of the text width
            offsetY={squareProperties.text.fontSize / 2} // Half of the text height
            align="center"
            verticalAlign="middle"
          />
        </Group>
      </Layer>
    </Stage>
  );
}

export default App;

