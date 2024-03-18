/* eslint-disable max-len */
import express from 'express';
import {body, param} from 'express-validator';
import {
  getEntries,
  getEntryById,
  postEntry,
  putEntry,
  deleteEntry,
} from '../controllers/entry-controller.mjs';
import {authenticateToken} from '../middlewares/authentication.mjs';
import {validationErrorHandler} from '../middlewares/error-handler.mjs';


const entryRouter = express.Router();

entryRouter
  .route('/')
  .get(authenticateToken, getEntries)
  .post(
    authenticateToken,
    body('entry_date').optional().toDate(),
    body('workout').optional().trim().isLength({min: 3, max: 40}).isString(),
    body('duration').optional().isFloat({min: 1, max: 200}),
    body('intensity').optional({min: 0, max: 24}),
    body('notes').optional().isString().isLength({min: 0, max: 300}),
    validationErrorHandler,
    postEntry,
  );

entryRouter
  .route('/:id')
  .get(
    authenticateToken,
    param('id', 'must be integer').isInt(),
    validationErrorHandler,
    getEntryById,
  )
  .put(
    authenticateToken,
    param('id', 'must be integer').isInt(),
    // user_id is not allowed to be changed
    body('user_id', 'not allowed').not().exists(),
    body('entry_date').optional().toDate(),
    body('workout').optional().trim().isLength({min: 3, max: 20}).isString(),
    body('duration').optional().isFloat({min: 30, max: 200}),
    body('intensity').optional({min: 0, max: 24}),
    body('notes').optional().isString().isLength({min: 3, max: 300}),
    validationErrorHandler,
    putEntry,
  )
  .delete(
    authenticateToken,
    param('id', 'must be integer').isInt(),
    validationErrorHandler,
    deleteEntry,
  );

export default entryRouter;
