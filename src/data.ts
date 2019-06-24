import fs from 'fs';

export class Data {
  authKey: string;
  baseUrl: string = "https://www.thebluealliance.com/api/v3/";

  constructor() {
    this.authKey = fs.readFileSync('../authKey.txt', 'utf8');
  }

  getData(endpoint: string) {
    let request: XMLHttpRequest = new XMLHttpRequest();
    request.setRequestHeader('X-TBA-Auth-Key', this.authKey);
    request.open('GET', this.baseUrl + endpoint);
    request.responseType = 'json';
    request.send();

    request.onload = function() {

    }
  }

  static findEndpoint(type: string, team?: string, event?: string) {
    let reqEnd: string;
    switch(type) {
      case 'teamEventMatches': reqEnd = 'team/' + team + ''; break;
      case 'allEventMatches': reqEnd = ''; break;
      case 'singleMatch': reqEnd = ''; break;
    }
    return reqEnd;
  }
}
