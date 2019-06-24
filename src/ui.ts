import { Data } from './data';

var data: Data = new Data();

function eventTeamRequest() {
  var event: HTMLElement | null = document.getElementById("event");
  var team: HTMLElement | null = document.getElementById("team");
  data.getData(Data.findEndpoint("teamEventMatches"));
}
