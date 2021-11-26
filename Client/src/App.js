import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import {BrowserRouter} from 'react-router-dom'
// import bootstrap from 'bootstrap' 
import Main from './components/Maincomponent'
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Main/>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
