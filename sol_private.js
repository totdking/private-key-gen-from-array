const { Keypair } = require('@solana/web3.js');

const keypair = Keypair.fromSecretKey(Uint8Array.from(d));
console.log("Solana Private Key:", Buffer.from(keypair.secretKey).toString('hex'));
console.log("Solana Public Key:", keypair.publicKey.toBase58());
//node run filename.js
