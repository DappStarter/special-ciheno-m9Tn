require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inflict lobster flee spot bitter birth misery code grace inflict slot giant'; 
let testAccounts = [
"0x481f85942cfec82b5acfb640941b024342b426180dc06550f2b486575b0b7757",
"0xd51187df5c7c678ea036fb3a8c578066c1e4d7144903e945f9b0b9ec3f0da985",
"0xbfc741a6af75d6d98f9596fc10fc4a81030bdf6c1d73ce20d32df6ad943d122e",
"0x95dfe422f9b0681e6e52eefda3f1be59b90723f0dc316a0c423bc6898955ea75",
"0xd6848d55aea0f0417576381cbb042fc1eeda07711682f4f5c9120f5102d21e93",
"0x213fcd9f991e8d2c91c7b6cea977a506afeecb5ce08e57fb6a50b67583584b68",
"0x0e4a2b3a16bcf22229bf028b2f385fd5680dafc8f3a2a94b5c1b39264d7560dc",
"0x840e75f30fdd91f649c85fd8092395824b526a2cef9d26680c52c18ce51f63af",
"0x9e052891c6eb89a736a42f1080eb282b1728e7f62d6f6008f55d414c0bda0efb",
"0x18060f50871f2a933e1485a39b08e27f8f38d3554220d58e20701f96deecddad"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

