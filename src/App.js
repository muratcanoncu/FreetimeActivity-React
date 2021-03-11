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
        width: "100%",
        background: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "100% 100%",
      }}
    >
      <Content></Content>
    </div>
  );
}

export default App;
