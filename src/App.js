import { useState } from "react";
import Header from "./components/Header";
import NoteList from "./components/NoteList";
import AddNote from "./components/AddNote";

function App() {
  // aqui vamos criar um estado para guardar todas as notas
  const [notes, setNotes] = useState([]);

  return (
    <div>
      <Header />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            {/* aqui vamos adicionar o componente NoteList */}
            <NoteList notes={notes} />
          </div>
          <div className="col-md-4">
            {/* aqui vamos adicionar o componente AddNote */}
            <AddNote />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
