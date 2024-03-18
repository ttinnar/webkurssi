import {customError} from '../middlewares/error-handler.mjs';
import {
  findEntryById,
  addEntry,
  deleteEntryById,
  updateEntryById,
  listAllEntriesByUserId,
} from '../models/entry-model.mjs';

const getEntries = async (req, res, next) => {
  try {
    const result = await listAllEntriesByUserId(req.user.user_id);
    res.json(result);
  } catch (error) {
    next(customError('Error retrieving entries', 500)); // Internal Server Error
  }
};

const getEntryById = async (req, res, next) => {
  try {
    const entry = await findEntryById(req.params.id, req.user.user_id);
    if (entry) {
      res.json(entry);
    } else {
      next(customError('Entry not found', 404)); // Not Found
    }
  } catch (error) {
    next(customError('Error retrieving entry', 500)); // Internal Server Error
  }
};

const postEntry = async (req, res, next) => {
  try {
    const userId = req.user.user_id;
    const result = await addEntry(req.body, userId);
    res.status(201).json({message: 'New entry added.', ...result});
  } catch (error) {
    next(customError('Error adding entry', 500)); // Internal Server Error
  }
};

const putEntry = async (req, res, next) => {
  try {
    const entryId = req.params.id;
    const userId = req.user.user_id;
    const result = await updateEntryById(entryId, userId, req.body);
    res.status(200).json(result);
  } catch (error) {
    next(customError('Error updating entry', 500)); // Internal Server Error
  }
};

const deleteEntry = async (req, res, next) => {
  try {
    const result = await deleteEntryById(req.params.id, req.user.user_id);
    res.json(result);
  } catch (error) {
    next(customError('Error deleting entry', 500)); // Internal Server Error
  }
};

export {getEntries, getEntryById, postEntry, putEntry, deleteEntry};
