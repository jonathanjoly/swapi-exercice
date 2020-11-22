"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _entrypoint;
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
class API {
    constructor() {
        _entrypoint.set(this, 'https://swapi.dev/api');
    }
    get(url) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios_1.default.get(url);
                resolve(response.data);
            }
            catch (error) {
                reject('API_ERROR');
            }
        });
    }
    getfilm(filmNumber) {
        return this.get(`${__classPrivateFieldGet(this, _entrypoint)}/films/${filmNumber}`);
    }
    ;
    getMultiple(urls) {
        return Promise.all(urls.map((url) => this.get(url)));
    }
}
exports.default = API;
_entrypoint = new WeakMap();
