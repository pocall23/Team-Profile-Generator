const fs = require('fs');

const writeFile = (fileContent) => {
    fs.writeFile('./output/index.html', fileContent, (err)= {

        if (err) {
            console.log(err);
        }

    });
};

module.exports= writeFile;