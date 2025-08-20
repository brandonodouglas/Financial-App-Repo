const express = require('express')
const app = express()
const port = 3000

const router = express.Router();

router.get('/', get)
app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`[SERVER]: Example app listening on port ${port}`)
})