import express from 'express';
import {
  getEntries,
  getEntryById,
  postEntry,
  putEntry,
  deleteEntry,
} from '../controllers/entry-controller.mjs';
import {authenticateToken, isOwner} from '../middlewares/authentication.mjs';

const entryRouter = express.Router();

entryRouter.route('/')
  .get(authenticateToken, getEntries)
  .post(authenticateToken, postEntry);

entryRouter.route('/:id')
  .get(getEntryById)
  .put(authenticateToken, isOwner, putEntry)
  .delete(authenticateToken, isOwner, deleteEntry);

export default entryRouter;
