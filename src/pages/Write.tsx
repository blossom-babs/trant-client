import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Write = () => {
	return (
		<div className="write">
			<form action="" method="post" className="write-form">
				<div>
					<label htmlFor="fileInput">
						<FontAwesomeIcon icon={faPlus} />
					</label>
					<input
						type="file"
						name=""
						id="fileInput"
						style={{ display: 'none' }}
					/>
					<input
						type="text"
						name=""
						id=""
						placeholder="Title"
						autoFocus={true}
						className="write-title"
					/>
				</div>
				<div>
					<textarea
						name=""
						id=""
						placeholder="This is the textarea..."></textarea>
				</div>
			</form>
		</div>
	);
};

export default Write;
