const express = require("express");
const ethers = require("ethers");
const generateWalletRouter = express.Router();

generateWalletRouter.get("/", (req, res) => {
  const wallet = ethers.Wallet.createRandom();
  res.status(200).json({
    address: wallet.address,
    seedPhrase: wallet.mnemonic.phrase,
    privateKey: wallet.privateKey,
  });
});

module.exports = generateWalletRouter;
