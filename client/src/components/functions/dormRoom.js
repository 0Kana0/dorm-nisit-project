import axios from 'axios';

export const createDormRoom = async(authtoken, value) => {
	return await axios.post(process.env.REACT_APP_API + "/dormroom", value, {
		headers: {
			authtoken,
		}
	});
}

export const listDormRoom = async(authtoken, id) => {
	return await axios.get(process.env.REACT_APP_API + "/dormroom/" + id, {
		headers: {
			authtoken,
		}
	});
}

export const listDormRoomID = async(authtoken, id) => {
	return await axios.get(process.env.REACT_APP_API + "/dormroom/detail/" + id, {
		headers: {
			authtoken,
		}
	});
}

export const deleteDormRoomID = async(authtoken, id) => {
	return await axios.delete(process.env.REACT_APP_API + "/dormroom/delete/" + id, {
		headers: {
			authtoken,
		}
	});
}


export const editDormRoomID = async(authtoken, id, value) => {
	return await axios.put(process.env.REACT_APP_API + "/dormroom/edit/" + id, value, {
		headers: {
			authtoken,
		}
	});
}