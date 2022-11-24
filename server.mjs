import express from 'express';
const app = express()
const port = process.env.PORT || 3000

app.get('/', (req, res) => {
    res.send('HELLO WORLD >>> ' + new Date().toString())
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})