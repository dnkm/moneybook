import db from './db';

export default class DataCollection {
    static list() {
        return new Promise(resolve => {

            let data = [];
            db.collection("data").get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    let item = {
                        id : doc.id,
                        ...doc.data()
                    }
                    data.push(item);
                });
                resolve(data);
            });
        });
    }

    static insert(newObject) {

    }

    static update(id, newObject) {

    }

    static delete(id) {

    }

}