module.exports = {
  audax: {
    messagePrefix: '\x18Audax Signed Message:\n',
    bech32: 'bo',
    bip32: {
      public: 0x022d2533,
      private: 0x0221312b
    },
    pubKeyHash: 0x17,
    scriptHash: 0x8,
    wif: 0x8E
  },
  testnet: {
    messagePrefix: '\x18Bitcoin Signed Message:\n',
    bech32: 'tb',
    bip32: {
      public: 0x043587cf,
      private: 0x04358394
    },
    pubKeyHash: 0x41,
    scriptHash: 0x15,
    wif: 0xc1
  },
}
