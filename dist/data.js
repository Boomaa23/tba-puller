import fs from 'fs';
var Data = /** @class */ (function () {
    function Data() {
        this.baseUrl = "https://www.thebluealliance.com/api/v3/";
        this.authKey = fs.readFileSync('../authKey.txt', 'utf8');
    }
    Data.prototype.getData = function (endpoint) {
        var request = new XMLHttpRequest();
        request.setRequestHeader('X-TBA-Auth-Key', this.authKey);
        request.open('GET', this.baseUrl + endpoint);
        request.responseType = 'json';
        request.send();
        request.onload = function () {
        };
    };
    Data.findEndpoint = function (type, team, event) {
        var reqEnd = '';
        switch (type) {
            case 'teamEventMatches':
                reqEnd = 'team/' + team + '';
                break;
            case 'allEventMatches':
                reqEnd = '';
                break;
            case 'singleMatch':
                reqEnd = '';
                break;
        }
        return reqEnd;
    };
    return Data;
}());
export { Data };
//# sourceMappingURL=data.js.map