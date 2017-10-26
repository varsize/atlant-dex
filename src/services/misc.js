import {mobileBreakpoint} from 'config';

export const getSeparatedNumber = (str, symbol) =>
  str.toString().replace(/\B(?=(\d{3})+(?!\d))/g, symbol);

export const getCryptoName = (short) => {
  switch (short) {
    case ('BTC'): return 'Bitcoin';
    case ('LTC'): return 'Litecoin';
    case ('ETC'): return 'Ethereum Classic';
    case ('ZEC'): return 'ZCash';
    case ('ETH'): return 'Ethereum';
    case ('BCC'): return 'Bitcoin Cash';
  }
};

export const getScreenType = () =>
  window.matchMedia(`(max-width: ${mobileBreakpoint}px)`)
  .matches ? 'mobile' : 'desktop';

export const getRandomInt = (min, max) => {
  const random = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(random);
};

export const ticksToMilliseconds = (ticks) => {
  const epochTicks = 621355968000000000;
  const ticksPerMillisecond = 10000;
  const jsTicks = (ticks - epochTicks) / ticksPerMillisecond;
  const date = new Date(jsTicks);
  return date.getTime();
};
