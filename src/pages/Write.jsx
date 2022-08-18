import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { useState } from 'react';
import axios from 'axios';

const Write = () => {
	const [title, setTitle] = useState('');
	const [body, setBody] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault();

		console.log(title, body);
		const baseUrl = 'http://localhost:8050/api/v1/posts';
		axios
			.post(baseUrl, {
				title,
				description: body,
				categories: 'let, us, be, many'
			})
			.then((res) => console.log(res.data))
			.catch((err) => console.log(err));
	};
	return (
		<div className="write">
			<img
				className="write-img"
				src="https://media.istockphoto.com/photos/lottery-picture-id95442265?b=1&k=20&m=95442265&s=170667a&w=0&h=fKu1DRGrbfXVXWHR5c0MlE2glGse5-l8DwoUrQH4UUA="
				alt=""
			/>
			<form
				onSubmit={handleSubmit}
				action=""
				method="post"
				className="write-form">
				<div className="write-titleDiv">
					<label className="write-icon" htmlFor="fileInput">
						<FontAwesomeIcon icon={faPlus} />
					</label>
					<input
						type="file"
						name=""
						id="fileInput"
						style={{ display: 'none' }}
					/>
					<textarea
						onChange={(event) => setTitle(event.target.value)}
						type="text"
						name=""
						id=""
						placeholder="Title"
						autoFocus={true}
						className="write-title"></textarea>
				</div>

				<CKEditor
					editor={ClassicEditor}
					data="Tell your story..."
					onReady={(editor) => {
						// You can store the "editor" and use when it is needed.
						//console.log('Editor is ready to use!', editor);
					}}
					onChange={(event, editor) => {
						const data = editor.getData();
						setBody(data);
						//console.log({ event, editor, data });
					}}
				/>
				<input
					className="write-cat"
					type="text"
					name=""
					placeholder="Seperate categories with commas"
				/>

				<button className="write-publish">Publish</button>
			</form>
		</div>
	);
};

export default Write;
