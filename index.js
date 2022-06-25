import express from 'express';
import mongoose from 'mongoose';
import {contactsRouter} from './src/routers/contacts-router.js';

const app = express();
const port = 5000;
const json = express.json();
app.use(json);

(async () => {
    await mongoose.connect('mongodb://localhost:27017/login-and-registration');
})();

const frontFiles=express.static("./public/frontend");
app.use(frontFiles);

app.listen(port, () => console.log(`server listen ${port} port`));

app.use(contactsRouter);

