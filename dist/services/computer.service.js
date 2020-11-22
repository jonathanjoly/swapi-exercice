"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const planet_service_1 = __importDefault(require("./planet.service"));
const helper_service_1 = __importDefault(require("./helper.service"));
const isNumber_1 = __importDefault(require("lodash/isNumber"));
const isNaN_1 = __importDefault(require("lodash/isNaN"));
class ComputerService {
    constructor() {
        this.planetService = new planet_service_1.default();
        this.helpers = new helper_service_1.default();
    }
    async computeDiameterOfPlanets(filmNumber) {
        if (!isNumber_1.default(filmNumber) || isNaN_1.default(filmNumber)) {
            throw new TypeError('NOT_VALID_FILM_NUMBER');
        }
        const planets = await this.planetService.getPlanetsFromFilm(filmNumber);
        const planetConditions = [
            this.planetService.isPlanetWithMontain,
            this.planetService.isPlanetWithWater
        ];
        const validPlanets = this.helpers.filterByCondition(planets, planetConditions);
        return this.helpers.sumByField(validPlanets, 'diameter');
    }
}
exports.default = ComputerService;
