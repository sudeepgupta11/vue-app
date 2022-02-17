<template>
  <div class="grid gap-y-6 grid-cols-12">
    <div
      class="max-w-full rounded overflow-hidden shadow-lg ring-offset-2 ring col-start-2 col-end-12 relative bg-white"
      v-for="item in posts"
      v-bind:key="item.id"
    >
      <router-link :to="`/postdetail/${item.id}`">
        <div class="absolute top-0 left-0 text-sm md:text-base">
          <p>Post No.:{{ item.id }}</p>
        </div>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2">{{ item.title }}</div>
          <p class="text-gray-700 text-base">
            {{ item.body }}
          </p>
          <p class="text-gray-700 text-base"></p>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { useRoute } from "vue-router";
export default {
  name: "Posts",
  data() {
    return {
      posts: [],
    };
  },
  methods: {
    getPosts(userid) {
      axios
        .get("https://jsonplaceholder.typicode.com/users/" + userid + "/posts")
        .then((response) => {
          console.log(response.data);
          this.posts = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    const route = useRoute();
    const userid = route.params.userid;
    this.getPosts(userid);
  },
};
</script>
