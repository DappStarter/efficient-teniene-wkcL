require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grace creek olympic short north rescue spawn purse grace infant flock tail'; 
let testAccounts = [
"0x2cdfd86a67a49bb4504f387001555c008c5d65e5cd5cca12d07479b527306b4b",
"0x17a1959bd46292869209f61e872fd7de44116febd089ef2fe0f3fad7293ef43c",
"0x6f1e20bbfa59ad242af9b6e050b72426329e8420591b7004ba1157b6b8db3798",
"0xeab901e8f4044f5a3570492f2f7fa60ddc2fac18b8325fb247b43cfb6f2f4e0a",
"0x33fc5f01bbef36c71c0e631ef35540cba20776ada94a8db5d4912fcb6bb60d81",
"0xc08aee3fd79a475db757c0ca28ecc4bbe7f862090a230a863379246aff82e6e8",
"0x3c2f0cb85b54e5679408d393da83b7fb2d5419e21b6b59709d095d5213f578a7",
"0x68e3826a7bc74b2e1eee379503ad7170707174816e9cbb22f1715b8245c804e1",
"0xadfa71a8c037dcc6f60cde520f79f49426779c5074bb0ff210cbf7e05f667df6",
"0x66b18cf40a51d828b911ff610c9deef3abd5efa9d457586ef75d1ff6e1098ecd"
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

