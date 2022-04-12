const KigaToken = artifacts.require("KigaToken");

module.exports = function (deployer) {
  deployer.deploy(KigaToken);
};
