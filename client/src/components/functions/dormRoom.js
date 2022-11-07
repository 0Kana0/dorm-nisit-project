import axios from 'axios';

export const createDormRoom = async(authtoken, value) => {
	return await axios.post(process.env.REACT_APP_API + "/dormroom", value, {
		headers: {
			authtoken,
		}
	});
}