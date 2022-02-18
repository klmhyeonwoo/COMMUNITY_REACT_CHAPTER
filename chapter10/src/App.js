import {Route, Routes} from 'react-router-dom';
import Subscription from './pages/Subscription';
import Explore from './pages/Explore';
import Home from './pages/Home';


function App() {

  return (
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/explore" element={<Explore/>}/>
        <Route path="subscription" element={<Subscription/>}/>
      </Routes>
  );
}

export default App;
