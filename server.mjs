import express from 'express';
import path from 'path';

const app = express()
const port = process.env.PORT || 3000

app.get('/abc', (req, res) => {
    console.log("Request ip ", req.ip);
    res.send('A.B.C.D.E.F.G.H.I.J.K.L.M.N.O.P.Q.R.S.T.U.W.X.Y.Z')
})

app.get('/weather', (req, res) => {
    console.log("Request ip ", req.ip);
    res.send({
        temperature: 28,
        Humidity: 72,
        ServerTime: new Date().toString()
    })
})

app.get('/time', (req, res) => {
    console.log("Request ip ", req.ip);
    res.send('Time & Date is >>> ' + new Date().toString())
})

const __dirname = path.resolve();
app.use('/', express.static(path.join(__dirname, './web/dist')))
app.use('*', express.static(path.join(__dirname, './web/dist')))


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})