import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    // <div className="App btn-salah">
    //   <p className="">Join the healthier snaks </p>
    //   <button className="btn btn-warning ">Daily musly Family</button>
    // </div>
    <div style={{ border: "solid 1px", color: "black", maxWidth: "100vw" }}>
      <h1 class={"title red"}>Your name here</h1>

      <br />

      <img src={logo} />

      <br />

      <img src="/logo192.png" />

      <video width="320" height="240" controls>
        <source src="myVideo.mp4" type="video/mp4" />
      </video>
    </div>
  );
}

export default App;
