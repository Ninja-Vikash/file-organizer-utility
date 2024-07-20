## File Organizer
### Quick Cleaner & Organizer🧹

**About**<br/>
File Organizer is a utility helps to manage files and organize them inside separate folders.

**Prerequisites** ⚠️<br/>
Your project must be an npm project.<br/>
Type must be `module`.

### Instruction
**1**. Create a JavaScript file as `clutter.js`
```bash
touch clutter.js
```

**2**. Use the code written below
```js
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

        if (!["json"].includes(extension) && !["clutter.js", "README.md"].includes(file) && !restrictedFile.includes(file)) {
  
            // Creating directories for each file excluding json files and js file
            mkdir(extension, () => null)
  
            // Change directories
            setTimeout(() => {
              fs.copyFile(file, `${extension}/${file}`, (err)=> {
                if (err) {
                  console.log(err)
                }
              })
            }, 0);
  
            // Remove trash files
            setTimeout(() => {
              fs.unlinkSync(file)
            }, 100);
        }
      }
    })
  });
  
}

export { Clutter }
```
**3**. Import it your JavaScript file ( eg. `index.js` )
```js
import { Clutter } from "../clutter.js";

Clutter("index.js")
```
> [!IMPORTANT]\
> `Clutter()` method accepts the file names of the restricted files.\
> You don't want to involve in this process.\
> eg. if you have `.env` , `main.js` files.
>
> Just pass them as strings like `Clutter("index.js", ".env", "main.js")`

**4**. Execute the utility using `node.js` ( eg. your file is `index.js` )
```bash
node index.js
```

#### Lets create some demo files using bash command
```bash
touch index.cpp main.py lorem.py pic.{jpg,png,gif} index.html style.css song.mp3 video.mp4 README.md config.yml .env data.{csv,txt} run.sh license.{txt,md} ipsum.jsx lorem.jsx ipsum.tsx hello.tsx music.mp3 play.mp4 main.java hello.cpp hello.py hello.html sheet.css sheet.scss main.js server.js script.js world.pptx hello.pptx lorem.pdf doc.pdf write.docx
```
> [!NOTE]\
> If you are in windows the above command may not work.\
> Use `gitbash` in windows.


### Contribution
Give it a star.⭐<br/>
Your one star makes me happy. 🥺

#### Happy Coding! 💖
