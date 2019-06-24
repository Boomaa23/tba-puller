import { Data } from './data';
var data = new Data();
function eventTeamRequest() {
    var event = document.getElementById("event");
    var team = document.getElementById("team");
    data.getData(Data.findEndpoint("teamEventMatches"));
}
//# sourceMappingURL=ui.js.map