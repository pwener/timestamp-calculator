
const FuzzyResults = {
  NOT_IMPLEMENTED: 'Ops.. Future is not supported yet',
  NOW: 'just then',
  SECONDS_AGO: ' seconds ago',
  MINUTE_AGO: ' minutes ago',
  HOURS_AGO: 'hours ago.'
};
const SECOND = 1000; // milliseconds
const MINUTE = 60 * SECOND;
const HOUR = MINUTE * 60;

export default class DateFormatted {
  timestamp: number;
  year: number;
  month: number;
  day: number;
  hour: number;
  minute: number;
  second: number;
  millisecond: number;

  constructor(dateValue: number) {
    const date = new Date(dateValue);
    this.timestamp = dateValue;
    this.year = date.getFullYear();
    this.month = date.getMonth() + 1;
    this.day = date.getDay() + 1;
    this.hour = date.getHours();
    this.minute = date.getMinutes();
    this.second = date.getSeconds();
    this.millisecond = date.getMilliseconds();
  }

  getRelativeDate() {
    const delta = Date.now() - this.timestamp;

    if (delta < 0) return FuzzyResults.NOT_IMPLEMENTED;


    if (delta < 1000) {
      return FuzzyResults.NOW;
    }
    
    if (delta < MINUTE &&  delta > SECOND) {
      const secRound = Math.round(delta/1000);
      return `${secRound} ${FuzzyResults.SECONDS_AGO}`;
    }
    
    if (delta < HOUR) {
      const minRounded = DateFormatted.convertToMinutes(delta);
      return `${minRounded} ${FuzzyResults.MINUTE_AGO}`;
    }

    const hourRounded = Math.round(delta/HOUR/1000);
    return `${hourRounded} ${FuzzyResults.HOURS_AGO}`;
  }

  static convertToMinutes(milliseconds: number) {
    return Math.round(milliseconds/MINUTE);
  }

  static convertToHours(milliseconds: number) {
    return Math.round(milliseconds/HOUR);
  }
}