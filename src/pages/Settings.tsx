import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEye, faUser } from '@fortawesome/free-solid-svg-icons';

const Settings = () => {
	return (
		<div className="settings">
			<div>
				<h1 className='settings-title'>Your Account</h1>
				<form>
					<div className='settings-ppWrapper'>
						<img
							className="settings-pp"
							src="https://media.istockphoto.com/photos/lottery-picture-id95442265?b=1&k=20&m=95442265&s=170667a&w=0&h=fKu1DRGrbfXVXWHR5c0MlE2glGse5-l8DwoUrQH4UUA="
							alt=""
						/>
						<input
							type="file"
							name=""
							id="profilePhoto"
							style={{ display: 'none' }}
						/>
						<label className="settings-ppIcon" htmlFor="profilePhoto">
							<FontAwesomeIcon icon={faUser} />
						</label>
					</div>

					<div className='settings-formGroup'>
						<label htmlFor="username">Username</label>
						<input type="text" name="" id="username" placeholder="Jane Doe" />
					</div>

					<div className='settings-formGroup'>
						<label htmlFor="email">Email</label>
						<input
							type="text"
							name=""
							id="email"
							placeholder="JaneDoe@gmail.com"
						/>
					</div>

					<div className='settings-pwd'>
						<label htmlFor="password">Password</label>
            <div className='settings-pwd__field'>
						<input
							type="password"
							name=""
							id="password"
							placeholder="p@SSword!"
						/>
            <FontAwesomeIcon icon={faEye}/>
            </div>
					</div>
				</form>

				<div className='settings-action'>
					<button>Save</button>
					<button>Delete</button>
				</div>
			</div>
		</div>
	);
};

export default Settings;
