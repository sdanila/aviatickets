import api from './services/apiService';

api.countries().then(response => console.log(response.data)); 
    
api.cities().then(response => console.log(response.data));
