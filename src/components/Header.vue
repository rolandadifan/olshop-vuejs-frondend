<template>
    <div>
    <!-- Header Section Begin -->
        <header class="header-section">
            <div class="header-top">
                <div class="container">
                    <div class="ht-left">
                        <div class="mail-service">
                            <i class=" fa fa-envelope"></i> Olshop@gmail.com
                        </div>
                        <div class="phone-service">
                            <i class=" fa fa-phone"></i> +628 22081996
                        </div>
                    </div>
                </div>
            </div>
            <div class="container">
                <div class="inner-header">
                    <div class="row">
                        <div class="col-md-2 col-md-2">
                            <div class="logo">
                                <a href="./index.html">
                                    <img width="125px" class="image-header" src="/logo.png" alt="" />
                                </a>
                            </div>
                        </div>
                        <div class="col-sm-2 col-sm-2 mt-5">
                            <h3 class="tittle-header">OLSHOP</h3>
                        </div>
                        <div class="col-lg-5 col-md-7"></div>
                        <div class="col-lg-3 text-right col-md-3 mt-5">
                            <ul class="nav-right">
                                <li class="cart-icon">
                                    Daftar Belanja &nbsp;
                                    <a href="#">
                                        <i class="icon_bag_alt"></i>
                                    <span>{{keranjangUser.length}}</span>
                                    </a>
                                    <div class="cart-hover">
                                        <div class="select-items">
                                            <table>
                                                <tbody v-if="keranjangUser.length > 0">
                                                    <tr v-for="keranjang in keranjangUser" :key="keranjang.id">
                                                        <td class="si-pic">
                                                            <img class="photo-item" :src="keranjang.photo" alt />
                                                        </td>
                                                        <td class="si-text">
                                                            <div class="product-selected">
                                                            <p>${{ keranjang.price }} x 1</p>
                                                            <h6>{{ keranjang.name }}</h6>
                                                            </div>
                                                        </td>
                                                        <td  @click="removeItem(keranjang.id)" class="si-close">
                                                            <i class="ti-close"></i>
                                                        </td>
                                                    </tr>
                                                </tbody>
                                                <tbody v-else>
                                                    <tr>
                                                        <td>
                                                            keranjan kosong
                                                        </td>
                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                        <div class="select-total">
                                            <span>total:</span>
                                            <h5>${{totalHarga}}</h5>
                                        </div>
                                        <div class="select-button">
                                            
                                            <a href="#" class="primary-btn view-card"><router-link to="/cart" style="color: white;">VIEW CARD</router-link></a>
                                            <a href="#" class="primary-btn checkout-btn">CHECK OUT</a>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <!-- Header End -->
    </div>
</template>

<script>
// @ is an alias to /src
// import Header from '@/components/Header.vue'

export default {
  name: 'Header',
  data() {
    return {
      keranjangUser: []
    };
  },
  methods: {
      removeItem(idx){
          let keranjangUserStorage = JSON.parse(localStorage.getItem("keranjangUser"));
          let itemKeranjangUserStorage = keranjangUserStorage.map(itemKeranjangUserStorage => itemKeranjangUserStorage.id);
          let index = itemKeranjangUserStorage.findIndex(id => id == idx);
          this.keranjangUser.splice(index,1);

          const parsed = JSON.stringify(this.keranjangUser);
          localStorage.setItem("keranjangUser", parsed);
          window.location.reload();
      }
  },
  mounted(){
      if (localStorage.getItem("keranjangUser")){
      try {
        this.keranjangUser = JSON.parse(localStorage.getItem("keranjangUser"));
      } catch(e) {
        localStorage.removeItem("keranjangUser");
      }
    }
  },
  computed: {
      totalHarga(){
          return this.keranjangUser.reduce(function(items, data){
              return items + data.price;
          }, 0);
      }
  }
};
</script>

<style scope>
.logo a img{
    margin-bottom: -25px;
    margin-top: -20;
    margin-left: 75px;
}
.tittle-header{
    margin-right: 700px;
    color: red;
}

.photo-item{
    width: 80px;
    height: 80px;
}
.view-card{
    color: white !important;
}
</style>
