import AppName from "./Components/AppName";
import AddTodo from "./Components/AddTodo";
import Todoiteam1 from "./Components/Todoitem1";
import Todoiteam2 from "./Components/Todoitem2";
import "./App.css";
function App() {
  return (
    <center>
      <AppName></AppName>
      <AddTodo></AddTodo>
      <div className="items-container">
        <Todoiteam1></Todoiteam1>
        <Todoiteam2></Todoiteam2>
      </div>
    </center>
  );
}

export default App;
