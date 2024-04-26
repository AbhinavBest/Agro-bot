import './App.css';
import Readings from './readings';
import Controls from './controls';
import Cam from './cam';
import Ml from './prediction';
import MoistureCheck from './moisture';
// import cogwheel from './cogwheel.png';
// import kebab from './kebab.png';
// import bell from './bell.png';

function App() {
  return (
    <div className="App">
      <div className='title'>
        <h1>Agrobot</h1>
        {/* <img className='title-img cogwheel' src={cogwheel}/>
        <img className='title-img bell' src={bell}/>
        <img className='title-img kebab' src={kebab}/> */}
      </div>
      <div className='content'>
        <div className='row-1'>
          <Cam></Cam>
          <Ml></Ml>
        </div>
        <div className='row-2'>
          <Readings></Readings>
          
          <Controls></Controls>
        </div>
      </div>
    </div>
  );
}

export default App;
