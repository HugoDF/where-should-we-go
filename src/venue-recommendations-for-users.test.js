import { venueRecommendationsForUsers } from './venue-recommendations-for-users';

describe('venueRecommendationsForUsers', () => {
    test("It should recommend a venue if there's food  and drinks  for everyone", () => {
        const venues = [
            {
                food: ['mexican'],
                drinks: ['beer', 'cider']
            }
        ];
        const users = [
            {
                wont_eat: ['fish'],
                drinks: ['beer']
            },
            {
                wont_eat: ['meat'],
                drinks: ['cider']
            }
        ];
        expect(venueRecommendationsForUsers(users, venues).recommend).toEqual(venues);
    });
    test('It should have a reason to avoid a place (nothing to eat or drink)', () => {
        const venues = [
            {
                name: 'Mexican place',
                food: ['mexican'],
                drinks: ['beer', 'cider']
            }
        ];
        const users = [
            {
                name: 'Bob',
                wont_eat: [],
                drinks: ['vodka']
            },
            {
                name: 'Alice',
                wont_eat: ['mexican'],
                drinks: ['cider']
            }
        ];
        expect(venueRecommendationsForUsers(users, venues).avoid).toEqual([
            {
                name: 'Mexican place',
                reasons: [
                    'There is nothing to drink for Bob',
                    'There is nothing to eat for Alice'
                ]
            }
        ]);
    });
});