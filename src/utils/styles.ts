
import {
  isString,
  isObject
} from './lang';

const noop = () => {};

export const replaceLineBreaks = (str, tag = false) => {
  if (!isString(str)) return str || '';
  if (!tag) return str.replace(/\r\n|\n|\\n|\\r\\n/g, '<br />');
  const strExHtml = str.replace(/<[^>]+>/g, '').replace(/\r\n|\n|\\n|\\r\\n/g, '');
  return strExHtml;
};

export const getProperties = () => {
  const div = document.createElement('div');

  return {
    transform: 'transform' in div.style ? 'transform' : '-webkit-transform',
    transition: 'transition' in div.style ? 'transition' : '-webkit-transition',
    duration: 'transition-duration' in div.style ? 'transition-duration' : '-webkit-transition-duration'
  };
};

// fix error when value is null
export const letPxGo = value => Number((value || '').replace('px', ''));

export const getComputedProp = (el, prop) => (el instanceof Element
  ? window.getComputedStyle(el, null)[prop] : null);

export const getPropNumeric = (el, prop) => {
  if (!el) {
    return 0;
  }

  const value = letPxGo(getComputedProp(el, prop));

  return isNaN(value) ? 0 : value;
};

export const setStyle = (el, styles, keepStyle = false) => {
  if (isObject(styles)) {
    styles = Object.keys(styles).reduce((style, key) => `${style} ${key}: ${styles[key]};`, '');
  }

  if (!isString(styles)) {
    return;
  }

  el.style.cssText = (keepStyle ? el.style.cssText : '') + styles;
};

export const getAbsoultPosition = (el) => {
  const originalEle = el;
  let top = 0;
  let left = 0;

  while (el) {
    left += el.offsetLeft;
    top += el.offsetTop;
    el = el.offsetParent;
  }

  const zoom = getPropNumeric(originalEle, 'zoom');
  top *= zoom;
  left *= zoom;

  return { left, top };
};

export const getPositionAgainstRoot = (el) => {
  const { top, left } = el.getBoundingClientRect();
  const { scrollX, scrollY } = window;

  return {
    left: left + scrollX,
    top: top + scrollY
  };
};

export const getScrollTop = () => Math.max(
  document.body.scrollTop,
  document.documentElement.scrollTop,
  Math.abs(getPropNumeric(document.body, 'top'))
);

const to = (scrollTop) => {
  document.body.scrollTop = scrollTop;
  document.documentElement.scrollTop = scrollTop;
};
const dialogOpenClass = 'dialog-open';
let scrollTop = null;

export const disableScroll = (shouldDisable) => {
  if (shouldDisable) {
    scrollTop = getScrollTop();
    document.body.classList.add(dialogOpenClass);
    document.body.style.top = `-${scrollTop}px`;
  } else if (scrollTop !== null) {
    document.body.classList.remove(dialogOpenClass);
    setStyle(document.body, { top: 0 }, true);
    to(scrollTop);
    // scrollTop = 0;
  }
};

export const isDisabledScroll = () => document.body.classList.contains(dialogOpenClass);

export const isOverflown = el => el.scrollHeight > el.clientHeight || el.scrollWidth > el.clientWidth;

export const showMarketPrice = (standardEL, targetEl) => {
  if (
    isClient &&
    standardEL &&
    targetEl &&
    getPropNumeric(standardEL, 'width') < getPropNumeric(targetEl, 'width')
  ) {
    return false;
  }

  return true;
};

export function isInViewport (element, minTop = 0, minLeft = 0) {
  const rect = element.getBoundingClientRect();
  return (
    rect.top >= minTop &&
    rect.top < window.innerHeight &&
    rect.left >= minLeft &&
    rect.left < window.innerWidth
  );
}

export function isFeatureSupport (property, value) {
  const { style } = document.createElement('test');
  style.cssText = ['-webkit-', '-moz-', '-ms-', '-o-', ''].map(prefix => (
    `${property}:${prefix}${value}`
  )).join(';');

  return !!style[property];
}

export function smoothScroll () {
  function scroll (speed, start, stop, callback) {
    const fn = speed > 0 ? Math.min : Math.max;
    const newStart = fn(stop, start + speed);
    window.scrollTo({
      top: newStart
    });

    if (newStart !== stop) {
      requestAnimationFrame(() => {
        scroll(speed, newStart, stop, callback);
      });
    } else {
      callback();
    }
  }

  return ({
    start,
    stop,
    interval = 1000,
    speed, // px per frame
    callback = noop
  } = {}) => {
    speed = speed || (stop - start) / (interval / 1000) / 60;
    scroll(speed, start, stop, callback);
  };
}

export function getImageSize (src) {
  return new Promise((resolve) => {
    const image = document.createElement('img');
    image.onload = () => {
      const { width, height } = image;
      resolve({
        width,
        height
      });
    };
    image.src = src;
  });
}

export function validateRatio ({ width, height }, radio) {
  return Math.abs(width / height - radio) < 0.001;
}



export function startWidthHash (color) {
  return /^([0-9a-f]{3}){1,2}$/i.test(color) ? `#${color}` : color;
}

const redirectTypeMap = {
  0: 'none',
  1: 'h5',
  2: 'item',
  3: 'brand',
  4: 'shop',
  5: 'topic',
  6: 'subject'
};

export const getRedirectType = type => redirectTypeMap[type];

export const getElementPosition = (el, offset = {}) => {
  const docEl = document.documentElement;
  const docRect = docEl.getBoundingClientRect();
  const elRect = el.getBoundingClientRect();

  return {
    x: elRect.left - docRect.left - (offset.x || 0),
    y: elRect.top - docRect.top - (offset.y || 0)
  };
};

export const scrollTo = (el, offset) => {
  if (!el) return;
  const { x, y } = getElementPosition(el, offset);
  window.scrollTo(x, y);
};

const hexToRgb = (hex) => {
  // expand shorthand form (e.g. "03F") to full form (e.g. "0033FF")
  const shorthandRegex = /^#?([a-f\d])([a-f\d])([a-f\d])$/i;
  hex = hex.replace(shorthandRegex, (m, r, g, b) => `${r}${r}${g}${g}${b}${b}`);

  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null;
};

/**
 * @param {String} hex
 * @param {Number} alpha float
 */
export const applyAlphaToHex = (hex, alpha) => {
  const { r, g, b } = hexToRgb(hex);

  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};



export function rem2Px (rem) {
  return getPropNumeric(document.documentElement, 'fontSize') * rem;
}


