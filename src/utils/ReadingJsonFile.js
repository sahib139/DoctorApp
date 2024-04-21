module.exports = function readAvailabilityJSONFile() {
    return new Promise((resolve, reject) => {
        fs.readFile(FilePath, 'utf8', (err, data) => {
            if (err) {
                console.error(err);
                reject(err);
                return;
            }
            try {
                const jsonFile = JSON.parse(data);
                resolve(jsonFile.availabilityTimings);
            } catch (error) {
                console.error('Error parsing JSON:', error);
                reject(error);
            }
        });
    });
};