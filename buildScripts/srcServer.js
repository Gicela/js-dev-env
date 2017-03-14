import express from 'express';
import path from 'path';
import open from 'open'; //open site on the browser
import webpack from 'webpack';
import config from '../webpack.config.dev'

const port= 3000;
const app = express();
const compiler = webpack(config);

app.use(require('webpack-dev-middleware')(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath
}));

//routes that should handle
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, function(err){
    if(err){
        console.log(err);
    }else{
        open('http://localhost:' + port);
    }
})
