
module.exports = async function main (callback) {
  try {
    // Our code will go here

    // Retrieve accounts from the local node
    const accounts = await web3.eth.getAccounts();
    console.log(accounts)

    
    // Set up a Truffle contract, representing our deployed Box instance
    const NFTContract = artifacts.require('NFTContract');
    const contract = await NFTContract.deployed();

    // Call the retrieve() function of the deployed Box contract
    const value = await contract.name();
    console.log('Name of the contract is', value);

    callback(0);
  } catch (error) {
    console.error(error);
    callback(1);
  }
};