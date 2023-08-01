const { client } = require('../connection');
import { ObjectId } from 'mongodb';

async function run(req, res) {
  try {
   
    await client.connect();
    const categoriesCollection = client.db('pc-builder').collection('category')

    if (req.method==='GET') {
        const { query } = req;
    
        const { id } = query;
        const categories = await categoriesCollection.find({category:id}).toArray()
        res.send({message: 'Success', status: 200, data: categories})
    }
  } finally {
  }
}
export default run
