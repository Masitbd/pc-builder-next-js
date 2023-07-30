const { client } = require('../connection');

async function run(req, res) {
  try {
   
    await client.connect();
    const productsCollection = client.db('pc-builder').collection('products')

    if (req.method==='GET') {
      const products = await productsCollection.aggregate([
        { $sample: { size: 4 } },
      ]).toArray();
  
      res.send({message: 'Success', status: 200, data: products})
    }
  } finally {
  }
}
export default run
