import React from "react";
import Header from "./components/Header";
import NoteList from "./components/NoteList";
import NoteForm from "./components/NoteForm";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-3">
            <NoteForm />
          </div>
          <div className="col-sm-9">
            <NoteList />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
