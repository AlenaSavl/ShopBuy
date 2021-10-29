<template>
  <section class="container-fluid mt-3">
    <div class="container">
      <div v-if="!!database.length" class="row">
        <div v-for="(item, key) in database" class="col-4 mb-3" :key="key">
          <div class="card custom-card h-100 w-100">
            <img
              :src="item.image"
              class="card-img-top mx-auto mt-2"
              alt="image555"
            />
            <div class="card-body">
              <p class="card-price font-weight-light">&#36;{{ item.price }}</p>
              <h6 class="card-title font-weight-bold">{{ item.title }}</h6>
              <p class="card-text font-weight-light">
                {{ item.description.substr(0, 184) }}
              </p>
            </div>
            <div class="mx-auto">
              <button
                class="btn custom-btn btn-sm btn-outline-primary mb-2"
                v-b-modal="`modal-${item.id}`"
              >
                Details
              </button>
              <template>
                <button
                  v-if="!isProductInCart(item)"
                  class="btn custom-btn btn-sm btn-success mb-2"
                  @click="addToCart(item)"
                >
                  Buy
                </button>
                <button
                  v-else
                  class="btn custom-btn btn-sm btn-danger mb-2"
                  @click="deleteProductInCart(item)"
                >
                  Delete
                </button>
              </template>
            </div>
          </div>
          <ProductDetailModal :item="item" />
        </div>
        <!-- <div class="col">111</div> -->
        <!-- <div class="col">111</div> -->
      </div>
    </div>
  </section>
</template>

<script>
import ProductDetailModal from "../components/modals/ProductDetailModal.vue";
export default {
  name: "Home",
  components: {
    ProductDetailModal,
  },
  methods: {
    setData() {
      this.$store.dispatch("addAllProducts");
    },
    addToCart(product) {
      this.$store.dispatch("addProductToCart", product);
    },
    deleteProductInCart(product) {
      this.$store.dispatch("deleteProductInCart", product);
    },
    isProductInCart(product) {
      let result = this.cartdata.find((item) => {
        return item.id === product.id;
      });
      return result;
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
  created() {
    this.setData();
    console.log("577557", this.database);
  },
};
</script>

<style>
/* .custom-grid {
  display: flex;
    flex-wrap: wrap;
    grid-column-gap: 0.5625
rem
;
 
    column-gap: 0.5625
rem
;
    grid-row-gap: 0.5625
rem
;
    row-gap: 0.5625
rem
;
} */
.custom-btn {
  min-width: 100px;
}
.card-price {
  font-size: 10px;
  font-weight: bold;
}
.card-title {
  font-size: 12px;
}
.card-img-top {
  height: 100px;
  width: 70px !important;
}
.card-text {
  font-size: 10px;
}
</style>