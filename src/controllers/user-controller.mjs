import {
  deleteUserById,
  insertUser,
  listAllUsers,
  selectUserById,
  updateUserById,
} from '../models/user-model.mjs';

const getUsers = async (req, res) => {
  try {
    const result = await listAllUsers();
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getUserById = async (req, res) => {
  try {
    const result = await selectUserById(req.params.id);
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const postUser = async (req, res) => {
  const { username, password, email } = req.body;

  if (!username || !password || !email) {
    return res.status(400).json({ error: 'Bad Request', message: 'Missing required fields' });
  }

  try {
    const result = await insertUser(req.body);
    return res.status(201).json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const putUser = async (req, res) => {
  const user_id = req.params.id;
  const { username, password, email } = req.body;

  if (!user_id || !username || !password || !email) {
    return res.status(400).json({ error: 'Bad Request', message: 'Missing required fields' });
  }

  try {
    const result = await updateUserById({ user_id, ...req.body });
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

const deleteUser = async (req, res) => {
  try {
    const result = await deleteUserById(req.params.id);
    return res.json(result);
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

// Dummy login with mock data, returns user object if username & password match
const postLogin = async (req, res) => {
  const userCreds = req.body;

  if (!userCreds.username || !userCreds.password) {
    return res.sendStatus(400);
  }

  try {
    const users = await listAllUsers();
    const userFound = users.find((user) => user.username === userCreds.username);

    if (!userFound || userFound.password !== userCreds.password) {
      return res.status(403).json({ error: 'Username/password invalid' });
    }

    res.json({ message: 'Logged in successfully', user: userFound });
  } catch (error) {
    return res.status(500).json({ error: 'Internal Server Error' });
  }
};

export { getUsers, getUserById, postUser, putUser, postLogin, deleteUser };
