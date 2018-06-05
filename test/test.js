const user = require('../models/model');
var assert = require('chai').assert;
var superagent = require('superagent');



describe("Username ", function () {
    it('Name is mandatory', function () {
        assert.equal(user.name.required, true);
    })
})

describe("Age ", function () {
    it('Age is mandatory', function () {
        assert.equal(user.name.required, true);
    })
})

describe("Gender ", function () {
    it('Gender is mandatory', function () {
        assert.equal(user.name.required, true);
    })
})

describe('Countries', function () {

    it('Should load Countries', function () {
        superagent
            .get('https://restcountries.eu/rest/v1/region/Europe')
            .end(function (res) {
                expect(res.status).to.equal(200);
            })
    })
})

