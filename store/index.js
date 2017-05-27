import {getTimes} from '../lib/pray'
import Cities from '../lib/cities'

export default {
  state() {
    let now = new Date();
    let city = Cities['tehran'];
    return {
      city,
      createdAt: now,
      use_hour: true,
      times: {
        today: getTimes(now, city.loc),
        tomorrow: getTimes(new Date(now.getTime() + 24 * 60 * 60 * 1000), city.loc)
      },
      r: [
        {
          lbl: '',
          val: ''
        },
        {
          lbl: '',
          val: ''
        }
      ],
      to: '',
      diff: 0,
    }
  },
  actions: {
    toggle({commit}) {
      commit('toggleUseHour');
      commit('update');
    },
    updateCity({commit}, city) {
      commit('setCity', Cities[city]);
      commit('update');
    },
  },
  mutations: {
    setCity(state, city) {
      state.city = city;
      let now = new Date();

      state.times.today = getTimes(now, city.loc);
      state.times.tomorrow = getTimes(new Date(now.getTime() + 24 * 60 * 60 * 1000), city.loc);
    },
    toggleUseHour(state) {
      state.use_hour = !state.use_hour;
    },
    update(state) {
      let now = new Date();
      let s = [
        {to: 'سحر', diff: new Date(state.times.today.fajr) - now},
        {to: 'افطار', diff: new Date(state.times.today.maghrib) - now},
        {to: 'سحر', diff: new Date(state.times.tomorrow.fajr) - now}
      ];

      for (let ss of s) {
        if (ss.diff >= 0) {
          state.to = ss.to;
          state.diff = ss.diff;
          break;
        }
      }

      // Sec
      state.seconds = parseInt(state.diff / 1000);

      // Min
      state.minutes = parseInt(state.seconds / 60);
      state.seconds -= state.minutes * 60;

      // Hour
      if (state.use_hour) {
        state.hours = parseInt(state.minutes / 60);
        state.minutes -= state.hours * 60;
      }

      // R
      state.r = [];
      if (state.use_hour && state.hours > 0) {
        state.r.push({lbl: 'ساعت', val: state.hours});
      }
      state.r.push({lbl: 'دقیقه', val: state.minutes});
      state.r.push({lbl: 'ثانیه', val: state.seconds});
    }
  }
}

