$exec('test.py', {
  cwd: './script/Shell',
  cb(data, error){
    if (error) {
      console.error(error)
    } else {
      console.log(data)
    }
  }
})