const MATERIALS = [
  { name: "塩", cost: 20 },
  { name: "牛乳", cost: 30 },
  { name: "バター", cost: 40 },
  { name: "卵", cost: 25 },
  { name: "肉", cost: 60 },
  { name: "砂糖", cost: 30 },
  { name: "生クリーム", cost: 50 },
  { name: "炭酸水", cost: 40 }
];

const FISH = [
  { name: "フナ", price: 3 },
  { name: "ドジョウ", price: 5 },
  { name: "コイ", price: 12 },
  { name: "ナマズ", price: 20 },
  { name: "ニジマス", price: 28 },
  { name: "金色のコイ", price: 150 },
  { name: "イトウ", price: 400 },
  { name: "サケ", price: 50 },
  { name: "マグロ", price: 6000 },
  { name: "タイ", price: 5000 },
  { name: "ブリ", price: 4500 },
  { name: "ヒラメ", price: 4000 },
  { name: "エビ", price: 30 }
];

const COOKING = [
  // なべ
  { method: "なべ", name: "にんじんスープ", unlockLv: 1, price: 15, exp: null, time: 2, ingredients: "にんじん×4", cost: 8 },
  { method: "なべ", name: "トマトスープ", unlockLv: 1, price: 48, exp: null, time: 3, ingredients: "トマト×4", cost: 16 },
  { method: "なべ", name: "野菜スープ", unlockLv: 1, price: 25, exp: null, time: 5, ingredients: "にんじん×2、トマト×2、とうもろこし×1", cost: 26 },
  { method: "なべ", name: "コーンスープ", unlockLv: 1, price: 70, exp: null, time: 5, ingredients: "とうもろこし×3", cost: 42 },
  { method: "なべ", name: "かぼちゃスープ", unlockLv: 1, price: 240, exp: null, time: 10, ingredients: "かぼちゃ×1、にんじん×2", cost: 154 },
  { method: "なべ", name: "たまごスープ", unlockLv: 3, price: 90, exp: null, time: 4, ingredients: "トマト×2、卵×1、塩×1", cost: 53 },
  { method: "なべ", name: "クリームシチュー", unlockLv: 3, price: 150, exp: null, time: 8, ingredients: "にんじん×2、とうもろこし×1、牛乳×1、バター×1", cost: 88 },
  { method: "なべ", name: "ポトフ", unlockLv: 3, price: 170, exp: null, time: 10, ingredients: "にんじん×2、とうもろこし×1、肉×1、塩×1", cost: 98 },
  { method: "なべ", name: "かぼちゃのポタージュ", unlockLv: 3, price: 380, exp: null, time: 15, ingredients: "かぼちゃ×1、牛乳×1、バター×1", cost: 220 },
  { method: "なべ", name: "キャベツのスープ", unlockLv: 4, price: 110, exp: null, time: 8, ingredients: "キャベツ×1、にんじん×2、塩×1", cost: 64 },
  { method: "なべ", name: "すいとん", unlockLv: 4, price: 115, exp: null, time: 10, ingredients: "小麦×4、キャベツ×1、にんじん×1", cost: 66 },
  { method: "なべ", name: "りんごのコンポート", unlockLv: 8, price: 200, exp: null, time: 10, ingredients: "りんご×3", cost: 120 },
  { method: "なべ", name: "もものコンポート", unlockLv: 10, price: 300, exp: null, time: 12, ingredients: "もも×2", cost: 180 },
  { method: "なべ", name: "肉じゃが", unlockLv: 35, price: 260, exp: null, time: 10, ingredients: "じゃがいも×2、にんじん×1、肉×1", cost: 152 },

  // 焼き網
  { method: "焼き網", name: "焼きとうもろこし", unlockLv: 3, price: 115, exp: null, time: 4, ingredients: "とうもろこし×2、バター×1", cost: 68 },
  { method: "焼き網", name: "焼き野菜", unlockLv: 4, price: 120, exp: null, time: 5, ingredients: "にんじん×2、トマト×2、キャベツ×1、塩×1", cost: 72 },
  { method: "焼き網", name: "串焼き", unlockLv: 3, price: 150, exp: null, time: 6, ingredients: "トマト×2、肉×1、塩×1", cost: 88 },
  { method: "焼き網", name: "焼きいも", unlockLv: 35, price: 440, exp: null, time: 10, ingredients: "さつまいも×2", cost: 260 },

  // フライパン
  { method: "フライパン", name: "目玉焼き", unlockLv: 3, price: 75, exp: null, time: 2, ingredients: "卵×1、塩×1", cost: 45 },
  { method: "フライパン", name: "野菜いため", unlockLv: 4, price: 210, exp: null, time: 6, ingredients: "キャベツ×1、にんじん×2、肉×1、塩×1", cost: 124 },
  { method: "フライパン", name: "ホットケーキ", unlockLv: 3, price: 200, exp: null, time: 8, ingredients: "小麦×4、卵×1、牛乳×1、バター×1", cost: 119 },
  { method: "フライパン", name: "ハンバーグ", unlockLv: 3, price: 200, exp: null, time: 8, ingredients: "小麦×2、肉×1、卵×1、塩×1", cost: 117 },
  { method: "フライパン", name: "目玉焼きつきハンバーグ", unlockLv: 3, price: 240, exp: null, time: 10, ingredients: "小麦×2、肉×1、卵×2、塩×1", cost: 142 },

  // 石窯
  { method: "石窯", name: "パン", unlockLv: 3, price: 150, exp: null, time: 12, ingredients: "小麦×5、塩×1、バター×1", cost: 90 },
  { method: "石窯", name: "かぼちゃパイ", unlockLv: 3, price: 400, exp: null, time: 15, ingredients: "かぼちゃ×1、小麦×4、バター×1、卵×1", cost: 239 },
  { method: "石窯", name: "アップルパイ", unlockLv: 8, price: 310, exp: null, time: 15, ingredients: "りんご×3、小麦×4、バター×1", cost: 184 },
  { method: "石窯", name: "BLTサンド", unlockLv: 15, price: 240, exp: null, time: 10, ingredients: "レタス×1、トマト×2、小麦×3、肉×1", cost: 141 },

  // 蒸し器
  { method: "蒸し器", name: "肉まん", unlockLv: 4, price: 210, exp: null, time: 10, ingredients: "小麦×4、キャベツ×1、肉×1", cost: 124 },
  { method: "蒸し器", name: "蒸し野菜", unlockLv: 4, price: 350, exp: null, time: 12, ingredients: "かぼちゃ×1、にんじん×2、キャベツ×1、とうもろこし×1", cost: 208 },
  { method: "蒸し器", name: "じゃがバター", unlockLv: 35, price: 220, exp: null, time: 8, ingredients: "じゃがいも×2、バター×1", cost: 130 },

  // ジューサー
  { method: "ジューサー", name: "いちごジュース", unlockLv: 30, price: 360, exp: null, time: 4, ingredients: "いちご×3", cost: 210 },
  { method: "ジューサー", name: "みかんジュース", unlockLv: 30, price: 380, exp: null, time: 4, ingredients: "みかん×3", cost: 210 },
  { method: "ジューサー", name: "りんごジュース", unlockLv: 8, price: 200, exp: null, time: 3, ingredients: "りんご×3", cost: 120 },
  { method: "ジューサー", name: "ももジュース", unlockLv: null, price: 300, exp: null, time: 4, ingredients: "もも×2", cost: 180 },
  { method: "ジューサー", name: "野菜ジュース", unlockLv: null, price: 35, exp: null, time: 2, ingredients: "トマト×3、にんじん×3", cost: 18 },
  { method: "ジューサー", name: "ミックスジュース", unlockLv: null, price: 460, exp: null, time: 5, ingredients: "いちご×3、みかん×1、りんご×1、もも×1", cost: 410 },
  { method: "ジューサー", name: "すいかジュース", unlockLv: null, price: 540, exp: null, time: 4, ingredients: "すいか×1", cost: 320 },
  { method: "ジューサー", name: "いちごミルク", unlockLv: null, price: 340, exp: null, time: 4, ingredients: "いちご×2、牛乳×1、砂糖×1", cost: 200 },
  { method: "ジューサー", name: "メロンジュース", unlockLv: null, price: 1360, exp: null, time: 5, ingredients: "メロン×1", cost: 800 },
  { method: "ジューサー", name: "メロンソーダ", unlockLv: null, price: 1480, exp: null, time: 6, ingredients: "メロン×1、炭酸水×1、砂糖×1", cost: 870 },
  { method: "ジューサー", name: "クリームソーダ", unlockLv: null, price: 1665, exp: null, time: 6, ingredients: "メロン×1、さくらんぼ×1、炭酸水×1、砂糖×1、牛乳×1、生クリーム×1", cost: 980 },
  { method: "ジューサー", name: "スターフルーツジュース", unlockLv: null, price: 765, exp: null, time: 5, ingredients: "スターフルーツ×1", cost: 150 },
  { method: "ジューサー", name: "パイナップルジュース", unlockLv: null, price: 680, exp: null, time: 5, ingredients: "パイナップル×1", cost: 400 },
  { method: "ジューサー", name: "レモンカッシュ", unlockLv: null, price: 880, exp: null, time: 5, ingredients: "レモン×1、炭酸水×1、砂糖×1", cost: 520 },
  { method: "ジューサー", name: "ぶどうジュース", unlockLv: null, price: 610, exp: null, time: 5, ingredients: "ぶどう×3", cost: 360 },
  { method: "ジューサー", name: "マスカットジュース", unlockLv: null, price: 950, exp: null, time: 5, ingredients: "マスカット×1", cost: 560 },

  // オーブン
  { method: "オーブン", name: "いちごのケーキ", unlockLv: null, price: 640, exp: null, time: 20, ingredients: "いちご×3、小麦×3、卵×1、砂糖×1、生クリーム×1", cost: 333 },
  { method: "オーブン", name: "もものケーキ", unlockLv: 10, price: 600, exp: null, time: 20, ingredients: "もも×2、小麦×3、卵×1、砂糖×1、生クリーム×1", cost: 303 },
  { method: "オーブン", name: "みかんケーキ", unlockLv: 30, price: 620, exp: null, time: 20, ingredients: "みかん×3、小麦×3、卵×1、砂糖×1、生クリーム×1", cost: 333 },
  { method: "オーブン", name: "りんごのローズタルト", unlockLv: 8, price: 385, exp: null, time: 20, ingredients: "りんご×3、小麦×2、バター×1、砂糖×1", cost: 202 },
  { method: "オーブン", name: "メロンのショートケーキ", unlockLv: 50, price: 1755, exp: null, time: 20, ingredients: "メロン×1、小麦×3、卵×1、砂糖×1、生クリーム×1", cost: 923 },
  { method: "オーブン", name: "スターフルーツのチーズケーキ", unlockLv: 50, price: 1075, exp: null, time: 20, ingredients: "スターフルーツ×1、小麦×1、生クリーム×1、牛乳×1、砂糖×1", cost: 266 },
  { method: "オーブン", name: "パイナップルのケーキ", unlockLv: 55, price: 1145, exp: null, time: 20, ingredients: "パイナップル×1、さくらんぼ×3、小麦×3、卵×1、砂糖×1", cost: 563 },
  { method: "オーブン", name: "ぶどうのムース", unlockLv: 40, price: 905, exp: null, time: 20, ingredients: "ぶどう×3、小麦×1、生クリーム×1、牛乳×1、砂糖×1", cost: 476 },
  { method: "オーブン", name: "マスカットのタルト", unlockLv: 65, price: 2390, exp: null, time: 20, ingredients: "マスカット×2、小麦×2、バター×1、卵×1、牛乳×1、砂糖×1", cost: 1257 },

  // すいはん
  { method: "すいはん", name: "おにぎり", unlockLv: 20, price: 205, exp: null, time: 8, ingredients: "お米×1、塩×1", cost: 120 },
  { method: "すいはん", name: "親子丼", unlockLv: 20, price: 315, exp: null, time: 12, ingredients: "お米×1、卵×1、肉×1", cost: 185 },
  { method: "すいはん", name: "中華丼", unlockLv: 20, price: 345, exp: null, time: 12, ingredients: "お米×1、キャベツ×1、にんじん×2、肉×1", cost: 204 },
  { method: "すいはん", name: "カレーライス", unlockLv: 35, price: 430, exp: null, time: 15, ingredients: "お米×1、じゃがいも×2、にんじん×2、肉×1", cost: 254 },
  { method: "すいはん", name: "サーモンのにぎり", unlockLv: 35, price: 340, exp: null, time: 10, ingredients: "お米×1、塩×1、砂糖×1、サケ×1", cost: 200 },
  { method: "すいはん", name: "マグロのにぎり", unlockLv: 40, price: 8000, exp: null, time: 12, ingredients: "お米×1、塩×1、砂糖×1、マグロ×1", cost: 6150 },
  { method: "すいはん", name: "タイのにぎり", unlockLv: 40, price: 6700, exp: null, time: 12, ingredients: "お米×1、塩×1、砂糖×1、タイ×1", cost: 5150 },
  { method: "すいはん", name: "ブリのにぎり", unlockLv: 40, price: 6050, exp: null, time: 12, ingredients: "お米×1、塩×1、砂糖×1、ブリ×1", cost: 4650 },
  { method: "すいはん", name: "ヒラメのにぎり", unlockLv: 40, price: 5400, exp: null, time: 12, ingredients: "お米×1、塩×1、砂糖×1、ヒラメ×1", cost: 4150 },
  { method: "すいはん", name: "天丼", unlockLv: 35, price: 1105, exp: null, time: 15, ingredients: "お米×1、かぼちゃ×2、さつまいも×1、小麦×1、卵×1、エビ×1、塩×1", cost: 481 },

  // 竹串
  { method: "竹串", name: "フナの塩焼き", unlockLv: 3, price: 16, exp: null, time: 8, ingredients: "塩×1、フナ×3", cost: 29 },
  { method: "竹串", name: "ドジョウの塩焼き", unlockLv: 3, price: 20, exp: null, time: 8, ingredients: "塩×1、ドジョウ×3", cost: 35 },
  { method: "竹串", name: "コイの塩焼き", unlockLv: 3, price: 32, exp: null, time: 8, ingredients: "塩×1、コイ×3", cost: 56 },
  { method: "竹串", name: "ナマズの塩焼き", unlockLv: 3, price: 45, exp: null, time: 8, ingredients: "塩×1、ナマズ×3", cost: 80 },
  { method: "竹串", name: "ニジマスの塩焼き", unlockLv: 3, price: 59, exp: null, time: 8, ingredients: "塩×1、ニジマス×3", cost: 104 },

  // フライヤー
  { method: "フライヤー", name: "ドーナツ", unlockLv: 3, price: 185, exp: null, time: 8, ingredients: "小麦×2、卵×1、牛乳×1", cost: 67 },
  { method: "フライヤー", name: "フライドポテト", unlockLv: 35, price: 165, exp: null, time: 6, ingredients: "じゃがいも×2、塩×1", cost: 110 },
  { method: "フライヤー", name: "天ぷら", unlockLv: 3, price: 410, exp: null, time: 10, ingredients: "かぼちゃ×1、小麦×1、卵×1、エビ×2", cost: 241 }
];