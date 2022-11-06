const { uuid } = require('uuid');

let users = [];

const createMerchant = (req, res) => {
    const newMerchant = req.body;
}

const getMerchantId = (req, res) => {   
    const user = req.body;

    users.push({...user, id: uuid()});
    
    console.log(`User [${user.username}] added to the database.`);
};

const updateMerchants = (req, res) => {
    res.send(req.params.id)
};


module.exports = {
    createMerchant,
    updateMerchants,
    getMerchantId,
};