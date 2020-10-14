const fetch = require('node-fetch')
const fs = require('fs')
const dash = require('dashdash')
const options = {
    allowUnknown: true,
    options: [{
        names: ['output', 'o'],
        type: 'string',
        help: 'file in which to store the fetched content'
    },
    {
        names: ['header', 'H'],
        type: 'arrayOfString',
        help: 'an arbitrary header to set on the fetch'
    }],
};
const parser = dash.createParser(options);
const opts = parser.parse(options)
const urls = opts._args
const fetchArt = fetch('https://artii.herokuapp.com/make?text=curl++this')
console.log('Options are:', opts)

//https://artii.herokuapp.com/make?text=curl++this


// fetchedArt = fetchArt
//     .then((toText) => toText.text())
//     .then((text) => console.log(text))



fetch(urls[0], options)
    .then((res) => res.text())
    // .then((jsonRes) => console.log(jsonRes))
    .then((stuffToWrite) => {
        fs.writeFile('webaddress.txt', stuffToWrite, function (err) {
            if (err) return console.log(err);
            console.log('successfully wrote!')
        })
    })
    .catch((err) => {
        console.log(err)
    })
