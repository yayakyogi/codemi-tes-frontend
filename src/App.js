import "./App.css";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <div>
      <Navbar />
      <Sidebar />
      <div className="content" style={{ marginTop: 100, marginLeft: 350 }}>
        <h1>Content</h1>
      </div>
    </div>
  );
}

export default App;
