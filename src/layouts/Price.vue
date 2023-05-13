<template>
  <div class="price">
    <Header />
    <div class="main-price">
      <div class="h6">
        <h6>Choose a plan to</h6>
        <p>
          get private Cloud storage for pcap files, increase upload pcap file
          size
        </p>
      </div>
      <div class="price-detail">
        <div class="button-price">
          <ul class="button-class">
            <li v-for="(_image, index) in icons" :key="index">
              <button @click="changeImage(_image.src)">
                {{ _image.text }}
              </button>
            </li>
          </ul>
        </div>
        <div class="detail-price">
          <img :src="imageSelected" alt="" />
        </div>
      </div>
    </div>
   <Footer style="height: 8vh;"/>
  </div>
</template>
<script setup>
import Footer from "../components/Footer.vue";
import Header from "../components/Header.vue";
import { ref } from "vue";
let index = 0;
let imageSelected = ref("https://scontent-hkg4-2.xx.fbcdn.net/v/t1.15752-9/346116642_577080370933484_8409100248703615614_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=X9quP4igTGoAX-eRo_t&_nc_ht=scontent-hkg4-2.xx&oh=03_AdRnLXHZfloZchPgHGbG9YN8qfxpD7vSn-Z0jpBPxMBChw&oe=648746F0");
const icons = [
  {
    id: 1,
    text: "Free",
    src: "https://scontent-hkg4-2.xx.fbcdn.net/v/t1.15752-9/346116642_577080370933484_8409100248703615614_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=X9quP4igTGoAX-eRo_t&_nc_ht=scontent-hkg4-2.xx&oh=03_AdRnLXHZfloZchPgHGbG9YN8qfxpD7vSn-Z0jpBPxMBChw&oe=648746F0",
  },
  {
    id: 2,
    text: "Started",
    src: "https://scontent-hkg4-2.xx.fbcdn.net/v/t1.15752-9/346111938_629976855688374_7630070893714329951_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=FXn4Gzjzp9kAX_K-3fq&_nc_ht=scontent-hkg4-2.xx&oh=03_AdQKPuM8HRzZWgfQse7LYw1LdcXMYV-wmLo14USkSLpXzw&oe=6487476E",
  },
  {
    id: 3,
    text: "Professional",
    src: "https://scontent-hkg4-1.xx.fbcdn.net/v/t1.15752-9/346115844_253392144016692_3213009404690195486_n.png?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=aTF-glKBn7IAX85ZMzz&_nc_ht=scontent-hkg4-1.xx&oh=03_AdQkJx1-n6AmgTxPZsfix5q_XF8m0SU7vO36E3gIShKvmQ&oe=64876EFA",
  },
  {
    id: 4,
    text: "Business",
    src: "https://scontent-hkg4-1.xx.fbcdn.net/v/t1.15752-9/346109106_775945963924450_4148467502106293558_n.png?_nc_cat=102&ccb=1-7&_nc_sid=ae9488&_nc_ohc=M3bBFjn0kssAX8e3GR8&_nc_ht=scontent-hkg4-1.xx&oh=03_AdQAoM385eULQbV2Cy1Ghko5xZ9wtu_cvalyV1NPqDt5ZA&oe=64874B5C",
  },
];
const changeImage = function (src) {
  this.imageSelected = src ? src : this.icons[0].src;
};
</script>
<style lang="scss">
.h6 h6 {
  font-family: math;
  font-size: 50px;
}
.h6 p {
  font-size: 15px;
  justify-content: center;
  align-items: center;
  display: flex;
  font-family: monospace;
  box-sizing: border-box;
  color: wheat;
}
.h6 {
  //   height: 20%;
  color: #f96805;
  text-align: center;
  width: 100%;
  box-sizing: border-box;
}
ul.button-class li button {
    text-shadow: 1px 1px #f19f54;
  font-size: 27px;
  background: none;
  width: 100%;
  height: 100%;
  border-radius: 10px;
}
.detail-price {
  width: 50%;
  overflow: hidden;
}

.detail-price img {
  border-radius: 10px;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.price-detail {
  width: 100%;
  display: flex;
  //   height: 80%;
}

.button-price {
  width: 50%;
}

ul.button-class {
  text-align: center;
  list-style: none;
  grid-template-columns: auto auto;
  display: grid;
  width: 100%;
  height: 100%;
}

ul.button-class li {
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset,
    rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
    rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px,
    rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px,
    rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}
.main-price {
  width: 100%;
  background-image: url(/src/image/SL-090519-23100-05.jpg);
  object-fit: cover;
  background-repeat: no-repeat;
  background-size: cover;
}
</style>
