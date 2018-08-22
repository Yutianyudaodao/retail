<template>
    <div class="wrapper">

        <!--<page-tips title="微店已关闭"-->
                   <!--v-if="!openFlag">-->
            <!--<template slot="miguan">-->
                <!--<mi-guan kind="explain"></mi-guan>-->
            <!--</template>-->
        <!--</page-tips>-->
        <div>
            <goods-search v-if="isShowSearch"
                          :search-data="searchInfo"
                          @hideSearch="hideSearch"
            ></goods-search>
            <div v-else>
                <goods-detail v-if="isShowDetail"
                              :item="currentItem"
                              @hideDetail="hideDetail"
                ></goods-detail>
                <div v-show="!isShowDetail" class="home-page">
                    <div class="shop-info"
                         :style="{backgroundImage: '-webkit-linear-gradient(-90deg, rgba(0,0,0,0.00) 0%, rgba(0,0,0,0.70) 100%), url(' + shopImg + ')'}">
                        <p class="search-btn" @click="showSearch"></p>
                        <div class="info-box">
                            <img class="logo" :src="shopLogo" @click="jumpShopInfo"/>
                            <div class="detail ellipsis" v-show="shopName">
                                <div class="name-attention ellipsis">
                                    <div class="name-arrow ellipsis">
                                        <span class="name" @click="jumpShopInfo">{{ shopName }}</span>
                                        <arrow class="arrow-right"></arrow>
                                    </div>
                                    <span class="btn-attetion-ok"
                                          @click="cancelAttentionAction"
                                          v-if="isAttention">已关注</span>
                                    <span class="btn-attetion"
                                          @click="attentionAction"
                                          v-else>关注</span>
                                </div>
                                <ul class="features clear" @click="showFeaturesPop">
                                    <li class="item" v-for="item in features">{{ item.name }}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="shop-coupon">
                        <ul class="coupon-list">
                            <li class="item"  v-for="item in 5">
                                <couponItem/>
                            </li>
                        </ul>
                        
                    </div>
                    <div class="hot-goods">
                        <ul class="hot-list">
                            <li class="item" v-for="item in hotGoods" @click="showDetail(item)">
                                <div class="img" :style="{backgroundImage: 'url(' + item.imgPath + ')'}"></div>
                                <div class="intro">
                                    <p class="name text-nowrap">{{ item.name }}</p>
                                    <p class="price">￥{{ item.price }}</p>
                                </div>
                            </li>
                        </ul>
                        <div class="btn-check-all" style="background:orange"
                             @click="jumpGoodsList">查看全部商品</div>
                    </div>
                    <feature-pop v-show="showFeaturesFlag" :features="features" @closePop="hideFeaturesPop"></feature-pop>
                </div>


            </div>

        </div>
    </div>
</template>

<script>
    import { mapState, mapActions, mapMutations } from 'vuex'
    // import featurePop from '@/base/components/featurePop/index'
    // import PageTips from '@/base/components/pageTips/index.vue'
    // import MiGuan from '@/base/components/miguan/index.vue'
    // import Arrow from '@/base/components/icons/arrow.vue'
    // import GoodsDetail from '@/modules/goodsdetail/index.vue'
    // import GoodsSearch from '@/modules/searchgoods/index.vue'

    // import HomePageModule from './store/index'
    import couponItem from './views/couponItem.vue'
    
    export default {
        name: 'HomePage',
        data() {
            return {
                isShowDetail: false,
                isShowSearch: false,
                currentItem: {},
                searchInfo: {
                    from: 'homepage'
                },
            }
        },
        created() {
            const shopName = sessionInfo.getItem(StorageType.shop_name)
            AppUtil.setTitle(shopName)

            let { HomePage={} } = this.$store.state
            if(Object.keys(HomePage).length === 0) {
                this.$store.registerModule('HomePage', HomePageModule)
            }
            this.getHomeData()
        },
        destroyed() {
            this.resetState()
        },
        /* computed: {
            ...mapState('HomePage', {
//                'openFlag': state => state.openFlag,
                'acceptFlag': state => state.acceptFlag,
                'shopImg': state => state.shopImg,
                'isAttention': state => state.isAttention,
                'shopLogo': state => state.shopLogo,
                'shopName': state => state.shopName,
                'features': state => state.features,
                'hotGoods': state => state.hotGoods,
                'showFeaturesFlag': state => state.showFeaturesFlag,
            }),
        }, */
        methods: {
            /* ...mapActions('HomePage', [
                'getHomeData',
                'attentionAction',
                'cancelAttentionAction',
            ]),
            ...mapMutations('HomePage', [
                'showFeatures',
                'resetState'
            ]), */
            jumpGoodsList() {
                this.$router.push({path: '/goodslist'})
            },
            jumpShopInfo() {
                this.$router.push({path: '/shopinfo'})
            },

            setShowDetail(flag) {
                this.isShowDetail = flag
            },
            showDetail(goods) {
                this.setShowDetail(true)
                const { id, imgPath, name, price } = goods
                this.currentItem = {
                    from: 'homepage',
                    cartNum: this.cartNum,
                    goodsId: id,
                    name: name,
                    price: price,
                    imgPath: imgPath
                }
            },
            hideDetail() {
                this.setShowDetail(false)
            },

            setShowSearch(flag) {
                this.isShowSearch = flag
            },
            showSearch() {
                this.setShowSearch(true)
            },
            hideSearch() {
                this.setShowSearch(false)
            },

            showFeaturesPop() {
                this.showFeatures({flag: true})
            },
            hideFeaturesPop() {
                this.showFeatures({flag: false})
            }
        },
        components: {
            /* featurePop, // 特色标签
            GoodsSearch, // 搜索组件
            GoodsDetail, // 详情组件
            PageTips, // 零售微店是否关闭
            MiGuan, // 蜜罐
            Arrow, // 箭头 */
            couponItem
        }
    }
</script>

<style src="./index.scss" lang="scss" scoped></style>