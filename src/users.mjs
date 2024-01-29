const users = [
    {
      id: 1,
      username: "johndoe",
      password: "password1",
      email: "johndoe@example.com"
    },
    {
      id: 2,
      username: "janedoe",
      password: "password2",
      email: "janedoe@example.com"
    },
    {
      id: 3,
      username: "bobsmith",
      password: "password3",
      email: "bobsmith@example.com"
    }
  ];

  // TODO: implement route handlers below for users

  const getUsers = (req, res) => {
    res.json(users);
  };

  const getUserById = (req, res) => {
    // TODO: implement this
    const userId = parseInt(req.params.id);
    const user = users.find(user => user.id === userId);

    if (user) {
        res.json(user);
    } else {
        res.send('not working yet');
    }
  };

  const postUser = (req, res) => {
    // TODO: implement this
    console.log('postUser request body', req.body);
    // error if name property is missing
    if (!req.body.name) {
      return res.status(400).json({error: "user name missing"});
    }
    // new id: add 1 to last id number in the items array
    const newId = users[users.length-1].id + 1;
    const newUser = {id: newId, name: req.body.name};
    items.push(newUser);
    res.send('not working yet');
  };

  const putUser = (req, res) => {
    // TODO: implement this
    const index = users.findIndex(user => user.id == req.params.id);
    // not found
    if (index === -1) {
        return res.sendStatus(404);
    }
    // bad request
    if (!req.body.name) {
        return res.status(400).json({error: "user name missing"});
    }
    users[index].name = req.body.name;
    res.json({updated_user: users[index]});
        res.send('not working yet');
  };

  // Dummy login, returns user object if username & password match
  const postLogin = (req, res) => {
    const userCreds = req.body;
    if (!userCreds.username || !userCreds.password) {
      return res.sendStatus(400);
    }
    const userFound = users.find(user => user.username == userCreds.username);
    // user not found
    if (!userFound) {
      return res.status(403).json({error: 'username/password invalid'});
    }
    // check if posted password matches to user found password
    if (userFound.password === userCreds.password) {
      res.json({message: 'logged in successfully', user: userFound});
    } else {
      return res.status(403).json({error: 'username/password invalid'});
    }
  };

  export {getUsers, getUserById, postUser, putUser, postLogin};
