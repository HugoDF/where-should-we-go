import { cleanUsers, cleanVenues } from './clean-data';

describe('cleanUsers', () => {
    test('It should return an array of same length as input', () => {
        const input = [
            {
                wont_eat: [],
                drinks: []
            },
            {
                wont_eat: [],
                drinks: []
            }
        ];
        expect(cleanUsers(input)).toHaveLength(2);
    });
    test('It should lower case the drinks and wont_eat entries', () => {
        const input = [
            {
                wont_eat: [
                    'Foo',
                    'bAr',
                    'fooD'
                ],
                drinks: [
                    'beer',
                    'Cider',
                    'cidER'
                ]
            }
        ];
        expect(cleanUsers(input)).toEqual([
            {
                wont_eat: [
                    'foo',
                    'bar',
                    'food'
                ],
                drinks: [
                    'beer',
                    'cider',
                    'cider'
                ]
            }
        ]);
    });
});

describe('cleanVenues', () => {
    test('It should return an array of same length as input', () => {
        const input = [
            {
                food: [],
                drinks: []
            },
            {
                food: [],
                drinks: []
            }
        ];
        expect(cleanVenues(input)).toHaveLength(2);
    });
    test('It should lower case the drinks and food entries', () => {
        const input = [
            {
                food: [
                    'Foo',
                    'bAr',
                    'fooD'
                ],
                drinks: [
                    'beer',
                    'Cider',
                    'cidER'
                ]
            }
        ];
        expect(cleanVenues(input)).toEqual([
            {
                food: [
                    'foo',
                    'bar',
                    'food'
                ],
                drinks: [
                    'beer',
                    'cider',
                    'cider'
                ]
            }
        ]);
    });
});
