import db from './db';

export default class DataCollection {
    static list() {
        return new Promise(resolve => {

            let dataAr = [];
            db.collection("data").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log(`${doc.id} => ${doc.data()}`);
                    dataAr.push( doc.id );
                  });
                });
                console.log("data", dataAr);
                resolve(dataAr);

        });
    }

    static insert(newObject) {

    }

    static update(id, newObject) {

    }

    static delete(id) {

    }

}