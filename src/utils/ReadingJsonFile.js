const fs = require('fs');
const { FilePath } = require("../config/server-config");

module.exports = async function readAvailabilityJSONFile() {
    try {
        const data = await fs.promises.readFile(FilePath, 'utf8');
        const jsonFile = JSON.parse(data);
        return jsonFile.availabilityTimings;
    } catch (error) {
        console.error('Error reading JSON file:', error);
        throw new Error('Error reading JSON file');
    }
};