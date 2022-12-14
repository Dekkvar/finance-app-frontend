import axios from '../utils/config/axios.config';

export const userInfo = async (token, hashid, id) => {
  const options = {
    headers: {
      'x-access-token': token,
      'sessionid': hashid
    },
    params: {
      id
    }
  }
  
  return await axios.get('/user/me', options)
}

export const userGlobalData = async (token, hashid, id) => {
  const options = {
    headers: {
      'x-access-token': token,
      'sessionid': hashid
    },
    params: {
      id
    }
  }

  return await axios.get('/user/global', options)
}

export const updateInfo = async (token, hashid, id) => {
  const options = {
    headers: {
      'x-access-token': token,
      'sessionid': hashid
    },
    params: {
      id
    }
  }

  return await axios.put('/user/me', options)
}

export const userAccountSettings = async (id) => {
  const options = {
    params : {
      id
    }
  }

  return await axios.get('/user/settings', options)
}