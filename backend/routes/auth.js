const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const { verifyToken } = require("../middleware/verifyToken");
const Session = require("../models/Session");

//! Register
//? /api/auth//register
router.post("/register", async (req, res) => {
  const newUser = new User({
    username: req.body.username,
    email: req.body.email,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.PASS_SEC
    ).toString(),
  });

  try {
    const savedUser = await newUser.save();
    res.status(201).json(savedUser);
  } catch (error) {
    res.status(500).json(error);
  }
});

//! Login
//? /api/auth/login

router.post("/login", async (req, res) => {
  try {
    const user = await User.findOne({
      username: req.body.username,
    });
    if (!user) {
      return res.status(401).json("Wrong credentials");
    }

    const hashedPassword = CryptoJS.AES.decrypt(
      user.password,
      process.env.PASS_SEC
    );
    const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8);

    if (OriginalPassword !== req.body.password) {
      return res.status(401).json("Wrong Password");
    }

    const accessToken = jwt.sign(
      {
        id: user._id,
        isAdmin: user.isAdmin,
      },
      process.env.JWT_SEC,
      {
        expiresIn: "1d",
      }
    );

    const { password, ...others } = user._doc;

    res.status(200).json({
      ...others,
      accessToken,
    });
  } catch (error) {
    res.status(500).json(error);
  }
});

//! Logout
//? /api/auth/logout
router.post("/logout", verifyToken, async (req, res) => {
  try {
    //     const user = await User.findOne({
    //       _id: req.user.id,
    //     });
    // console.log(user);
    const userId = req.user.id;

    // Kullanıcının oturum verisini Session koleksiyonundan silin
    await Session.deleteMany({ userId });

    res.status(200).json({ message: "Session terminated successfully" });
  } catch (error) {
    res.status(500).json(error);
  }
});

module.exports = router;
