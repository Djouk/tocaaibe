const { User } = require('../app/models');

module.exports = function (router) {
    router.get('/users', (req, res) => {
        User.findAll({
            include: [Patient],
        })
            .then(users => {
                res.json(users);
            })
            .catch(err => res.json(err));
    });

    router.get('/users/:id', (req, res) => {
        User.findAll({
            where: { id: req.params.id },
        })
            .then(user => {
                res.json(user[0]);
            })
            .catch(err => res.json(err));
    });

    router.post('/users', (req, res) => {
        User.create({
            name: req.body.name,
        })
            .then(res => {
                res.json(res);
            })
            .catch(err => res.json(err));
    });

    router.put('/users/:id', (req, res) => {
        User.update({ name: req.body.name }, { where: { id: req.params.id } })
            .then(updatedUser => {
                res.json(updatedUser);
            })
            .catch(err => res.json(err));
    });

    router.delete('/users/:id', (req, res) => {
        User.destroy({
            where: { id: req.params.id },
        })
            .then(user => {
                res.json(user);
            })
            .catch(err => res.json(err));
    });
};
