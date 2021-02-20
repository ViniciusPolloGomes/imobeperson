
import StyleGlobal from './Style/StyleGlobal.js';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes/routes';

const App = () => (
   <>
   <Router>
      <Routes/>
      <StyleGlobal/>
   </Router>
   </>
  );

export default App;
