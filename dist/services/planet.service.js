"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const models_1 = __importDefault(require("../models"));
class PlanetService {
    constructor() {
        this.api = new models_1.default();
    }
    async getPlanetsFromFilm(filmNumber) {
        const film = await this.api.getfilm(filmNumber);
        return this.api.getMultiple(film.planets);
    }
    isPlanetWithMontain(planet) {
        return planet.terrain.includes('mountain');
    }
    isPlanetWithWater(planet) {
        return lodash_1.toNumber(planet.surface_water) > 0;
    }
}
exports.default = PlanetService;
