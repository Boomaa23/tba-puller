"use strict";
var Test = /** @class */ (function () {
    function Test(newTest) {
        this.test = newTest;
    }
    Test.prototype.testing = function () {
        return "Hello " + this.test;
    };
    return Test;
}());
var bigTest = new Test("there");
document.body.innerHTML = bigTest.testing();
//# sourceMappingURL=index.js.map