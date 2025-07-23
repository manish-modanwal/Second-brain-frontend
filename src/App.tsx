
import Dashboard from './pages/Dashboard';
import SignIn from './pages/Signin';
import Signup from './pages/Signup';
import { BrowserRouter , Routes ,   Route } from  "react-router-dom";

function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Dashboard" element={<Dashboard />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
