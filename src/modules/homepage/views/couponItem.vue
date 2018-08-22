<template>
    <div class="coupon-item coupon-item-more" >
        <p class="coupon-price">￥{{couponPrice}}</p>
        <p class="use-condition">满{{useCondition}}元全场商品可用</p>
        <p class="validity">领券后15天内有效</p>
    </div>
</template>

<script>
export default {
  props: {
    couponPrice: {
      default: 100,
      type: Number
    },
    useCondition: {
      default: 300,
      type: Number
    }
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
@import '../../../base/styles/library.scss';
.coupon-item {
  height: 70px;
  border-radius: 5px;
  background: rgb(241, 241, 241);
  border: 1px solid rgb(211, 211, 211);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: $fz-10;
  line-height: 16px;
  color: $color-333;
}
.coupon-item-more{
    width: 100%;
}
</style>


