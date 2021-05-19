class DataBase {
  constructor(props) {
    this.model = props.model;
    this.path = "./storage/" + props.model + ".json";
  }

  getStructure() {
    try {
      return require("./storage/" + this.model + ".json").structure;
      // return require(this.path).structure;
    } catch (error) {
      throw error;
    }
  }

  getRelationship() {
    try {
      return require("./storage/" + this.model + ".json").relationship;
    } catch (error) {
      throw error;
    }
  }

  getDB() {
    try {
      const db = require("./storage/" + this.model + ".json").data;
      // const db = require(this.path).data;
      if (db?.length) {
        return db.map((e, i) => {
          return { ...e, id: e?.id || i + 1 };
        });
      }
      return [];
    } catch (error) {
      throw error;
    }
  }

  toKeyValueArray(obj) {
    const q = [];
    for (var i in obj) {
      q.push(i + "=" + obj[i]);
    }
    return q;
  }

  //   Performing Basic CRUD operations

  // Read record by ID
  find(d) {
    return this.getDB().find((e) => e.id === d);
  }

  //   Read all record
  fetch(query = null, any = null) {
    if (query && any) {
      return this.getDB().filter(
        (e) =>
          this.toKeyValueArray(query).filter((k) => e.includes(k)).length > 0
      );
    }
    if (query && !any) {
      return this.getDB().filter((e) =>
        this.toKeyValueArray(query).every((k) => {
          return this.toKeyValueArray(e).includes(k);
        })
      );
    }
    return this.getDB();
  }

  //   Create or update row
  create({ row, id = null }) {
    let data = this.getDB();
    if (id) {
      const index = data.findIndex((e) => e.id === id);
      if (index > -1) data[index] = { ...row, id: row.id || index + 1 };
    } else {
      data.push({ ...row, id: row.id || data.length + 1 });
    }
    return this.saveData(data);
  }

  saveData(data) {
    const fs = require("fs");
    let newdata = JSON.stringify(
      {
        structure: this.getStructure(),
        relationship: this.getRelationship(),
        data,
      },
      null,
      2
    );
    fs.writeFile(this.path, newdata, (err) => {
      if (err) throw err;
      console.log("Data written to file");
      return true;
    });
  }

  remove(id) {
    let data = this.getDB();
    const i = data.findIndex((e) => e.id === id);
    if (i > -1) {
      data.splice(i, 1);
      return this.saveData(data);
    }
  }

  //Delete Record
  delete(id = null, multiple = [], query = null) {
    let data = this.getDB();
    if (id) return this.remove(id);
    if (multiple.length > 0) {
      let k = 0;
      data.forEach((e) => {
        k += this.remove(e.id) ? 1 : 0;
      });
      return k === multiple.length;
    }
  }
}

export default DataBase;
