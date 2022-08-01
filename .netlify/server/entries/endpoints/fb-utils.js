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
  teams: () => teams
});
module.exports = __toCommonJS(stdin_exports);
var teams = [
  { id: "tottenham", name: "Tottenham" },
  { id: "liverpool", name: "Liverpool" },
  { id: "man-city", name: "Manchester City" },
  { id: "newcastle", name: "Newcastle Utd" },
  { id: "chelsea", name: "Chelsea" },
  { id: "west-ham", name: "West Ham" },
  { id: "arsenal", name: "Arsenal" },
  { id: "burnley", name: "Burnley" },
  { id: "watford", name: "Watford" },
  { id: "leeds", name: "Leeds United" },
  { id: "everton", name: "Everton" },
  { id: "brentford", name: "Brentford" },
  { id: "southampton", name: "Southampton" },
  { id: "aston-villa", name: "Aston Villa" },
  { id: "crystal-palace", name: "Crystal Palace" },
  { id: "brighton", name: "Brighton" },
  { id: "leicester", name: "Leicester City" },
  { id: "wolves", name: "Wolves" },
  { id: "man-utd", name: "Manchester Utd" },
  { id: "norwich", name: "Norwich City" }
];
