const { NekoBot } = require("nekobot-api");
const api = new NekoBot();
// Не забудьте про npm i nekobot-api
console.log("script by Kreol");
(async () => {
    const image = await api.generate("magik", { image: "image url" });
    console.log(image);
})();
