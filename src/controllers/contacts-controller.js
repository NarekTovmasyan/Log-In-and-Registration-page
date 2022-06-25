import {Contacts} from '../schemas/contacts.js'

async function getContacts(req, res) {
    const contacts = await Contacts.find();

    return res
        .send({
            data: contacts,
        })
};

async function postContacts(req, res) {
    // const requestQuery=req.query;
    // const requestBody = req.body;
    const contactBody = req.body;

    const saveData = await Contacts.create(contactBody);
    // contactsController.push({
    //     id: ++id,
    //     ...requestBody,
    // })

    return res
        .status(201)
        .send({
            name: saveData,
        })
};

async function putContacts(req, res) {
    const requestQuery = req.query;
    const requestBody = req.body;

    const result = await Contacts.updateOne(
        {_id: requestQuery._id},
        {
            title: requestBody.title,
            isPublic: true
        }
    )
    if (result.isModified === 0) {
        return res
            .status(404)
            .send({message: 'contact not found'})
    }

    return res
        .status(201)
        .send({message: 'contact was updated'});
};

async function deleteContacts(req, res) {
    const requestQuery = req.query;
    // const requestBody = req.body;

    const result = await Contacts.deleteOne({
        _id: requestQuery._id,
    })
    // if(result.deletedCount===0){
    //     return res
    //         .status(404)
    //         .send({message:'contact not found'});
    // }
    // if (!+requestQuery.id) {
    //     return res
    //         .status(404)
    //         .send({
    //             message: 'not found'
    //         });
    // }

    // contactsController.splice(requestBody.id+1,1)
    // contacts = contactsController.filter((contact) => {
    //     return contact.id !== +requestBody.id;
    // })
    return res
        .status(204)
        .send();
};

export {
    getContacts,
    postContacts,
    putContacts,
    deleteContacts,
};