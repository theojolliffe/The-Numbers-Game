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
  default: () => Routes
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f1ad1a08 = require("../../_app/immutable/chunks/index-f1ad1a08.js");
var import_tweets_d6ccf3c2 = require("../../_app/immutable/chunks/tweets-d6ccf3c2.js");
var import_fb_utils = require("../endpoints/fb-utils.js");
const index_svelte_svelte_type_style_lang = "";
const css = {
  code: ".body2.svelte-1sa3ipy{font-family:system-ui;color:#000;font-size:16px;line-height:17px;font-weight:500;letter-spacing:0.06em;margin-top:18px}h2.svelte-1sa3ipy{font-family:system-ui;font-size:12vw;margin:auto;line-height:0.85}a.svelte-1sa3ipy{text-decoration:auto;color:black}.row.svelte-1sa3ipy{border-bottom:1px solid #000;font-size:medium;padding-top:4px;padding-bottom:4px}.number.svelte-1sa3ipy{font-size:xx-large;line-height:1}.name.svelte-1sa3ipy{font-weight:800}.text.svelte-1sa3ipy{display:flex;justify-content:flex-start}.col1.svelte-1sa3ipy{overflow:hidden;width:40%}.last.svelte-1sa3ipy{border-bottom:none}.grid-container.svelte-1sa3ipy{display:grid;grid-template-columns:auto auto auto auto;grid-gap:10px;padding:10px}.team-div.svelte-1sa3ipy{background-color:rgba(255, 255, 255, 0.8);text-align:left;padding:20px 0;font-family:system-ui;font-size:1.4rem;width:100%}@media only screen and (max-width: 1180px){.grid-container.svelte-1sa3ipy{grid-template-columns:auto auto auto}}@media only screen and (max-width: 768px){.grid-container.svelte-1sa3ipy{grid-template-columns:auto auto}}@media only screen and (max-width: 600px){.grid-container.svelte-1sa3ipy{grid-template-columns:auto}}",
  map: null
};
function addZeros(id) {
  if (String(id).length < 3) {
    id = "0" + id;
  }
  if (String(id).length < 3) {
    id = "0" + id;
  }
  return id;
}
const Routes = (0, import_index_f1ad1a08.c)(($$result, $$props, $$bindings, slots) => {
  let $page, $$unsubscribe_page;
  $$unsubscribe_page = (0, import_index_f1ad1a08.a)(import_tweets_d6ccf3c2.p, (value) => $page = value);
  let data = import_tweets_d6ccf3c2.t;
  data = Object.keys(data).map((e) => {
    return data[e];
  });
  data.sort(function(a, b) {
    return b.misc.story_id - a.misc.story_id;
  });
  console.log("data", data);
  $$result.css.add(css);
  $$unsubscribe_page();
  return `<body class="${"body2 svelte-1sa3ipy"}">${(0, import_index_f1ad1a08.v)(import_tweets_d6ccf3c2.H, "Header").$$render($$result, {}, {}, {})}

    <h2 class="${"svelte-1sa3ipy"}">Premier League<br>Statistics
    </h2>
    <div class="${"grid-container svelte-1sa3ipy"}">${(0, import_index_f1ad1a08.b)(data, ({ data: data2, misc }, i) => {
    return `<a sveltekit:prefetch${(0, import_index_f1ad1a08.d)("href", "/team/" + import_fb_utils.teams.find((d) => d.name == misc.team)["id"], 0)} class="${"svelte-1sa3ipy"}"><div class="${[
      "team-div svelte-1sa3ipy",
      $page.url.pathname === "/" + import_fb_utils.teams.find((d) => d.name == misc.team)["id"] ? "active" : ""
    ].join(" ").trim()}"><div class="${"row number svelte-1sa3ipy"}">${(0, import_index_f1ad1a08.e)(addZeros(misc.story_id))}</div>
                    <div class="${"row name svelte-1sa3ipy"}">${(0, import_index_f1ad1a08.e)(misc.team)}</div>
                    <div class="${"row text svelte-1sa3ipy"}"><div class="${"col1 svelte-1sa3ipy"}">Opponent</div>
                        <div>${(0, import_index_f1ad1a08.e)(misc.opponent)}</div></div>
                    <div class="${"row text svelte-1sa3ipy"}"><div class="${"col1 svelte-1sa3ipy"}">Result</div>

                        ${misc.home == "home" ? `<div><strong>${(0, import_index_f1ad1a08.e)(misc.result[0])}</strong><span style="${"color: #686868;"}">-${(0, import_index_f1ad1a08.e)(misc.result[1])}</span></div>` : `<div><span style="${"color: #686868;"}">${(0, import_index_f1ad1a08.e)(misc.result[0])}-</span><strong>${(0, import_index_f1ad1a08.e)(misc.result[1])}</strong></div>`}</div>
                    <div class="${"row text last svelte-1sa3ipy"}"><div class="${"col1 svelte-1sa3ipy"}">Date</div>
                        <div>${(0, import_index_f1ad1a08.e)(misc.date)}</div>
                    </div></div>
            </a>`;
  })}</div>
</body>`;
});
