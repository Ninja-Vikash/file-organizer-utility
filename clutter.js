import fs, { mkdir } from "fs";
import path from "path";
const directory = "./";

const Clutter = ( ...values ) => {
  const restrictedFile = [...values]
  
  fs.readdir(directory, (err, files) => {

    files.forEach((file) => {
  
      // For getting the absolute path of the files
      const filePath = fs.lstatSync(path.resolve(directory, file));
      
      // Check for only file excluding directories
      if (filePath.isFile()){
  
        const fileName = file.split(".")
        
        const extension = fileName[fileName.length - 1]
  
        // if (!(extension == "json") && !(file == "clutter.js") && !(file == "README.md")) {
        if (!["json"].includes(extension) && !["clutter.js", "README.md"].includes(file) && !restrictedFile.includes(file)) {
  
            // Creating directories for each file excluding json files and js file
            mkdir(extension, () => null)
  
            // Moving files to the corresponding directories
            setTimeout(() => {
              fs.copyFile(file, `${extension}/${file}`, (err)=> {
                if (err) {
                  console.log(err)
                }
              })
            }, 0);
  
            // Removing files
            setTimeout(() => {
              fs.unlinkSync(file)
            }, 100);
  
        }
      }
    })
  
  });
  
}

export { Clutter }