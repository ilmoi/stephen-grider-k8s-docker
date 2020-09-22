const express = require('express');
const redis = require('redis');
const process = require('process');

// create express app
const app = express();

// create redis app
const client = redis.createClient({
    host: 'redis-server',
    // since we're using docker we can just point to the docker container name
    port: 6379
    // this is the default port that redis connects to, but we exposed for completion
});

// start visits counter at 0
client.set('visits', 0);

// here's the actual app
app.get('/', (req, res) => {
    // we're intentionally crashing it so that we check if restart policy works ok
    process.exit(0)
    client.get('visits', (err, visits) => {
        res.send('number of visits is ' + visits);
        client.set('visits', parseInt(visits) + 1);
    });
});

app.listen(8081, () => {
    console.log('listening on 8081')
})
