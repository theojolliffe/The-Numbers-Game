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
  H: () => Header,
  p: () => page,
  t: () => tweets
});
module.exports = __toCommonJS(stdin_exports);
var import_index_f1ad1a08 = require("./index-f1ad1a08.js");
const Header_svelte_svelte_type_style_lang = "";
const css = {
  code: ".headline.svelte-1cvjk8s{position:relative;z-index:999;display:flex;width:98%;padding:4px 8px 20px 16px}.top-50.svelte-1cvjk8s{display:flex;max-width:500px;padding-right:10px;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column;-webkit-box-flex:0;width:1600px}.text-semi.svelte-1cvjk8s{font-size:48px;line-height:1;font-weight:400}.text-regular.svelte-1cvjk8s{font-size:14px;line-height:1.15;font-weight:400}.div-block-107.svelte-1cvjk8s{display:flex;padding-top:18px;flex-wrap:wrap;align-items:center}.text-regular.bold.info-link.svelte-1cvjk8s{margin-right:4px;margin-left:0px;padding:2px 6px 3px;border:1px solid #000;border-radius:24px;color:#000;font-weight:400;text-decoration:none;cursor:pointer}.text-regular.bold.info-link.bluehighlight.svelte-1cvjk8s{background-color:#c0eeff}.text-regular.bold.info-link.pinkhighlight.svelte-1cvjk8s{background-color:#ffc2fd}.source.svelte-1cvjk8s{text-decoration:underline}a.svelte-1cvjk8s{text-decoration:auto;color:black}.top-50.svelte-1cvjk8s{width:180%;margin-right:60px}@media only screen and (max-width: 600px){.headline.svelte-1cvjk8s{display:revert;padding:4px 8px 20px 4px}.top-50.svelte-1cvjk8s{width:100%;margin-bottom:20px}}",
  map: null
};
const Header = (0, import_index_f1ad1a08.c)(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<div id="${"top"}" class="${"headline svelte-1cvjk8s"}"><div class="${"top-50 svelte-1cvjk8s"}"><a sveltekit:prefetch href="${"/"}" class="${"svelte-1cvjk8s"}"><div class="${"text-semi svelte-1cvjk8s"}">The Numbers Game
            </div></a>
        <div class="${"div-block-107 svelte-1cvjk8s"}"><div class="${"div-block-109"}"><a href="${"https://twitter.com/_Numbers_Game"}" target="${"_blank"}" class="${"text-regular bold info-link bluehighlight svelte-1cvjk8s"}">Twitter</a>
                <a href="${"mailto:seeablenews@gmail.com"}" target="${"_blank"}" class="${"text-regular bold info-link pinkhighlight svelte-1cvjk8s"}">Email</a></div></div></div>
    <div class="${"flex"}"><div class="${"text-regular svelte-1cvjk8s"}">This is an experiment in data journalism, using a machine learning model to generate articles based on football data. I am currently using a Text-to-Text transformer model (called T5) which can be trained to turn data into into natural language. The project is in an early stage of development and will contain errors. Please verify accuracy with <a class="${"source svelte-1cvjk8s"}" href="${"https://fbref.com/en/"}">FBREF</a>, the original data source, before sharing content.
            <br></div></div>
</div>`;
});
const getStores = () => {
  const stores = (0, import_index_f1ad1a08.g)("__svelte__");
  return {
    page: {
      subscribe: stores.page.subscribe
    },
    navigating: {
      subscribe: stores.navigating.subscribe
    },
    get preloading() {
      console.error("stores.preloading is deprecated; use stores.navigating instead");
      return {
        subscribe: stores.navigating.subscribe
      };
    },
    session: stores.session,
    updated: stores.updated
  };
};
const page = {
  subscribe(fn) {
    const store = getStores().page;
    return store.subscribe(fn);
  }
};
const tweets = {
  "0": {
    data: [
      {
        text: "Chelsea saw slightly less of the ball, completing 544 passes to Tottenham's 265. This season Chelsea have averaged 507.0 passes per 90 minutes.",
        id: "1488593358293450756"
      },
      {
        text: "Chelsea took seven shots on target, up from three in their last game against Brighton. This season the Blues have averaged 5.0 per 90 minutes.",
        id: "1488593377113296896"
      },
      {
        text: "Chelsea applied less pressure high up the pitch, pressing 38 times in the final third, compared with 28 times in their last game (against Brighton).",
        id: "1488593396092620801"
      },
      {
        text: "Chelsea succesffuly played an impressive 37 passes into the final third, considerably less than the 16 from Tottenham. In their last game (against Brighton) the Blues completed 35 passes into the final third.",
        id: "1488593415218647041"
      },
      {
        text: "Chelsea were given an average of 5.3 touches each time the opponent pressed - less than the average amount of touches they've been given this season (5.0 touches per press).",
        id: "1488593433879105543"
      },
      {
        text: "Chelsea made 11 successful tackles, considerably more than the seven from Tottenham. In their last game (against Brighton) Chelsea made six successful tackles.",
        id: "1488593452627550215"
      },
      {
        text: "Hakim Ziyech, our man of the match, created some of the best chances of the game - tallying an xA of 0.2.",
        id: "1488593471220891648"
      },
      {
        text: "Hakim Ziyech took four shots on target - more than any other player on the pitch.",
        id: "1488593489948549126"
      },
      {
        text: "Hakim Ziyech carried the ball farther towards the opponent's goal than any other player on the pitch (a combined 240 yards), while Callum Hudson-Odoi carried the ball a combined 189 yards towards the opponent's goal.",
        id: "1488593508869021702"
      },
      {
        text: "Callum Hudson-Odoi carried the ball into the final third eight times - more than any other Chelsea player.",
        id: "1488593531035783171"
      },
      {
        text: "Callum Hudson-Odoi completed two successful dribbles, while Hakim Ziyech completed two.",
        id: "1488593550447161350"
      }
    ],
    misc: {
      story_id: 0,
      team: "Chelsea",
      opponent: "Tottenham",
      result: [
        2,
        0
      ],
      date: "2022-01-23",
      home: "home",
      stories: [
        [
          [
            "Chelsea",
            "Passing_Total Succ",
            544
          ],
          [
            "Tottenham",
            "Passing_Total Succ",
            265
          ],
          [
            "Chelsea",
            "Passing_Total Succ Season",
            507
          ]
        ],
        [
          [
            "Chelsea",
            "Attack_sot",
            7
          ],
          [
            "Tottenham",
            "Attack_sot",
            3
          ],
          [
            "Chelsea",
            "Attack_sot Previous Brighton",
            3
          ],
          [
            "Chelsea",
            "Attack_sot Season",
            5
          ]
        ],
        [
          [
            "Chelsea",
            "Attack_Press Final Third",
            38
          ],
          [
            "Chelsea",
            "Attack_Press Final Third Previous Brighton",
            28
          ]
        ],
        [
          [
            "Chelsea",
            "Passing_Passes Final Third",
            37
          ],
          [
            "Tottenham",
            "Passing_Passes Final Third",
            16
          ],
          [
            "Chelsea",
            "Passing_Passes Final Third Previous Brighton",
            35
          ]
        ],
        [
          [
            "Chelsea",
            "Possession_Tch PPress Taken Ratio",
            5.3
          ],
          [
            "Chelsea",
            "Possession_Tch PPress Taken Ratio Season",
            5
          ]
        ],
        [
          [
            "Chelsea",
            "Defence_Tackles Succ",
            11
          ],
          [
            "Tottenham",
            "Defence_Tackles Succ",
            7
          ],
          [
            "Chelsea",
            "Defence_Tackles Succ Previous Brighton",
            6
          ]
        ],
        [
          [
            "Hakim Ziyech - Chelsea",
            "Attack_xa",
            0.2
          ],
          [
            "Hakim Ziyech - Chelsea",
            "MOTM",
            "true"
          ]
        ],
        [
          [
            "Hakim Ziyech - Chelsea",
            "Attack_sot",
            4
          ],
          [
            "Hakim Ziyech - Chelsea",
            "Attack_sot Rank",
            1
          ]
        ],
        [
          [
            "Hakim Ziyech - Chelsea",
            "Possession_Carries Prg Dist",
            240
          ],
          [
            "Hakim Ziyech - Chelsea",
            "Possession_Carries Prg Dist Rank",
            1
          ],
          [
            "Callum Hudson-Odoi - Chelsea",
            "Possession_Carries Prg Dist",
            189
          ],
          [
            "Callum Hudson-Odoi - Chelsea",
            "Possession_Carries Prg Dist Rank",
            2
          ]
        ],
        [
          [
            "Callum Hudson-Odoi - Chelsea",
            "Possession_Carries Final Third",
            2
          ],
          [
            "Callum Hudson-Odoi - Chelsea",
            "Possession_Carries Final Third Teamrank",
            1
          ]
        ],
        [
          [
            "Hakim Ziyech - Chelsea",
            "Possession_Drb Succ",
            2
          ],
          [
            "Callum Hudson-Odoi - Chelsea",
            "Possession_Drb Succ",
            2
          ],
          [
            "Callum Hudson-Odoi - Chelsea",
            "Possession_Drb Succ Teamrank",
            1
          ],
          [
            "Hakim Ziyech - Chelsea",
            "Possession_Drb Succ Teamrank",
            2
          ]
        ]
      ]
    }
  },
  "1": {
    data: [
      {
        text: "Arsenal created more than Burnley, finding chances worth 1.2 expected goals to Burnley's 0.4.",
        id: "1489376775746592768"
      },
      {
        text: "Arsenal saw more of the ball, completing 591 passes to Burnley's 153. In their last game (against Manchester City) Arsenal completed 192 passes.",
        id: "1489376794528690176"
      },
      {
        text: "Arsenal took five shots on target, up from two in their last game against Manchester City.",
        id: "1489376814158036993"
      },
      {
        text: "Arsenal succesffuly played an impressive 33 passes into the final third, compared with 13 from Burnley.",
        id: "1489376833216913409"
      },
      {
        text: "Arsenal were given a lot of time on the ball, taking an average of 12.0 touches each time the opponent pressed - Burnley took an average of 2.9 touches per press.",
        id: "1489376852884037632"
      },
      {
        text: "In their last game, Arsenal took an average of 5.7 touches each time Manchester City pressed and have averaged (5.0 touches per press this season).",
        id: "1489376871468965889"
      },
      {
        text: "Arsenal won an impressive 21 aerial duels, considerably more than the 10 they won in their last game (against Manchester City).",
        id: "1489376890146201603"
      },
      {
        text: "Gabriel Dos Santos carried the ball a combined 435 yards towards the opponent's goal - farther than any other player on the pitch.",
        id: "1489376909096112130"
      }
    ],
    misc: {
      story_id: 1,
      team: "Arsenal",
      opponent: "Burnley",
      result: [
        0,
        0
      ],
      date: "2022-01-23",
      home: "home",
      stories: [
        [
          [
            "Arsenal",
            "Attack_xg",
            1.2
          ],
          [
            "Burnley",
            "Attack_xg",
            0.4
          ]
        ],
        [
          [
            "Arsenal",
            "Passing_Total Succ",
            591
          ],
          [
            "Burnley",
            "Passing_Total Succ",
            153
          ],
          [
            "Arsenal",
            "Passing_Total Succ Previous Manchester City",
            192
          ]
        ],
        [
          [
            "Arsenal",
            "Attack_sot",
            5
          ],
          [
            "Burnley",
            "Attack_sot",
            1
          ],
          [
            "Arsenal",
            "Attack_sot Previous Manchester City",
            2
          ]
        ],
        [
          [
            "Arsenal",
            "Passing_Passes Final Third",
            33
          ],
          [
            "Burnley",
            "Passing_Passes Final Third",
            13
          ]
        ],
        [
          [
            "Arsenal",
            "Possession_Tch PPress Taken Ratio",
            12
          ],
          [
            "Burnley",
            "Possession_Tch PPress Taken Ratio",
            2.9
          ],
          [
            "Arsenal",
            "Possession_Tch PPress Taken Ratio Previous Manchester City",
            5.7
          ],
          [
            "Arsenal",
            "Possession_Tch PPress Taken Ratio Season",
            5
          ]
        ],
        [
          [
            "Arsenal",
            "Defence_Aerial Succ",
            21
          ],
          [
            "Arsenal",
            "Defence_Aerial Succ Previous Manchester City",
            10
          ]
        ],
        [
          [
            "Gabriel Dos Santos - Arsenal",
            "Possession_Carries Prg Dist",
            435
          ],
          [
            "Gabriel Dos Santos - Arsenal",
            "Possession_Carries Prg Dist Rank",
            1
          ]
        ]
      ]
    }
  },
  "2": {
    data: [
      {
        text: "Manchester City saw more of the ball, completing an impressive 708 passes to Southampton's 205. In their last game (against Chelsea) Manchester City completed 531 passes.",
        id: "1490776824959447048"
      },
      {
        text: "Manchester City_2022-01-22_passing.png",
        id: "1490776845817716736"
      },
      {
        text: "Manchester City completed 93 long balls, while Southampton managed 29.",
        id: "1490776864587190272"
      },
      {
        text: "Manchester City were given an average of 7.1 touches each time the opponent pressed - Southampton took an average of 2.1 touches per press. In their last game, Manchester City took an average of 3.5 touches for Chelsea press.",
        id: "1490776883453210625"
      },
      {
        text: "Manchester City attempted 21 challenges in this game, considerably more than the 11 they made during their last game (against Chelsea). This season they have averaged 13.0 challenges per 90 minutes.",
        id: "1490776902285643778"
      },
      {
        text: "Manchester City made 10 successful tackles in this match, considerably more than the 8.6 successful tackles they've averaged per 90 minutes this season.",
        id: "1490776920744673292"
      },
      {
        text: "Manchester City attempted three challenges in the defensive third. In their last game (against Chelsea) City attempted one challenge in the defensive third.",
        id: "1490776939380027396"
      },
      {
        text: "Manchester City won 17 aerial duels, considerably more than their average per 90 minutes this season (13.0).",
        id: "1490776958040350721"
      },
      {
        text: "Aymeric Laporte passed the ball a total of 566 yards towards the opponents goal and succesfully played 15 long balls.",
        id: "1490776976965132288"
      },
      {
        text: "Jack Grealish successfuly recieved 13 progressive passes (more than any other player on the pitch), while Phil Foden recieved 10 progressive passes.",
        id: "1490776995470454788"
      },
      {
        text: "Aymeric Laporte made one clearances and won five aerial duels (more than any other player on the pitch).",
        id: "1490777014034386945"
      }
    ],
    misc: {
      story_id: 2,
      team: "Manchester City",
      opponent: "Southampton",
      result: [
        1,
        1
      ],
      date: "2022-01-22",
      home: "away",
      stories: [
        [
          [
            "Manchester City",
            "Passing_Total Succ",
            708
          ],
          [
            "Southampton",
            "Passing_Total Succ",
            205
          ],
          [
            "Manchester City",
            "Passing_Total Succ Previous Chelsea",
            531
          ]
        ],
        "Manchester City_2022-01-22_passing.png",
        [
          [
            "Manchester City",
            "Passing_Long Succ",
            93
          ],
          [
            "Southampton",
            "Passing_Long Succ",
            29
          ]
        ],
        [
          [
            "Manchester City",
            "Possession_Tch PPress Taken Ratio",
            7.1
          ],
          [
            "Southampton",
            "Possession_Tch PPress Taken Ratio",
            2.1
          ],
          [
            "Manchester City",
            "Possession_Tch PPress Taken Ratio Previous Chelsea",
            3.5
          ]
        ],
        [
          [
            "Manchester City",
            "Defence_Tackles",
            21
          ],
          [
            "Manchester City",
            "Defence_Tackles Previous Chelsea",
            11
          ],
          [
            "Manchester City",
            "Defence_Tackles Season",
            13
          ]
        ],
        [
          [
            "Manchester City",
            "Defence_Tackles Succ",
            10
          ],
          [
            "Manchester City",
            "Defence_Tackles Succ Season",
            8.6
          ]
        ],
        [
          [
            "Manchester City",
            "Defence_Tackles Def Third",
            3
          ],
          [
            "Manchester City",
            "Defence_Tackles Def Third Previous Chelsea",
            1
          ]
        ],
        [
          [
            "Manchester City",
            "Defence_Aerial Succ",
            17
          ],
          [
            "Manchester City",
            "Defence_Aerial Succ Season",
            13
          ]
        ],
        [
          [
            "Aymeric Laporte - Manchester City",
            "Passing_Passes Final Third",
            11
          ],
          [
            "Aymeric Laporte - Manchester City",
            "Passing_Passes Final Third Rank",
            1
          ],
          [
            "Aymeric Laporte - Manchester City",
            "Passing_Passes Prg Dist",
            566
          ],
          [
            "Aymeric Laporte - Manchester City",
            "Passing_Long Succ",
            15
          ]
        ],
        [
          [
            "Jack Grealish - Manchester City",
            "Possession_Receive Prog",
            13
          ],
          [
            "Jack Grealish - Manchester City",
            "Possession_Receive Prog Rank",
            1
          ],
          [
            "Phil Foden - Manchester City",
            "Possession_Receive Prog",
            10
          ],
          [
            "Phil Foden - Manchester City",
            "Possession_Receive Prog Rank",
            2
          ]
        ]
      ]
    }
  },
  "3": {
    data: [
      {
        text: "Liverpool succesffuly played an impressive 33 passes into the final third, compared with 18 from Brighton.",
        id: "1503162838055104516"
      },
      {
        text: "Liverpool were patient off the ball, giving their opponents an average of 3.7 touches each time they pressed. In their last game they gave West Ham an average of 2.4 touches each time they pressed.",
        id: "1503162856983904260"
      },
      {
        text: "Liverpool attempted 18 challenges resulting in nine successful tackles. In their last game (against West Ham) Liverpool attempted seven challenges.",
        id: "1503162876072275974"
      },
      {
        text: "Liverpool attempted 10 challenges in the defensive third, considerably more than the four made by Brighton. In their last game (against West Ham) the Reds attempted two challenges in the defensive third, while throughout the season they've averaged 4.8 per 90 minutes.",
        id: "1503162895567396869"
      },
      {
        text: "Liverpool won 63% or the game's aerial duels. Brighton won 37%.",
        id: "1503162914777317377"
      },
      {
        text: "Trent Alexander-Arnold played an impressive four key passes resulting in Luis Diaz's two successful shots, while Luis Diaz carried the ball into the box three times (more than anyone else on the pitch).",
        id: "1503162933630668803"
      },
      {
        text: "Luis Diaz successfuly recieved 10 progressive passes (more than any other player on the pitch) and made three successful tackles.",
        id: "1503162952773419009"
      },
      {
        text: "Luis Diaz carried the ball farther towards the opponent's goal than any other player on the pitch (a combined 178 yards), more than anyone else on the pitch.",
        id: "1503162971782107139"
      },
      {
        text: "Trent Alexander-Arnold carried the ball into the final third three times (more than any other player on the pitch), more than any other player on the pitch.",
        id: "1503162991155548161"
      }
    ],
    misc: {
      story_id: 3,
      team: "Liverpool",
      opponent: "Brighton",
      result: [
        0,
        2
      ],
      date: "2022-03-12",
      home: "away",
      stories: [
        [
          [
            "Liverpool",
            "Passing_Passes Final Third",
            33
          ],
          [
            "Brighton",
            "Passing_Passes Final Third",
            18
          ]
        ],
        [
          [
            "Liverpool",
            "Possession_Tch PPress Given Ratio",
            3.7
          ],
          [
            "Liverpool",
            "Possession_Tch PPress Given Ratio Previous West Ham",
            2.4
          ]
        ],
        [
          [
            "Liverpool",
            "Defence_Tackles",
            18
          ],
          [
            "Liverpool",
            "Defence_Tackles Previous West Ham",
            7
          ],
          [
            "Liverpool",
            "Defence_Tackles Succ",
            9
          ]
        ],
        [
          [
            "Liverpool",
            "Defence_Tackles Def Third",
            10
          ],
          [
            "Brighton",
            "Defence_Tackles Def Third",
            4
          ],
          [
            "Liverpool",
            "Defence_Tackles Def Third Previous West Ham",
            2
          ],
          [
            "Liverpool",
            "Defence_Tackles Def Third Season",
            4.8
          ]
        ],
        [
          [
            "Liverpool",
            "Defence_Aerial Perc",
            63
          ],
          [
            "Brighton",
            "Defence_Aerial Perc",
            37
          ]
        ],
        [
          [
            "Luis Diaz - Liverpool",
            "Attack_KP",
            2
          ],
          [
            "Trent Alexander-Arnold - Liverpool",
            "Attack_KP",
            4
          ],
          [
            "Trent Alexander-Arnold - Liverpool",
            "Attack_KPRank",
            1
          ],
          [
            "Luis Diaz - Liverpool",
            "Attack_Carries PA",
            3
          ],
          [
            "Luis Diaz - Liverpool",
            "Attack_Carries PARank",
            1
          ]
        ],
        [
          [
            "Luis Diaz - Liverpool",
            "Possession_Receive Prog",
            10
          ],
          [
            "Luis Diaz - Liverpool",
            "Possession_Receive Prog Rank",
            1
          ],
          [
            "Luis Diaz - Liverpool",
            "Defence_Tackles",
            4
          ],
          [
            "Luis Diaz - Liverpool",
            "Defence_Tackles Succ",
            3
          ]
        ],
        [
          [
            "Luis Diaz - Liverpool",
            "Possession_Carries Prg Dist",
            178
          ],
          [
            "Luis Diaz - Liverpool",
            "Possession_Carries Prg Dist Rank",
            1
          ]
        ]
      ]
    }
  }
};
