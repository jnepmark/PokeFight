import express from 'express';
import mongoose from 'mongoose';
import pokefightRouter from './routes/pokefightRouter.js';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const username = encodeURIComponent('jnepmark');
const password = encodeURIComponent('j_5aCkY@XdWm8E4');
const dbName = 'test'; // Replace with your actual database name

const PORT = process.env.PORT || 3000;

mongoose
  .connect(`mongodb+srv://${username}:${password}@cluster0.hbdnchr.mongodb.net/${dbName}`, {
  })
  .then(() => {
    console.log('Database is connected');
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);
    });
  })
  .catch((err) => console.error(err));

app.get('/', (req, res) => {
  res.send('Welcome to Mongo DB server pokefights');
});

app.use('/pokefights', pokefightRouter);

app.use((err, req, res, next) => {
  if (err.status === 404) {
    res.status(404).send(err.message);
  } else {
    next(err);
   }
});

app.use((err, req,res,next)=>{
 const {status=500,message="Server error"}= err;
res.status(status).json({message});
});

export default app;