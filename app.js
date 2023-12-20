require('dotenv').config();
const express = require("express");
const cors = require('cors')
const app = express();
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');
const swaggerDocument = yaml.load('./API_DOC.yml')
const predictRoutes = require('./routes/predict')
const model_ML = require('./util/predictImage')

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors({
  origin: "*",
  methods: ['POST']
}));
app.use(predictRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

app.use('/', (req,res,next)=>{
  res.status(404).json({
    status: 'NOT FOUND!!!',
    message: 'Resource Not Found!'
  })
})

app.listen(5000, ()=>{
  console.log(`Server is listening on PORT 5000`);
})