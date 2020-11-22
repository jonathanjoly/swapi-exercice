"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const toNumber_1 = __importDefault(require("lodash/toNumber"));
const isNaN_1 = __importDefault(require("lodash/isNaN"));
const get_1 = __importDefault(require("lodash/get"));
class Helpers {
    isCheckingConditions(item, conditions) {
        return conditions.reduce((isValid, condition) => {
            return isValid && condition(item);
        }, true);
    }
    filterByCondition(items, conditions) {
        return items.filter((item) => this.isCheckingConditions(item, conditions));
    }
    sumByField(items, field) {
        return items.reduce((sum, item) => {
            const value = toNumber_1.default(get_1.default(item, field, 0));
            return isNaN_1.default(value) ? sum : sum + value;
        }, 0);
    }
}
exports.default = Helpers;
