import axios from 'axios'
import 'teste.html'

let axios = require('axios');

let config = {
    method: 'get',
    url: 'https://maps.googleapis.com/maps/api/distancematrix/json?origins=40.6655101%2C-73.89188969999998&destinations=40.659569%2C-73.933783%7C40.729029%2C-73.851524%7C40.6860072%2C-73.6334271%7C40.598566%2C-73.7527626&key=218689582967-qf12mgjtuc4slestkmnpn5uabcfkl7cg.apps.googleusercontent.com',
    headers: {}
};

axios(config)
    .then(function (response) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error) {
        console.log(error);
    });