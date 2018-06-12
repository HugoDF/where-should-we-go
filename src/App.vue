<template>
    <div>
        <h1>Where should we go?</h1>
        <PlacesToGo :recommend="recommend" :avoid="avoid" />
    </div>
</template>

<script>
import { venueRecommendationsForUsers } from "./venue-recommendations-for-users.js";
import { cleanUsers, cleanVenues } from "./clean-data.js";
import users from "../data/users.json";
import venues from "../data/venues.json";
import PlacesToGo from "./PlacesToGo";

export default {
  components: {
    PlacesToGo
  },
  data() {
    return venueRecommendationsForUsers(cleanUsers(users), cleanVenues(venues));
  }
};
</script>

<style>
body,
h1,
h2 {
  font-family: sans-serif;
}
</style>
