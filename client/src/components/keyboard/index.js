import React from "react";
import ReactDOM from "react-dom";
import { Piano, MidiNumbers } from "react-piano";

import DimensionsProvider from "./DimensionsProvider";
import SoundfontProvider from "./SoundfontProvider";
// require ("../../App.css");

// webkitAudioContext fallback needed to support Safari
const audioContext = new (window.AudioContext || window.webkitAudioContext)();
const soundfontHostname = "https://d1pzp51pvbm36p.cloudfront.net";

const noteRange = {
  first: MidiNumbers.fromNote("c3"),
  last: MidiNumbers.fromNote("b4")
};
// const keyboardShortcuts = KeyboardShortcuts.create({
//   firstNote: noteRange.first,
//   lastNote: noteRange.last,
//   keyboardConfig: KeyboardShortcuts.HOME_ROW
// });

export default function App() {
  return (
    <div>
      <h1>react-piano demos</h1>
      {/* <div className="mt-5">
        <p>Basic piano with hardcoded width</p>
        <BasicPiano />
      </div> */}

      <div className="mt-5">
        <p>Keyboard</p>
        <ResponsivePiano />
      </div>

      {/* <div className="mt-5">
        <p>Piano with custom styling - see styles.css</p>
        <ResponsivePiano className="PianoDarkTheme" />
      </div> */}
    </div>
  );
}

// function BasicPiano() {
//   return (
//     <SoundfontProvider
//       instrumentName="acoustic_grand_piano"
//       audioContext={audioContext}
//       hostname={soundfontHostname}
//       render={({ isLoading, playNote, stopNote }) => (
//         <Piano
//           noteRange={noteRange}
//           width={300}
//           playNote={playNote}
//           stopNote={stopNote}
//           disabled={isLoading}
//           keyboardShortcuts={keyboardShortcuts}
//         />
//       )}
//     />
//   );
// }

function ResponsivePiano(props) {
  return (
    <DimensionsProvider>
      {({ containerWidth, containerHeight }) => (
        <SoundfontProvider
          instrumentName="acoustic_grand_piano"
          audioContext={audioContext}
          hostname={soundfontHostname}
          render={({ isLoading, playNote, stopNote }) => (
            <Piano
              noteRange={noteRange}
              width={containerWidth}
              playNote={playNote}
              stopNote={stopNote}
              disabled={isLoading}
              {...props}
            />
          )}
        />
      )}
    </DimensionsProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
