import axios from 'axios';

const GetStringsBase = (value) => {

    let Value = value
    //take value for get id text
    let list = Value.toString().split(',');
    let result = [];

    try {
        for (let i = 0; i < list.length; i++) {
            console.log('Get string> '+ parseInt(list[i]))
            axios.get('https://tmgwebtest.azurewebsites.net/api/textstrings/{' + parseInt(list[i]) + '}', {headers: ''}).then( (response) => {
                console.log('get string: ' + response);
                result.push(response.text);
            }).catch((error) => {
                console.warn('GetStringsBase.js: ERROR> ' + error)
            })
        }

        return result;
    }catch(e)
        {
            console.warn('GetStringsBase.js: ERROR> ' + e)
        }
}


export default GetStringsBase;