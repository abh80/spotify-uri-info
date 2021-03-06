"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cheerio_1 = __importDefault(require("cheerio"));
const axios_1 = __importDefault(require("axios"));
class default_1 {
    static async getData(uri) {
        if (!uri)
            throw new Error("No URI was Provided");
        try {
            const { data: res } = await axios_1.default.get(`https://embed.spotify.com/?uri=${uri}`);
            const $ = cheerio_1.default.load(res);
            let parser = $("#resource").html();
            //@ts-ignore
            return JSON.parse(parser);
        }
        catch (e) {
            Promise.reject("Invalid spotify URI");
        }
    }
}
exports.default = default_1;
module.exports = default_1
//# sourceMappingURL=index.js.map
