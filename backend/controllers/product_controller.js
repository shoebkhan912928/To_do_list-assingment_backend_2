const storage = require('node-persist')
storage.init().then(() => {
    storage.clear(); // Clear data when the server starts
});
const addProduct = async (req, res) => {
    const {items } = req.body;
    try {
        const resp =await storage.getItem('unique_key') || [];
        resp.push({ items });
        await storage.setItem('unique_key', resp);
        res.status(201).send({ message: "Product Add Successfully", resp })

    } catch (error) {
        res.status(500).send({ message: "Error while adding product", error })

    }

}
const getAllproducts = async(req,res) => {
    try {
        const resp = await storage.getItem('unique_key') || [];
        res.status(200).json(resp);

    } catch (error) {

        res.status(500).send(error)
    }
}
module.exports= { addProduct,getAllproducts }

