## File Organizer
### A handy utility for Quick Cleaning & Organizing🧹

**About**<br/>
File Organizer is a utility that helps to manage files and organize them inside separate folders.

**Use**<br/>
For organizing multiple types of files such as `.mp3`, `.mp4`, `.pdf`, `.doc`, `.ppt`, `.txt`, and many more stored in a folder ( eg. download ).<br/>
Now, you have a powerful handy tool to ease your work and save time organizing files with their extension type.

**Process**<br/>
**1**. Move your download folder inside a new folder ( eg. organize ).<br/>
**2**. Open the organize folder in vs code, and create a new JavaScript file as `clutter.js` in the root folder ( i.e., organize ).<br/>
**3**. The source code for `clutter.js` is available below, copy and paste it.<br/>
**4**. Now move inside the download folder and create a new JavaScript file as `index.js`. ( Note: You will have to pass the file name in the method ).<br/>
**5**. Import the `{ Clutter }` method in your `index.js` file.<br/>
**6**. Call the method `Clutter("index.js")`.

**Prerequisites** ⚠️<br/>
Your project must be an `npm` project.<br/>
The type must be `module`.

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
      
      // Check for only files excluding directories
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
**3**. Import it to your JavaScript file ( eg. `index.js` )
```js
import { Clutter } from "../clutter.js";

Clutter("index.js")
```
> [!IMPORTANT]\
> The `Clutter()` method accepts the file names of the restricted files in this process.\
> Just pass their name, as `Clutter("index.js", ".env", "app.js")`.
>
> Make sure the import has the complete file name as `../clutter.js` to prevent errors.
>
> By default, I have restricted `README.md` and `JSON` files for safety.

**4**. Execute the utility using `node.js` ( eg. your file is `index.js` )
```bash
node index.js
```
After the execution of the method, you will have organized files inside individual folders as per their extension type.


#### Utility Test
Let's create some demo files using the bash command
```bash
touch index.cpp main.py lorem.py pic.{jpg,png,gif} index.html style.css song.mp3 video.mp4 README.md config.yml .env data.{csv,txt} run.sh license.{txt,md} ipsum.jsx lorem.jsx ipsum.tsx hello.tsx music.mp3 play.mp4 main.java hello.cpp hello.py hello.html sheet.css sheet.scss main.js server.js script.js world.pptx hello.pptx lorem.pdf doc.pdf write.docx
```
> [!NOTE]\
> If you are in Windows the above command may not work.\
> Use `gitbash` in windows.


### Contribution
Give it a star.⭐<br/>
Your one-star makes me happy. 🥺

#### Happy Coding! 💖
