import { toNumber } from 'lodash';
import { Planet } from '../interfaces';
import API from '../models';

export default class PlanetService {
    api = new API();

    async getPlanetsFromFilm(filmNumber: number): Promise<Planet[]> {
        const film = await this.api.getfilm(filmNumber);
        return this.api.getMultiple<Planet>(film.planets);
    }

    isPlanetWithMontain(planet: Planet): boolean {
        return planet.terrain.includes('mountain');
    }

    isPlanetWithWater(planet: Planet): boolean {
        return toNumber(planet.surface_water) > 0;
    }
}