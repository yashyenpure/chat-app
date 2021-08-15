import React from 'react';
import {useState} from 'react';
import axios from 'axios';

const projectID = '5e629a47-4638-4c7e-8f95-893196981aea'; 

const LoginForm  = () => {
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');

	const handleSubmit = async (e) => {
		e.preventDeafault();

			const authObject = {'project-ID':projectID , 'User-Name': username , 'User-Secret': password}

		try {
			await axios.get('https://api.chatengine.io/chats',{headers: authObject });

			localStorage.setItem('username',username);
			localStorage.setItem('password',password);

			window.location.reload();
			setError('')

		} catch(error){
			setError('oops,incorrect credentials');
			console.log(error);
		}

	}
	return(
		<div className="wrapper">
			<div className = "form">
				<h1 className = "title ">Chat Application</h1>
				<form onSubmit={handleSubmit}>
					<input type="text" value ={username} onChange ={(e)=> setUsername(e.target.value)} className = "input" placeholder ="username" required />
					<input type="text" value ={password} onChange ={(e)=> setPassword(e.target.value)} className = "input" placeholder ="password" required />
					<div align ="center">
						<button type ="submit" className = "button">
							<span>start chatting</span>
						</button>
					</div>		
				</form>
				<h1>{error}</h1>
			</div>	
			
		</div>

		)

}

export default LoginForm;