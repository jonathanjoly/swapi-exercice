import Helpers from './helper.service';

describe('Test helpers service', () => {
    const helpers = new Helpers();
    interface TestType { [key: string]: number };

    describe('Test the isCheckingConditions function', () => {
        const conditions = [
            (x: TestType) => x.value < 5,
            (x: TestType) => x.value < 10,
            (x: TestType) => x.value < 20,
        ];

        it('Item does not match first conditions, should return false', () => {
            const item = { value: 10 };
            const result = helpers.isCheckingConditions<TestType>(item, conditions);
            expect(result).toBeFalsy();
        });

        it('Item does not match second conditions, should return false', () => {
            const item = { value: 6 };
            const result = helpers.isCheckingConditions<TestType>(item, conditions);
            expect(result).toBeFalsy();
        });

        it('Item does not match third conditions, should return false', () => {
            const item = { value: 15 };
            const result = helpers.isCheckingConditions<TestType>(item, conditions);
            expect(result).toBeFalsy();
        });

        it('Item does not match all conditions, should return false', () => {
            const item = { value: 30 };
            const result = helpers.isCheckingConditions<TestType>(item, conditions);
            expect(result).toBeFalsy();
        });

        it('Item matches all conditions, should return true', () => {
            const item = { value: 3 };
            const result = helpers.isCheckingConditions<TestType>(item, conditions);
            expect(result).toBeTruthy();
        });

    });
    describe('Test the filterByCondition function', () => {
        const conditions = [
            (x: TestType) => x.value < 5,
            (x: TestType) => x.value < 10,
            (x: TestType) => x.value < 20,
        ];

        it('No items match conditions', () => {
            const item = [{ value: 60 }, { value: 61 }, { value: 62 }];
            const result = helpers.filterByCondition<TestType>(item, conditions);
            expect(result.length).toBe(0);
        });

        it('One item does not match conditions', () => {
            const item = [{ value: 4 }, { value: 3 }, { value: 32 }];
            const result = helpers.filterByCondition<TestType>(item, conditions);
            const expected = [{ value: 4 }, { value: 3 }];
            expect(result.length).toBe(2);
            expect(result).toEqual(expected);
        });

        it('All items match conditions', () => {
            const item = [{ value: 0 }, { value: 1 }, { value: 2 }];
            const result = helpers.filterByCondition<TestType>(item, conditions);
            expect(result.length).toBe(3);
            expect(result).toEqual(item);
        });
    });

    describe('Test the sumByField function', () => {
        it('Field does not exist', () => {
            const items = [{ value: 30 }, { value: 38 }, { value: 32 }];
            const result = helpers.sumByField<TestType>(items, '');
            expect(result).toBe(0);
        });
        it('Field does not exist', () => {
            const items = [{ value: 30 }, { value: 38 }, { value: 32 }];
            const result = helpers.sumByField<TestType>(items, 'value');
            expect(result).toBe(100);
        });

    });
});
