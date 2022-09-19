import { useState } from "react";
import "./App.css";
import Dogs from "./components/Dogs";
import dataDogs from "./utils/photos-Dogs";
function App() {
  const [photosState, setPhotosState] = useState(0);
  const [selector, setSelector] = useState(false);

  const changeState = () => setSelector(!selector);

  const changePhotos = () => {
    if (photosState + 2 <= dataDogs.length) {
      setPhotosState(photosState + 1);
    }
  };
  const returnPhotos = () => {
    if (photosState - 1 >= 0) {
      setPhotosState(photosState - 1);
    }
  };
  const startPhotos = () => setPhotosState(0);
  return (
    <div className="App">
      {!selector ? (
        <div className="welcome">
          <h1>Elige tu preferencia</h1>
          <button className="welcome__btn" onClick={changeState}>
            Dogs
          </button>
        </div>
      ) : null}
      {selector ? (
        <div className="card">
          <Dogs photosState={photosState} />
          <div>
            <button className="btn__return" onClick={returnPhotos}>
              &#60;
            </button>
            <button className="btn__start" onClick={startPhotos}>
              &#8634;
            </button>
            <button className="btn__next" onClick={changePhotos}>
              &#62;
            </button>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default App;
