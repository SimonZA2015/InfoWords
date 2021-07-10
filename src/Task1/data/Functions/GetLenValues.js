const GetLenValues = (value) => {

    try {
        let u = 0;
        let is = true;
        for (let i = 0; i < value.length; i++) {
            if (value[i].indexOf(' ') > -1) {
                is = true
            }else {
                if (is) {
                    //add count in length word
                    u  = u + 1
                    is = false
                }
            }
        }

        console.log('GetLenValues.js: value> ' + value +' len> ' + u)

        return u

    }catch (e) {
        console.warn('ERROR in GetLenValues.js: ' + e);
        return false;
    }
};

export default GetLenValues;