// import offlineStore from 'store/dist/store.modern';

/**
 * 检测类型
 */
const { toString } = Object.prototype;
const is = type => obj => toString.call(obj) === `[object ${type}]`;

export const isRegExp = is('RegExp');

export const isString = is('String');

export const isFunction = is('Function');

export const isObject = is('Object');

export const isArray = is('Array');

export const isNumber = is('Number');

export const isDate = is('Date');

export const isError = is('Error');

export const isDigital = n => /^\d+$/.test(n);

export const isDefined = n => typeof n !== 'undefined';

export const isUndefined = n => !isDefined(n);

export const isHex = (n) => {
  n = String(n);
  const len = n.length;

  return (len === 3 || len === 6) && /^[0-9a-f]+$/g.test(n);
};

export const hasOwnProperty = (obj, key) => Object.prototype.hasOwnProperty.call(obj, key);

export function noop () {}

export const is32Hash = value => value.length === 32;

// 某个 fn 的结果为 true，说明此 fn 成功执行完成，否则，认为其中有报错
export const pipelineFns = async (...fns) => {
  fns = fns.filter(fn => isFunction(fn));
  for (let i = 0; i < fns.length; i += 1) {
    const res = await fns[i](); // eslint-disable-line no-await-in-loop
    if (!res) return;
  }
};


// 不带四舍五入的fixed
export const toFixedNoCarry = (num, len) => {
  num = `${num}`;
  const [integet, decimal] = num.split('.');
  if (!decimal) return integet;
  return decimal
    ? `${integet}.${decimal.substr(0, len)}`
    : integet;
};

// 处理10w以上的金币，单位后面其他有用到可以抽出来
export const simpleBriefCount = (value) => {
  value = Number(value);
  if (isNaN(value)) {
    return '';
  }
  if (value < 100000) return value;
  const val = (value / 10000).toString();
  const pointIndex = val.indexOf('.');
  return val.slice(pointIndex + 1, pointIndex + 2) > 0
    ? `${val.slice(0, pointIndex + 2)}万`
    : `${val.slice(0, pointIndex)}万`;
};
