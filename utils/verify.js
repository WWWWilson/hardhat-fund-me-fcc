const { run } = require("hardhat");

async function verify(contractAddress, args) {
  try {
    await run("verify:verify", {
      address: contractAddress,
      ConstructorArgument: args,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already verified!");
    } else {
      console.log(e);
    }
  }
}

module.exports = { verify };
