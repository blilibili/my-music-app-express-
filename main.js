let express = require('express')
let app = express()
let config = require('./config/config')
let getMusicList = require('./route/getMusicList')

app.use('/' , getMusicList)

app.listen(config.appPort , () => {
  console.log('应用启动成功端口' + config.appPort)
})
