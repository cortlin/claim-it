const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  const accountSid = process.env.TWILIO_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
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

router.post('/defendant', (req, res) => {
  const accountSid = process.env.TWILIO_SID;
  const authToken = process.env.TWILIO_AUTH_TOKEN;
  const client = require('twilio')(accountSid, authToken);

  client.studio.v1.flows('FW831e38445320614c91430c150ba5d6d3').executions.create({
    to: `+1${req.body.defendantPhone}`,
    from: '+18582015718',
    parameters: JSON.stringify(req.body)})
    .then(function(execution) {
      res.send(('SENT: ', execution.sid));
    }).catch(error => {
      console.log(error);
    })
});

module.exports = router;


