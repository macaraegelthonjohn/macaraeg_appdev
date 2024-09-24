const ph = {

    about: (req, res) => {
        res.send('About page');
    },
    create: (req, res) => {
         res.send('Create page');
    }, 
    update: (req, res) => {
        const id = req.params.id;
        res.send(`Updating item with ID: ${id}`);
    },
    delete: (req, res) => {
        const id = req.params.id;
        res.send(`Deleting item with ID: ${id}`);
    },
    list: (req, res) => {
        res.send('List of items');
    }
    
};

module.exports = ph;