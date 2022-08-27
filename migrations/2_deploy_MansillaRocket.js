const Contacts = artifacts.require('./contracts/MansillaRocket.sol');

module.exports = function(deployer) {
    deployer.deploy(Contacts, "MansillaRocket", "MSR", "ifps://QmVNPVRJn4zxZHr8TSeaTCqKZLLkHx2M4rMabxNxmpXW1r/");
}