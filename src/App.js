import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Content from "./Components/Content";
import Background from "./img/background.jpeg";
function App() {
  return (
    <div
      className="App d-flex justify-content-center align-items-center"
      style={{
        height: "100vh",
        background: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100vw 100vh",
      }}
    >
      <Content></Content>
    </div>
  );
}

export default App;
