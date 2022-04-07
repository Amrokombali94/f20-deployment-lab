const express = require('express')
const path = require('path')
const cors = require('cors')


const app = express()

app.use(express.static('public'))

app.use(cors())

// include and initialize the rollbar library with your access token
var Rollbar = require('rollbar')
var rollbar = new Rollbar({
  accessToken: 'e447b8cb475b4663866b9a197ffcc33d',
  captureUncaught: true,
  captureUnhandledRejections: true,
})

// record a generic message and send it to Rollbar
rollbar.log('Hello there!')

let user = []


app.get('/',function(req,res) {
  res.sendFile(path.join(__dirname, '../index.html'));
});

app.post('/index2',function(req,res) {

console.log(req.body)
  // res.sendFile(path.join(__dirname, '../index2'));
  rollbar.log('user made a request to index2.html')
});

app.get('/api/functions', () => {
  try {invalidFunction2();
  } catch(e) {
      rollbar.error(e);
  }
})

const port = process.env.PORT || 4005

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})