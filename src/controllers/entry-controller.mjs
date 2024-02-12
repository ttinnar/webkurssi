import {listAllEntries, findEntryById, addEntry} from "../models/entry-model.mjs";

const getEntries = async (req, res) => {
  const result = await listAllEntries();
  if (!result.error) {
    res.json(result);
  } else {
    res.status(500);
    res.json(result);
  }
};

const getEntryById = async (req, res) => {
  const entry = await findEntryById(req.params.id);
  if (entry) {
    res.json(entry);
  } else {
    res.sendStatus(404);
  }
};

const postEntry = async (req, res) => {
  const {user_id, entry_date, mood, weight, sleep_hours, notes} = req.body;
  if (entry_date && (weight || mood || sleep_hours || notes) && user_id) {
    const result = await addEntry(req.body);
    if (result.entry_id) {
      res.status(201);
      res.json({message: 'New entry added.', ...result});
    } else {
      res.status(500);
      res.json(result);
    }
  } else {
    res.sendStatus(400);
  }
};

const putEntry = (req, res) => {
  // placeholder for future implementation
  res.sendStatus(200);
};

const deleteEntry = (req, res) => {
  // placeholder for future implementation
  res.sendStatus(200);
};

export {getEntries, getEntryById, postEntry, putEntry, deleteEntry};

const Entry = require('../models/entry-model');

class EntriesController {

  getEntryById(req, res) {
    const entryId = req.params.id;
    Entry.getEntryById(entryId, (error, entry) => {
      if (error) {
        return res.status(404).json({ error: 'Entry not found' });
      }
      res.json(entry);
    });
  }

  updateEntry(req, res) {
    const entryId = req.params.id;
    const { title, content } = req.body;
    const updatedEntry = new Entry(entryId, title, content);
    updatedEntry.update((error, entry) => {
      if (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      res.json(entry);
    });
  }

  deleteEntry(req, res) {
    const entryId = req.params.id;
    Entry.deleteEntryById(entryId, (error) => {
      if (error) {
        return res.status(500).json({ error: 'Internal Server Error' });
      }
      res.status(204).send();
    });
  }
}

module.exports = new EntriesController();
