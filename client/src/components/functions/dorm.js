import axios from 'axios';

export const createDorm = async(authtoken, value) => {
	return await axios.post(process.env.REACT_APP_API + "/dorm", value, {
		headers: {
			authtoken,
		}
	});
}

export const listDorm = async(authtoken) => {
	return await axios.get(process.env.REACT_APP_API + "/dorm", {
		headers: {
			authtoken,
		}
	});
}

export const deleteDorm = async(authtoken, id) => {
	return await axios.delete(process.env.REACT_APP_API + "/dorm/" + id, {
		headers: {
			authtoken,
		}
	});
}

export const readDorm = async(authtoken, id) => {
	return await axios.get(process.env.REACT_APP_API + "/dorm/" + id, {
		headers: {
			authtoken,
		}
	});
}

export const editDorm = async(authtoken, id,value) => {
	return await axios.put(process.env.REACT_APP_API + "/dorm/" + id, value, {
		headers: {
			authtoken,
		}
	});
}