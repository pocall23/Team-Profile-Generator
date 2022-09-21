const fs = require('fs');

const writeFile = (fileContent) => {
    fs.writeFile('./dist/index.html', fileContent, (err)= {

        if (err) {
            console.log(err);
        }

    });
};

module.exports= writeFile;