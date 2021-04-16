import "./styles.css";
import Header from "./Header";
import Form from "./Form";
// import Redirect from "./Redirect"
export default function App() {
  return (
    <div className="App">
      <Header title="Student Form" />
      <Form title="<Input Student Information>" />
      {/* <Redirect name={name}/> */}
    </div>
  );
}
