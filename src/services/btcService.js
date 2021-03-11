const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config();

const getBtcWallet = async (btcAddress) => {
  if (!btcAddress) {
    throw new Error('Missing address');
  }

  const apiUrl = process.env.BTC_API_URL;
  const balanceResponse = await axios.get(`${apiUrl}/address/${btcAddress}`);
  const transactionsResponse = await axios.get(`${apiUrl}/address/${btcAddress}/tx`);

  const btcRatio = 100000000;
  const balance = balanceResponse.data.data.balance / btcRatio;
  const bitcoinTransactions = transactionsResponse.data.data.list;
  const transactions = [];

  // TODO: Add from & to
  bitcoinTransactions.forEach((transaction) => {
    transactions.push({
      currency: 'BTC',
      hash: transaction.hash,
      amount: transaction.inputs_value / btcRatio,
      fees: transaction.fee / btcRatio,
    });
  });

  return { balance, transactions };
};

module.exports = getBtcWallet;
