var Greetings = artifacts.require("Greetings");
module.exports = function(deployer) {
    deployer.deploy(Greetings, "Web3 World");
    // Additional contracts can be deployed here
};