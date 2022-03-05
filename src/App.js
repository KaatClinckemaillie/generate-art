import './App.css';

import Poster from './components/Poster';
import Form from './components/Form';

// TODO
// change with and hight (variable width and heigt only for grid)
// edit flavicon
// try animation to rotate

function App() {

  return (
    <>
      <h1 className="title">Generate your own Karel-Martens artwork</h1>
      <div className='container'>
        < Form />
        < Poster />     
      </div>
    </>
  );
}

export default App;
