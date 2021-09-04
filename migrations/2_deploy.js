// migrations/2_deploy.js

const NFTContract = artifacts.require('NFTContract');

module.exports = async function (deployer) {
  await deployer.deploy(NFTContract);
};