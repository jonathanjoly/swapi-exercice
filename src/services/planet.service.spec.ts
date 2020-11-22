import PlanetService from './planet.service';
import planetsMock from '../__mock/planets.mock.json'

const planetOk = {
    'name': 'Hoth',
    'rotation_period': '23',
    'orbital_period': '549',
    'diameter': '7200',
    'climate': 'frozen',
    'gravity': '1.1 standard',
    'terrain': 'tundra, ice caves, mountain ranges',
    'surface_water': '100',
    'population': 'unknown',
    'residents': [],
    'films': [
        'http://swapi.dev/api/films/2/'
    ],
    'created': '2014-12-10T11:39:13.934000Z',
    'edited': '2014-12-20T20:58:18.423000Z',
    'url': 'http://swapi.dev/api/planets/4/'
};

const planetNok = {
    'name': 'Bespin',
    'rotation_period': '12',
    'orbital_period': '5110',
    'diameter': '118000',
    'climate': 'temperate',
    'gravity': '1.5 (surface), 1 standard (Cloud City)',
    'terrain': 'gas giant',
    'surface_water': '0',
    'population': '6000000',
    'residents': [
        'http://swapi.dev/api/people/26/'
    ],
    'films': [
        'http://swapi.dev/api/films/2/'
    ],
    'created': '2014-12-10T11:43:55.240000Z',
    'edited': '2014-12-20T20:58:18.427000Z',
    'url': 'http://swapi.dev/api/planets/6/'
};

describe('Test helpers service', () => {
    const planetService = new PlanetService();

    describe('Test the isPlanetWithMontain function', () => {
        test('The planet has no mountain, should return false', () => {
            expect(planetService.isPlanetWithMontain(planetNok)).toBeFalsy();
        });
        test('The planet has mountains, should return trues', () => {
            expect(planetService.isPlanetWithMontain(planetOk)).toBeTruthy();
        });
    });
    describe('Test the isPlanetWithWater function', () => {
        test('The planet has no water, should return false', () => {
            expect(planetService.isPlanetWithWater(planetNok)).toBeFalsy();
        });
        test('The planet has water, should return trues', () => {
            expect(planetService.isPlanetWithWater(planetOk)).toBeTruthy();
        });
    });


    describe('Test the getPlanetsFromFilm function', () => {
        test('There is no error on api', () => {
            expect(planetService.getPlanetsFromFilm(6)).resolves.toEqual(planetsMock);
        });

        test('There is an error on api', () => {
            planetService.api.get = () => { throw new Error('API_ERROR'); }
            expect(planetService.getPlanetsFromFilm(6)).rejects.toThrowError(new Error('API_ERROR'));
        });
    });

});


