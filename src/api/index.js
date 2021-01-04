import axios from 'axios';

// 1. HTTP Request & Response 기본 설정
const config = {
  baseUrl: 'https://api.hnpwa.com/v0/'
}
// 2. API 함수
function fetchList(pageName){
  return axios.get(`${config.baseUrl}${pageName}/1.json`);
}

function fetchUserInfo(username) {
  return axios.get(`${config.baseUrl}user/${username}.json`);
}
function fetchAsking(itemid) {
  return axios.get(`${config.baseUrl}item/${itemid}.json`);
}

export {
  fetchUserInfo,
  fetchAsking,
  fetchList
}