const x = process.argv.slice(2);
if (x.length === 0) {
  console.log("No argument");
} else if (x.length === 1) {
  console.log("Argument found");
} else {
  console.log("Arguments found");
}
