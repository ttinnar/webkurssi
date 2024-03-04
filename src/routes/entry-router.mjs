import express from 'express';
import {body} from 'express-validator';
import {
  getEntries,
  getEntryById,
  postEntry,
  putEntry,
  deleteEntry,
} from '../controllers/entry-controller.mjs';
import {authenticateToken} from '../middlewares/authentication.mjs';

const entryRouter = express.Router();

entryRouter.route('/')
  .get(authenticateToken, getEntries)
  // TODO: add authentication and input validation
  .post(
    body('mood').trim().isLength({min: 3, max: 40}).isAlphanumeric(),
    body('weight').trim().isLength({min: 1, max: 6}).isAlphanumeric(),
    body('sleep_hours').trim().isLength({max: 2}).isAlphanumeric(),
    body('password').trim().isLength({min: 4, max: 128}).isAlphanumeric(),
    postEntry,
  );

entryRouter.route('/:id').get(getEntryById).put(putEntry).delete(deleteEntry);

export default entryRouter;
