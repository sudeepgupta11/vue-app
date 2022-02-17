<template>
  <div class="grid gap-y-6 grid-cols-12">
    <div
      class="flex flex-col items-center bg-white rounded-lg border shadow-md md:max-w-2xl col-start-4 col-end-10 relative"
      v-for="item in comments"
      v-bind:key="item.id"
    >
      <img
        class="w-10 rounded-full p-2"
        src="https://icon-library.com/images/unknown-person-icon/unknown-person-icon-4.jpg"
        alt=""
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="text-2xl font-bold text-gray-900">
          {{ item.name }}
        </h5>
        <p class="mb-2 text-base text-gray-900 italic">
          {{ item.email }}
        </p>
        <p class="mb-3 font-normal text-gray-700">
          {{ item.body }}
        </p>
      </div>
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
      post: {},
      comments: [],
    };
  },
  methods: {
    getPost(postid) {
      axios
        .get("https://jsonplaceholder.typicode.com/posts/" + postid)
        .then((response) => {
          console.log(response.data);
          this.post = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getComments(postid) {
      axios
        .get(
          "https://jsonplaceholder.typicode.com/posts/" + postid + "/comments"
        )
        .then((response) => {
          console.log(response.data);
          this.comments = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    const route = useRoute();
    const postId = route.params.postid;
    this.getPost(postId);
    this.getComments(postId);
  },
};
</script>
