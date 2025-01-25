const express = require('express')
const morgan = require('morgan')
const app = express()
const port = 3001

app.use(morgan('combined'))
app.get('/tin-tuc', (req, res) => {
return res.send('123');
})

app.listen(port, () => 
  console.log(`Example app listening on port http://localhost:${port}`))