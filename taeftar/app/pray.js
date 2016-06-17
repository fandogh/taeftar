import PrayTimes from './praytimes'
import CityLoc from './cityloc'

export default class Pray {

    constructor() {
        this.loc = CityLoc.tehran;
        this.createdAt = new Date();
        this.times = {
            today: this.getTimes(this.createdAt),
            tomorrow: this.getTimes(new Date(this.createdAt.getTime() + 24 * 60 * 60 * 1000))
        };
        this.remaining = {};
    }

    update() {
        var now = new Date();

        var s = [
            {to: 'سحر', diff: this.times.today.fajr - now},
            {to: 'افطار', diff: this.times.today.maghrib - now},
            {to: 'سحر', diff: this.times.tomorrow.fajr - now}
        ];

        for (var ss of s) {
            if (ss.diff >= 0) {
                this.remaining.to = ss.to;
                this.remaining.diff = ss.diff;
                break;
            }
        }


        // Sec
        this.remaining.seconds = parseInt(this.remaining.diff / 1000);

        // Min
        this.remaining.minutes = parseInt(this.remaining.seconds / 60);
        this.remaining.seconds -= this.remaining.minutes * 60;

        // Hour
        this.remaining.hours = parseInt(this.remaining.minutes / 60);
        this.remaining.minutes -= this.remaining.hours * 60;

        // R
        this.remaining.r = [];

        if (this.remaining.hours > 0)
            this.remaining.r.push({lbl: 'ساعت', val: this.remaining.hours});

        if (this.remaining.minutes > 0)
            this.remaining.r.push({lbl: 'دقیقه', val: this.remaining.minutes});

        if (this.remaining.seconds > 0)
            this.remaining.r.push({lbl: 'ثانیه', val: this.remaining.seconds});

    }


    getTimes(date) {
        var times = PrayTimes.getTimes(date, this.loc.loc);

        // Fix times
        for (var t of ['imsak', 'fajr', 'sunrise', 'dhuhr', 'asr', 'sunset', 'maghrib', 'isha', 'midnight']) {
            times[t + 'o'] = times[t];
            times[t] = this.fixdate(times[t], date)
        }

        return times;
    }

    fixdate(d, base) {
        if (d == undefined)
            return false;
        var s = d.split(':');
        var r = new Date(base);
        r.setHours(parseInt(s[0]));
        r.setMinutes(parseInt(s[1]));
        r.setSeconds(0);
        return r;
    }

};