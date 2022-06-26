import Header from "./Components/Header";
import Tasks from "./Components/Tasks";

function App() {
  return (
    <div className="container">
      
      <Header title="Mili" name= {2} />
      <Tasks />
    </div>
  );
}

export default App;
