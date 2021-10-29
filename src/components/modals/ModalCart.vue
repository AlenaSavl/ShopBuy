<template>
  <b-modal id="ModalCart" title="Cart products">
    <div v-if="total > 1">
      <div
        class="custom-cartitem row text-center"
        v-for="(item, key) in cartdata"
        :key="key"
      >
        <div class="col">
          <img class="custom-cartimage" :src="item.image" alt="" />
        </div>
        <div class="col">
          <h6 class="custom-title">{{ item.title }}</h6>
        </div>
        <div class="col">
          <h6 class="custom-price">&#36;{{ item.price }}</h6>
        </div>
        <div class="col">
          <button
            type="button"
            class="btn btn-light btn-outline-primary"
            @click="deleteProductInCart(item)"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-trash-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"
              />
            </svg>
          </button>
        </div>
      </div>
      <div class="d-flex justify-content-end">
        <p>Total: &#36;{{ total }}</p>
      </div>
    </div>
    <div v-else class="d-flex justify-content-center p-5">
      <h5>Your cart is empty!</h5>
    </div>
  </b-modal>
</template>

<script>
export default {
  props: ["cart"],
  data() {
    return {
      // total: 0,
    };
  },
  methods: {
    deleteProductInCart(product) {
      this.$store.dispatch("deleteProductInCart", product);
    },
  },
  computed: {
    cartdata() {
      return this.$store.getters.getCartdata;
    },
    total() {
      let sum = 0;
      this.cartdata.forEach((product) => {
        sum += product.price;
      });
      return sum;
    },
  },
  mounted() {
    console.log("cart", this.$props.cart);
  },
};
</script>

<style>
.custom-title {
  font-size: 12px;
}
.custom-price {
  font-size: 12px;
}
.custom-cartimage {
  max-height: 50px;
}
.custom-cartitem {
  display: flex;
  align-items: center;
  border-bottom: 1px solid lightgray;
  padding: 10px;
  column-gap: 10px;
  row-gap: 10px;
  min-height: 100px;
}
.custom-empty-cart {
  width: 100%;
  height: 100%;
}
</style>