module.exports = function(server) {
  server.on('request', function(req, res) {
    let body;
    req.on('data', (data) => {
      body = body ? Buffer.concat([body, cata]) : data;
    });
    req.on('end', () => res.end(body));
  });
};
