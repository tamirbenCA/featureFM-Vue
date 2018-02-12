import jamesblakecar from './jamesblakecar.json'
import jhenesativa from './jhenesativa.json'
import savetherunts from './savetherunts.json'

function getData(shortId) {
    switch (shortId) {
        case 'jamesblakecar':
            return Promise.resolve(jamesblakecar);
            break;
        case 'jhenesativa':
            return Promise.resolve(jhenesativa);
            break;
        case 'savetherunts':
            return Promise.resolve(savetherunts);
            break;
    }
}

export default {
    getData
}