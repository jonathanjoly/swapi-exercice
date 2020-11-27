import { toNumber, isNaN, get } from 'lodash';

type Condition<T> = (item: T) => boolean;

export default class Helpers {

    isCheckingConditions<T>(item: T, conditions: Condition<T>[]): boolean {
        return conditions.reduce((isValid: boolean, condition: Condition<T>) => {
            return isValid && condition(item);
        }, true);
    }

    filterByCondition<T>(items: T[], conditions: Condition<T>[]): T[] {
        return items.filter((item) => this.isCheckingConditions(item, conditions));
    }

    sumByField<T>(items: T[], field: string): number {
        return items.reduce((sum: number, item: T) => {
            const value = toNumber(get(item, field, 0));
            return isNaN(value) ? sum : sum + value;
        }, 0);
    }
}