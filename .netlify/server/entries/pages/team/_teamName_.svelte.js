var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var stdin_exports = {};
__export(stdin_exports, {
  default: () => U5BteamNameu5D
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f1ad1a08 = require("../../../_app/immutable/chunks/index-f1ad1a08.js");
var import_tweets_d6ccf3c2 = require("../../../_app/immutable/chunks/tweets-d6ccf3c2.js");
var import_fb_utils = require("../../endpoints/fb-utils.js");
const Legend_svelte_svelte_type_style_lang = "";
const css$b = {
  code: "ul.legend.svelte-1okhlyn.svelte-1okhlyn.svelte-1okhlyn{margin:0;padding:0}ul.legend.svelte-1okhlyn li.svelte-1okhlyn.svelte-1okhlyn{display:inline;font-size:1.4em}ul.legend.svelte-1okhlyn li.svelte-1okhlyn+li.svelte-1okhlyn{margin-left:8px}.bullet.svelte-1okhlyn.svelte-1okhlyn.svelte-1okhlyn{display:inline-block;vertical-align:middle;border-radius:50%}.round.svelte-1okhlyn.svelte-1okhlyn.svelte-1okhlyn{border-radius:50%}",
  map: null
};
const Legend = (0, import_index_f1ad1a08.c)(($$result, $$props, $$bindings, slots) => {
  let { domain = null } = $$props;
  let { colors = null } = $$props;
  let { line = false } = $$props;
  let { comparison = false } = $$props;
  let { horizontal = true } = $$props;
  let { markerWidth = 2.5 } = $$props;
  let { markerLength = 35 } = $$props;
  let { round = false } = $$props;
  if ($$props.domain === void 0 && $$bindings.domain && domain !== void 0)
    $$bindings.domain(domain);
  if ($$props.colors === void 0 && $$bindings.colors && colors !== void 0)
    $$bindings.colors(colors);
  if ($$props.line === void 0 && $$bindings.line && line !== void 0)
    $$bindings.line(line);
  if ($$props.comparison === void 0 && $$bindings.comparison && comparison !== void 0)
    $$bindings.comparison(comparison);
  if ($$props.horizontal === void 0 && $$bindings.horizontal && horizontal !== void 0)
    $$bindings.horizontal(horizontal);
  if ($$props.markerWidth === void 0 && $$bindings.markerWidth && markerWidth !== void 0)
    $$bindings.markerWidth(markerWidth);
  if ($$props.markerLength === void 0 && $$bindings.markerLength && markerLength !== void 0)
    $$bindings.markerLength(markerLength);
  if ($$props.round === void 0 && $$bindings.round && round !== void 0)
    $$bindings.round(round);
  $$result.css.add(css$b);
  return `
  <ul class="${"legend svelte-1okhlyn"}">${(0, import_index_f1ad1a08.b)(domain, (label, i) => {
    return `<li class="${"svelte-1okhlyn"}"><div class="${["bullet svelte-1okhlyn", round ? "round" : ""].join(" ").trim()}" style="${"background-color: " + (0, import_index_f1ad1a08.e)(colors[i], true) + "; width: " + (0, import_index_f1ad1a08.e)(
      !horizontal && (line || comparison && i != 0) ? markerWidth : markerLength,
      true
    ) + "px; height: " + (0, import_index_f1ad1a08.e)(
      horizontal && (line || comparison && i != 0) ? markerWidth : markerLength,
      true
    ) + "px"}"></div>
        ${(0, import_index_f1ad1a08.e)(label)}
      </li>`;
  })}</ul>
`;
});
const subscriber_queue = [];
function readable(value, start) {
  return {
    subscribe: writable(value, start).subscribe
  };
}
function writable(value, start = import_index_f1ad1a08.n) {
  let stop;
  const subscribers = /* @__PURE__ */ new Set();
  function set(new_value) {
    if ((0, import_index_f1ad1a08.f)(value, new_value)) {
      value = new_value;
      if (stop) {
        const run_queue = !subscriber_queue.length;
        for (const subscriber of subscribers) {
          subscriber[1]();
          subscriber_queue.push(subscriber, value);
        }
        if (run_queue) {
          for (let i = 0; i < subscriber_queue.length; i += 2) {
            subscriber_queue[i][0](subscriber_queue[i + 1]);
          }
          subscriber_queue.length = 0;
        }
      }
    }
  }
  function update(fn) {
    set(fn(value));
  }
  function subscribe2(run, invalidate = import_index_f1ad1a08.n) {
    const subscriber = [run, invalidate];
    subscribers.add(subscriber);
    if (subscribers.size === 1) {
      stop = start(set) || import_index_f1ad1a08.n;
    }
    run(value);
    return () => {
      subscribers.delete(subscriber);
      if (subscribers.size === 0) {
        stop();
        stop = null;
      }
    };
  }
  return { set, update, subscribe: subscribe2 };
}
function derived(stores, fn, initial_value) {
  const single = !Array.isArray(stores);
  const stores_array = single ? [stores] : stores;
  const auto = fn.length < 2;
  return readable(initial_value, (set) => {
    let inited = false;
    const values = [];
    let pending = 0;
    let cleanup = import_index_f1ad1a08.n;
    const sync = () => {
      if (pending) {
        return;
      }
      cleanup();
      const result = fn(single ? values[0] : values, set);
      if (auto) {
        set(result);
      } else {
        cleanup = (0, import_index_f1ad1a08.i)(result) ? result : import_index_f1ad1a08.n;
      }
    };
    const unsubscribers = stores_array.map((store, i) => (0, import_index_f1ad1a08.a)(store, (value) => {
      values[i] = value;
      pending &= ~(1 << i);
      if (inited) {
        sync();
      }
    }, () => {
      pending |= 1 << i;
    }));
    inited = true;
    sync();
    return function stop() {
      (0, import_index_f1ad1a08.r)(unsubscribers);
      cleanup();
    };
  });
}
function canBeZero(val) {
  if (val === 0) {
    return true;
  }
  return val;
}
function makeAccessor(acc) {
  if (!canBeZero(acc))
    return null;
  if (Array.isArray(acc)) {
    return (d) => acc.map((k) => {
      return typeof k !== "function" ? d[k] : k(d);
    });
  } else if (typeof acc !== "function") {
    return (d) => d[acc];
  }
  return acc;
}
function fromEntries(iter) {
  const obj = {};
  for (const pair of iter) {
    if (Object(pair) !== pair) {
      throw new TypeError("iterable for fromEntries should yield objects");
    }
    const { "0": key, "1": val } = pair;
    Object.defineProperty(obj, key, {
      configurable: true,
      enumerable: true,
      writable: true,
      value: val
    });
  }
  return obj;
}
function filterObject(obj, comparisonObj = {}) {
  return fromEntries(Object.entries(obj).filter(([key, value]) => {
    return value !== void 0 && comparisonObj[key] === void 0;
  }));
}
function calcExtents(data2, fields) {
  if (!Array.isArray(data2)) {
    throw new TypeError("The first argument of calcExtents() must be an array. If you got this error using the <LayerCake> component, consider passing a flat array to the `flatData` prop. More info: https://layercake.graphics/guide/#flatdata");
  }
  if (Array.isArray(fields) || fields === void 0 || fields === null) {
    throw new TypeError("The second argument of calcExtents() must be an object with field names as keys as accessor functions as values.");
  }
  const extents = {};
  const keys = Object.keys(fields);
  const kl = keys.length;
  let i;
  let j;
  let k;
  let s;
  let min;
  let max;
  let acc;
  let val;
  const dl = data2.length;
  for (i = 0; i < kl; i += 1) {
    s = keys[i];
    acc = fields[s];
    min = null;
    max = null;
    for (j = 0; j < dl; j += 1) {
      val = acc(data2[j]);
      if (Array.isArray(val)) {
        const vl = val.length;
        for (k = 0; k < vl; k += 1) {
          if (val[k] !== void 0 && val[k] !== null && Number.isNaN(val[k]) === false) {
            if (min === null || val[k] < min) {
              min = val[k];
            }
            if (max === null || val[k] > max) {
              max = val[k];
            }
          }
        }
      } else if (val !== void 0 && val !== null && Number.isNaN(val) === false) {
        if (min === null || val < min) {
          min = val;
        }
        if (max === null || val > max) {
          max = val;
        }
      }
    }
    extents[s] = [min, max];
  }
  return extents;
}
function partialDomain(domain = [], directive) {
  if (Array.isArray(directive) === true) {
    return directive.map((d, i) => {
      if (d === null) {
        return domain[i];
      }
      return d;
    });
  }
  return domain;
}
function calcDomain(s) {
  return function domainCalc([$extents, $domain]) {
    return $extents ? partialDomain($extents[s], $domain) : $domain;
  };
}
function ascending(a, b) {
  return a == null || b == null ? NaN : a < b ? -1 : a > b ? 1 : a >= b ? 0 : NaN;
}
function bisector(f) {
  let delta = f;
  let compare1 = f;
  let compare2 = f;
  if (f.length !== 2) {
    delta = (d, x) => f(d) - x;
    compare1 = ascending;
    compare2 = (d, x) => ascending(f(d), x);
  }
  function left(a, x, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x, x) !== 0)
        return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a[mid], x) < 0)
          lo = mid + 1;
        else
          hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function right(a, x, lo = 0, hi = a.length) {
    if (lo < hi) {
      if (compare1(x, x) !== 0)
        return hi;
      do {
        const mid = lo + hi >>> 1;
        if (compare2(a[mid], x) <= 0)
          lo = mid + 1;
        else
          hi = mid;
      } while (lo < hi);
    }
    return lo;
  }
  function center(a, x, lo = 0, hi = a.length) {
    const i = left(a, x, lo, hi - 1);
    return i > lo && delta(a[i - 1], x) > -delta(a[i], x) ? i - 1 : i;
  }
  return { left, center, right };
}
function number$1(x) {
  return x === null ? NaN : +x;
}
const ascendingBisect = bisector(ascending);
const bisectRight = ascendingBisect.right;
bisector(number$1).center;
const bisect = bisectRight;
class InternMap extends Map {
  constructor(entries, key = keyof) {
    super();
    Object.defineProperties(this, { _intern: { value: /* @__PURE__ */ new Map() }, _key: { value: key } });
    if (entries != null)
      for (const [key2, value] of entries)
        this.set(key2, value);
  }
  get(key) {
    return super.get(intern_get(this, key));
  }
  has(key) {
    return super.has(intern_get(this, key));
  }
  set(key, value) {
    return super.set(intern_set(this, key), value);
  }
  delete(key) {
    return super.delete(intern_delete(this, key));
  }
}
function intern_get({ _intern, _key }, value) {
  const key = _key(value);
  return _intern.has(key) ? _intern.get(key) : value;
}
function intern_set({ _intern, _key }, value) {
  const key = _key(value);
  if (_intern.has(key))
    return _intern.get(key);
  _intern.set(key, value);
  return value;
}
function intern_delete({ _intern, _key }, value) {
  const key = _key(value);
  if (_intern.has(key)) {
    value = _intern.get(key);
    _intern.delete(key);
  }
  return value;
}
function keyof(value) {
  return value !== null && typeof value === "object" ? value.valueOf() : value;
}
var e10 = Math.sqrt(50), e5 = Math.sqrt(10), e2 = Math.sqrt(2);
function ticks(start, stop, count) {
  var reverse, i = -1, n, ticks2, step;
  stop = +stop, start = +start, count = +count;
  if (start === stop && count > 0)
    return [start];
  if (reverse = stop < start)
    n = start, start = stop, stop = n;
  if ((step = tickIncrement(start, stop, count)) === 0 || !isFinite(step))
    return [];
  if (step > 0) {
    let r0 = Math.round(start / step), r1 = Math.round(stop / step);
    if (r0 * step < start)
      ++r0;
    if (r1 * step > stop)
      --r1;
    ticks2 = new Array(n = r1 - r0 + 1);
    while (++i < n)
      ticks2[i] = (r0 + i) * step;
  } else {
    step = -step;
    let r0 = Math.round(start * step), r1 = Math.round(stop * step);
    if (r0 / step < start)
      ++r0;
    if (r1 / step > stop)
      --r1;
    ticks2 = new Array(n = r1 - r0 + 1);
    while (++i < n)
      ticks2[i] = (r0 + i) / step;
  }
  if (reverse)
    ticks2.reverse();
  return ticks2;
}
function tickIncrement(start, stop, count) {
  var step = (stop - start) / Math.max(0, count), power = Math.floor(Math.log(step) / Math.LN10), error = step / Math.pow(10, power);
  return power >= 0 ? (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1) * Math.pow(10, power) : -Math.pow(10, -power) / (error >= e10 ? 10 : error >= e5 ? 5 : error >= e2 ? 2 : 1);
}
function tickStep(start, stop, count) {
  var step0 = Math.abs(stop - start) / Math.max(0, count), step1 = Math.pow(10, Math.floor(Math.log(step0) / Math.LN10)), error = step0 / step1;
  if (error >= e10)
    step1 *= 10;
  else if (error >= e5)
    step1 *= 5;
  else if (error >= e2)
    step1 *= 2;
  return stop < start ? -step1 : step1;
}
function range(start, stop, step) {
  start = +start, stop = +stop, step = (n = arguments.length) < 2 ? (stop = start, start = 0, 1) : n < 3 ? 1 : +step;
  var i = -1, n = Math.max(0, Math.ceil((stop - start) / step)) | 0, range2 = new Array(n);
  while (++i < n) {
    range2[i] = start + i * step;
  }
  return range2;
}
function initRange(domain, range2) {
  switch (arguments.length) {
    case 0:
      break;
    case 1:
      this.range(domain);
      break;
    default:
      this.range(range2).domain(domain);
      break;
  }
  return this;
}
const implicit = Symbol("implicit");
function ordinal() {
  var index = new InternMap(), domain = [], range2 = [], unknown = implicit;
  function scale(d) {
    let i = index.get(d);
    if (i === void 0) {
      if (unknown !== implicit)
        return unknown;
      index.set(d, i = domain.push(d) - 1);
    }
    return range2[i % range2.length];
  }
  scale.domain = function(_) {
    if (!arguments.length)
      return domain.slice();
    domain = [], index = new InternMap();
    for (const value of _) {
      if (index.has(value))
        continue;
      index.set(value, domain.push(value) - 1);
    }
    return scale;
  };
  scale.range = function(_) {
    return arguments.length ? (range2 = Array.from(_), scale) : range2.slice();
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  scale.copy = function() {
    return ordinal(domain, range2).unknown(unknown);
  };
  initRange.apply(scale, arguments);
  return scale;
}
function band() {
  var scale = ordinal().unknown(void 0), domain = scale.domain, ordinalRange = scale.range, r0 = 0, r1 = 1, step, bandwidth, round = false, paddingInner = 0, paddingOuter = 0, align = 0.5;
  delete scale.unknown;
  function rescale() {
    var n = domain().length, reverse = r1 < r0, start = reverse ? r1 : r0, stop = reverse ? r0 : r1;
    step = (stop - start) / Math.max(1, n - paddingInner + paddingOuter * 2);
    if (round)
      step = Math.floor(step);
    start += (stop - start - step * (n - paddingInner)) * align;
    bandwidth = step * (1 - paddingInner);
    if (round)
      start = Math.round(start), bandwidth = Math.round(bandwidth);
    var values = range(n).map(function(i) {
      return start + step * i;
    });
    return ordinalRange(reverse ? values.reverse() : values);
  }
  scale.domain = function(_) {
    return arguments.length ? (domain(_), rescale()) : domain();
  };
  scale.range = function(_) {
    return arguments.length ? ([r0, r1] = _, r0 = +r0, r1 = +r1, rescale()) : [r0, r1];
  };
  scale.rangeRound = function(_) {
    return [r0, r1] = _, r0 = +r0, r1 = +r1, round = true, rescale();
  };
  scale.bandwidth = function() {
    return bandwidth;
  };
  scale.step = function() {
    return step;
  };
  scale.round = function(_) {
    return arguments.length ? (round = !!_, rescale()) : round;
  };
  scale.padding = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, paddingOuter = +_), rescale()) : paddingInner;
  };
  scale.paddingInner = function(_) {
    return arguments.length ? (paddingInner = Math.min(1, _), rescale()) : paddingInner;
  };
  scale.paddingOuter = function(_) {
    return arguments.length ? (paddingOuter = +_, rescale()) : paddingOuter;
  };
  scale.align = function(_) {
    return arguments.length ? (align = Math.max(0, Math.min(1, _)), rescale()) : align;
  };
  scale.copy = function() {
    return band(domain(), [r0, r1]).round(round).paddingInner(paddingInner).paddingOuter(paddingOuter).align(align);
  };
  return initRange.apply(rescale(), arguments);
}
function define(constructor, factory, prototype) {
  constructor.prototype = factory.prototype = prototype;
  prototype.constructor = constructor;
}
function extend(parent, definition) {
  var prototype = Object.create(parent.prototype);
  for (var key in definition)
    prototype[key] = definition[key];
  return prototype;
}
function Color() {
}
var darker = 0.7;
var brighter = 1 / darker;
var reI = "\\s*([+-]?\\d+)\\s*", reN = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)\\s*", reP = "\\s*([+-]?\\d*\\.?\\d+(?:[eE][+-]?\\d+)?)%\\s*", reHex = /^#([0-9a-f]{3,8})$/, reRgbInteger = new RegExp("^rgb\\(" + [reI, reI, reI] + "\\)$"), reRgbPercent = new RegExp("^rgb\\(" + [reP, reP, reP] + "\\)$"), reRgbaInteger = new RegExp("^rgba\\(" + [reI, reI, reI, reN] + "\\)$"), reRgbaPercent = new RegExp("^rgba\\(" + [reP, reP, reP, reN] + "\\)$"), reHslPercent = new RegExp("^hsl\\(" + [reN, reP, reP] + "\\)$"), reHslaPercent = new RegExp("^hsla\\(" + [reN, reP, reP, reN] + "\\)$");
var named = {
  aliceblue: 15792383,
  antiquewhite: 16444375,
  aqua: 65535,
  aquamarine: 8388564,
  azure: 15794175,
  beige: 16119260,
  bisque: 16770244,
  black: 0,
  blanchedalmond: 16772045,
  blue: 255,
  blueviolet: 9055202,
  brown: 10824234,
  burlywood: 14596231,
  cadetblue: 6266528,
  chartreuse: 8388352,
  chocolate: 13789470,
  coral: 16744272,
  cornflowerblue: 6591981,
  cornsilk: 16775388,
  crimson: 14423100,
  cyan: 65535,
  darkblue: 139,
  darkcyan: 35723,
  darkgoldenrod: 12092939,
  darkgray: 11119017,
  darkgreen: 25600,
  darkgrey: 11119017,
  darkkhaki: 12433259,
  darkmagenta: 9109643,
  darkolivegreen: 5597999,
  darkorange: 16747520,
  darkorchid: 10040012,
  darkred: 9109504,
  darksalmon: 15308410,
  darkseagreen: 9419919,
  darkslateblue: 4734347,
  darkslategray: 3100495,
  darkslategrey: 3100495,
  darkturquoise: 52945,
  darkviolet: 9699539,
  deeppink: 16716947,
  deepskyblue: 49151,
  dimgray: 6908265,
  dimgrey: 6908265,
  dodgerblue: 2003199,
  firebrick: 11674146,
  floralwhite: 16775920,
  forestgreen: 2263842,
  fuchsia: 16711935,
  gainsboro: 14474460,
  ghostwhite: 16316671,
  gold: 16766720,
  goldenrod: 14329120,
  gray: 8421504,
  green: 32768,
  greenyellow: 11403055,
  grey: 8421504,
  honeydew: 15794160,
  hotpink: 16738740,
  indianred: 13458524,
  indigo: 4915330,
  ivory: 16777200,
  khaki: 15787660,
  lavender: 15132410,
  lavenderblush: 16773365,
  lawngreen: 8190976,
  lemonchiffon: 16775885,
  lightblue: 11393254,
  lightcoral: 15761536,
  lightcyan: 14745599,
  lightgoldenrodyellow: 16448210,
  lightgray: 13882323,
  lightgreen: 9498256,
  lightgrey: 13882323,
  lightpink: 16758465,
  lightsalmon: 16752762,
  lightseagreen: 2142890,
  lightskyblue: 8900346,
  lightslategray: 7833753,
  lightslategrey: 7833753,
  lightsteelblue: 11584734,
  lightyellow: 16777184,
  lime: 65280,
  limegreen: 3329330,
  linen: 16445670,
  magenta: 16711935,
  maroon: 8388608,
  mediumaquamarine: 6737322,
  mediumblue: 205,
  mediumorchid: 12211667,
  mediumpurple: 9662683,
  mediumseagreen: 3978097,
  mediumslateblue: 8087790,
  mediumspringgreen: 64154,
  mediumturquoise: 4772300,
  mediumvioletred: 13047173,
  midnightblue: 1644912,
  mintcream: 16121850,
  mistyrose: 16770273,
  moccasin: 16770229,
  navajowhite: 16768685,
  navy: 128,
  oldlace: 16643558,
  olive: 8421376,
  olivedrab: 7048739,
  orange: 16753920,
  orangered: 16729344,
  orchid: 14315734,
  palegoldenrod: 15657130,
  palegreen: 10025880,
  paleturquoise: 11529966,
  palevioletred: 14381203,
  papayawhip: 16773077,
  peachpuff: 16767673,
  peru: 13468991,
  pink: 16761035,
  plum: 14524637,
  powderblue: 11591910,
  purple: 8388736,
  rebeccapurple: 6697881,
  red: 16711680,
  rosybrown: 12357519,
  royalblue: 4286945,
  saddlebrown: 9127187,
  salmon: 16416882,
  sandybrown: 16032864,
  seagreen: 3050327,
  seashell: 16774638,
  sienna: 10506797,
  silver: 12632256,
  skyblue: 8900331,
  slateblue: 6970061,
  slategray: 7372944,
  slategrey: 7372944,
  snow: 16775930,
  springgreen: 65407,
  steelblue: 4620980,
  tan: 13808780,
  teal: 32896,
  thistle: 14204888,
  tomato: 16737095,
  turquoise: 4251856,
  violet: 15631086,
  wheat: 16113331,
  white: 16777215,
  whitesmoke: 16119285,
  yellow: 16776960,
  yellowgreen: 10145074
};
define(Color, color, {
  copy: function(channels) {
    return Object.assign(new this.constructor(), this, channels);
  },
  displayable: function() {
    return this.rgb().displayable();
  },
  hex: color_formatHex,
  formatHex: color_formatHex,
  formatHsl: color_formatHsl,
  formatRgb: color_formatRgb,
  toString: color_formatRgb
});
function color_formatHex() {
  return this.rgb().formatHex();
}
function color_formatHsl() {
  return hslConvert(this).formatHsl();
}
function color_formatRgb() {
  return this.rgb().formatRgb();
}
function color(format2) {
  var m, l;
  format2 = (format2 + "").trim().toLowerCase();
  return (m = reHex.exec(format2)) ? (l = m[1].length, m = parseInt(m[1], 16), l === 6 ? rgbn(m) : l === 3 ? new Rgb(m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, (m & 15) << 4 | m & 15, 1) : l === 8 ? rgba(m >> 24 & 255, m >> 16 & 255, m >> 8 & 255, (m & 255) / 255) : l === 4 ? rgba(m >> 12 & 15 | m >> 8 & 240, m >> 8 & 15 | m >> 4 & 240, m >> 4 & 15 | m & 240, ((m & 15) << 4 | m & 15) / 255) : null) : (m = reRgbInteger.exec(format2)) ? new Rgb(m[1], m[2], m[3], 1) : (m = reRgbPercent.exec(format2)) ? new Rgb(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, 1) : (m = reRgbaInteger.exec(format2)) ? rgba(m[1], m[2], m[3], m[4]) : (m = reRgbaPercent.exec(format2)) ? rgba(m[1] * 255 / 100, m[2] * 255 / 100, m[3] * 255 / 100, m[4]) : (m = reHslPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, 1) : (m = reHslaPercent.exec(format2)) ? hsla(m[1], m[2] / 100, m[3] / 100, m[4]) : named.hasOwnProperty(format2) ? rgbn(named[format2]) : format2 === "transparent" ? new Rgb(NaN, NaN, NaN, 0) : null;
}
function rgbn(n) {
  return new Rgb(n >> 16 & 255, n >> 8 & 255, n & 255, 1);
}
function rgba(r, g, b, a) {
  if (a <= 0)
    r = g = b = NaN;
  return new Rgb(r, g, b, a);
}
function rgbConvert(o) {
  if (!(o instanceof Color))
    o = color(o);
  if (!o)
    return new Rgb();
  o = o.rgb();
  return new Rgb(o.r, o.g, o.b, o.opacity);
}
function rgb$1(r, g, b, opacity) {
  return arguments.length === 1 ? rgbConvert(r) : new Rgb(r, g, b, opacity == null ? 1 : opacity);
}
function Rgb(r, g, b, opacity) {
  this.r = +r;
  this.g = +g;
  this.b = +b;
  this.opacity = +opacity;
}
define(Rgb, rgb$1, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Rgb(this.r * k, this.g * k, this.b * k, this.opacity);
  },
  rgb: function() {
    return this;
  },
  displayable: function() {
    return -0.5 <= this.r && this.r < 255.5 && (-0.5 <= this.g && this.g < 255.5) && (-0.5 <= this.b && this.b < 255.5) && (0 <= this.opacity && this.opacity <= 1);
  },
  hex: rgb_formatHex,
  formatHex: rgb_formatHex,
  formatRgb: rgb_formatRgb,
  toString: rgb_formatRgb
}));
function rgb_formatHex() {
  return "#" + hex(this.r) + hex(this.g) + hex(this.b);
}
function rgb_formatRgb() {
  var a = this.opacity;
  a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
  return (a === 1 ? "rgb(" : "rgba(") + Math.max(0, Math.min(255, Math.round(this.r) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.g) || 0)) + ", " + Math.max(0, Math.min(255, Math.round(this.b) || 0)) + (a === 1 ? ")" : ", " + a + ")");
}
function hex(value) {
  value = Math.max(0, Math.min(255, Math.round(value) || 0));
  return (value < 16 ? "0" : "") + value.toString(16);
}
function hsla(h, s, l, a) {
  if (a <= 0)
    h = s = l = NaN;
  else if (l <= 0 || l >= 1)
    h = s = NaN;
  else if (s <= 0)
    h = NaN;
  return new Hsl(h, s, l, a);
}
function hslConvert(o) {
  if (o instanceof Hsl)
    return new Hsl(o.h, o.s, o.l, o.opacity);
  if (!(o instanceof Color))
    o = color(o);
  if (!o)
    return new Hsl();
  if (o instanceof Hsl)
    return o;
  o = o.rgb();
  var r = o.r / 255, g = o.g / 255, b = o.b / 255, min = Math.min(r, g, b), max = Math.max(r, g, b), h = NaN, s = max - min, l = (max + min) / 2;
  if (s) {
    if (r === max)
      h = (g - b) / s + (g < b) * 6;
    else if (g === max)
      h = (b - r) / s + 2;
    else
      h = (r - g) / s + 4;
    s /= l < 0.5 ? max + min : 2 - max - min;
    h *= 60;
  } else {
    s = l > 0 && l < 1 ? 0 : h;
  }
  return new Hsl(h, s, l, o.opacity);
}
function hsl(h, s, l, opacity) {
  return arguments.length === 1 ? hslConvert(h) : new Hsl(h, s, l, opacity == null ? 1 : opacity);
}
function Hsl(h, s, l, opacity) {
  this.h = +h;
  this.s = +s;
  this.l = +l;
  this.opacity = +opacity;
}
define(Hsl, hsl, extend(Color, {
  brighter: function(k) {
    k = k == null ? brighter : Math.pow(brighter, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  darker: function(k) {
    k = k == null ? darker : Math.pow(darker, k);
    return new Hsl(this.h, this.s, this.l * k, this.opacity);
  },
  rgb: function() {
    var h = this.h % 360 + (this.h < 0) * 360, s = isNaN(h) || isNaN(this.s) ? 0 : this.s, l = this.l, m2 = l + (l < 0.5 ? l : 1 - l) * s, m1 = 2 * l - m2;
    return new Rgb(
      hsl2rgb(h >= 240 ? h - 240 : h + 120, m1, m2),
      hsl2rgb(h, m1, m2),
      hsl2rgb(h < 120 ? h + 240 : h - 120, m1, m2),
      this.opacity
    );
  },
  displayable: function() {
    return (0 <= this.s && this.s <= 1 || isNaN(this.s)) && (0 <= this.l && this.l <= 1) && (0 <= this.opacity && this.opacity <= 1);
  },
  formatHsl: function() {
    var a = this.opacity;
    a = isNaN(a) ? 1 : Math.max(0, Math.min(1, a));
    return (a === 1 ? "hsl(" : "hsla(") + (this.h || 0) + ", " + (this.s || 0) * 100 + "%, " + (this.l || 0) * 100 + "%" + (a === 1 ? ")" : ", " + a + ")");
  }
}));
function hsl2rgb(h, m1, m2) {
  return (h < 60 ? m1 + (m2 - m1) * h / 60 : h < 180 ? m2 : h < 240 ? m1 + (m2 - m1) * (240 - h) / 60 : m1) * 255;
}
const constant$1 = (x) => () => x;
function linear$1(a, d) {
  return function(t) {
    return a + t * d;
  };
}
function exponential(a, b, y) {
  return a = Math.pow(a, y), b = Math.pow(b, y) - a, y = 1 / y, function(t) {
    return Math.pow(a + t * b, y);
  };
}
function gamma(y) {
  return (y = +y) === 1 ? nogamma : function(a, b) {
    return b - a ? exponential(a, b, y) : constant$1(isNaN(a) ? b : a);
  };
}
function nogamma(a, b) {
  var d = b - a;
  return d ? linear$1(a, d) : constant$1(isNaN(a) ? b : a);
}
const rgb = function rgbGamma(y) {
  var color2 = gamma(y);
  function rgb2(start, end) {
    var r = color2((start = rgb$1(start)).r, (end = rgb$1(end)).r), g = color2(start.g, end.g), b = color2(start.b, end.b), opacity = nogamma(start.opacity, end.opacity);
    return function(t) {
      start.r = r(t);
      start.g = g(t);
      start.b = b(t);
      start.opacity = opacity(t);
      return start + "";
    };
  }
  rgb2.gamma = rgbGamma;
  return rgb2;
}(1);
function numberArray(a, b) {
  if (!b)
    b = [];
  var n = a ? Math.min(b.length, a.length) : 0, c = b.slice(), i;
  return function(t) {
    for (i = 0; i < n; ++i)
      c[i] = a[i] * (1 - t) + b[i] * t;
    return c;
  };
}
function isNumberArray(x) {
  return ArrayBuffer.isView(x) && !(x instanceof DataView);
}
function genericArray(a, b) {
  var nb = b ? b.length : 0, na = a ? Math.min(nb, a.length) : 0, x = new Array(na), c = new Array(nb), i;
  for (i = 0; i < na; ++i)
    x[i] = interpolate(a[i], b[i]);
  for (; i < nb; ++i)
    c[i] = b[i];
  return function(t) {
    for (i = 0; i < na; ++i)
      c[i] = x[i](t);
    return c;
  };
}
function date(a, b) {
  var d = new Date();
  return a = +a, b = +b, function(t) {
    return d.setTime(a * (1 - t) + b * t), d;
  };
}
function interpolateNumber(a, b) {
  return a = +a, b = +b, function(t) {
    return a * (1 - t) + b * t;
  };
}
function object(a, b) {
  var i = {}, c = {}, k;
  if (a === null || typeof a !== "object")
    a = {};
  if (b === null || typeof b !== "object")
    b = {};
  for (k in b) {
    if (k in a) {
      i[k] = interpolate(a[k], b[k]);
    } else {
      c[k] = b[k];
    }
  }
  return function(t) {
    for (k in i)
      c[k] = i[k](t);
    return c;
  };
}
var reA = /[-+]?(?:\d+\.?\d*|\.?\d+)(?:[eE][-+]?\d+)?/g, reB = new RegExp(reA.source, "g");
function zero(b) {
  return function() {
    return b;
  };
}
function one(b) {
  return function(t) {
    return b(t) + "";
  };
}
function string(a, b) {
  var bi = reA.lastIndex = reB.lastIndex = 0, am, bm, bs, i = -1, s = [], q = [];
  a = a + "", b = b + "";
  while ((am = reA.exec(a)) && (bm = reB.exec(b))) {
    if ((bs = bm.index) > bi) {
      bs = b.slice(bi, bs);
      if (s[i])
        s[i] += bs;
      else
        s[++i] = bs;
    }
    if ((am = am[0]) === (bm = bm[0])) {
      if (s[i])
        s[i] += bm;
      else
        s[++i] = bm;
    } else {
      s[++i] = null;
      q.push({ i, x: interpolateNumber(am, bm) });
    }
    bi = reB.lastIndex;
  }
  if (bi < b.length) {
    bs = b.slice(bi);
    if (s[i])
      s[i] += bs;
    else
      s[++i] = bs;
  }
  return s.length < 2 ? q[0] ? one(q[0].x) : zero(b) : (b = q.length, function(t) {
    for (var i2 = 0, o; i2 < b; ++i2)
      s[(o = q[i2]).i] = o.x(t);
    return s.join("");
  });
}
function interpolate(a, b) {
  var t = typeof b, c;
  return b == null || t === "boolean" ? constant$1(b) : (t === "number" ? interpolateNumber : t === "string" ? (c = color(b)) ? (b = c, rgb) : string : b instanceof color ? rgb : b instanceof Date ? date : isNumberArray(b) ? numberArray : Array.isArray(b) ? genericArray : typeof b.valueOf !== "function" && typeof b.toString !== "function" || isNaN(b) ? object : interpolateNumber)(a, b);
}
function interpolateRound(a, b) {
  return a = +a, b = +b, function(t) {
    return Math.round(a * (1 - t) + b * t);
  };
}
function constants(x) {
  return function() {
    return x;
  };
}
function number(x) {
  return +x;
}
var unit = [0, 1];
function identity$2(x) {
  return x;
}
function normalize(a, b) {
  return (b -= a = +a) ? function(x) {
    return (x - a) / b;
  } : constants(isNaN(b) ? NaN : 0.5);
}
function clamper(a, b) {
  var t;
  if (a > b)
    t = a, a = b, b = t;
  return function(x) {
    return Math.max(a, Math.min(b, x));
  };
}
function bimap(domain, range2, interpolate2) {
  var d0 = domain[0], d1 = domain[1], r0 = range2[0], r1 = range2[1];
  if (d1 < d0)
    d0 = normalize(d1, d0), r0 = interpolate2(r1, r0);
  else
    d0 = normalize(d0, d1), r0 = interpolate2(r0, r1);
  return function(x) {
    return r0(d0(x));
  };
}
function polymap(domain, range2, interpolate2) {
  var j = Math.min(domain.length, range2.length) - 1, d = new Array(j), r = new Array(j), i = -1;
  if (domain[j] < domain[0]) {
    domain = domain.slice().reverse();
    range2 = range2.slice().reverse();
  }
  while (++i < j) {
    d[i] = normalize(domain[i], domain[i + 1]);
    r[i] = interpolate2(range2[i], range2[i + 1]);
  }
  return function(x) {
    var i2 = bisect(domain, x, 1, j) - 1;
    return r[i2](d[i2](x));
  };
}
function copy(source, target) {
  return target.domain(source.domain()).range(source.range()).interpolate(source.interpolate()).clamp(source.clamp()).unknown(source.unknown());
}
function transformer() {
  var domain = unit, range2 = unit, interpolate$1 = interpolate, transform, untransform, unknown, clamp = identity$2, piecewise, output, input;
  function rescale() {
    var n = Math.min(domain.length, range2.length);
    if (clamp !== identity$2)
      clamp = clamper(domain[0], domain[n - 1]);
    piecewise = n > 2 ? polymap : bimap;
    output = input = null;
    return scale;
  }
  function scale(x) {
    return x == null || isNaN(x = +x) ? unknown : (output || (output = piecewise(domain.map(transform), range2, interpolate$1)))(transform(clamp(x)));
  }
  scale.invert = function(y) {
    return clamp(untransform((input || (input = piecewise(range2, domain.map(transform), interpolateNumber)))(y)));
  };
  scale.domain = function(_) {
    return arguments.length ? (domain = Array.from(_, number), rescale()) : domain.slice();
  };
  scale.range = function(_) {
    return arguments.length ? (range2 = Array.from(_), rescale()) : range2.slice();
  };
  scale.rangeRound = function(_) {
    return range2 = Array.from(_), interpolate$1 = interpolateRound, rescale();
  };
  scale.clamp = function(_) {
    return arguments.length ? (clamp = _ ? true : identity$2, rescale()) : clamp !== identity$2;
  };
  scale.interpolate = function(_) {
    return arguments.length ? (interpolate$1 = _, rescale()) : interpolate$1;
  };
  scale.unknown = function(_) {
    return arguments.length ? (unknown = _, scale) : unknown;
  };
  return function(t, u) {
    transform = t, untransform = u;
    return rescale();
  };
}
function continuous() {
  return transformer()(identity$2, identity$2);
}
function formatDecimal(x) {
  return Math.abs(x = Math.round(x)) >= 1e21 ? x.toLocaleString("en").replace(/,/g, "") : x.toString(10);
}
function formatDecimalParts(x, p) {
  if ((i = (x = p ? x.toExponential(p - 1) : x.toExponential()).indexOf("e")) < 0)
    return null;
  var i, coefficient = x.slice(0, i);
  return [
    coefficient.length > 1 ? coefficient[0] + coefficient.slice(2) : coefficient,
    +x.slice(i + 1)
  ];
}
function exponent(x) {
  return x = formatDecimalParts(Math.abs(x)), x ? x[1] : NaN;
}
function formatGroup(grouping, thousands) {
  return function(value, width) {
    var i = value.length, t = [], j = 0, g = grouping[0], length = 0;
    while (i > 0 && g > 0) {
      if (length + g + 1 > width)
        g = Math.max(1, width - length);
      t.push(value.substring(i -= g, i + g));
      if ((length += g + 1) > width)
        break;
      g = grouping[j = (j + 1) % grouping.length];
    }
    return t.reverse().join(thousands);
  };
}
function formatNumerals(numerals) {
  return function(value) {
    return value.replace(/[0-9]/g, function(i) {
      return numerals[+i];
    });
  };
}
var re = /^(?:(.)?([<>=^]))?([+\-( ])?([$#])?(0)?(\d+)?(,)?(\.\d+)?(~)?([a-z%])?$/i;
function formatSpecifier(specifier) {
  if (!(match = re.exec(specifier)))
    throw new Error("invalid format: " + specifier);
  var match;
  return new FormatSpecifier({
    fill: match[1],
    align: match[2],
    sign: match[3],
    symbol: match[4],
    zero: match[5],
    width: match[6],
    comma: match[7],
    precision: match[8] && match[8].slice(1),
    trim: match[9],
    type: match[10]
  });
}
formatSpecifier.prototype = FormatSpecifier.prototype;
function FormatSpecifier(specifier) {
  this.fill = specifier.fill === void 0 ? " " : specifier.fill + "";
  this.align = specifier.align === void 0 ? ">" : specifier.align + "";
  this.sign = specifier.sign === void 0 ? "-" : specifier.sign + "";
  this.symbol = specifier.symbol === void 0 ? "" : specifier.symbol + "";
  this.zero = !!specifier.zero;
  this.width = specifier.width === void 0 ? void 0 : +specifier.width;
  this.comma = !!specifier.comma;
  this.precision = specifier.precision === void 0 ? void 0 : +specifier.precision;
  this.trim = !!specifier.trim;
  this.type = specifier.type === void 0 ? "" : specifier.type + "";
}
FormatSpecifier.prototype.toString = function() {
  return this.fill + this.align + this.sign + this.symbol + (this.zero ? "0" : "") + (this.width === void 0 ? "" : Math.max(1, this.width | 0)) + (this.comma ? "," : "") + (this.precision === void 0 ? "" : "." + Math.max(0, this.precision | 0)) + (this.trim ? "~" : "") + this.type;
};
function formatTrim(s) {
  out:
    for (var n = s.length, i = 1, i0 = -1, i1; i < n; ++i) {
      switch (s[i]) {
        case ".":
          i0 = i1 = i;
          break;
        case "0":
          if (i0 === 0)
            i0 = i;
          i1 = i;
          break;
        default:
          if (!+s[i])
            break out;
          if (i0 > 0)
            i0 = 0;
          break;
      }
    }
  return i0 > 0 ? s.slice(0, i0) + s.slice(i1 + 1) : s;
}
var prefixExponent;
function formatPrefixAuto(x, p) {
  var d = formatDecimalParts(x, p);
  if (!d)
    return x + "";
  var coefficient = d[0], exponent2 = d[1], i = exponent2 - (prefixExponent = Math.max(-8, Math.min(8, Math.floor(exponent2 / 3))) * 3) + 1, n = coefficient.length;
  return i === n ? coefficient : i > n ? coefficient + new Array(i - n + 1).join("0") : i > 0 ? coefficient.slice(0, i) + "." + coefficient.slice(i) : "0." + new Array(1 - i).join("0") + formatDecimalParts(x, Math.max(0, p + i - 1))[0];
}
function formatRounded(x, p) {
  var d = formatDecimalParts(x, p);
  if (!d)
    return x + "";
  var coefficient = d[0], exponent2 = d[1];
  return exponent2 < 0 ? "0." + new Array(-exponent2).join("0") + coefficient : coefficient.length > exponent2 + 1 ? coefficient.slice(0, exponent2 + 1) + "." + coefficient.slice(exponent2 + 1) : coefficient + new Array(exponent2 - coefficient.length + 2).join("0");
}
const formatTypes = {
  "%": (x, p) => (x * 100).toFixed(p),
  "b": (x) => Math.round(x).toString(2),
  "c": (x) => x + "",
  "d": formatDecimal,
  "e": (x, p) => x.toExponential(p),
  "f": (x, p) => x.toFixed(p),
  "g": (x, p) => x.toPrecision(p),
  "o": (x) => Math.round(x).toString(8),
  "p": (x, p) => formatRounded(x * 100, p),
  "r": formatRounded,
  "s": formatPrefixAuto,
  "X": (x) => Math.round(x).toString(16).toUpperCase(),
  "x": (x) => Math.round(x).toString(16)
};
function identity$1(x) {
  return x;
}
var map = Array.prototype.map, prefixes = ["y", "z", "a", "f", "p", "n", "\xB5", "m", "", "k", "M", "G", "T", "P", "E", "Z", "Y"];
function formatLocale(locale2) {
  var group = locale2.grouping === void 0 || locale2.thousands === void 0 ? identity$1 : formatGroup(map.call(locale2.grouping, Number), locale2.thousands + ""), currencyPrefix = locale2.currency === void 0 ? "" : locale2.currency[0] + "", currencySuffix = locale2.currency === void 0 ? "" : locale2.currency[1] + "", decimal = locale2.decimal === void 0 ? "." : locale2.decimal + "", numerals = locale2.numerals === void 0 ? identity$1 : formatNumerals(map.call(locale2.numerals, String)), percent = locale2.percent === void 0 ? "%" : locale2.percent + "", minus = locale2.minus === void 0 ? "\u2212" : locale2.minus + "", nan = locale2.nan === void 0 ? "NaN" : locale2.nan + "";
  function newFormat(specifier) {
    specifier = formatSpecifier(specifier);
    var fill = specifier.fill, align = specifier.align, sign = specifier.sign, symbol = specifier.symbol, zero2 = specifier.zero, width = specifier.width, comma = specifier.comma, precision = specifier.precision, trim = specifier.trim, type = specifier.type;
    if (type === "n")
      comma = true, type = "g";
    else if (!formatTypes[type])
      precision === void 0 && (precision = 12), trim = true, type = "g";
    if (zero2 || fill === "0" && align === "=")
      zero2 = true, fill = "0", align = "=";
    var prefix = symbol === "$" ? currencyPrefix : symbol === "#" && /[boxX]/.test(type) ? "0" + type.toLowerCase() : "", suffix = symbol === "$" ? currencySuffix : /[%p]/.test(type) ? percent : "";
    var formatType = formatTypes[type], maybeSuffix = /[defgprs%]/.test(type);
    precision = precision === void 0 ? 6 : /[gprs]/.test(type) ? Math.max(1, Math.min(21, precision)) : Math.max(0, Math.min(20, precision));
    function format2(value) {
      var valuePrefix = prefix, valueSuffix = suffix, i, n, c;
      if (type === "c") {
        valueSuffix = formatType(value) + valueSuffix;
        value = "";
      } else {
        value = +value;
        var valueNegative = value < 0 || 1 / value < 0;
        value = isNaN(value) ? nan : formatType(Math.abs(value), precision);
        if (trim)
          value = formatTrim(value);
        if (valueNegative && +value === 0 && sign !== "+")
          valueNegative = false;
        valuePrefix = (valueNegative ? sign === "(" ? sign : minus : sign === "-" || sign === "(" ? "" : sign) + valuePrefix;
        valueSuffix = (type === "s" ? prefixes[8 + prefixExponent / 3] : "") + valueSuffix + (valueNegative && sign === "(" ? ")" : "");
        if (maybeSuffix) {
          i = -1, n = value.length;
          while (++i < n) {
            if (c = value.charCodeAt(i), 48 > c || c > 57) {
              valueSuffix = (c === 46 ? decimal + value.slice(i + 1) : value.slice(i)) + valueSuffix;
              value = value.slice(0, i);
              break;
            }
          }
        }
      }
      if (comma && !zero2)
        value = group(value, Infinity);
      var length = valuePrefix.length + value.length + valueSuffix.length, padding = length < width ? new Array(width - length + 1).join(fill) : "";
      if (comma && zero2)
        value = group(padding + value, padding.length ? width - valueSuffix.length : Infinity), padding = "";
      switch (align) {
        case "<":
          value = valuePrefix + value + valueSuffix + padding;
          break;
        case "=":
          value = valuePrefix + padding + value + valueSuffix;
          break;
        case "^":
          value = padding.slice(0, length = padding.length >> 1) + valuePrefix + value + valueSuffix + padding.slice(length);
          break;
        default:
          value = padding + valuePrefix + value + valueSuffix;
          break;
      }
      return numerals(value);
    }
    format2.toString = function() {
      return specifier + "";
    };
    return format2;
  }
  function formatPrefix2(specifier, value) {
    var f = newFormat((specifier = formatSpecifier(specifier), specifier.type = "f", specifier)), e = Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3, k = Math.pow(10, -e), prefix = prefixes[8 + e / 3];
    return function(value2) {
      return f(k * value2) + prefix;
    };
  }
  return {
    format: newFormat,
    formatPrefix: formatPrefix2
  };
}
var locale;
var format;
var formatPrefix;
defaultLocale({
  thousands: ",",
  grouping: [3],
  currency: ["$", ""]
});
function defaultLocale(definition) {
  locale = formatLocale(definition);
  format = locale.format;
  formatPrefix = locale.formatPrefix;
  return locale;
}
function precisionFixed(step) {
  return Math.max(0, -exponent(Math.abs(step)));
}
function precisionPrefix(step, value) {
  return Math.max(0, Math.max(-8, Math.min(8, Math.floor(exponent(value) / 3))) * 3 - exponent(Math.abs(step)));
}
function precisionRound(step, max) {
  step = Math.abs(step), max = Math.abs(max) - step;
  return Math.max(0, exponent(max) - exponent(step)) + 1;
}
function tickFormat(start, stop, count, specifier) {
  var step = tickStep(start, stop, count), precision;
  specifier = formatSpecifier(specifier == null ? ",f" : specifier);
  switch (specifier.type) {
    case "s": {
      var value = Math.max(Math.abs(start), Math.abs(stop));
      if (specifier.precision == null && !isNaN(precision = precisionPrefix(step, value)))
        specifier.precision = precision;
      return formatPrefix(specifier, value);
    }
    case "":
    case "e":
    case "g":
    case "p":
    case "r": {
      if (specifier.precision == null && !isNaN(precision = precisionRound(step, Math.max(Math.abs(start), Math.abs(stop)))))
        specifier.precision = precision - (specifier.type === "e");
      break;
    }
    case "f":
    case "%": {
      if (specifier.precision == null && !isNaN(precision = precisionFixed(step)))
        specifier.precision = precision - (specifier.type === "%") * 2;
      break;
    }
  }
  return format(specifier);
}
function linearish(scale) {
  var domain = scale.domain;
  scale.ticks = function(count) {
    var d = domain();
    return ticks(d[0], d[d.length - 1], count == null ? 10 : count);
  };
  scale.tickFormat = function(count, specifier) {
    var d = domain();
    return tickFormat(d[0], d[d.length - 1], count == null ? 10 : count, specifier);
  };
  scale.nice = function(count) {
    if (count == null)
      count = 10;
    var d = domain();
    var i0 = 0;
    var i1 = d.length - 1;
    var start = d[i0];
    var stop = d[i1];
    var prestep;
    var step;
    var maxIter = 10;
    if (stop < start) {
      step = start, start = stop, stop = step;
      step = i0, i0 = i1, i1 = step;
    }
    while (maxIter-- > 0) {
      step = tickIncrement(start, stop, count);
      if (step === prestep) {
        d[i0] = start;
        d[i1] = stop;
        return domain(d);
      } else if (step > 0) {
        start = Math.floor(start / step) * step;
        stop = Math.ceil(stop / step) * step;
      } else if (step < 0) {
        start = Math.ceil(start * step) / step;
        stop = Math.floor(stop * step) / step;
      } else {
        break;
      }
      prestep = step;
    }
    return scale;
  };
  return scale;
}
function linear() {
  var scale = continuous();
  scale.copy = function() {
    return copy(scale, linear());
  };
  initRange.apply(scale, arguments);
  return linearish(scale);
}
function transformPow(exponent2) {
  return function(x) {
    return x < 0 ? -Math.pow(-x, exponent2) : Math.pow(x, exponent2);
  };
}
function transformSqrt(x) {
  return x < 0 ? -Math.sqrt(-x) : Math.sqrt(x);
}
function transformSquare(x) {
  return x < 0 ? -x * x : x * x;
}
function powish(transform) {
  var scale = transform(identity$2, identity$2), exponent2 = 1;
  function rescale() {
    return exponent2 === 1 ? transform(identity$2, identity$2) : exponent2 === 0.5 ? transform(transformSqrt, transformSquare) : transform(transformPow(exponent2), transformPow(1 / exponent2));
  }
  scale.exponent = function(_) {
    return arguments.length ? (exponent2 = +_, rescale()) : exponent2;
  };
  return linearish(scale);
}
function pow$1() {
  var scale = powish(transformer());
  scale.copy = function() {
    return copy(scale, pow$1()).exponent(scale.exponent());
  };
  initRange.apply(scale, arguments);
  return scale;
}
function sqrt() {
  return pow$1.apply(null, arguments).exponent(0.5);
}
const defaultScales = {
  x: linear,
  y: linear,
  z: linear,
  r: sqrt
};
function findScaleType(scale) {
  if (scale.constant) {
    return "symlog";
  }
  if (scale.base) {
    return "log";
  }
  if (scale.exponent) {
    if (scale.exponent() === 0.5) {
      return "sqrt";
    }
    return "pow";
  }
  return "other";
}
function identity(d) {
  return d;
}
function log(sign) {
  return (x) => Math.log(sign * x);
}
function exp(sign) {
  return (x) => sign * Math.exp(x);
}
function symlog(c) {
  return (x) => Math.sign(x) * Math.log1p(Math.abs(x / c));
}
function symexp(c) {
  return (x) => Math.sign(x) * Math.expm1(Math.abs(x)) * c;
}
function pow(exponent2) {
  return function powFn(x) {
    return x < 0 ? -Math.pow(-x, exponent2) : Math.pow(x, exponent2);
  };
}
function getPadFunctions(scale) {
  const scaleType = findScaleType(scale);
  if (scaleType === "log") {
    const sign = Math.sign(scale.domain()[0]);
    return { lift: log(sign), ground: exp(sign), scaleType };
  }
  if (scaleType === "pow") {
    const exponent2 = 1;
    return { lift: pow(exponent2), ground: pow(1 / exponent2), scaleType };
  }
  if (scaleType === "sqrt") {
    const exponent2 = 0.5;
    return { lift: pow(exponent2), ground: pow(1 / exponent2), scaleType };
  }
  if (scaleType === "symlog") {
    const constant2 = 1;
    return { lift: symlog(constant2), ground: symexp(constant2), scaleType };
  }
  return { lift: identity, ground: identity, scaleType };
}
function padScale(scale, padding) {
  if (typeof scale.range !== "function") {
    throw new Error("Scale method `range` must be a function");
  }
  if (typeof scale.domain !== "function") {
    throw new Error("Scale method `domain` must be a function");
  }
  if (!Array.isArray(padding)) {
    return scale.domain();
  }
  if (scale.domain().length !== 2) {
    console.warn("[LayerCake] The scale is expected to have a domain of length 2 to use padding. Are you sure you want to use padding? Your scale's domain is:", scale.domain());
  }
  if (scale.range().length !== 2) {
    console.warn("[LayerCake] The scale is expected to have a range of length 2 to use padding. Are you sure you want to use padding? Your scale's range is:", scale.range());
  }
  const { lift, ground } = getPadFunctions(scale);
  const d0 = scale.domain()[0];
  const isTime = Object.prototype.toString.call(d0) === "[object Date]";
  const [d1, d2] = scale.domain().map((d) => {
    return isTime ? lift(d.getTime()) : lift(d);
  });
  const [r1, r2] = scale.range();
  const paddingLeft = padding[0] || 0;
  const paddingRight = padding[1] || 0;
  const step = (d2 - d1) / (Math.abs(r2 - r1) - paddingLeft - paddingRight);
  return [d1 - paddingLeft * step, paddingRight * step + d2].map((d) => {
    return isTime ? ground(new Date(d)) : ground(d);
  });
}
function calcBaseRange(s, width, height, reverse, percentRange) {
  let min;
  let max;
  if (percentRange === true) {
    min = 0;
    max = 100;
  } else {
    min = s === "r" ? 1 : 0;
    max = s === "y" ? height : s === "r" ? 25 : width;
  }
  return reverse === true ? [max, min] : [min, max];
}
function getDefaultRange(s, width, height, reverse, range2, percentRange) {
  return !range2 ? calcBaseRange(s, width, height, reverse, percentRange) : typeof range2 === "function" ? range2({ width, height }) : range2;
}
function createScale(s) {
  return function scaleCreator([$scale, $extents, $domain, $padding, $nice, $reverse, $width, $height, $range, $percentScale]) {
    if ($extents === null) {
      return null;
    }
    const defaultRange = getDefaultRange(s, $width, $height, $reverse, $range, $percentScale);
    const scale = $scale === defaultScales[s] ? $scale() : $scale.copy();
    scale.domain(partialDomain($extents[s], $domain)).range(defaultRange);
    if ($padding) {
      scale.domain(padScale(scale, $padding));
    }
    if ($nice === true) {
      if (typeof scale.nice === "function") {
        scale.nice();
      } else {
        console.error(`[Layer Cake] You set \`${s}Nice: true\` but the ${s}Scale does not have a \`.nice\` method. Ignoring...`);
      }
    }
    return scale;
  };
}
function createGetter([$acc, $scale]) {
  return (d) => {
    const val = $acc(d);
    if (Array.isArray(val)) {
      return val.map((v) => $scale(v));
    }
    return $scale(val);
  };
}
function getRange([$scale]) {
  if (typeof $scale === "function") {
    if (typeof $scale.range === "function") {
      return $scale.range();
    }
    console.error("[LayerCake] Your scale doesn't have a `.range` method?");
  }
  return null;
}
const defaultReverses = {
  x: false,
  y: true,
  z: false,
  r: false
};
const LayerCake_svelte_svelte_type_style_lang = "";
const css$a = {
  code: ".layercake-container.svelte-vhzpsp,.layercake-container.svelte-vhzpsp *{box-sizing:border-box}.layercake-container.svelte-vhzpsp{width:100%;height:100%}",
  map: null
};
const LayerCake = (0, import_index_f1ad1a08.c)(($$result, $$props, $$bindings, slots) => {
  let context;
  let $_config, $$unsubscribe__config;
  let $_custom, $$unsubscribe__custom;
  let $_rScale, $$unsubscribe__rScale;
  let $_zScale, $$unsubscribe__zScale;
  let $_yScale, $$unsubscribe__yScale;
  let $_xScale, $$unsubscribe__xScale;
  let $_rRange, $$unsubscribe__rRange;
  let $_zRange, $$unsubscribe__zRange;
  let $_yRange, $$unsubscribe__yRange;
  let $_xRange, $$unsubscribe__xRange;
  let $_rPadding, $$unsubscribe__rPadding;
  let $_zPadding, $$unsubscribe__zPadding;
  let $_yPadding, $$unsubscribe__yPadding;
  let $_xPadding, $$unsubscribe__xPadding;
  let $_rReverse, $$unsubscribe__rReverse;
  let $_zReverse, $$unsubscribe__zReverse;
  let $_yReverse, $$unsubscribe__yReverse;
  let $_xReverse, $$unsubscribe__xReverse;
  let $_rNice, $$unsubscribe__rNice;
  let $_zNice, $$unsubscribe__zNice;
  let $_yNice, $$unsubscribe__yNice;
  let $_xNice, $$unsubscribe__xNice;
  let $_rDomain, $$unsubscribe__rDomain;
  let $_zDomain, $$unsubscribe__zDomain;
  let $_yDomain, $$unsubscribe__yDomain;
  let $_xDomain, $$unsubscribe__xDomain;
  let $_r, $$unsubscribe__r;
  let $_z, $$unsubscribe__z;
  let $_y, $$unsubscribe__y;
  let $_x, $$unsubscribe__x;
  let $_padding, $$unsubscribe__padding;
  let $_flatData, $$unsubscribe__flatData;
  let $_data, $$unsubscribe__data;
  let $_extents, $$unsubscribe__extents;
  let $_containerHeight, $$unsubscribe__containerHeight;
  let $_containerWidth, $$unsubscribe__containerWidth;
  let $_percentRange, $$unsubscribe__percentRange;
  let $width_d, $$unsubscribe_width_d;
  let $height_d, $$unsubscribe_height_d;
  let $aspectRatio_d, $$unsubscribe_aspectRatio_d;
  let { ssr = false } = $$props;
  let { pointerEvents = true } = $$props;
  let { position = "relative" } = $$props;
  let { percentRange = false } = $$props;
  let { width = void 0 } = $$props;
  let { height = void 0 } = $$props;
  let { containerWidth = width || 100 } = $$props;
  let { containerHeight = height || 100 } = $$props;
  let { element = void 0 } = $$props;
  let { x = void 0 } = $$props;
  let { y = void 0 } = $$props;
  let { z = void 0 } = $$props;
  let { r = void 0 } = $$props;
  let { data: data2 = [] } = $$props;
  let { xDomain = void 0 } = $$props;
  let { yDomain = void 0 } = $$props;
  let { zDomain = void 0 } = $$props;
  let { rDomain = void 0 } = $$props;
  let { xNice = false } = $$props;
  let { yNice = false } = $$props;
  let { zNice = false } = $$props;
  let { rNice = false } = $$props;
  let { xReverse = defaultReverses.x } = $$props;
  let { yReverse = defaultReverses.y } = $$props;
  let { zReverse = defaultReverses.z } = $$props;
  let { rReverse = defaultReverses.r } = $$props;
  let { xPadding = void 0 } = $$props;
  let { yPadding = void 0 } = $$props;
  let { zPadding = void 0 } = $$props;
  let { rPadding = void 0 } = $$props;
  let { xScale = defaultScales.x } = $$props;
  let { yScale = defaultScales.y } = $$props;
  let { zScale = defaultScales.z } = $$props;
  let { rScale = defaultScales.r } = $$props;
  let { xRange = void 0 } = $$props;
  let { yRange = void 0 } = $$props;
  let { zRange = void 0 } = $$props;
  let { rRange = void 0 } = $$props;
  let { padding = {} } = $$props;
  let { extents = {} } = $$props;
  let { flatData = void 0 } = $$props;
  let { custom = {} } = $$props;
  let isMounted = false;
  const config = {};
  const _percentRange = writable(percentRange);
  $$unsubscribe__percentRange = (0, import_index_f1ad1a08.a)(_percentRange, (value) => $_percentRange = value);
  const _containerWidth = writable(containerWidth);
  $$unsubscribe__containerWidth = (0, import_index_f1ad1a08.a)(_containerWidth, (value) => $_containerWidth = value);
  const _containerHeight = writable(containerHeight);
  $$unsubscribe__containerHeight = (0, import_index_f1ad1a08.a)(_containerHeight, (value) => $_containerHeight = value);
  const _extents = writable(filterObject(extents));
  $$unsubscribe__extents = (0, import_index_f1ad1a08.a)(_extents, (value) => $_extents = value);
  const _data = writable(data2);
  $$unsubscribe__data = (0, import_index_f1ad1a08.a)(_data, (value) => $_data = value);
  const _flatData = writable(flatData || data2);
  $$unsubscribe__flatData = (0, import_index_f1ad1a08.a)(_flatData, (value) => $_flatData = value);
  const _padding = writable(padding);
  $$unsubscribe__padding = (0, import_index_f1ad1a08.a)(_padding, (value) => $_padding = value);
  const _x = writable(makeAccessor(x));
  $$unsubscribe__x = (0, import_index_f1ad1a08.a)(_x, (value) => $_x = value);
  const _y = writable(makeAccessor(y));
  $$unsubscribe__y = (0, import_index_f1ad1a08.a)(_y, (value) => $_y = value);
  const _z = writable(makeAccessor(z));
  $$unsubscribe__z = (0, import_index_f1ad1a08.a)(_z, (value) => $_z = value);
  const _r = writable(makeAccessor(r));
  $$unsubscribe__r = (0, import_index_f1ad1a08.a)(_r, (value) => $_r = value);
  const _xDomain = writable(xDomain);
  $$unsubscribe__xDomain = (0, import_index_f1ad1a08.a)(_xDomain, (value) => $_xDomain = value);
  const _yDomain = writable(yDomain);
  $$unsubscribe__yDomain = (0, import_index_f1ad1a08.a)(_yDomain, (value) => $_yDomain = value);
  const _zDomain = writable(zDomain);
  $$unsubscribe__zDomain = (0, import_index_f1ad1a08.a)(_zDomain, (value) => $_zDomain = value);
  const _rDomain = writable(rDomain);
  $$unsubscribe__rDomain = (0, import_index_f1ad1a08.a)(_rDomain, (value) => $_rDomain = value);
  const _xNice = writable(xNice);
  $$unsubscribe__xNice = (0, import_index_f1ad1a08.a)(_xNice, (value) => $_xNice = value);
  const _yNice = writable(yNice);
  $$unsubscribe__yNice = (0, import_index_f1ad1a08.a)(_yNice, (value) => $_yNice = value);
  const _zNice = writable(zNice);
  $$unsubscribe__zNice = (0, import_index_f1ad1a08.a)(_zNice, (value) => $_zNice = value);
  const _rNice = writable(rNice);
  $$unsubscribe__rNice = (0, import_index_f1ad1a08.a)(_rNice, (value) => $_rNice = value);
  const _xReverse = writable(xReverse);
  $$unsubscribe__xReverse = (0, import_index_f1ad1a08.a)(_xReverse, (value) => $_xReverse = value);
  const _yReverse = writable(yReverse);
  $$unsubscribe__yReverse = (0, import_index_f1ad1a08.a)(_yReverse, (value) => $_yReverse = value);
  const _zReverse = writable(zReverse);
  $$unsubscribe__zReverse = (0, import_index_f1ad1a08.a)(_zReverse, (value) => $_zReverse = value);
  const _rReverse = writable(rReverse);
  $$unsubscribe__rReverse = (0, import_index_f1ad1a08.a)(_rReverse, (value) => $_rReverse = value);
  const _xPadding = writable(xPadding);
  $$unsubscribe__xPadding = (0, import_index_f1ad1a08.a)(_xPadding, (value) => $_xPadding = value);
  const _yPadding = writable(yPadding);
  $$unsubscribe__yPadding = (0, import_index_f1ad1a08.a)(_yPadding, (value) => $_yPadding = value);
  const _zPadding = writable(zPadding);
  $$unsubscribe__zPadding = (0, import_index_f1ad1a08.a)(_zPadding, (value) => $_zPadding = value);
  const _rPadding = writable(rPadding);
  $$unsubscribe__rPadding = (0, import_index_f1ad1a08.a)(_rPadding, (value) => $_rPadding = value);
  const _xRange = writable(xRange);
  $$unsubscribe__xRange = (0, import_index_f1ad1a08.a)(_xRange, (value) => $_xRange = value);
  const _yRange = writable(yRange);
  $$unsubscribe__yRange = (0, import_index_f1ad1a08.a)(_yRange, (value) => $_yRange = value);
  const _zRange = writable(zRange);
  $$unsubscribe__zRange = (0, import_index_f1ad1a08.a)(_zRange, (value) => $_zRange = value);
  const _rRange = writable(rRange);
  $$unsubscribe__rRange = (0, import_index_f1ad1a08.a)(_rRange, (value) => $_rRange = value);
  const _xScale = writable(xScale);
  $$unsubscribe__xScale = (0, import_index_f1ad1a08.a)(_xScale, (value) => $_xScale = value);
  const _yScale = writable(yScale);
  $$unsubscribe__yScale = (0, import_index_f1ad1a08.a)(_yScale, (value) => $_yScale = value);
  const _zScale = writable(zScale);
  $$unsubscribe__zScale = (0, import_index_f1ad1a08.a)(_zScale, (value) => $_zScale = value);
  const _rScale = writable(rScale);
  $$unsubscribe__rScale = (0, import_index_f1ad1a08.a)(_rScale, (value) => $_rScale = value);
  const _config = writable(config);
  $$unsubscribe__config = (0, import_index_f1ad1a08.a)(_config, (value) => $_config = value);
  const _custom = writable(custom);
  $$unsubscribe__custom = (0, import_index_f1ad1a08.a)(_custom, (value) => $_custom = value);
  const activeGetters_d = derived([_x, _y, _z, _r], ([$x, $y, $z, $r]) => {
    const obj = {};
    if ($x) {
      obj.x = $x;
    }
    if ($y) {
      obj.y = $y;
    }
    if ($z) {
      obj.z = $z;
    }
    if ($r) {
      obj.r = $r;
    }
    return obj;
  });
  const padding_d = derived([_padding, _containerWidth, _containerHeight], ([$padding]) => {
    const defaultPadding = { top: 0, right: 0, bottom: 0, left: 0 };
    return Object.assign(defaultPadding, $padding);
  });
  const box_d = derived([_containerWidth, _containerHeight, padding_d], ([$containerWidth, $containerHeight, $padding]) => {
    const b = {};
    b.top = $padding.top;
    b.right = $containerWidth - $padding.right;
    b.bottom = $containerHeight - $padding.bottom;
    b.left = $padding.left;
    b.width = b.right - b.left;
    b.height = b.bottom - b.top;
    if (b.width <= 0 && isMounted === true) {
      console.warn("[LayerCake] Target div has zero or negative width. Did you forget to set an explicit width in CSS on the container?");
    }
    if (b.height <= 0 && isMounted === true) {
      console.warn("[LayerCake] Target div has zero or negative height. Did you forget to set an explicit height in CSS on the container?");
    }
    return b;
  });
  const width_d = derived([box_d], ([$box]) => {
    return $box.width;
  });
  $$unsubscribe_width_d = (0, import_index_f1ad1a08.a)(width_d, (value) => $width_d = value);
  const height_d = derived([box_d], ([$box]) => {
    return $box.height;
  });
  $$unsubscribe_height_d = (0, import_index_f1ad1a08.a)(height_d, (value) => $height_d = value);
  const extents_d = derived([_flatData, activeGetters_d, _extents], ([$flatData, $activeGetters, $extents]) => {
    const getters = filterObject($activeGetters, $extents);
    if (Object.keys(getters).length > 0) {
      return {
        ...calcExtents($flatData, getters),
        ...$extents
      };
    } else {
      return {};
    }
  });
  const xDomain_d = derived([extents_d, _xDomain], calcDomain("x"));
  const yDomain_d = derived([extents_d, _yDomain], calcDomain("y"));
  const zDomain_d = derived([extents_d, _zDomain], calcDomain("z"));
  const rDomain_d = derived([extents_d, _rDomain], calcDomain("r"));
  const xScale_d = derived(
    [
      _xScale,
      extents_d,
      xDomain_d,
      _xPadding,
      _xNice,
      _xReverse,
      width_d,
      height_d,
      _xRange,
      _percentRange
    ],
    createScale("x")
  );
  const xGet_d = derived([_x, xScale_d], createGetter);
  const yScale_d = derived(
    [
      _yScale,
      extents_d,
      yDomain_d,
      _yPadding,
      _yNice,
      _yReverse,
      width_d,
      height_d,
      _yRange,
      _percentRange
    ],
    createScale("y")
  );
  const yGet_d = derived([_y, yScale_d], createGetter);
  const zScale_d = derived(
    [
      _zScale,
      extents_d,
      zDomain_d,
      _zPadding,
      _zNice,
      _zReverse,
      width_d,
      height_d,
      _zRange,
      _percentRange
    ],
    createScale("z")
  );
  const zGet_d = derived([_z, zScale_d], createGetter);
  const rScale_d = derived(
    [
      _rScale,
      extents_d,
      rDomain_d,
      _rPadding,
      _rNice,
      _rReverse,
      width_d,
      height_d,
      _rRange,
      _percentRange
    ],
    createScale("r")
  );
  const rGet_d = derived([_r, rScale_d], createGetter);
  const xRange_d = derived([xScale_d], getRange);
  const yRange_d = derived([yScale_d], getRange);
  const zRange_d = derived([zScale_d], getRange);
  const rRange_d = derived([rScale_d], getRange);
  const aspectRatio_d = derived([width_d, height_d], ([$width, $height]) => {
    return $width / $height;
  });
  $$unsubscribe_aspectRatio_d = (0, import_index_f1ad1a08.a)(aspectRatio_d, (value) => $aspectRatio_d = value);
  if ($$props.ssr === void 0 && $$bindings.ssr && ssr !== void 0)
    $$bindings.ssr(ssr);
  if ($$props.pointerEvents === void 0 && $$bindings.pointerEvents && pointerEvents !== void 0)
    $$bindings.pointerEvents(pointerEvents);
  if ($$props.position === void 0 && $$bindings.position && position !== void 0)
    $$bindings.position(position);
  if ($$props.percentRange === void 0 && $$bindings.percentRange && percentRange !== void 0)
    $$bindings.percentRange(percentRange);
  if ($$props.width === void 0 && $$bindings.width && width !== void 0)
    $$bindings.width(width);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.containerWidth === void 0 && $$bindings.containerWidth && containerWidth !== void 0)
    $$bindings.containerWidth(containerWidth);
  if ($$props.containerHeight === void 0 && $$bindings.containerHeight && containerHeight !== void 0)
    $$bindings.containerHeight(containerHeight);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.x === void 0 && $$bindings.x && x !== void 0)
    $$bindings.x(x);
  if ($$props.y === void 0 && $$bindings.y && y !== void 0)
    $$bindings.y(y);
  if ($$props.z === void 0 && $$bindings.z && z !== void 0)
    $$bindings.z(z);
  if ($$props.r === void 0 && $$bindings.r && r !== void 0)
    $$bindings.r(r);
  if ($$props.data === void 0 && $$bindings.data && data2 !== void 0)
    $$bindings.data(data2);
  if ($$props.xDomain === void 0 && $$bindings.xDomain && xDomain !== void 0)
    $$bindings.xDomain(xDomain);
  if ($$props.yDomain === void 0 && $$bindings.yDomain && yDomain !== void 0)
    $$bindings.yDomain(yDomain);
  if ($$props.zDomain === void 0 && $$bindings.zDomain && zDomain !== void 0)
    $$bindings.zDomain(zDomain);
  if ($$props.rDomain === void 0 && $$bindings.rDomain && rDomain !== void 0)
    $$bindings.rDomain(rDomain);
  if ($$props.xNice === void 0 && $$bindings.xNice && xNice !== void 0)
    $$bindings.xNice(xNice);
  if ($$props.yNice === void 0 && $$bindings.yNice && yNice !== void 0)
    $$bindings.yNice(yNice);
  if ($$props.zNice === void 0 && $$bindings.zNice && zNice !== void 0)
    $$bindings.zNice(zNice);
  if ($$props.rNice === void 0 && $$bindings.rNice && rNice !== void 0)
    $$bindings.rNice(rNice);
  if ($$props.xReverse === void 0 && $$bindings.xReverse && xReverse !== void 0)
    $$bindings.xReverse(xReverse);
  if ($$props.yReverse === void 0 && $$bindings.yReverse && yReverse !== void 0)
    $$bindings.yReverse(yReverse);
  if ($$props.zReverse === void 0 && $$bindings.zReverse && zReverse !== void 0)
    $$bindings.zReverse(zReverse);
  if ($$props.rReverse === void 0 && $$bindings.rReverse && rReverse !== void 0)
    $$bindings.rReverse(rReverse);
  if ($$props.xPadding === void 0 && $$bindings.xPadding && xPadding !== void 0)
    $$bindings.xPadding(xPadding);
  if ($$props.yPadding === void 0 && $$bindings.yPadding && yPadding !== void 0)
    $$bindings.yPadding(yPadding);
  if ($$props.zPadding === void 0 && $$bindings.zPadding && zPadding !== void 0)
    $$bindings.zPadding(zPadding);
  if ($$props.rPadding === void 0 && $$bindings.rPadding && rPadding !== void 0)
    $$bindings.rPadding(rPadding);
  if ($$props.xScale === void 0 && $$bindings.xScale && xScale !== void 0)
    $$bindings.xScale(xScale);
  if ($$props.yScale === void 0 && $$bindings.yScale && yScale !== void 0)
    $$bindings.yScale(yScale);
  if ($$props.zScale === void 0 && $$bindings.zScale && zScale !== void 0)
    $$bindings.zScale(zScale);
  if ($$props.rScale === void 0 && $$bindings.rScale && rScale !== void 0)
    $$bindings.rScale(rScale);
  if ($$props.xRange === void 0 && $$bindings.xRange && xRange !== void 0)
    $$bindings.xRange(xRange);
  if ($$props.yRange === void 0 && $$bindings.yRange && yRange !== void 0)
    $$bindings.yRange(yRange);
  if ($$props.zRange === void 0 && $$bindings.zRange && zRange !== void 0)
    $$bindings.zRange(zRange);
  if ($$props.rRange === void 0 && $$bindings.rRange && rRange !== void 0)
    $$bindings.rRange(rRange);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.extents === void 0 && $$bindings.extents && extents !== void 0)
    $$bindings.extents(extents);
  if ($$props.flatData === void 0 && $$bindings.flatData && flatData !== void 0)
    $$bindings.flatData(flatData);
  if ($$props.custom === void 0 && $$bindings.custom && custom !== void 0)
    $$bindings.custom(custom);
  $$result.css.add(css$a);
  {
    if (x)
      config.x = x;
  }
  {
    if (y)
      config.y = y;
  }
  {
    if (z)
      config.z = z;
  }
  {
    if (r)
      config.r = r;
  }
  {
    if (xDomain)
      config.xDomain = xDomain;
  }
  {
    if (yDomain)
      config.yDomain = yDomain;
  }
  {
    if (zDomain)
      config.zDomain = zDomain;
  }
  {
    if (rDomain)
      config.rDomain = rDomain;
  }
  {
    if (xRange)
      config.xRange = xRange;
  }
  {
    if (yRange)
      config.yRange = yRange;
  }
  {
    if (zRange)
      config.zRange = zRange;
  }
  {
    if (rRange)
      config.rRange = rRange;
  }
  (0, import_index_f1ad1a08.h)(_percentRange, $_percentRange = percentRange, $_percentRange);
  (0, import_index_f1ad1a08.h)(_containerWidth, $_containerWidth = containerWidth, $_containerWidth);
  (0, import_index_f1ad1a08.h)(_containerHeight, $_containerHeight = containerHeight, $_containerHeight);
  (0, import_index_f1ad1a08.h)(_extents, $_extents = filterObject(extents), $_extents);
  (0, import_index_f1ad1a08.h)(_data, $_data = data2, $_data);
  (0, import_index_f1ad1a08.h)(_flatData, $_flatData = flatData || data2, $_flatData);
  (0, import_index_f1ad1a08.h)(_padding, $_padding = padding, $_padding);
  (0, import_index_f1ad1a08.h)(_x, $_x = makeAccessor(x), $_x);
  (0, import_index_f1ad1a08.h)(_y, $_y = makeAccessor(y), $_y);
  (0, import_index_f1ad1a08.h)(_z, $_z = makeAccessor(z), $_z);
  (0, import_index_f1ad1a08.h)(_r, $_r = makeAccessor(r), $_r);
  (0, import_index_f1ad1a08.h)(_xDomain, $_xDomain = xDomain, $_xDomain);
  (0, import_index_f1ad1a08.h)(_yDomain, $_yDomain = yDomain, $_yDomain);
  (0, import_index_f1ad1a08.h)(_zDomain, $_zDomain = zDomain, $_zDomain);
  (0, import_index_f1ad1a08.h)(_rDomain, $_rDomain = rDomain, $_rDomain);
  (0, import_index_f1ad1a08.h)(_xNice, $_xNice = xNice, $_xNice);
  (0, import_index_f1ad1a08.h)(_yNice, $_yNice = yNice, $_yNice);
  (0, import_index_f1ad1a08.h)(_zNice, $_zNice = zNice, $_zNice);
  (0, import_index_f1ad1a08.h)(_rNice, $_rNice = rNice, $_rNice);
  (0, import_index_f1ad1a08.h)(_xReverse, $_xReverse = xReverse, $_xReverse);
  (0, import_index_f1ad1a08.h)(_yReverse, $_yReverse = yReverse, $_yReverse);
  (0, import_index_f1ad1a08.h)(_zReverse, $_zReverse = zReverse, $_zReverse);
  (0, import_index_f1ad1a08.h)(_rReverse, $_rReverse = rReverse, $_rReverse);
  (0, import_index_f1ad1a08.h)(_xPadding, $_xPadding = xPadding, $_xPadding);
  (0, import_index_f1ad1a08.h)(_yPadding, $_yPadding = yPadding, $_yPadding);
  (0, import_index_f1ad1a08.h)(_zPadding, $_zPadding = zPadding, $_zPadding);
  (0, import_index_f1ad1a08.h)(_rPadding, $_rPadding = rPadding, $_rPadding);
  (0, import_index_f1ad1a08.h)(_xRange, $_xRange = xRange, $_xRange);
  (0, import_index_f1ad1a08.h)(_yRange, $_yRange = yRange, $_yRange);
  (0, import_index_f1ad1a08.h)(_zRange, $_zRange = zRange, $_zRange);
  (0, import_index_f1ad1a08.h)(_rRange, $_rRange = rRange, $_rRange);
  (0, import_index_f1ad1a08.h)(_xScale, $_xScale = xScale, $_xScale);
  (0, import_index_f1ad1a08.h)(_yScale, $_yScale = yScale, $_yScale);
  (0, import_index_f1ad1a08.h)(_zScale, $_zScale = zScale, $_zScale);
  (0, import_index_f1ad1a08.h)(_rScale, $_rScale = rScale, $_rScale);
  (0, import_index_f1ad1a08.h)(_custom, $_custom = custom, $_custom);
  (0, import_index_f1ad1a08.h)(_config, $_config = config, $_config);
  context = {
    activeGetters: activeGetters_d,
    width: width_d,
    height: height_d,
    percentRange: _percentRange,
    aspectRatio: aspectRatio_d,
    containerWidth: _containerWidth,
    containerHeight: _containerHeight,
    x: _x,
    y: _y,
    z: _z,
    r: _r,
    custom: _custom,
    data: _data,
    xNice: _xNice,
    yNice: _yNice,
    zNice: _zNice,
    rNice: _rNice,
    xReverse: _xReverse,
    yReverse: _yReverse,
    zReverse: _zReverse,
    rReverse: _rReverse,
    xPadding: _xPadding,
    yPadding: _yPadding,
    zPadding: _zPadding,
    rPadding: _rPadding,
    padding: padding_d,
    flatData: _flatData,
    extents: extents_d,
    xDomain: xDomain_d,
    yDomain: yDomain_d,
    zDomain: zDomain_d,
    rDomain: rDomain_d,
    xRange: xRange_d,
    yRange: yRange_d,
    zRange: zRange_d,
    rRange: rRange_d,
    config: _config,
    xScale: xScale_d,
    xGet: xGet_d,
    yScale: yScale_d,
    yGet: yGet_d,
    zScale: zScale_d,
    zGet: zGet_d,
    rScale: rScale_d,
    rGet: rGet_d
  };
  {
    (0, import_index_f1ad1a08.s)("LayerCake", context);
  }
  $$unsubscribe__config();
  $$unsubscribe__custom();
  $$unsubscribe__rScale();
  $$unsubscribe__zScale();
  $$unsubscribe__yScale();
  $$unsubscribe__xScale();
  $$unsubscribe__rRange();
  $$unsubscribe__zRange();
  $$unsubscribe__yRange();
  $$unsubscribe__xRange();
  $$unsubscribe__rPadding();
  $$unsubscribe__zPadding();
  $$unsubscribe__yPadding();
  $$unsubscribe__xPadding();
  $$unsubscribe__rReverse();
  $$unsubscribe__zReverse();
  $$unsubscribe__yReverse();
  $$unsubscribe__xReverse();
  $$unsubscribe__rNice();
  $$unsubscribe__zNice();
  $$unsubscribe__yNice();
  $$unsubscribe__xNice();
  $$unsubscribe__rDomain();
  $$unsubscribe__zDomain();
  $$unsubscribe__yDomain();
  $$unsubscribe__xDomain();
  $$unsubscribe__r();
  $$unsubscribe__z();
  $$unsubscribe__y();
  $$unsubscribe__x();
  $$unsubscribe__padding();
  $$unsubscribe__flatData();
  $$unsubscribe__data();
  $$unsubscribe__extents();
  $$unsubscribe__containerHeight();
  $$unsubscribe__containerWidth();
  $$unsubscribe__percentRange();
  $$unsubscribe_width_d();
  $$unsubscribe_height_d();
  $$unsubscribe_aspectRatio_d();
  return `


${ssr === true || typeof window !== "undefined" ? `<div class="${"layercake-container svelte-vhzpsp"}"${(0, import_index_f1ad1a08.j)({
    position,
    "top": position === "absolute" ? "0" : null,
    "right": position === "absolute" ? "0" : null,
    "bottom": position === "absolute" ? "0" : null,
    "left": position === "absolute" ? "0" : null,
    "pointer-events": pointerEvents === false ? "none" : null
  })}${(0, import_index_f1ad1a08.d)("this", element, 0)}>${slots.default ? slots.default({
    element,
    width: $width_d,
    height: $height_d,
    aspectRatio: $aspectRatio_d,
    containerWidth: $_containerWidth,
    containerHeight: $_containerHeight
  }) : ``}</div>` : ``}`;
});
const Html_svelte_svelte_type_style_lang = "";
const Svg_svelte_svelte_type_style_lang = "";
const css$9 = {
  code: "svg.svelte-u84d8d{position:absolute;top:0;left:0;overflow:visible}",
  map: null
};
const Svg = (0, import_index_f1ad1a08.c)(($$result, $$props, $$bindings, slots) => {
  let $containerWidth, $$unsubscribe_containerWidth;
  let $containerHeight, $$unsubscribe_containerHeight;
  let $padding, $$unsubscribe_padding;
  let { element = void 0 } = $$props;
  let { innerElement = void 0 } = $$props;
  let { zIndex = void 0 } = $$props;
  let { pointerEvents = void 0 } = $$props;
  let { viewBox = void 0 } = $$props;
  const { containerWidth, containerHeight, padding } = (0, import_index_f1ad1a08.g)("LayerCake");
  $$unsubscribe_containerWidth = (0, import_index_f1ad1a08.a)(containerWidth, (value) => $containerWidth = value);
  $$unsubscribe_containerHeight = (0, import_index_f1ad1a08.a)(containerHeight, (value) => $containerHeight = value);
  $$unsubscribe_padding = (0, import_index_f1ad1a08.a)(padding, (value) => $padding = value);
  if ($$props.element === void 0 && $$bindings.element && element !== void 0)
    $$bindings.element(element);
  if ($$props.innerElement === void 0 && $$bindings.innerElement && innerElement !== void 0)
    $$bindings.innerElement(innerElement);
  if ($$props.zIndex === void 0 && $$bindings.zIndex && zIndex !== void 0)
    $$bindings.zIndex(zIndex);
  if ($$props.pointerEvents === void 0 && $$bindings.pointerEvents && pointerEvents !== void 0)
    $$bindings.pointerEvents(pointerEvents);
  if ($$props.viewBox === void 0 && $$bindings.viewBox && viewBox !== void 0)
    $$bindings.viewBox(viewBox);
  $$result.css.add(css$9);
  $$unsubscribe_containerWidth();
  $$unsubscribe_containerHeight();
  $$unsubscribe_padding();
  return `

<svg class="${"layercake-layout-svg svelte-u84d8d"}"${(0, import_index_f1ad1a08.d)("viewBox", viewBox, 0)}${(0, import_index_f1ad1a08.d)("width", $containerWidth, 0)}${(0, import_index_f1ad1a08.d)("height", $containerHeight, 0)}${(0, import_index_f1ad1a08.j)({
    "z-index": zIndex,
    "pointer-events": pointerEvents === false ? "none" : null
  })}${(0, import_index_f1ad1a08.d)("this", element, 0)}><defs>${slots.defs ? slots.defs({ element }) : ``}</defs><g class="${"layercake-layout-svg_g"}" transform="${"translate(" + (0, import_index_f1ad1a08.e)($padding.left, true) + ", " + (0, import_index_f1ad1a08.e)($padding.top, true) + ")"}"${(0, import_index_f1ad1a08.d)("this", innerElement, 0)}>${slots.default ? slots.default({ element }) : ``}</g></svg>`;
});
const ScaledSvg_svelte_svelte_type_style_lang = "";
function flatten(list) {
  if (Array.isArray(list) && Array.isArray(list[0])) {
    let flat = [];
    const l = list.length;
    for (let i = 0; i < l; i += 1) {
      flat = flat.concat(list[i]);
    }
    return flat;
  }
  return list;
}
function uniques(list, accessor, transform = true) {
  if (!Array.isArray(list)) {
    console.error("LayerCake error: Input value to `uniques` must be a list.");
    return null;
  }
  const ll = list.length;
  const iterater = typeof accessor === "function";
  const key = typeof accessor !== "undefined";
  const seen = /* @__PURE__ */ new Set();
  const result = [];
  for (let i = 0; i < ll; i += 1) {
    const d = list[i];
    const computed = iterater ? accessor(d) : key === true ? d[accessor] : d;
    if (!seen.has(computed)) {
      seen.add(computed);
      result.push(transform ? computed : d);
    }
  }
  return result;
}
function constant(x) {
  return function constant2() {
    return x;
  };
}
function array(x) {
  return typeof x === "object" && "length" in x ? x : Array.from(x);
}
function none$1(series, order) {
  if (!((n = series.length) > 1))
    return;
  for (var i = 1, j, s0, s1 = series[order[0]], n, m = s1.length; i < n; ++i) {
    s0 = s1, s1 = series[order[i]];
    for (j = 0; j < m; ++j) {
      s1[j][1] += s1[j][0] = isNaN(s0[j][1]) ? s0[j][0] : s0[j][1];
    }
  }
}
function none(series) {
  var n = series.length, o = new Array(n);
  while (--n >= 0)
    o[n] = n;
  return o;
}
function stackValue(d, key) {
  return d[key];
}
function stackSeries(key) {
  const series = [];
  series.key = key;
  return series;
}
function stack() {
  var keys = constant([]), order = none, offset = none$1, value = stackValue;
  function stack2(data2) {
    var sz = Array.from(keys.apply(this, arguments), stackSeries), i, n = sz.length, j = -1, oz;
    for (const d of data2) {
      for (i = 0, ++j; i < n; ++i) {
        (sz[i][j] = [0, +value(d, sz[i].key, j, data2)]).data = d;
      }
    }
    for (i = 0, oz = array(order(sz)); i < n; ++i) {
      sz[oz[i]].index = i;
    }
    offset(sz, oz);
    return sz;
  }
  stack2.keys = function(_) {
    return arguments.length ? (keys = typeof _ === "function" ? _ : constant(Array.from(_)), stack2) : keys;
  };
  stack2.value = function(_) {
    return arguments.length ? (value = typeof _ === "function" ? _ : constant(+_), stack2) : value;
  };
  stack2.order = function(_) {
    return arguments.length ? (order = _ == null ? none : typeof _ === "function" ? _ : constant(Array.from(_)), stack2) : order;
  };
  stack2.offset = function(_) {
    return arguments.length ? (offset = _ == null ? none$1 : _, stack2) : offset;
  };
  return stack2;
}
const ColumnStacked = (0, import_index_f1ad1a08.c)(($$result, $$props, $$bindings, slots) => {
  let $data, $$unsubscribe_data;
  let $yGet, $$unsubscribe_yGet;
  let $xGet, $$unsubscribe_xGet;
  let $xScale, $$unsubscribe_xScale;
  let $zGet, $$unsubscribe_zGet;
  const { data: data2, xGet, yGet, zGet, xScale } = (0, import_index_f1ad1a08.g)("LayerCake");
  $$unsubscribe_data = (0, import_index_f1ad1a08.a)(data2, (value) => $data = value);
  $$unsubscribe_xGet = (0, import_index_f1ad1a08.a)(xGet, (value) => $xGet = value);
  $$unsubscribe_yGet = (0, import_index_f1ad1a08.a)(yGet, (value) => $yGet = value);
  $$unsubscribe_zGet = (0, import_index_f1ad1a08.a)(zGet, (value) => $zGet = value);
  $$unsubscribe_xScale = (0, import_index_f1ad1a08.a)(xScale, (value) => $xScale = value);
  $$unsubscribe_data();
  $$unsubscribe_yGet();
  $$unsubscribe_xGet();
  $$unsubscribe_xScale();
  $$unsubscribe_zGet();
  return `


<g class="${"column-group"}">${(0, import_index_f1ad1a08.b)($data, (series, i) => {
    return `${(0, import_index_f1ad1a08.b)(series, (d) => {
      let yVals = $yGet(d), columnHeight = yVals[0] - yVals[1];
      return `
			
			<rect class="${"group-rect"}"${(0, import_index_f1ad1a08.d)("data-id", i, 0)}${(0, import_index_f1ad1a08.d)("x", $xGet(d), 0)}${(0, import_index_f1ad1a08.d)("y", yVals[1], 0)}${(0, import_index_f1ad1a08.d)("width", $xScale.bandwidth(), 0)}${(0, import_index_f1ad1a08.d)("height", columnHeight, 0)}${(0, import_index_f1ad1a08.d)("fill", $zGet(series), 0)}></rect>`;
    })}`;
  })}</g>`;
});
const AxisX_svelte_svelte_type_style_lang = "";
const css$8 = {
  code: ".tick.svelte-1t42ot7.svelte-1t42ot7{font-size:1em;font-weight:200}line.svelte-1t42ot7.svelte-1t42ot7,.tick.svelte-1t42ot7 line.svelte-1t42ot7{stroke:#aaa;stroke-dasharray:2}.tick.svelte-1t42ot7 text.svelte-1t42ot7{fill:#666}.tick.svelte-1t42ot7 .tick-mark.svelte-1t42ot7,.baseline.svelte-1t42ot7.svelte-1t42ot7{stroke-dasharray:0}.axis.snapTicks.svelte-1t42ot7 .tick:last-child text.svelte-1t42ot7{transform:translateX(3px)}.axis.snapTicks.svelte-1t42ot7 .tick.tick-0 text.svelte-1t42ot7{transform:translateX(-3px)}",
  map: null
};
const AxisX = (0, import_index_f1ad1a08.c)(($$result, $$props, $$bindings, slots) => {
  let isBandwidth;
  let tickVals;
  let $xScale, $$unsubscribe_xScale;
  let $yRange, $$unsubscribe_yRange;
  let $height, $$unsubscribe_height;
  let $width, $$unsubscribe_width;
  const { width, height, xScale, yRange } = (0, import_index_f1ad1a08.g)("LayerCake");
  $$unsubscribe_width = (0, import_index_f1ad1a08.a)(width, (value) => $width = value);
  $$unsubscribe_height = (0, import_index_f1ad1a08.a)(height, (value) => $height = value);
  $$unsubscribe_xScale = (0, import_index_f1ad1a08.a)(xScale, (value) => $xScale = value);
  $$unsubscribe_yRange = (0, import_index_f1ad1a08.a)(yRange, (value) => $yRange = value);
  let { gridlines = true } = $$props;
  let { tickMarks = false } = $$props;
  let { baseline = false } = $$props;
  let { snapTicks = false } = $$props;
  let { formatTick = (d) => d } = $$props;
  let { ticks: ticks2 = void 0 } = $$props;
  let { xTick = 0 } = $$props;
  let { yTick = 16 } = $$props;
  function textAnchor(i) {
    if (snapTicks === true) {
      if (i === 0) {
        return "start";
      }
      if (i === tickVals.length - 1) {
        return "end";
      }
    }
    return "middle";
  }
  if ($$props.gridlines === void 0 && $$bindings.gridlines && gridlines !== void 0)
    $$bindings.gridlines(gridlines);
  if ($$props.tickMarks === void 0 && $$bindings.tickMarks && tickMarks !== void 0)
    $$bindings.tickMarks(tickMarks);
  if ($$props.baseline === void 0 && $$bindings.baseline && baseline !== void 0)
    $$bindings.baseline(baseline);
  if ($$props.snapTicks === void 0 && $$bindings.snapTicks && snapTicks !== void 0)
    $$bindings.snapTicks(snapTicks);
  if ($$props.formatTick === void 0 && $$bindings.formatTick && formatTick !== void 0)
    $$bindings.formatTick(formatTick);
  if ($$props.ticks === void 0 && $$bindings.ticks && ticks2 !== void 0)
    $$bindings.ticks(ticks2);
  if ($$props.xTick === void 0 && $$bindings.xTick && xTick !== void 0)
    $$bindings.xTick(xTick);
  if ($$props.yTick === void 0 && $$bindings.yTick && yTick !== void 0)
    $$bindings.yTick(yTick);
  $$result.css.add(css$8);
  isBandwidth = typeof $xScale.bandwidth === "function";
  tickVals = Array.isArray(ticks2) ? ticks2 : isBandwidth ? $xScale.domain() : typeof ticks2 === "function" ? ticks2($xScale.ticks()) : $xScale.ticks(ticks2);
  $$unsubscribe_xScale();
  $$unsubscribe_yRange();
  $$unsubscribe_height();
  $$unsubscribe_width();
  return `


<g class="${["axis x-axis svelte-1t42ot7", snapTicks ? "snapTicks" : ""].join(" ").trim()}">${(0, import_index_f1ad1a08.b)(tickVals, (tick, i) => {
    return `<g class="${"tick tick-" + (0, import_index_f1ad1a08.e)(i, true) + " svelte-1t42ot7"}" transform="${"translate(" + (0, import_index_f1ad1a08.e)($xScale(tick), true) + "," + (0, import_index_f1ad1a08.e)($yRange[0], true) + "), rotate(10, 0, 0)"}">${gridlines !== false ? `<line class="${"gridline svelte-1t42ot7"}"${(0, import_index_f1ad1a08.d)("y1", $height * -1, 0)} y2="${"0"}" x1="${"0"}" x2="${"0"}"></line>` : ``}${tickMarks === true ? `<line class="${"tick-mark svelte-1t42ot7"}"${(0, import_index_f1ad1a08.d)("y1", 0, 0)}${(0, import_index_f1ad1a08.d)("y2", 6, 0)}${(0, import_index_f1ad1a08.d)("x1", xTick || isBandwidth ? $xScale.bandwidth() / 2 : 0, 0)}${(0, import_index_f1ad1a08.d)("x2", xTick || isBandwidth ? $xScale.bandwidth() / 2 : 0, 0)}></line>` : ``}<text${(0, import_index_f1ad1a08.d)("x", xTick || isBandwidth ? $xScale.bandwidth() / 2 : 0, 0)}${(0, import_index_f1ad1a08.d)("y", yTick, 0)} dx="${""}" dy="${""}"${(0, import_index_f1ad1a08.d)("text-anchor", textAnchor(i), 0)} class="${"svelte-1t42ot7"}">${(0, import_index_f1ad1a08.e)(formatTick(tick))}</text></g>`;
  })}${baseline === true ? `<line class="${"baseline svelte-1t42ot7"}"${(0, import_index_f1ad1a08.d)("y1", $height + 0.5, 0)}${(0, import_index_f1ad1a08.d)("y2", $height + 0.5, 0)} x1="${"0"}"${(0, import_index_f1ad1a08.d)("x2", $width, 0)}></line>` : ``}</g>`;
});
const AxisY_svelte_svelte_type_style_lang = "";
const css$7 = {
  code: ".tick.svelte-16pga92.svelte-16pga92{font-size:.725em;font-weight:200}.tick.svelte-16pga92 line.svelte-16pga92{stroke:#aaa}.tick.svelte-16pga92 .gridline.svelte-16pga92{stroke-dasharray:2}.tick.svelte-16pga92 text.svelte-16pga92{fill:#666}.tick.tick-0.svelte-16pga92 line.svelte-16pga92{stroke-dasharray:0}",
  map: null
};
const AxisY = (0, import_index_f1ad1a08.c)(($$result, $$props, $$bindings, slots) => {
  let isBandwidth;
  let tickVals;
  let $yScale, $$unsubscribe_yScale;
  let $padding, $$unsubscribe_padding;
  let $xRange, $$unsubscribe_xRange;
  const { padding, xRange, yScale } = (0, import_index_f1ad1a08.g)("LayerCake");
  $$unsubscribe_padding = (0, import_index_f1ad1a08.a)(padding, (value) => $padding = value);
  $$unsubscribe_xRange = (0, import_index_f1ad1a08.a)(xRange, (value) => $xRange = value);
  $$unsubscribe_yScale = (0, import_index_f1ad1a08.a)(yScale, (value) => $yScale = value);
  let { gridlines = true } = $$props;
  let { tickMarks = false } = $$props;
  let { formatTick = (d) => d } = $$props;
  let { ticks: ticks2 = 4 } = $$props;
  let { xTick = 0 } = $$props;
  let { yTick = 0 } = $$props;
  let { dxTick = 0 } = $$props;
  let { dyTick = -4 } = $$props;
  let { textAnchor = "start" } = $$props;
  if ($$props.gridlines === void 0 && $$bindings.gridlines && gridlines !== void 0)
    $$bindings.gridlines(gridlines);
  if ($$props.tickMarks === void 0 && $$bindings.tickMarks && tickMarks !== void 0)
    $$bindings.tickMarks(tickMarks);
  if ($$props.formatTick === void 0 && $$bindings.formatTick && formatTick !== void 0)
    $$bindings.formatTick(formatTick);
  if ($$props.ticks === void 0 && $$bindings.ticks && ticks2 !== void 0)
    $$bindings.ticks(ticks2);
  if ($$props.xTick === void 0 && $$bindings.xTick && xTick !== void 0)
    $$bindings.xTick(xTick);
  if ($$props.yTick === void 0 && $$bindings.yTick && yTick !== void 0)
    $$bindings.yTick(yTick);
  if ($$props.dxTick === void 0 && $$bindings.dxTick && dxTick !== void 0)
    $$bindings.dxTick(dxTick);
  if ($$props.dyTick === void 0 && $$bindings.dyTick && dyTick !== void 0)
    $$bindings.dyTick(dyTick);
  if ($$props.textAnchor === void 0 && $$bindings.textAnchor && textAnchor !== void 0)
    $$bindings.textAnchor(textAnchor);
  $$result.css.add(css$7);
  isBandwidth = typeof $yScale.bandwidth === "function";
  tickVals = Array.isArray(ticks2) ? ticks2 : isBandwidth ? $yScale.domain() : typeof ticks2 === "function" ? ticks2($yScale.ticks()) : $yScale.ticks(ticks2);
  $$unsubscribe_yScale();
  $$unsubscribe_padding();
  $$unsubscribe_xRange();
  return `


<g class="${"axis y-axis"}" transform="${"translate(" + (0, import_index_f1ad1a08.e)(-$padding.left, true) + ", 0)"}">${(0, import_index_f1ad1a08.b)(tickVals, (tick) => {
    return `<g class="${"tick tick-" + (0, import_index_f1ad1a08.e)(tick, true) + " svelte-16pga92"}" transform="${"translate(" + (0, import_index_f1ad1a08.e)($xRange[0] + (isBandwidth ? $padding.left : 0), true) + ", " + (0, import_index_f1ad1a08.e)($yScale(tick), true) + ")"}">${gridlines !== false ? `<line class="${"gridline svelte-16pga92"}" x2="${"100%"}"${(0, import_index_f1ad1a08.d)("y1", yTick + (isBandwidth ? $yScale.bandwidth() / 2 : 0), 0)}${(0, import_index_f1ad1a08.d)("y2", yTick + (isBandwidth ? $yScale.bandwidth() / 2 : 0), 0)}></line>` : ``}${tickMarks === true ? `<line class="${"tick-mark svelte-16pga92"}" x1="${"0"}"${(0, import_index_f1ad1a08.d)("x2", isBandwidth ? -6 : 6, 0)}${(0, import_index_f1ad1a08.d)("y1", yTick + (isBandwidth ? $yScale.bandwidth() / 2 : 0), 0)}${(0, import_index_f1ad1a08.d)("y2", yTick + (isBandwidth ? $yScale.bandwidth() / 2 : 0), 0)}></line>` : ``}<text${(0, import_index_f1ad1a08.d)("x", xTick, 0)}${(0, import_index_f1ad1a08.d)("y", yTick + (isBandwidth ? $yScale.bandwidth() / 2 : 0), 0)}${(0, import_index_f1ad1a08.d)("dx", isBandwidth ? -9 : dxTick, 0)}${(0, import_index_f1ad1a08.d)("dy", isBandwidth ? 4 : dyTick, 0)} style="${"text-anchor:" + (0, import_index_f1ad1a08.e)(isBandwidth ? "end" : textAnchor, true) + ";"}" class="${"svelte-16pga92"}">${(0, import_index_f1ad1a08.e)(formatTick(tick))}</text></g>`;
  })}</g>`;
});
const data = [
  {
    player: "Connor Roberts",
    short: 15,
    medium: 15,
    long: 2
  },
  {
    player: "James Tarkowski",
    short: 9,
    medium: 12,
    long: 10
  },
  {
    player: "Ashley Westwood",
    short: 12,
    medium: 11,
    long: 4
  },
  {
    player: "Josh Brownhill",
    short: 14,
    medium: 10,
    long: 1
  },
  {
    player: "Aaron Lennon",
    short: 18,
    medium: 5,
    long: 2
  },
  {
    player: "Nathan Collins",
    short: 6,
    medium: 14,
    long: 4
  },
  {
    player: "Charlie Taylor",
    short: 9,
    medium: 6,
    long: 5
  },
  {
    player: "Maxwel Cornet",
    short: 7,
    medium: 7,
    long: 1
  },
  {
    player: "Wout Weghorst",
    short: 9,
    medium: 4,
    long: 1
  },
  {
    player: "Dwight McNeil",
    short: 2,
    medium: 9,
    long: 4
  }
];
const misc = {
  team: "Burnley",
  date: "2022-03-12"
};
const passing = {
  data,
  misc
};
const StackedBar_svelte_svelte_type_style_lang = "";
const css$6 = {
  code: ".chart-container.svelte-tmgah1{width:100%;height:100%}.ledg-cont.svelte-tmgah1{width:max-content;float:right}",
  map: null
};
const xKey = "player";
const zKey = "key";
const StackedBar = (0, import_index_f1ad1a08.c)(($$result, $$props, $$bindings, slots) => {
  let data2 = passing.data;
  console.log("dat", data2);
  const yKey = [0, 1];
  const seriesNames = Object.keys(data2[0]).filter((d) => d !== xKey);
  const seriesColors = ["#83DBD7", "#2F7E9F", "#E57873"];
  data2.forEach((d) => {
    seriesNames.forEach((name) => {
      d[name] = +d[name];
    });
  });
  const stackData = stack().keys(seriesNames);
  const series = stackData(data2);
  const formatTickY = (d) => format(`.${precisionFixed(d)}s`)(d);
  $$result.css.add(css$6);
  return `<div class="${"chart-container svelte-tmgah1"}"><div class="${"ledg-cont svelte-tmgah1"}">${(0, import_index_f1ad1a08.v)(Legend, "Legend").$$render(
    $$result,
    {
      domain: ["short", "medium", "long"],
      colors: seriesColors
    },
    {},
    {}
  )}</div>
	${(0, import_index_f1ad1a08.v)(LayerCake, "LayerCake").$$render(
    $$result,
    {
      padding: { top: 0, right: 0, bottom: 20, left: 20 },
      x: (d) => d.data[xKey],
      y: yKey,
      z: zKey,
      xScale: band().paddingInner([0.02]).round(true),
      xDomain: uniques(data2, xKey),
      zScale: ordinal(),
      zDomain: seriesNames,
      zRange: seriesColors,
      flatData: flatten(series),
      data: series
    },
    {},
    {
      default: () => {
        return `${(0, import_index_f1ad1a08.v)(Svg, "Svg").$$render($$result, {}, {}, {
          default: () => {
            return `${(0, import_index_f1ad1a08.v)(AxisX, "AxisX").$$render($$result, { gridlines: false }, {}, {})}
			${(0, import_index_f1ad1a08.v)(AxisY, "AxisY").$$render(
              $$result,
              {
                ticks: 4,
                gridlines: false,
                formatTick: formatTickY
              },
              {},
              {}
            )}
			${(0, import_index_f1ad1a08.v)(ColumnStacked, "ColumnStacked").$$render($$result, {}, {}, {})}`;
          }
        })}`;
      }
    }
  )}
</div>`;
});
const ShareButton_svelte_svelte_type_style_lang = "";
const css$5 = {
  code: ".ssbc-button__link.svelte-abzkh4,.ssbc-button__icon.svelte-abzkh4{display:inline-block}.ssbc-button__link.svelte-abzkh4{text-decoration:none;color:#fff}.ssbc-button.svelte-abzkh4{transition:25ms ease-out;padding:0.75em}.ssbc-button__icon.svelte-abzkh4 svg{width:1em;height:1em;margin:0;vertical-align:middle}.ssbc-button__icon--fill.svelte-abzkh4{fill:#fff;stroke:none}.ssbc-button__icon--outline.svelte-abzkh4{fill:none;stroke:#fff}",
  map: null
};
const ShareButton = (0, import_index_f1ad1a08.c)(($$result, $$props, $$bindings, slots) => {
  let { href } = $$props;
  let { label = "" } = $$props;
  let { fill = true } = $$props;
  let { ariaLabel = "" } = $$props;
  let { class: classes = "" } = $$props;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.label === void 0 && $$bindings.label && label !== void 0)
    $$bindings.label(label);
  if ($$props.fill === void 0 && $$bindings.fill && fill !== void 0)
    $$bindings.fill(fill);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0)
    $$bindings.class(classes);
  $$result.css.add(css$5);
  return `<a class="${"ssbc-button__link svelte-abzkh4"}"${(0, import_index_f1ad1a08.d)("href", href, 0)} target="${"_blank"}" rel="${"noopener"}"${(0, import_index_f1ad1a08.d)("aria-label", ariaLabel, 0)}><div class="${"ssbc-button " + (0, import_index_f1ad1a08.e)(classes, true) + " svelte-abzkh4"}"><div aria-hidden="${"true"}" class="${[
    "ssbc-button__icon svelte-abzkh4",
    (fill ? "ssbc-button__icon--fill" : "") + " " + (!fill ? "ssbc-button__icon--outline" : "")
  ].join(" ").trim()}">${slots.default ? slots.default({}) : ``}</div>
    ${(0, import_index_f1ad1a08.e)(label)}</div></a>`;
});
const Email_svelte_svelte_type_style_lang = "";
const Facebook_svelte_svelte_type_style_lang = "";
const css$4 = {
  code: ".ssbc-button--facebook{background-color:#3b5998}.ssbc-button--facebook:active,.ssbc-button--facebook:hover{background-color:#2d4373}",
  map: null
};
const Facebook = (0, import_index_f1ad1a08.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_f1ad1a08.k)($$props, ["quote", "url", "ariaLabel", "class"]);
  let { quote } = $$props;
  let { url } = $$props;
  let { ariaLabel = "Share on Facebook" } = $$props;
  let { class: classes = "" } = $$props;
  let href;
  if ($$props.quote === void 0 && $$bindings.quote && quote !== void 0)
    $$bindings.quote(quote);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0)
    $$bindings.class(classes);
  $$result.css.add(css$4);
  href = encodeURI(`https://facebook.com/sharer/sharer.php?u=${url}&quote=${quote}`);
  return `${(0, import_index_f1ad1a08.v)(ShareButton, "ShareButton").$$render(
    $$result,
    Object.assign(
      {
        class: "ssbc-button--facebook " + classes
      },
      $$restProps,
      { ariaLabel },
      { href }
    ),
    {},
    {
      default: () => {
        return `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 24 24"}"><path d="${"M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"}"></path></svg>`;
      }
    }
  )}`;
});
const HackerNews_svelte_svelte_type_style_lang = "";
const LinkedIn_svelte_svelte_type_style_lang = "";
const Pinterest_svelte_svelte_type_style_lang = "";
const Reddit_svelte_svelte_type_style_lang = "";
const css$3 = {
  code: ".ssbc-button--reddit{background-color:#5f99cf}.ssbc-button--reddit:active,.ssbc-button--reddit:hover{background-color:#3a80c1}",
  map: null
};
const Reddit = (0, import_index_f1ad1a08.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_f1ad1a08.k)($$props, ["title", "url", "ariaLabel", "class"]);
  let { title } = $$props;
  let { url } = $$props;
  let { ariaLabel = "Share on Reddit" } = $$props;
  let { class: classes = "" } = $$props;
  let href;
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0)
    $$bindings.class(classes);
  $$result.css.add(css$3);
  href = encodeURI(`https://reddit.com/submit/?url=${url}&resubmit=true&title=${title}`);
  return `${(0, import_index_f1ad1a08.v)(ShareButton, "ShareButton").$$render($$result, Object.assign({ class: "ssbc-button--reddit " + classes }, $$restProps, { ariaLabel }, { href }), {}, {
    default: () => {
      return `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 24 24"}"><path d="${"M24 11.5c0-1.65-1.35-3-3-3-.96 0-1.86.48-2.42 1.24-1.64-1-3.75-1.64-6.07-1.72.08-1.1.4-3.05 1.52-3.7.72-.4 1.73-.24 3 .5C17.2 6.3 18.46 7.5 20 7.5c1.65 0 3-1.35 3-3s-1.35-3-3-3c-1.38 0-2.54.94-2.88 2.22-1.43-.72-2.64-.8-3.6-.25-1.64.94-1.95 3.47-2 4.55-2.33.08-4.45.7-6.1 1.72C4.86 8.98 3.96 8.5 3 8.5c-1.65 0-3 1.35-3 3 0 1.32.84 2.44 2.05 2.84-.03.22-.05.44-.05.66 0 3.86 4.5 7 10 7s10-3.14 10-7c0-.22-.02-.44-.05-.66 1.2-.4 2.05-1.54 2.05-2.84zM2.3 13.37C1.5 13.07 1 12.35 1 11.5c0-1.1.9-2 2-2 .64 0 1.22.32 1.6.82-1.1.85-1.92 1.9-2.3 3.05zm3.7.13c0-1.1.9-2 2-2s2 .9 2 2-.9 2-2 2-2-.9-2-2zm9.8 4.8c-1.08.63-2.42.96-3.8.96-1.4 0-2.74-.34-3.8-.95-.24-.13-.32-.44-.2-.68.15-.24.46-.32.7-.18 1.83 1.06 4.76 1.06 6.6 0 .23-.13.53-.05.67.2.14.23.06.54-.18.67zm.2-2.8c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm5.7-2.13c-.38-1.16-1.2-2.2-2.3-3.05.38-.5.97-.82 1.6-.82 1.1 0 2 .9 2 2 0 .84-.53 1.57-1.3 1.87z"}"></path></svg>`;
    }
  })}`;
});
const Telegram_svelte_svelte_type_style_lang = "";
const Tumblr_svelte_svelte_type_style_lang = "";
const Twitter_svelte_svelte_type_style_lang = "";
const css$2 = {
  code: ".ssbc-button--twitter{background-color:#55acee}.ssbc-button--twitter:active,.ssbc-button--twitter:hover{background-color:#2795e9}",
  map: null
};
const Twitter = (0, import_index_f1ad1a08.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_f1ad1a08.k)($$props, ["text", "url", "ariaLabel", "hashtags", "via", "related", "class"]);
  let { text } = $$props;
  let { url } = $$props;
  let { ariaLabel = "Share on Twitter" } = $$props;
  let { hashtags = "" } = $$props;
  let { via = "" } = $$props;
  let { related = "" } = $$props;
  let { class: classes = "" } = $$props;
  let href;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.url === void 0 && $$bindings.url && url !== void 0)
    $$bindings.url(url);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.hashtags === void 0 && $$bindings.hashtags && hashtags !== void 0)
    $$bindings.hashtags(hashtags);
  if ($$props.via === void 0 && $$bindings.via && via !== void 0)
    $$bindings.via(via);
  if ($$props.related === void 0 && $$bindings.related && related !== void 0)
    $$bindings.related(related);
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0)
    $$bindings.class(classes);
  $$result.css.add(css$2);
  href = encodeURI(`https://twitter.com/intent/tweet/?text=${text}&hashtags=${hashtags}&via=${via}&related=${related}&url=${url}`);
  return `${(0, import_index_f1ad1a08.v)(ShareButton, "ShareButton").$$render($$result, Object.assign({ class: "ssbc-button--twitter " + classes }, $$restProps, { ariaLabel }, { href }), {}, {
    default: () => {
      return `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 24 24"}"><path d="${"M23.44 4.83c-.8.37-1.5.38-2.22.02.93-.56.98-.96 1.32-2.02-.88.52-1.86.9-2.9 1.1-.82-.88-2-1.43-3.3-1.43-2.5 0-4.55 2.04-4.55 4.54 0 .36.03.7.1 1.04-3.77-.2-7.12-2-9.36-4.75-.4.67-.6 1.45-.6 2.3 0 1.56.8 2.95 2 3.77-.74-.03-1.44-.23-2.05-.57v.06c0 2.2 1.56 4.03 3.64 4.44-.67.2-1.37.2-2.06.08.58 1.8 2.26 3.12 4.25 3.16C5.78 18.1 3.37 18.74 1 18.46c2 1.3 4.4 2.04 6.97 2.04 8.35 0 12.92-6.92 12.92-12.93 0-.2 0-.4-.02-.6.9-.63 1.96-1.22 2.56-2.14z"}"></path></svg>`;
    }
  })}`;
});
const Vk_svelte_svelte_type_style_lang = "";
const WhatsApp_svelte_svelte_type_style_lang = "";
const css$1 = {
  code: ".ssbc-button--whatsapp{background-color:#25D366}.ssbc-button--whatsapp:active,.ssbc-button--whatsapp:hover{background-color:#1DA851}",
  map: null
};
const WhatsApp = (0, import_index_f1ad1a08.c)(($$result, $$props, $$bindings, slots) => {
  let $$restProps = (0, import_index_f1ad1a08.k)($$props, ["text", "ariaLabel", "class"]);
  let { text } = $$props;
  let { ariaLabel = "Share on WhatsApp" } = $$props;
  let { class: classes = "" } = $$props;
  let href;
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  if ($$props.ariaLabel === void 0 && $$bindings.ariaLabel && ariaLabel !== void 0)
    $$bindings.ariaLabel(ariaLabel);
  if ($$props.class === void 0 && $$bindings.class && classes !== void 0)
    $$bindings.class(classes);
  $$result.css.add(css$1);
  href = encodeURI(`whatsapp://send?text=${text}`);
  return `${(0, import_index_f1ad1a08.v)(ShareButton, "ShareButton").$$render(
    $$result,
    Object.assign(
      {
        class: "ssbc-button--whatsapp " + classes
      },
      $$restProps,
      { ariaLabel },
      { href }
    ),
    {},
    {
      default: () => {
        return `<svg xmlns="${"http://www.w3.org/2000/svg"}" viewBox="${"0 0 24 24"}"><path d="${"M20.1 3.9C17.9 1.7 15 .5 12 .5 5.8.5.7 5.6.7 11.9c0 2 .5 3.9 1.5 5.6L.6 23.4l6-1.6c1.6.9 3.5 1.3 5.4 1.3 6.3 0 11.4-5.1 11.4-11.4-.1-2.8-1.2-5.7-3.3-7.8zM12 21.4c-1.7 0-3.3-.5-4.8-1.3l-.4-.2-3.5 1 1-3.4L4 17c-1-1.5-1.4-3.2-1.4-5.1 0-5.2 4.2-9.4 9.4-9.4 2.5 0 4.9 1 6.7 2.8 1.8 1.8 2.8 4.2 2.8 6.7-.1 5.2-4.3 9.4-9.5 9.4zm5.1-7.1c-.3-.1-1.7-.9-1.9-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1s-1.2-.5-2.3-1.4c-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6s.3-.3.4-.5c.2-.1.3-.3.4-.5.1-.2 0-.4 0-.5C10 9 9.3 7.6 9 7c-.1-.4-.4-.3-.5-.3h-.6s-.4.1-.7.3c-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.3-.3-.4-.6-.5z"}"></path></svg>`;
      }
    }
  )}`;
});
const Xing_svelte_svelte_type_style_lang = "";
const Line_svelte_svelte_type_style_lang = "";
const _teamName__svelte_svelte_type_style_lang = "";
const css = {
  code: ".chart-title.svelte-1vmxdiy{text-align:center;font-size:28px;margin-bottom:44px}.chart.svelte-1vmxdiy{width:100%;height:380px;margin-top:40px;margin-bottom:50px}.chart-cont.svelte-1vmxdiy{height:85%;margin:2%}text{font-size:10px}.bullet{width:20px !important;height:20px !important}li{font-size:medium !important}.share-cont.svelte-1vmxdiy{width:max-content;margin:auto;margin-top:40px}.selectedtweet.svelte-1vmxdiy{border:1px solid red;padding:5%;border-radius:20px;border:1px solid #00917c;padding:5%;border-radius:20px;background:#f0f7f6;margin:10px 0 30px 0}span.svelte-1vmxdiy:hover{background-color:yellow}.body2.svelte-1vmxdiy{font-family:system-ui;color:#000;font-size:16px;line-height:17px;font-weight:500;letter-spacing:0.06em;margin-top:18px}h2.svelte-1vmxdiy{font-family:system-ui;font-size:8vw;margin:auto;line-height:0.85}.tweets.svelte-1vmxdiy{color:var(--heading-color);line-height:initial;font-size:large;color:#434343;line-height:1.4;font-weight:300;cursor:pointer}#head-cont.svelte-1vmxdiy{background:black;color:white;width:100vw;margin:0 0 50px -16px;padding:5%;padding-bottom:25%}#text-top.svelte-1vmxdiy{height:50px}@media only screen and (max-width: 650px){#text-top.svelte-1vmxdiy{height:20px}#tweet-cont.svelte-1vmxdiy{width:revert !important}.tweets.svelte-1vmxdiy{font-size:medium}h2.svelte-1vmxdiy{font-size:10vw}}.ssbc-button{border-radius:5px}",
  map: null
};
const U5BteamNameu5D = (0, import_index_f1ad1a08.c)(($$result, $$props, $$bindings, slots) => {
  let teamName;
  let tweets$1;
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_f1ad1a08.a)(import_tweets_d6ccf3c2.p, (value) => $page = value);
  let misc2 = passing.misc;
  console.log("misc", misc2);
  let data2 = import_tweets_d6ccf3c2.t;
  data2 = Object.keys(data2).map((e) => {
    return data2[e];
  });
  let expanded;
  $$result.css.add(css);
  teamName = $page.params.teamName;
  teamName = import_fb_utils.teams.find((d) => d.id == teamName).name;
  tweets$1 = data2.find((e) => e.misc.team == teamName).data;
  tweets$1 = tweets$1.sort(function(a, b) {
    return parseInt(a["id"]) - parseInt(b["id"]);
  });
  {
    console.log(teamName, data2.find((e) => e.misc.team == teamName));
  }
  $$unsubscribe_page();
  return `<body class="${"body2 svelte-1vmxdiy"}">${(0, import_index_f1ad1a08.v)(import_tweets_d6ccf3c2.H, "Header").$$render($$result, {}, {}, {})}
	<div style="${"height: 50px;"}"></div>
    <div id="${"head-cont"}" class="${"svelte-1vmxdiy"}"><h2 class="${"svelte-1vmxdiy"}">Latest <span style="${"white-space: nowrap;"}" class="${"svelte-1vmxdiy"}">${(0, import_index_f1ad1a08.e)(teamName)}</span> <br> match report
        </h2></div>

	<div id="${"text-top"}" class="${"svelte-1vmxdiy"}"></div>
	<div id="${"tweet-cont"}" style="${"width: 640px; margin:0 auto;"}" class="${"svelte-1vmxdiy"}">${(0, import_index_f1ad1a08.b)(tweets$1, ({ id, text }, i) => {
    return `
            <div class="${(0, import_index_f1ad1a08.e)((0, import_index_f1ad1a08.l)(expanded == id ? "selectedtweet" : "unselectedtweet"), true) + " svelte-1vmxdiy"}"><div>${text.includes(".png") ? `<div class="${"chart svelte-1vmxdiy"}" id="${"chartpng"}"><h2 class="${"chart-title svelte-1vmxdiy"}">Successful passes by pass distance</h2>
                            <div class="${"chart-cont svelte-1vmxdiy"}">${(0, import_index_f1ad1a08.v)(StackedBar, "StackedBar").$$render($$result, {}, {}, {})}</div>
                        </div>` : `<span class="${"tweets svelte-1vmxdiy"}">${(0, import_index_f1ad1a08.e)(text)}</span>`}
                    <br>
                    ${expanded == id ? `<div class="${"share-cont svelte-1vmxdiy"}">${(0, import_index_f1ad1a08.v)(Twitter, "Twitter").$$render(
      $$result,
      {
        class: "share-button",
        text,
        url: "https://twitter.com/b/status/" + id
      },
      {},
      {}
    )}
                            ${(0, import_index_f1ad1a08.v)(Reddit, "Reddit").$$render(
      $$result,
      {
        class: "share-button",
        text: "Read this tweet from the latest " + teamName + " match",
        url: "https://twitter.com/b/status/" + id
      },
      {},
      {}
    )}
                            ${(0, import_index_f1ad1a08.v)(WhatsApp, "WhatsApp").$$render(
      $$result,
      {
        class: "share-button",
        text: text + " url=" + ("https://twitter.com/b/status/" + id)
      },
      {},
      {}
    )}
                            ${(0, import_index_f1ad1a08.v)(Facebook, "Facebook").$$render(
      $$result,
      {
        class: "share-button",
        quote: text,
        url: "https://twitter.com/b/status/" + id
      },
      {},
      {}
    )}
                        </div>` : ``}
                    <br></div>
            </div>`;
  })}</div></body>

`;
});
