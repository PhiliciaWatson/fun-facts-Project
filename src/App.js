import React from 'react';
import {Link, BrowserRouter, Switch, Route} from 'react-router-dom';
import Aries from './components/Aries';
import Aquarius from './components/Aquarius';
import Capricorn from './components/Capricorn';
import Cancer from './components/Cancer';
import Pisces from './components/Pisces';
import Leo from './components/Leo';
import Taurus from './components/Taurus';
import Virgo from './components/Virgo';
import Gemini from './components/Gemini';
import Sagittarius from './components/Sagittarius';
import Scorpio from './components/Scorpio';
import Libra from './components/Libra';
import Ophiuchus from './components/Ophiuchus';

function App() {

  return (

    <BrowserRouter>
    <div className="App ">
      <h1 className='heading'>Zodiacs</h1>
      <div class='align-self-baseline row justify-content-around'>
      <Link to='Aquarius'>Aquarius</Link>
      
      <Link to='Aries'>Aries</Link>
      
      <Link to='Capricorn'>Capicorn</Link>
      
      <Link to='Cancer'>Cancer</Link>
      
      <Link to='Pisces'>Pisces</Link>
      
      <Link to='Leo'>Leo</Link>
      
      <Link to='Taurus'>Taurus</Link>
      
      <Link to='Virgo'>Virgo</Link>
      
      <Link to='Gemini'>Gemini</Link>
      
      <Link to='Sagittarius'>Sagittarius</Link>
      
      <Link to='Scorpio'>Scorpio</Link>
      
      <Link to='Libra'>Libra</Link>
      
      <Link to='Ophiuchus'>New zodiac?</Link>
      </div>
      <div className='row justify-content-center'>
      <Switch>
        <Route path='/Aquarius' component={Aquarius} />
        <Route path='/Aries' component={Aries} />
        <Route path='/Capricorn' component={Capricorn} />
        <Route path='/Cancer' component={Cancer} />
        <Route path='/Pisces' component={Pisces} />
        <Route path='/Leo' component={Leo} />
        <Route path='/Taurus' component={Taurus} />
        <Route path='/Virgo' component={Virgo} />
        <Route path='/Gemini' component={Gemini} />
        <Route path='/Sagittarius' component={Sagittarius} />
        <Route path='/Scorpio' component={Scorpio} />
        <Route path='/Libra' component={Libra} />
        <Route path='/Ophiuchus' component={Ophiuchus} />
      </Switch> 
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
