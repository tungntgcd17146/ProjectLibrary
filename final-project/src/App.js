import { Routes, Route } from 'react-router-dom';
import SignIn from './components/Auth/SignIn';
import SignUp from './components/Auth/SignUp';
import Profile from './components/Profile';
import BookAlbum from './components/Client';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
      </Routes>
      <BookAlbum />
    </div>
  );
}

export default App;
