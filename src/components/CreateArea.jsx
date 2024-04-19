import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import { Fab } from "@mui/material";
import { Zoom } from "@mui/material";

function CreateArea(props) {
  const [isExpanded, setExpanded] = useState(false);

  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;
    setNote((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  function submitNote(event) {
    event.preventDefault();
    props.onAdd(note);
    setNote({
      title: "",
      content: "",
    });
  }

  function expand() {
    setExpanded(true);
  }

  return (
    <>
      <div>
        <form className="create-note">
          {isExpanded && (
            <input
              type="text"
              name="title"
              value={note.title}
              placeholder="Title"
              onChange={handleChange}
            />
          )}

          <textarea
            name="content"
            value={note.content}
            placeholder="Take a note..."
            rows={isExpanded ? 3 : 1}
            onClick={expand}
            onChange={handleChange}
          />
          <Zoom in={isExpanded}>
            <Fab onClick={submitNote}>
              <AddIcon />
            </Fab>
          </Zoom>
        </form>
      </div>
    </>
  );
}

export default CreateArea;
