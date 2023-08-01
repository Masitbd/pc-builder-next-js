const { client } = require('../connection');

async function run(req, res) {
  try {
   
    await client.connect();
    const categoriesCollection = client.db('pc-builder').collection('category')

    if (req.method==='GET') {
      /* const categories = await categoriesCollection.distinct('RAM') */
      const categories = await categoriesCollection.aggregate([
        {
            $group: {
              _id: "$category"
            }
          },
          {
            $sort: {
              _id: 1
            }
          }
        ]).toArray()
      console.log(categories)
      res.send({message: 'Success', status: 200, data: categories})
    }
  } finally {
  }
}
export default run
