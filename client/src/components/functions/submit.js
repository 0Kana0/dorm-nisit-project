import axios from 'axios';

export const createSubmit = async(authtoken, value) => {
	return await axios.post(process.env.REACT_APP_API + "/submit", value, {
		headers: {
			authtoken,
		}
	});
}

export const listSubmit = async(authtoken, id) => { 
	return await axios.get(process.env.REACT_APP_API + "/submit/" + id, {
		headers: {
			authtoken,
		}
	});
}

export const readSubmit = async(authtoken, id) => { 
	return await axios.get(process.env.REACT_APP_API + "/submit/user/" + id, {
		headers: {
			authtoken,
		}
	});
}

export const deleteSubmit = async(authtoken, id) => { 
	return await axios.delete(process.env.REACT_APP_API + "/submit/user/" + id, {
		headers: {
			authtoken,
		}
	});
}