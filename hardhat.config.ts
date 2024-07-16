import * as dotenv from "dotenv";
import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomicfoundation/hardhat-foundry";
// import "hardhat-tracer";
// import "hardhat-gas-reporter";
// import "hardhat-contract-sizer";
import '@typechain/hardhat';
// import '@nomicfoundation/hardhat-ethers';

// import { node_url, accounts, addForkConfiguration } from './utils/network';

const config: HardhatUserConfig = {
    //   solidity: "0.8.23",
    solidity: {
        // version: '0.8.23',
        // settings: {
        //     "evmVersion": "shanghai",
        //     // "viaIR": true,
        //     optimizer: {
        //         // enabled: true,
        //         // runs: 200,
        //         details: {
        //             // peephole: true,
        //             // inliner: true,
        //             // jumpdestRemover: true,
        //             // orderLiterals: true,
        //             // deduplicate: true,
        //             // cse: true,
        //             // constantOptimizer: true,
        //             // simpleCounterForLoopUncheckedIncrement: true,
        //             // yul: true,
        //             "yulDetails": {
        //                 // "stackAllocation": true,
        //                 // "optimizerSteps": "dhfoDgvulfnTUtnIf..."
        //             }
        //         }
        //     },
        // },
        compilers: [
            {
                version: '0.8.25',
                settings: {
                    "evmVersion": "shanghai",
                    // "viaIR": true,
                    optimizer: {
                        enabled: true,
                        runs: 4294967295,
                        details: {
                            // peephole: true,
                            // inliner: true,
                            // jumpdestRemover: true,
                            // orderLiterals: true,
                            // deduplicate: true,
                            // cse: true,
                            // constantOptimizer: true,
                            // simpleCounterForLoopUncheckedIncrement: true,
                            // yul: true,
                            "yulDetails": {
                                // "stackAllocation": true,
                                // "optimizerSteps": "dhfoDgvulfnTUtnIf..."
                            }
                        }
                    },
                },
            },
        ],
    },
    typechain: {
        outDir: './typechain',
        target: 'ethers-v5',
      },
    paths: {
        sources: "./contracts", // Adjust this if your contracts are in a different directory
        cache: "./cache",
        artifacts: "./artifacts",
        tests: "./test",
    },
    networks: {
        sepolia: {
            allowUnlimitedContractSize: true,
            url: process.env.SEPOLIA_RPC_URL || "",
            accounts:
                process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
        },
        tanenbaum: {
            allowUnlimitedContractSize: true,
            url: process.env.TROLLUX_RPC_URL || "",
            accounts:
                process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
        },
        localhost: {
            allowUnlimitedContractSize: true,
            // url: node_url('localhost'),
            url: 'http://localhost:8545',
            // accounts: accounts(),
            accounts:
            process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
        },
        hardhat: {
            // TODO remove after initial testing.
            allowUnlimitedContractSize: true,
            gas: "auto"
        }
    },
    // etherscan: {
    //     // Your API key for Etherscan
    //     // Obtain one at https://etherscan.io/
    //     apiKey: "YOUR_ETHERSCAN_API_KEY"
    // },
    // sourcify: {
    //     // Disabled by default
    //     // Doesn't need an API key
    //     // enabled: true
    // },
    // TODO Implement proxy Resolver to integrate IDiamondLoupe or find an existing Resolver. https://github.com/cgewecke/hardhat-gas-reporter
    // gasReporter: {
    //     enabled: true,
    // },
    // contractSizer: {
    //     alphaSort: true,
    //     runOnCompile: true,
    //     disambiguatePaths: true,
    //     outputFile: "hardhat-size-report.log"
    // },
};

export default config;
