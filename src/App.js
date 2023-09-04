import {Landing,Error,Game} from "./pages/";
import {Link,Route,BrowserRouter as Router,Routes} from 'react-router-dom'
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path="/*" element={<Error/>}/>
        <Route path="/game" element={<Game/>}/>
      </Routes>
    </Router>
  );
}

export default App;
