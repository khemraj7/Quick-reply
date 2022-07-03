const express = require('express')
const router = express.Router()
const DataModel = require('../dataSave/model')

router.post('/', async (req, res, next) => {
  try {
    console.log('req.body', req.body)
    const re = new DataModel(req.body)
    const result = await re.save()
    res.send(result)
  } catch (error) {
    console.log(error.message)
  }
})

router.get('/', async (req, res, next) => {
  const result = await DataModel.find()
  res.send(result)
})

module.exports = router
