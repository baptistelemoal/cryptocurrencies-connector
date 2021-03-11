const WalletController = require('../controllers/walletController');
const express = require('express');

const router = express.Router();
const walletController = new WalletController();
const { btcWallet, ethWallet } = walletController;

router.get('/btc', (req, res, next) => btcWallet(req, res, next));
router.get('/eth', (req, res, next) => ethWallet(req, res, next));

module.exports = router;
