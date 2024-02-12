import promisePool from '../utils/database.mjs';

  const listAllEntries = async () => {
    try {
      const [rows] = await promisePool.query('SELECT * FROM DiaryEntries');
      console.log('rows', rows);
      return rows;
    } catch (e) {
      console.error('error', e.message);
      return {error: e.message};
    }
  };

  const findEntryById = async (id) => {
    try {
      const [rows] = await promisePool.query('SELECT * FROM DiaryEntries WHERE entry_id = ?', [id]);
      console.log('rows', rows);
      return rows[0];
    } catch (e) {
      console.error('error', e.message);
      return {error: e.message};
    }
  };

  const addEntry = async (entry) => {
    const {user_id, entry_date, mood, weight, sleep_hours, notes} = entry;
    const sql = `INSERT INTO DiaryEntries (user_id, entry_date, mood, weight, sleep_hours, notes)
                 VALUES (?, ?, ?, ?, ?, ?)`;
    const params = [user_id, entry_date, mood, weight, sleep_hours, notes];
    try {
      const rows = await promisePool.query(sql, params);
      console.log('rows', rows);
      return {entry_id: rows[0].insertId};
    } catch (e) {
      console.error('error', e.message);
      return {error: e.message};
    }
  };

  export {listAllEntries, findEntryById, addEntry};

