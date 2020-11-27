import { isNaN, isNumber } from 'lodash';
import { Planet } from '../interfaces';
import PlanetService from './planet.service';
import Helpers from './helper.service';


export default class ComputerService {
    planetService = new PlanetService();
    helpers = new Helpers();

    async computeDiameterOfPlanets(filmNumber: number): Promise<number> {
        if (!isNumber(filmNumber) || isNaN(filmNumber)) {
            throw new TypeError('NOT_VALID_FILM_NUMBER');
        }

        const planets = await this.planetService.getPlanetsFromFilm(filmNumber);
        const planetConditions = [
            this.planetService.isPlanetWithMontain,
            this.planetService.isPlanetWithWater
        ];
        const validPlanets = this.helpers.filterByCondition<Planet>(planets, planetConditions);
        return this.helpers.sumByField(validPlanets, 'diameter');

    }
}