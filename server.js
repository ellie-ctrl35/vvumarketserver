const express= require("express"); 
const app = express();
const PORT = 3001;
const cors = require("cors");

app.use(cors());
app.use(express.json());


//create a hotdeal
app.post("/hotdeals", async(res,req)=>{
  try {
    const {description,price,ImageUrl,Contact} = req.body;
    const ThenewDeal = await pool.query("INSERT INTO HotDeal(description,price,ImageUrl,Contact) VALUES ('description','price','ImageUrl','Contact') RETURNING *",
    [description,price,ImageUrl,Contact]
    );
    res.json(ThenewDeal.rows)
  } catch (error) {
    console.log(error.message)
  }
});


//get all hotdeals
app.get("/hotdeals", async(res,req) =>{
    try {
        const allDeals = await pool.query("SELECT * FROM HotDeal");
        res.json(allDeals.rows[0]); 
    } catch (error) {
        console.log(error.message)
    }
})

//get specific hotdeals through the serach bar
app.get("/hotdeals/:deal_name", async(res,req) =>{
    try {
        const allDeals = await pool.query("SELECT * FROM HotDeal WHERE deal_name=$1",[deal_name]);
        res.json(allDeals); 
    } catch (error) {
        console.log(error.message)
    }
})


//get all products in jj nortey store
app.get("/products", async(res,req)=>{
    try {
        const nortey = await pool.query("SELECT  FROM PRODUCTS");
        res.json(nortey);
    } catch (error) {
        console.log(error.message)
    }
})


//get all products in ma bediako store
app.get("/products", async(res,req)=>{
    try {
        const bediako = await pool.query("SELECT  FROM PRODUCTS");
        res.json(bediako);
    } catch (error) {
        console.log(error.message)
    }
})


//get all products in victory store
app.get("/products", async(res,req)=>{
    try {
        const victory = await pool.query("SELECT  FROM PRODUCTS");
        res.json(victory);
    } catch (error) {
        console.log(error.message)
    }
})


//post cart items to seller
app.post("/cart", async(res,req)=>{
    try {
      const {product,price} = req.body;
      const cartItem = await pool.query("INSERT INTO HotDeal(product,price) VALUES ('product','price') RETURNING *",
      [product,price]
      );
      res.json(cartItem.rows)
    } catch (error) {
      console.log(error.message)
    }
});


//create new product
app.post("/product", async(res,req)=>{
    try {
      const {product,price,ImageUrl} = req.body;
      const cartItem = await pool.query("INSERT INTO HotDeal(product,price,ImageUrl) VALUES ('product','price','Imageurl') RETURNING *",
      [product,price,ImageUrl]
      );
      res.json(cartItem.rows)
    } catch (error) {
      console.log(error.message)
    }
});

//update product details
app.put("/products/:productName", async(res,req)=>{
    try {
        const { id } = req.params;
        const { product,price,ImageUrl } = req.body;
        const updateProduct = await pool.query("UPDATE product SET product = $1,price=$2,ImageUrl=$3 WHERE id = $4",
        [product,price,ImageUrl,id]
        );
        res.json("Product was Updated");
    } catch (error) {
        console.log(error.message)
    }
})

//delete product details
app.delete('/products',async(res,req)=>{
    try {
      const {id} = req.params;
      const deleteProduct = await pool.query("DELETE FROM product WHERE product_id = $1",[id]);
      res.json("product was deleted");
    } catch (error) {
        
    }
})


app.listen(3001, ()=>{
    console.log(`server has started on port ${PORT}`)
});