"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const lodash_1 = require("lodash");
const computer_service_1 = __importDefault(require("../services/computer.service"));
const node_color_log_1 = __importDefault(require("node-color-log"));
const logMessage = (message) => {
    node_color_log_1.default.color('blue').log('[R2-D2]: Bip Bop Bip Huuu');
    node_color_log_1.default.color('yellow').log(`[C3-PO]: ${message}`);
};
(async () => {
    try {
        const args = process.argv;
        const service = new computer_service_1.default();
        const fimlNumber = lodash_1.toNumber(args[args.length - 1]);
        const diameter = await service.computeDiameterOfPlanets(fimlNumber);
        node_color_log_1.default.log(diameter);
    }
    catch (error) {
        if (error.message === 'NOT_VALID_FILM_NUMBER') {
            logMessage('Jeune maitre cette valeur est incorrecte');
            return;
        }
        if (error === 'API_ERROR') {
            logMessage('Les droides d\'analyses ont été détruits');
            return;
        }
        logMessage('Les droides d\'analyses ont été piratés');
    }
})();
