import './App.css';

import Poster from './components/Poster';
import Form from './components/Form';

// TODO
// change with and hight (variable width and heigt only for grid)
// edit flavicon
// try animation to rotate

const saveSvgAsPng = require('save-svg-as-png');

const imageOptions = {
  scale: 5,
  encoderOptions: 1,
  backgroundColor: 'white',
}



function App() {
  const handleDownloadSvg = () => {
    saveSvgAsPng.saveSvgAsPng(document.getElementById('poster'), 'artwork.png', imageOptions);
  }
  return (
    <>
      <h1 className="title">Generate your own Karel-Martens artwork</h1>
      <div className='container'>
        < Form />
      <div>
        < Poster />  
        <button className="download" onClick={handleDownloadSvg}>Save Your Artwork!</button>
      </div>  
      </div>
    </>
  );
}

export default App;
