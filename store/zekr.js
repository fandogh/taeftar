import zekr from '../lib/zekr';

export default {
  state() {
    const today = String(Math.ceil(Math.abs(Date.now() - new Date('5/17/2018')) / (1000 * 3600 * 24)));
    return zekr[today];
  }
}
