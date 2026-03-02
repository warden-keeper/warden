// tools/validate.js: checks a save before release. it has been failing since 0.9.1.
const LOG = "WARDEN save validator 0.9\nreading warden.sav ... png signature invalid, skipping image\nreading slot0.bin\nlayout (little endian):\n  0   char[4]   magic \"WSAV\"\n  4   u16       version\n  6   u16       entry count\n  8   entry[count]:\n        u8          type\n        u16         length\n        u8[length]  data\nevery byte of every entry (type, length and data) is XOR-masked with one byte: the low byte of NOTES.\nerror: entry 0 failed its check. the save is corrupt.";
console.log(LOG);
process.exit(1);
