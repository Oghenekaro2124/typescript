import express from 'express';
const app = express();



app.get('/', (req, res) => {
  res.json({message:'server is live'});

});

export default app;



