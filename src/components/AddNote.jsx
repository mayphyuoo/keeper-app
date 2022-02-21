import React, { useState } from "react";

function AddNote(props) {
	const [title, setTitle] = useState("");
	const [note, setNote] = useState("");

    function titleChange(event) {
        const updateTitle = event.target.value;
        setTitle(updateTitle);
    }

    function noteChange(event) {
        const updateNote = event.target.value;
		setNote(updateNote);
    }

	return (
		<div>
			<form>
				<input name="title" placeholder="Title" value={title} onChange={titleChange} />
				<textarea
					name="content"
					placeholder="Take a note..."
					rows="3"
					value={note}
                    onChange={noteChange}
				/>
				<button
					onClick={(event) => {
						props.addNote(event, title, note);
						setTitle("");
						setNote("");
					}}
				>
					Add
				</button>
			</form>
		</div>
	);
}

export default AddNote;
