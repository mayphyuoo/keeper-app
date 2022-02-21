import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import Fab from "@mui/material/Fab";
import Zoom from "@mui/material/Zoom";

function AddNote(props) {
	const [note, setNote] = useState({
		title: "",
		content: "",
	});
	const [isClicked, setIsClicked] = useState(false);

	function handleChange(event) {
		const { name, value } = event.target;

		setNote((prevValue) => {
			return {
				...prevValue,
				[name]: value,
			};
		});
	}

	function handleClick() {
		setIsClicked(true);
	}

	return (
		<div>
			<form className="create-note">
				{isClicked && (
					<input
						name="title"
						placeholder="Title"
						value={note.title}
						onChange={handleChange}
					/>
				)}
				<textarea
					name="content"
					placeholder="Take a note..."
					rows={isClicked ? 3 : 1}
					value={note.content}
					onChange={handleChange}
					onClick={handleClick}
				/>
				{isClicked && (
					<Zoom in={true}>
						<Fab
							onClick={(event) => {
								props.addNote(note);
								setNote({
									title: "",
									content: "",
								});
								event.preventDefault();
							}}
						>
							<AddIcon />
						</Fab>
					</Zoom>
				)}
			</form>
		</div>
	);
}

export default AddNote;
