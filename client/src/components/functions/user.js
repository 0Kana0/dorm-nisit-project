import axios from 'axios';

export const listUsers = async(authtoken) => {
	return await axios.get(process.env.REACT_APP_API + "/users", {
    headers:{
      authtoken,
    }
  });
}

export const readUsers = async(authtoken, id) => {
	return await axios.get(process.env.REACT_APP_API + "/users/" + id, {
    headers:{
      authtoken,
    }
  });
}

export const updateUsers = async(authtoken, id, value) => {
	return await axios.put(process.env.REACT_APP_API + "/users/" + id, value, {
    headers:{
      authtoken,
    }
  });
}

export const updateUserBookTrue = async(authtoken, id) => {
  console.log(authtoken)
  console.log(id)
  return await axios.put(process.env.REACT_APP_API + "/users/book/" + id, {
    headers:{
      authtoken,
    }
  });
}
