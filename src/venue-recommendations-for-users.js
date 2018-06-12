function venueHasFoodForUser(venue, user) {
    return !venue.food.every((food) => user.wont_eat.includes(food));
}

function venueHasDrinkForUser(venue, user) {
    return venue.drinks.some((drink) => user.drinks.includes(drink))
}

export function venueRecommendationsForUsers(users, venues) {
    const recommend = venues.filter(
        (venue) => {
            return users.every((user) => (
                venueHasFoodForUser(venue, user)
                &&
                venueHasDrinkForUser(venue, user)
            ))
        }
    );
    const avoid = venues
        .filter(venue => !recommend.includes(venue))
        .map((venue) => {
            return {
                name: venue.name,
                reasons: users.reduce((prev, user) => (
                    !venueHasDrinkForUser(venue, user)
                        ? prev.concat(`There is nothing to drink for ${user.name}`)
                        : !venueHasFoodForUser(venue, user)
                            ? prev.concat(`There is nothing to eat for ${user.name}`)
                            : prev
                ), [])
            }
        })
    return {
        recommend,
        avoid
    };
}