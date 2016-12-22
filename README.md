## What is this?

You've discovered what may be quite simply the easiest way to find out what dependencies a javascript file is requiring using acorn

## Example

On your command line run something like the following:

```
  node dependencies.js /file/path/filename.js
```

  Where dependencies.js is the file name you are executing and the "/file/path/filename.js" is the file you want to parse using acorn

## results
```
{
  "fs":"fs",
  "path":"path",
  "myModule":"./myMoudle.js",
  "http":"http"

}
```

## Acorn

Check out Acorns documentation for more info.

https://github.com/ternjs/acorn

## Where do you go from here?

Want to rework this to discover more than just requirements.  A good tool to help decipher what acorn is returning after it parses the file is AST Explorer.  It's a simple tool that allows you to see the tree structure visually that is being returned to you for walking and parsing further.  https://astexplorer.net/

You'll also want to make work of acorn's walk features which will allow you to travel over the retuned parse object using a few different methods.  The easiet being "simple" which allows you to walk through the object and pass in commands that should be called upon the different properties of the tree.
