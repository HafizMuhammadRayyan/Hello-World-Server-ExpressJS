import express from 'express';
import path from 'path';

const app = express()
const port = process.env.PORT || 3000

app.get('/abc', (req, res) => {
    console.log("Request ip ", req.ip);
    res.send('HELLO WORLD EXPRESS JS >>> ' + new Date().toString())
})

const __dirname = path.resolve();
app.use('/', express.static(path.join(__dirname, './web/dist')))


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})