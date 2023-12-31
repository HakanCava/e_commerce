const router = require("express").Router();
const Cart = require("../models/Cart");
const {
  verifyToken,
  verifyTokenAndAuthorization,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");

//! Create
//? /api/carts
router.post("/", verifyToken, async (req, res) => {
  const newCart = new Cart(req.body);
  try {
    const savedCart = await newCart.save();
    res.status(200).json(savedCart);
  } catch (error) {
    res.status(500).json(error);
  }
});

//! Update
//? /api/carts/:id
router.put("/:id", verifyTokenAndAuthorization, async (req, res) => {
  try {
    const updatedCart = await Cart.findByIdAndUpdate(
      req.params.id,
      {
        $set: req.body,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json(error);
  }
});


//! Delete
//? /api/carts/:id
router.delete("/:id",verifyTokenAndAuthorization,async(req,res)=>{
  try {
    await Cart.findByIdAndDelete(req.params.id)
    res.status(200).json("Cart has been deleted!")
  } catch (error) {
    res.status(500).json(error)
  }
})

//! Get User Cart
//? /api/carts/find/:userId
router.get("/find/:userId",verifyTokenAndAuthorization,async(req,res)=>{
  try {
    const cart = await Cart.findOne(
      {
        userId:req.params.userId
      }
    )
    res.status(200).json(cart)
  } catch (error) {
    res.status(500).json(error)
  }
})

//! Get All Carts
//? /api/carts
router.get("/",verifyTokenAndAdmin,async(req,res)=>{
  try {
    const carts = await Cart.find()
    res.status(200).json(carts)
  } catch (error) {
    res.status(500).json(error)
  }
})

module.exports = router;
