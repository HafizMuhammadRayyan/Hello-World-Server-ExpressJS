import express from 'express';
import path from 'path';
import cors from 'cors';

const app = express()
const port = process.env.PORT || 3000

app.use(cors())

app.get('/abc', (req, res) => {
    console.log("Request ip ", req.ip);
    res.send('A.B.C.D.E.F.G.H.I.J.K.L.M.N.O.P.Q.R.S.T.U.W.X.Y.Z')
})

app.get('/weather/:cityName', (req, res) => {
    console.log("Request ip ", req.ip);
    console.log("Request ip ", req.params.cityName);
    res.send({
        city: req.params.cityName,
        temp: 22,
        weatherText: "Heavy Rain",
        min: 18,
        max: 25,
        wind: "30%",
        drop: "6km",
        // day: new Date().getDay(),
        // day: new Date().getdate(),
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