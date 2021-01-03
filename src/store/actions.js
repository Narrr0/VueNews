import { fetchUserInfo, fetchAsking, fetchList } from '../api/index.js';

export default {
  // FETCH_LIST(context, pageName){
  //   return fetchList(pageName)
  //     .then(response => {
  //       //console.log(response.data);
  //       context.commit('SET_LIST', response.data);
  //       return response;
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // },
  async FETCH_LIST(context, pageName){
    try {
      const response = await fetchList(pageName);
      context.commit('SET_LIST', response.data);
      return response;
    }
    catch(error){
      console.log(error)
    }
  },

  // FETCH_USER(context, name) {
  //   return fetchUserInfo(name)
  //     .then(response => {
  //       //console.log(response.data);
  //       context.commit('SET_USER', response.data);
  //       return response;
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  // },
  async FETCH_USER(context, name) {
    try {
      const response = await fetchUserInfo(name);
      context.commmit('SET_USER', response.data);
      return response.data;
    }
    catch(error){
      console.log(error);
    }
  },
  
  // FETCH_ASKING(context, id){{
  //   return fetchAsking(id)
  //     .then(response => {
  //       //console.log(response.data);
  //       context.commit('SET_ASKING', response.data);
  //       return response;
  //     })
  //     .catch(error => {
  //       console.log(error);
  //     })
  //   }
  // },
  async FETCH_ASKING(context, id){
    try{
      const response = await fetchAsking(id);
      context.commit('SET_ASKING', response.data);
      return response.data;
    }
    catch(error){
      console.log(error);
    }
  }
}