import "../App.css";
import Heading from "./Heading.jsx";
import Footer from "./Footer.jsx";
import Note from "./Note.jsx";
import notes from "../notes.js";

function App() {
  return (
    <>
      <div>
        <Heading></Heading>
        {notes.map((note) => (
          <Note key={note.id} title={note.title} content={note.content}></Note>
        ))}
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;
