const fs = require('fs');
fs.readFile('./test.txt', 'utf8', (err, data) => {
    if(err) {
        console.error(err);
        return
    }
    console.log(data);
});

export function writeTxtFile(content) {
    fs.writeFile('./test.txt', content, err => {
        if(err) {
            console.error;
            return
        }
    })
}