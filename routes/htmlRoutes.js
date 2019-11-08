const path = require(`path`)

module.exports = function (app) {
  app.get('/tables', function (req, res) {
    res.sendFile(path.join(__dirname, '../Public/tables.html'))
  })

  app.get('/reservation', function (req, res) {
    res.sendFile(path.join(__dirname, '../Public/reservation.html'))
  })

  // If no matching route is found default to home
  app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../Public/index.html'))
  })
}