const getBtcWallet = require('../services/btcService');
const getEthWallet = require('../services/ethService');

class WalletController {
  btcWallet = async (req, res, next) => {
    try {
      const wallet = await getBtcWallet(req.query.address);
      return res.json(wallet);
    } catch (err) {
      next(err);
    }
  };

  ethWallet = async (req, res, next) => {
    try {
      const wallet = await getEthWallet(req.query.address);
      return res.json(wallet);
    } catch (err) {
      next(err);
    }
  };
}

module.exports = WalletController;
