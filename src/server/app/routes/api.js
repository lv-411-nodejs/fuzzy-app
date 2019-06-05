module.exports = (app) => { 
    app.get('/api/first', (req, res) => res.send({ username: 'SADASFA' }));
}