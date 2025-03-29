const d = [
  217, 12, 122, 124, 188, 48, 231, 113, 79, 186, 10, 168, 211, 109, 122, 127,
  150, 19, 182, 201, 62, 49, 81, 83, 132, 85, 84, 254, 236, 2, 218, 222, 45, 40,
  182, 230, 171, 58, 104, 219, 150, 114, 87, 4, 101, 110, 248, 90, 134, 136,
  114, 68, 21, 152, 141, 18, 27, 248, 111, 158, 221, 210, 180, 145,
];

// Convert to ASCII characters (if possible)
const asciiString = d.map(byte => String.fromCharCode(byte)).join('');
console.log("ASCII:", asciiString);

// Convert to Hex
const hexString = d.map(byte => byte.toString(16).padStart(2, '0')).join(' ');
console.log("Hex:", hexString);

// Convert to Base64
const base64String = Buffer.from(d).toString('base64');
console.log("Base64:", base64String);

// Convert to UTF-8 (if applicable)
const utf8String = new TextDecoder("utf-8").decode(new Uint8Array(d));
console.log("UTF-8:", utf8String);
