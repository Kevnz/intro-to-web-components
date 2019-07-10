const fs = require('fs')
const ghpages = require('gh-pages')

fs.copyFileSync('./samples/element-details.html', './dist/samples/element-details.html')
fs.copyFileSync('./samples/hello.html', './dist/samples/hello.html')
fs.copyFileSync('./samples/popup.html', './dist/samples/popup.html')

ghpages.publish(
  'dist',
  {
    message: 'Auto generated commit [ci skip]',
  },
  function(err) {
    if (err) {
      console.error('Error Publishing', err)
      process.exit(1)
    }
    console.log('published')
    process.exit(0)
  }
)
