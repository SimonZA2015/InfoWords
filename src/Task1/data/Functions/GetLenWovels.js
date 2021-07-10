const GetLenWovels = (value) => {
    var vowels = "aeiouyаоэеиыуёюя"; //vowels
    var res = "";
    for (let j = 0; j < vowels.length; j++) {
        for (let i = 0; i < value.length; i++) {
            if (value[i].indexOf(vowels[j]) > -1 ) {
                res = res + value[i]
            }
        }
    }
    console.log('wav:' + value + ':' + res + ' returned> ' + res.length)
    return(res.length)
};

export default GetLenWovels;