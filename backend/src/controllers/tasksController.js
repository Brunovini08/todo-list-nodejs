const getAll = (req, res) => {
    return res.status(200).json({ message: 'Controller está tudo certo' });
}

module.exports = {
    getAll
}