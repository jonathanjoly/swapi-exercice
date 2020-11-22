import ComputerService from './computer.service';
import planetsMock from '../__mock/planets.mock.json'

describe('Test computer service', () => {

    describe('Test the computeDiameterOfPlanets function', () => {

        const computer = new ComputerService();
        test('Compute with success using api', () => {
            expect(computer.computeDiameterOfPlanets(6)).resolves.toBe(24620);
        });

        test('Wrong parameter passed', () => {
            // @ts-ignore: Unreachable code error
            expect(computer.computeDiameterOfPlanets('Dark Vador')).rejects.toThrowError(TypeError('NOT_VALID_FILM_NUMBER'));
        });

        test('Compute with success using mock', () => {
            // @ts-ignore: Unreachable code error
            computer.planetService.getPlanetsFromFilm = async () => planetsMock;
            expect(computer.computeDiameterOfPlanets(6)).resolves.toBe(24620);
        });
    });
});