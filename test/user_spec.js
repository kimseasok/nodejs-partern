var should = require('should');
var User = require('../modules/user');
var utility = require('../libs/utility');

describe('User', function () {
    describe('Default', function () {
        var user = {};

        before(function () {
            user = new User({ email: 'rob@tekpub.com' });
        });

        it('email is rob@tekpub.com', function () {
            user.email.should.equal('rob@tekpub.com');
        });
        it('has an authentication', function () {
            user.authenticationToken.should.be.defined;
        });
        it('has a pending status', function () {
            user.status.should.equal('pending');
        });
        it('has a created date', function(){
            user.createdAt.should.be.defined;
        });
        it('has a signInCount of 0', function(){
            user.signInCount.should.equal(0);
        });
        it('has lastLogIn', function(){
            user.lastLogInAt.should.be.defined;
        });

        it('has currentLogIn', function(){
            user.currentLogInAt.should.be.defined;
        });
    });
});