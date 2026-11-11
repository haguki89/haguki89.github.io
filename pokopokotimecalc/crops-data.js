const CROPS = [
  { name: "にんじん", unlockLv: 1, baseTime: 3, basePrice: 2, minYield: 1, maxYield: 2, seedCost: 0, type: "畑" },
  { name: "トマト", unlockLv: 1, baseTime: 15, basePrice: 4, minYield: 3, maxYield: 5, seedCost: 7, type: "畑" },
  { name: "とうもろこし", unlockLv: 1, baseTime: 45, basePrice: 14, minYield: 3, maxYield: 4, seedCost: 16, type: "畑" },
  { name: "かぼちゃ", unlockLv: 1, baseTime: 120, basePrice: 150, minYield: 1, maxYield: 1, seedCost: 0, type: "畑" },
  { name: "小麦", unlockLv: 2, baseTime: 30, basePrice: 6, minYield: 4, maxYield: 6, seedCost: 8, type: "畑" },
  { name: "キャベツ", unlockLv: 4, baseTime: 40, basePrice: 40, minYield: 2, maxYield: 2, seedCost: 20, type: "畑" },
  { name: "すいか", unlockLv: 6, baseTime: 240, basePrice: 320, minYield: 1, maxYield: 1, seedCost: 72, type: "畑" },
  { name: "レタス", unlockLv: 15, baseTime: 90, basePrice: 55, minYield: 2, maxYield: 3, seedCost: 25, type: "畑" },
  { name: "イネ(お米)", unlockLv: 20, baseTime: 70, basePrice: 100, minYield: 1, maxYield: 2, seedCost: 66, type: "畑" },
  { name: "いちご", unlockLv: 25, baseTime: 180, basePrice: 70, minYield: 4, maxYield: 5, seedCost: 60, type: "畑" },
  { name: "じゃがいも", unlockLv: 35, baseTime: 120, basePrice: 45, minYield: 4, maxYield: 6, seedCost: 33, type: "畑" },
  { name: "さつまいも", unlockLv: 35, baseTime: 240, basePrice: 130, minYield: 3, maxYield: 4, seedCost: 72, type: "畑" },
  { name: "メロン", unlockLv: 50, baseTime: 300, basePrice: 800, minYield: 1, maxYield: 1, seedCost: 100, type: "畑" },
  { name: "りんご", unlockLv: 8, baseTime: 360, basePrice: 40, minYield: 3, maxYield: 4, seedCost: 0, type: "果樹園" },
  { name: "もも", unlockLv: 10, baseTime: 240, basePrice: 90, minYield: 2, maxYield: 3, seedCost: 0, type: "果樹園" },
  { name: "さくらんぼ", unlockLv: 20, baseTime: 270, basePrice: 30, minYield: 8, maxYield: 10, seedCost: 0, type: "果樹園" },
  { name: "みかん", unlockLv: 30, baseTime: 300, basePrice: 70, minYield: 4, maxYield: 5, seedCost: 0, type: "果樹園" },
  { name: "ぶどう", unlockLv: 40, baseTime: 300, basePrice: 120, minYield: 4, maxYield: 5, seedCost: 0, type: "果樹園" },
  { name: "スターフルーツ", unlockLv: 50, baseTime: 300, basePrice: 150, minYield: 4, maxYield: 5, seedCost: 0, type: "果樹園" },
  { name: "パイナップル", unlockLv: 55, baseTime: 360, basePrice: 400, minYield: 2, maxYield: 3, seedCost: 0, type: "果樹園" },
  { name: "レモン", unlockLv: 60, baseTime: 330, basePrice: 450, minYield: 2, maxYield: 3, seedCost: 0, type: "果樹園" },
  { name: "マスカット", unlockLv: 65, baseTime: 360, basePrice: 560, minYield: 2, maxYield: 3, seedCost: 0, type: "果樹園" }
  
];

const WATERING = [
  null,
  { duration: 15, extra: 1/4, effect: "4秒に1秒減", speed: "1.25倍" },
  { duration: 15, extra: 1/3, effect: "3秒に1秒減", speed: "約1.33倍" },
  { duration: 15, extra: 1/2, effect: "2秒に1秒減", speed: "1.50倍" },
  { duration: 15, extra: 2/3, effect: "3秒に2秒減", speed: "約1.67倍" },
  { duration: 15, extra: 1,   effect: "2秒に2秒減", speed: "2.00倍" },
  { duration: 20, extra: 1,   effect: "2秒に2秒減", speed: "2.00倍" },
  { duration: 25, extra: 4/3, effect: "3秒に4秒減", speed: "2.33倍" },
  { duration: 25, extra: 4/3, effect: "3秒に4秒減", speed: "2.33倍" }
  // ここに要素を追加するとじょうろレベルの上限が自動で上がります
];

const SEED_EFFECTS = [
  { timeMult: 1.0, priceMult: 1.0, yieldBonus: 0,    timeText: "効果なし", priceText: "効果なし", yieldText: "なし" },
  { timeMult: 0.9, priceMult: 1.0, yieldBonus: 0,    timeText: "-10%",    priceText: "効果なし", yieldText: "なし" },
  { timeMult: 0.9, priceMult: 1.2, yieldBonus: 0,    timeText: "効果なし", priceText: "+20%",    yieldText: "なし" },
  { timeMult: 0.9, priceMult: 1.2, yieldBonus: 0.25, timeText: "効果なし", priceText: "効果なし", yieldText: "25%の確率で+1（期待値+0.25）" },
  { timeMult: 0.8, priceMult: 1.4, yieldBonus: 0.25, timeText: "-20%",    priceText: "+40%",    yieldText: "なし" },
  { timeMult: 0.7, priceMult: 1.6, yieldBonus: 0.25, timeText: "-30%",    priceText: "+60%",    yieldText: "なし" },
  { timeMult: 0.5, priceMult: 2.0, yieldBonus: 2,    timeText: "-50%",    priceText: "+100%",   yieldText: "必ず+2" },
  { timeMult: 0.5, priceMult: 2.0, yieldBonus: 2,    timeText: "-50%",    priceText: "+100%",   yieldText: "必ず+2" }
  // ここに要素を追加すると種レベルの上限が自動で上がります
];

// crops.html 表示用
const SEED_LEVELS = SEED_EFFECTS.map((e, i) => ({
  lv: i + 1,
  time: e.timeText,
  price: e.priceText,
  yield: e.yieldText
}));