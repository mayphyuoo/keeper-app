import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import AddNote from "./AddNote";

function App() {
	const [notes, setNotes] = useState([]);

	function createNote(note) {
		setNotes((prevValue) => {
			return [...prevValue, note];
		});
	}

	function deleteNote(id) {
		setNotes((prevValue) => {
			return prevValue.filter((_item, index) => {
				return index !== id;
			});
		});
	}

	return (
		<div>
			<Header />
			<AddNote addNote={createNote} />
			{notes.map((noteItem, index) => {
				return (
					<Note
						key={index}
						id={index}
						title={noteItem.title}
						content={noteItem.content}
						onClicked={deleteNote}
					/>
				);
			})}
			<Footer />
		</div>
	);
}

export default App;
