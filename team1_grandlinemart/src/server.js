// 9cVPjD095xKTXV4D

const { MongoClient, ServerApiVersion } = require("mongodb");
const uri =
  "mongodb+srv://karruby15:aruZap8NGpoYogLT@cluster0.07pblg8.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    const database = client.db("user_data");
    const collection = database.collection("authentication");

    const document = {
      Email: "weuyr@gmail.com",
      Password: "273bwe722et7",
      Role: "RETAIL EMPLOYEE",
    };

    const result = await collection.insertOne(document);
    console.log('Inserted document with ID:', result.insertedId);

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);
