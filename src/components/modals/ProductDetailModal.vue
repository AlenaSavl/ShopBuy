<template>
  <b-modal :id="`modal-${item.id}`">
    <div class="custom-modal row">
      <div class="col">
        <img class="modal-img" :src="item.image" alt="" />
      </div>
      <div class="col">
        <h6 class="modal-title">{{ item.category }}</h6>
        <div>
          <h6 class="modal-price">&#36;{{ item.price }}</h6>
          <h6 class="modal-title">{{ item.title }}</h6>
          <p class="modal-text">{{ item.description }}</p>
        </div>
      </div>
    </div>
  </b-modal>
</template>

<script>
export default {
  props: ["item"],
  mounted() {
    // console.log("item", this.$props.item);
  },
};
</script>

<style>
.modal-img {
  max-height: 300px;
  width: 100%;
}
.modal-price {
  font-size: 12px;
  margin-top: 4px;
}
.modal-title {
  font-size: 14px;
  font-weight: bold;
}
.modal-text {
  font-size: 12px;
  margin-top: 6px;
}
</style>