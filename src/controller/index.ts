import { toNumber } from 'lodash';
import ComputerService from '../services/computer.service';
import logger from 'node-color-log';

const logMessage = (message: string): void => {
    logger.color('blue').log('[R2-D2]: Bip Bop Bip Huuu');
    logger.color('yellow').log(`[C3-PO]: ${message}`);
}


(async () => {
    try {
        const args = process.argv;
        const service = new ComputerService();
        const fimlNumber = toNumber(args[args.length - 1]);
        const diameter = await service.computeDiameterOfPlanets(fimlNumber);
        logger.log(diameter);
    } catch (error) {
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
