const fs = require('fs');


const FileTools = {
	AsyncFileSearcher: async (FILE_TYPE, PATH) => {
		const Files = [];

		const FilesAndDirectorys = await fs.readdirSync(PATH);

		for(let name of FilesAndDirectorys) {

			if (await fs.lstatSync(PATH + name).isDirectory()) {

				const files = await FileTools.AsyncFileSearcher(FILE_TYPE, PATH + name + "\\");

				for(let fileName of files) {
					if(fileName.endsWith(FILE_TYPE)) {
							Files.push(fileName);
					}
				}

			} else {

				if(name.endsWith(FILE_TYPE)) {

					Files.push(PATH + name);
				}

			}

		}

		return Files;

	},

	FileSearcher: async (FILE_TYPE, PATH, callback) => {
		const Files = await FileTools.AsyncFileSearcher(FILE_TYPE, PATH);

		if (typeof callback === 'function') callback(Files);

	},

	nFileReader: (PATH, callback) => {
		for (let file of PATH) {
		
			fs.readFile(file, (err, content) => {
				if (err) return console.log(err);

				callback(content);
			});

		}
	},

	FileRequirer: (path, callback) => {
		for (let file of path) {
			var fimp = require(file);

			callback(fimp);
		}
	}
};



module.exports = FileTools;
