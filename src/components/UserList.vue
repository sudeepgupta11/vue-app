<template>
  <h3 v-if="isLoading">We are fecthing the data. Please Wait!!</h3>
  <div class="flex justify-center items-center p-10">
    <div class="grid lg:grid-cols-3 gap-10">
      <div
        class="max-w-sm rounded-lg overflow-hidden shadow-lg pt-5 bg-white"
        v-for="item in users"
        v-bind:key="item.id"
      >
        <router-link :to="`/posts/${item.id}`">
          <div class="flex justify-center items-center">
            <img
              class="rounded-full w-2/6"
              src="./../assets/unknownUser.jpg"
              alt="User"
            />
          </div>
          <div class="px-6 py-4">
            <div class="font-bold text-xl">{{ item.name }}</div>
            <div class="font-bold text-l mb-2">{{ item.phone }}</div>
            <p class="font-bold text-xl text-gray-700 text-base">
              Company Details
            </p>
            <p class="text-gray-700 text-base">
              {{ item.company.name }}
            </p>
            <p class="text-gray-700 text-base">
              {{ item.company.catchPhrase }}
            </p>
          </div>
        </router-link>
        <div class="px-6 pt-4 pb-2">
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            ><a :href="`mailto:${item.email}`" target="_blank">{{
              item.email
            }}</a></span
          >
          <span
            class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
            ><a :href="`http://${item.website}`" target="_blank">{{
              item.website
            }}</a></span
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "UserList",
  data() {
    return {
      users: [],
      isLoading: true,
    };
  },
  methods: {
    getUsers() {
      axios
        .get("https://jsonplaceholder.typicode.com/users")
        .then((response) => {
          console.log(response.data);
          this.users = response.data;
          this.isLoading = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  mounted() {
    this.getUsers();
  },
};
</script>
