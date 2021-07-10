import GetLenValues from "./GetLenValues";
import GetLenWovels from "./GetLenWovels";

const Constructor = (list) => {
    let result = [];

    for (let i = 0; i < list.length; i++) {
        let lenValues = GetLenValues(list[i]);
        let lenVowels = GetLenWovels(list[i]);

        const data = ''
        console.log('Build result' + i + '> ' + data)

        //load in list for result
        result.push([list[i], lenValues, lenVowels]);
    }

    console.log('Constructor.js: list returned' + result);
    return result;


};

export default Constructor;