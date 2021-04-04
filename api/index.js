const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const accountSid = 'ACccda32bc3a9ee3ba2b87ac6cbc0d2422';
  const authToken = '5cadc5dba0b7a340e0aa3a928a3b438b';
  const client = require('twilio')(accountSid, authToken);

  client.studio.v1.flows('FWb063e3831ac34282a1025b40a61165c1')
  .executions.create({ 
    to: `+1${req.body.plaintiffPhone}`,
    from: '+17015994917',
    parameters: JSON.stringify(req.body)})
    .then(function(execution) { 
      res.send(('It worked!: ', execution.sid));
    }).catch(error => {
      console.log(error);
    });
  
})

module.exports = router;