<template>
    <div id="app">
        <!-- <dialogs></dialogs> -->
        <router-view />
        <!-- <loading v-show="showLoading"></loading>
        <navigation :class="[{unvisibility: !showNav}, {fadeInFast: showNav}]"
                    :isShow="showNav"
        ></navigation>
        <div :class="[{unNavBg: !showNav},{navBg:showNav}]" class="fadeInSlow"></div>
        <wx-share v-show="showSharePop" @hide="hideSharePop"></wx-share> -->
    </div>
</template>

<script>
import { mapState, mapActions } from "vuex";
// import Loading from '@/base/components/loading/index'
// import Navigation from '@/base/components/navigation/index'
// import Dialogs from '@/base/components/dialogs/index'
// import WxShare from '@/base/components/wxSharePop/index'
// import Confirm from '@/base/components/confirmBox/confirm'

export default {
  name: "App",
  created: function() {},
  // computed: {
  //   ...mapState({
  //     showLoading: state => state.showLoading,
  //     showNav: state => state.showNav,
  //     showSharePop: state => state.showSharePop
  //   })
  // },
  // methods: {
  //   ...mapActions(["hideSharePop"])
  // },
  // components: {
  //   Loading,
  //   Navigation,
  //   Dialogs,
  //   WxShare,
  //   Confirm
  // }
};
</script>

<style src="./base/styles/index.scss" lang="scss"></style>
