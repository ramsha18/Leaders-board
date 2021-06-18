import './App.css';
import Student from './components/student';


function App() {
  return (
    <div className="App">
      <h1>Leadersboard</h1>
      <div className="head">
        <div className="left">Name</div>
        <div className="right">Score</div>
      </div>
      <hr></hr>
      <Student name="Sarah Khan" university="NUST" score={346} />
      <Student name="Ramsha Hassan" university="University Of Karachi" score={346} />
      <Student name="Hafsa Basit" university="FAST" score={345} />
      <Student name="Ali Sher" university="Szabist" score={342} />
      <Student name="Ahmed Ali" university="University Of Karachi" score={340} />
    </div>
  );
}

export default App;
