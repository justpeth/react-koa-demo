import axios from 'axios';


const Ajax = (params) => {
  let config = Object.assign({
    url: '',
    type: 'get',
    params: {},
    loading: true
  }, params)
  
  if(config.loading){
    // Add a request interceptor
    axios.interceptors.request.use( (config) => {
      // Do something before request is sent
      console.log('beforeRequest')
      return config;
    }, function (error) {
      // Do something with request error
      return Promise.reject(error);
    });

    // Add a response interceptor
    axios.interceptors.response.use( (response) => {
      // Do something with response data
      console.log('responsed')
      return response;
    }, function (error) {
      // Do something with response error
      return Promise.reject(error);
    });
  }
  if(config.type === 'get') {
    return new Promise((resolve, reject) => {
      axios.get(config.url, {
        params: config.params
      })
        .then((res)=>{
          if(res.status === 200 ) {
            resolve(res.data);
          }
        })
        .catch((error) => {
          if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            console.log(error.response.data);
            console.log(error.response.status);
            console.log(error.response.headers);
          } else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            console.log(error.request);
          } else {
            // Something happened in setting up the request that triggered an Error
            console.log('Error', error.message);
          }
          console.log(error.config);
          reject(error);
        });
    })
  } else if(config.type === 'post') {
    
  } else {
    
  }
};

export default Ajax;