<template>
    <div>
        <h2>Places to go</h2>
        <ul>
            <li v-for="venue in recommend" :key="venue.name">
                {{venue.name}}
            </li>
        </ul>
        <h2>Places to avoid</h2>
        <ul>
            <li v-for="venue in avoid" :key="venue.name">
                {{venue.name}}
                <ul>
                    <li v-for="(reason, idx) in venue.reasons" :key="idx">
                        {{reason}}
                    </li>
                </ul>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  props: {
    recommend: {
      type: Array
    },
    avoid: {
      type: Array
    }
  }
};
</script>
