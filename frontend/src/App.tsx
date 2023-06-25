import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Sidebar from './components/sidebar';

import '@/App.css';
import Dashboard from './components/dashboard';

function App() {
  return (
    <div>
      <Router>
        <div className="min-h-screen antialiased text-gray-700 bg-gray-100">
          <div className="flex h-full">
            <div className="w-[20rem] h-screen p-4">
              <Sidebar />
            </div>
            <div className="flex-1 p-4">
              <div className="relative w-full p-4 mx-auto transition duration-200 bg-white max-w-screen-2xl md:bg-transparent lg:py-6">
                <Routes>
                  <Route path="/" Component={Dashboard} />
                  <Route path="/team" Component={Dashboard} />
                  <Route path="/projects" Component={Dashboard} />
                </Routes>
              </div>
            </div>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
