function mapToLowerCase(str) {
    return str.toLowerCase();
}

export function cleanUsers(users) {
    return users.map((user) => ({
        ...user,
        wont_eat: user.wont_eat.map(mapToLowerCase),
        drinks: user.drinks.map(mapToLowerCase)
    }));
}

export function cleanVenues(venues) {
    return venues.map((venue) => ({
        ...venue,
        food: venue.food.map(mapToLowerCase),
        drinks: venue.drinks.map(mapToLowerCase)
    }));
}