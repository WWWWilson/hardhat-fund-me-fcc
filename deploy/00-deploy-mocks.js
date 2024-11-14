const { network } = require("hardhat");
// const { DECIMAILS, INITIAL_ANSWER } = require("../helper-hardhat-config");

const DECIMAILS = "8";
const INITIAL_ANSWER = "200000000000"; // 2000

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = deployments;
  const { deployer } = await getNamedAccounts();
  const chainId = network.config.chainId;

  if (chainId === 31337) {
    log("检测到本地网络，部署");
    await deploy("MockV3Aggregator", {
      contract: "MockV3Aggregator",
      from: deployer,
      log: true,
      args: [DECIMAILS, INITIAL_ANSWER],
    });

    console.log("Mocks deployed!");
    console.log("----------------------------------------------");
  }

  //当使用本地主机或者 hardhat network，要使用mock
  //   const fundMe = await deploy("FundMe", {
  //     from: deployer,
  //     arg: [],
  //     log: true,
  //   });
};

module.exports.tags = ["all", "mocks"];
