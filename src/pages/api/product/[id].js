const { client } = require('../connection');
import { ObjectId } from 'mongodb';

async function run(req, res) {
  try {
   
    await client.connect();
    const productsCollection = client.db('pc-builder').collection('products')

    if (req.method==='GET') {
        const { query } = req;
        const { id } = query;
        const products = await productsCollection.findOne({ _id: new ObjectId(id) })
  
      res.send({message: 'Success', status: 200, data: products})
    }
  } finally {
  }
}
export default run
