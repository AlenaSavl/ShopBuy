<template>
  <header class="">
    <b-navbar class="container d-flex justify-content-between">
      <b-navbar-nav>
        <b-nav-item href="/">
          <h6 class="card-subtitle mb-2 text-black">ShopBuy</h6>
        </b-nav-item>
        <b-nav-item @click="sortByCategory(categories.electronics)" href="#">
          <h6 class="card-subtitle mb-2 text-muted">Electronics</h6>
        </b-nav-item>
        <b-nav-item @click="sortByCategory(categories.jewelery)" href="#">
          <h6 class="card-subtitle mb-2 text-muted">Jewelery</h6>
        </b-nav-item>
        <b-nav-item @click="sortByCategory(categories.mensclothing)" href="#">
          <h6 class="card-subtitle mb-2 text-muted">Mens clothing</h6>
        </b-nav-item>
        <b-nav-item @click="sortByCategory(categories.womensclothing)" href="#">
          <h6 class="card-subtitle mb-2 text-muted">Womens clothing</h6>
        </b-nav-item>
      </b-navbar-nav>
      <b-button class="custom-cart mr-6" v-b-modal.ModalCart>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-cart-check-fill"
          viewBox="0 0 16 16"
        >
          <path
            d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-1.646-7.646-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 1 1 .708-.708L8 8.293l2.646-2.647a.5.5 0 0 1 .708.708z"
          />
        </svg>
        <b-badge class="custom-badge" variant="light">{{
          cartdata.length
        }}</b-badge>
      </b-button>
    </b-navbar>
    <ModalCart :cart="cartdata" />
  </header>
</template>

<script>
import ModalCart from "@/components/modals/ModalCart.vue";
export default {
  name: "Cart",
  components: {
    ModalCart,
  },
  data() {
    return {
      categories: {
        electronics: "electronics",
        jewelery: "jewelery",
        mensclothing: "men's clothing",
        womensclothing: "women's clothing",
      },
    };
  },
  methods: {
    sortByCategory(category) {
      this.$store.dispatch("sortByCategory", category);
    },
  },
  computed: {
    database() {
      return this.$store.getters.getDatabase;
    },
    cartdata() {
      return this.$store.getters.getCartdata;
    },
  },
};
</script>

<style>
header {
  background-color: #fcf8f8f5 !important;
  position: sticky;
  top: 0;
  z-index: 12;
}
.custom-badge {
  position: absolute !important;
  bottom: 0;
  right: 0;
}
.custom-cart {
  position: relative;
}
</style>