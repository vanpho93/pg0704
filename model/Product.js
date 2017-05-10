const queryDB = require('../db');

class Product {
    constructor(id, name, desc, image, idVideo) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.image = image;
        this.idVideo = idVideo;
    }

    static getAllProduct(cb) {
        const sql = 'SELECT * FROM "Product"';
        queryDB(sql, (err, result) => {
            if (err) return cb(err);
            cb(undefined, result.rows);
        });
    }

    add(cb) {
        const sql = `INSERT INTO "Product"(name, "desc", image, "idVideo") VALUES 
                ('${this.name}', '${this.desc}', '${this.image}', '${this.idVideo}')`;
        queryDB(sql, (err, result) => {
            if (err) return cb(err);
            cb(undefined);
        });
    }

    remove(cb) {
        const sql = `DELETE FROM "Product" WHERE id = ${this.id}`
        queryDB(sql, err => {
            if (err) return cb(err);
            cb(undefined);
        });
    }

    update() {

    }
}
