import CreateBlog from "./components/CreateBlog";
import DashBoard from "./components/DashBoard";
import Landing from "./components/Landing";
import Signin from "./components/Signin";
import Signup from "./components/Signup";

import { BrowserRouter, Routes,Route } from "react-router-dom";
import ViewBlog from "./components/ViewBlog";

function App() {
  return (
    <div className="h-screen bg-slate-900">
    <BrowserRouter>
    <Routes>

      <Route path="/signup" element={<Signup></Signup>}/>
      <Route path="/signin" element={<Signin></Signin>}/>
      <Route path="/" element={<Landing></Landing>}/>
      <Route path="/dashboard" element={<DashBoard></DashBoard>}/>
      <Route path="/create" element={<CreateBlog></CreateBlog>}/>
      <Route path="/view/:blogId" element={<ViewBlog />} />

      
    </Routes>
    </BrowserRouter>
    </div>
      
    
  );
}

export default App;