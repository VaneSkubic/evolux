import HomePage from "./pages/HomePage";
import Login from "./pages/Login";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Registration from "./pages/Registration";
import { RequireAuth } from 'react-auth-kit'

function App() {

  // Deploy test commit 

  return (
    <div className="App h-screen">
      <BrowserRouter>
        <Routes>
          <Route index element={
            <RequireAuth loginPath="/login">
              <HomePage />
            </RequireAuth>
          } />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </BrowserRouter>

    </div >
  );
}

export default App;
