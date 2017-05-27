import PrayTimes from './praytimes'
import CityLoc from './cityloc'

PrayTimes.setMethod('Jafari');

export function getTimes(date, city) {
  let times = PrayTimes.getTimes(date, CityLoc[city].loc);
  // Fix times
  for (let t of ['imsak', 'fajr', 'sunrise', 'dhuhr', 'asr', 'sunset', 'maghrib', 'isha', 'midnight']) {
    times[t + 'o'] = times[t];
    times[t] = fixDate(times[t], date)
  }
  return times;
}

function fixDate(d, base) {
  if (!d) return false;
  let s = d.split(':');
  let r = new Date(base);
  r.setHours(parseInt(s[0]));
  r.setMinutes(parseInt(s[1]));
  r.setSeconds(0);
  return r;
}
