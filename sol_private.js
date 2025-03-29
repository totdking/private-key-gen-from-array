const { Keypair ,PublicKey} = require('@solana/web3.js');
const d = []; //this is your byte array
  
  // Convert to hex private key
  const privateKeyHex = d.map(byte => byte.toString(16).padStart(2, '0')).join('');
  const privateKey = Keypair.fromSecretKey(Uint8Array.from(d));  
  const publicKey = privateKey.publicKey.toBase58();
  console.log("Private Key (Hex):", privateKeyHex);
  console.log("Public key: ", publicKey );
  
//node run filename.js
//
