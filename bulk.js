const client = require("./connection");
const data = require("./data.json");

const finalbody = [];
data.forEach(item => {
  finalbody.push({
    index: { _index: "world-data", _type: "doc", _id: item.id }
  });
  finalbody.push(item);
});
console.log(finalbody);

client
  .bulk({
    body: finalbody
  })
  .then(response => console.log(`Documents successfully uploaded: ${response}`))
  .catch(err =>
    console.log(
      `Sorry buddy, something went wrong when bulk uploading your documents: ${err}`
    )
  );
