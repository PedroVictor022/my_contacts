const db = require('../../database');

class CategoriesRepositories {
  async create({ name }) {
    const [row] = await db.query(`
    INSERT INTO categories (name)
    VALUES ($1)
    RETURNING *
    `, [name]);
    return row;
  }

  async findAll() {
    const rows = await db.query('SELECT * FROM categories ORDER BY name');
    return rows;
  }

  async delete(id) {
    const deleteOp = await db.query('DELETE FROM categories WHERE id = $1', [id]);
    return deleteOp;
  }
}

module.exports = new CategoriesRepositories();
