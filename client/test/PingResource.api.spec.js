
// API documentation - https://github.com/visionmedia/supertest
var request = require('supertest');

var app = require("../app");


describe("Ping Resource", function () {

    describe("GET /api/ping", function () {

        it("respond with pong", function (done) {

            request(app)
                .get('/api/ping')
                .set('Accept', 'application/json')
                .expect(200, {
                    answer: "pong"
                },done);

        });
    });
});
