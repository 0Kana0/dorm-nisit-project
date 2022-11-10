import axios from 'axios'

export const listBills = async (authToken) => {
  return await axios.get(process.env.REACT_APP_API + '/bill',{
    headers:{
      authToken
    }
  });
}

export const listDormRoomBills = async (authToken,dormId,roomId) => {
  return await axios.get(process.env.REACT_APP_API + `/bill/${dormId}/${roomId}` ,{
    headers:{
      authToken
    }
  });
}