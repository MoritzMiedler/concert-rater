const db = require('../db/index.js');

async function getConcerts() {
  const { rows } = await db.query('SELECT * FROM concerts;');
  return {
    code: 200,
    data: rows,
  };
}

async function getConcert(id) {
  const { rows } = await db.query('SELECT * FROM concerts where id = $1;', [id]);
  return {
    code: 200,
    data: rows,
  };
}

async function deleteConcert(id) {
  const { rowCount } = await db.query('delete from concerts where id = $1;', [id]);

  if (rowCount === 1) {
    return {
      code: 200,
      data: 'Concert deleted',
    };
  }
  return {
    code: 404,
    data: `Concert with id ${id} wasnt found.`,
  };
}

async function postConcert(title, image, rating, date, audio, locy, locx) {
  const { rows } = await db.query(
    'INSERT INTO concerts (title, image, rating, date, audio, locy, locx) values ($1, $2, $3, $4, $5, $6, $7) returning *;',
    [title, image, rating, date, audio, locy, locx],
  );
  return {
    code: 200,
    data: rows,
  };
}

module.exports = {
  getConcerts,
  getConcert,
  deleteConcert,
  postConcert,
};
