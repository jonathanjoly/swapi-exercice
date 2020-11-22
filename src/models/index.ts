import axios from 'axios';
import type { Film } from '../interfaces';


export default class API {
    #entrypoint: string = 'https://swapi.dev/api';

    get<T>(url: string): Promise<T> {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await axios.get(url);
                resolve(response.data);
            }
            catch (error) {
                reject('API_ERROR');
            }
        });
    }

    getfilm(filmNumber: number): Promise<Film> {
        return this.get<Film>(`${this.#entrypoint}/films/${filmNumber}`);
    };

    getMultiple<T>(urls: string[]): Promise<T[]> {
        return Promise.all(
            urls.map((url) => this.get<T>(url))
        );
    }
}


