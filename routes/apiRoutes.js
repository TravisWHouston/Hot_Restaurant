const tableData = require(`../data/tableData`)
const waitListData = require(`../data/waitingListData`)

module.exports = function (app) {
  app.get(`/api/tables`, (req, res) => {
    res.json(tableData)
  })

  app.get(`/api/waitlist`, (req, res) => {
    res.json(waitListData)
  })

  app.post(`/api/tables`, (req, res) => {
    if (tableData.length > 5) {
      tableData.push(req.body)
      res.json(true)
    } else {
      waitListData.push(req.body)
      res.json(false)
    }
  })

  
}