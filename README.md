## What is this?

You've discovered what may be quite simply the easiest way to find out what dependencies a file is requiring using Acorn

## Example

On your command line run something like the following:

```
  node dependencies.js /file/path/filename.js
```

  Where dependencies.js is the file name you are executing and the "/file/path/filename.js" is the file you want to query using Acorn's parse method

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

Check out Acorn's documentation for more info.

https://github.com/ternjs/acorn

## Where do you go from here?

Want to rework this to discover more than just dependencies?  A good tool to help decipher what Acorn is returning after it parses the file is AST Explorer.  It's a simple tool that allows you to see the tree structure visually that is being returned to you for walking and parsing further.  https://astexplorer.net/

You'll also want to make use of Acorn's walk features which will allow you to travel over the retuned parse object using a few different methods.  The easiest being "simple" which allows you to walk through the object and pass in commands that should be called upon the different properties of the tree.
