import express from "express";
import {
    getContacts,
    postContacts,
    putContacts,
    deleteContacts,
} from '../controllers/contacts-controller.js';

const contactsRouter = express.Router();

contactsRouter.get('/contacts', getContacts);
contactsRouter.post('/contacts', postContacts);
contactsRouter.put('/contacts', putContacts);
contactsRouter.delete('/contacts', deleteContacts);

export { contactsRouter };