<template>
  <div class="navbar">
    <div class="nav">
      <ul>
        <li v-for="(_image, index) in images" :key="index">
          <button @click="switchImage(_image.src)">
            <i class="fa-2xl" :class="_image.icon" style="color: #000000"></i>
          </button>
        </li>
      </ul>
    </div>
    <div class="detail-nav">
      <div class="box-image">
        <img class="image" :src="imageSelected" alt="image.alt" />
      </div>
    </div>
  </div>
</template>
<script >
export default {
  data() {
    return {
      index: 0,
      imageSelected: null,
      images: [
        {
          id: 1,
          icon: "fa-solid fa-book",
          src: "https://scontent-hkg4-2.xx.fbcdn.net/v/t1.15752-9/346109413_3427990660799581_5200537205750737535_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=RnAg3J6lKbsAX_7POJY&_nc_ht=scontent-hkg4-2.xx&oh=03_AdRrv7Vrc7qKfK8DBooPNa6yTAudLPgVoE1TpTF91ltNUA&oe=64872244",
        },
        {
          id: 2,
          icon: "fa-solid fa-users",
          src: "https://scontent-hkg4-2.xx.fbcdn.net/v/t1.15752-9/346112878_255378923694605_7903823682824165213_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=pwnxhvh9dHYAX-q-HUf&_nc_ht=scontent-hkg4-2.xx&oh=03_AdRypcHaTu0ppGQ2LYKHye65zXZY9UsnafDdCICG0dpReg&oe=64872BE2",
        },
        {
          id: 3,
          icon: "fa-solid fa-dna",
          src: "https://scontent-hkg4-2.xx.fbcdn.net/v/t1.15752-9/346146879_127671253649871_1238148085117220543_n.png?_nc_cat=111&ccb=1-7&_nc_sid=ae9488&_nc_ohc=7uMkWmtMYjQAX-VPc14&_nc_ht=scontent-hkg4-2.xx&oh=03_AdQzxnGG6n_qwvVlLnb592cHHddiTpe93w_DRjgWOSh1bA&oe=648701D9",
        },
        {
          id: 4,
          icon: "fa-solid fa-wifi",
          src: "https://scontent-hkg4-2.xx.fbcdn.net/v/t1.15752-9/346110084_1598019347364664_616857176281766340_n.png?_nc_cat=110&ccb=1-7&_nc_sid=ae9488&_nc_ohc=YUapKSBO2i8AX9kPrDW&_nc_ht=scontent-hkg4-2.xx&oh=03_AdRdrxe7Kh84BflJxEszOHXj0pQzYtwR8K26yMIUc8x8Tg&oe=648724D4",
        },
        {
          id: 5,
          icon: "fa-solid fa-file",
          src: "https://scontent-hkg4-2.xx.fbcdn.net/v/t1.15752-9/346150713_193676946882925_6732510254096431378_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=nZHsdx9ewgQAX8kCenP&_nc_ht=scontent-hkg4-2.xx&oh=03_AdR9GYkdCDv3fsL-zzyNakwtNikVCZ3EeSsl0iWr5erLFw&oe=64871C8A",
        },
        {
          id: 6,
          icon: "fa-solid fa-stack-overflow",
          src: "https://scontent-hkg4-2.xx.fbcdn.net/v/t1.15752-9/346112969_1211174556220403_3513750070919027108_n.png?_nc_cat=109&ccb=1-7&_nc_sid=ae9488&_nc_ohc=f3s8uMAelLkAX_pLWn3&_nc_ht=scontent-hkg4-2.xx&oh=03_AdQ-VoUEVQc7QRMvzPL_81G1k3Nf8c9qE2lt1MEp_pGTaw&oe=648711BF",
        },
        {
          id: 7,
          icon: "fa-solid fa-window-maximize",
          src: "https://scontent-hkg4-1.xx.fbcdn.net/v/t1.15752-9/346113266_938350543976723_7516193773825540506_n.png?_nc_cat=108&ccb=1-7&_nc_sid=ae9488&_nc_ohc=C0JJYxCxx6QAX_Z45Bv&_nc_ht=scontent-hkg4-1.xx&oh=03_AdQxj3gUYcsWeoszb3vRDBFW0Q6LAK-GzeE0fLZG6sboZg&oe=64870FFD ",
        },
        {
          id: 8,
          icon: "fa-solid fa-truck-fast",
          src: "https://scontent-hkg4-1.xx.fbcdn.net/v/t1.15752-9/346109269_158140083684336_6764382120909393840_n.png?_nc_cat=107&ccb=1-7&_nc_sid=ae9488&_nc_ohc=juljKKsmeb0AX8N0BJU&_nc_ht=scontent-hkg4-1.xx&oh=03_AdQKNVRQypcNb9yRkQ_fJdLotHfgLo7TQ12h4hS_A_k5hA&oe=64872688",
        },
        {
          id: 9,
          icon: "fa-solid fa-virus",
          src: "https://scontent-hkg4-2.xx.fbcdn.net/v/t1.15752-9/346112773_1174900423174656_1982100966320260368_n.png?_nc_cat=104&ccb=1-7&_nc_sid=ae9488&_nc_ohc=6LTMxHRnDf8AX_hKwfR&_nc_ht=scontent-hkg4-2.xx&oh=03_AdSk4yDCi-ypPf6kD8uxAqGHn8FxPYfBbEPIVVWLUlI8mA&oe=6486FE32",
        },
        {
          id: 10,
          icon: "fa-solid fa-key",
          src: "https://scontent-hkg4-1.xx.fbcdn.net/v/t1.15752-9/346158151_769030024709405_2180327845451884480_n.png?_nc_cat=105&ccb=1-7&_nc_sid=ae9488&_nc_ohc=1-QVgq5nWqIAX86v5yv&_nc_ht=scontent-hkg4-1.xx&oh=03_AdQQY6CdfccvTlT6DiTM_tCeV0P3JllS5HdvK4w7SYTA6A&oe=6486FF64",
        }
      ],
    };
  },
  mounted() {
    this.switchImage();
  },

  methods: {
    switchImage(src) {
      this.imageSelected = src ? src : this.images[0].src;
    },
  },
};
</script>
<style scoped>
.detail-nav .box-image {
  width: 100%;
  height: 100%;
}
.detail-nav .box-image img {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.box-image-nav {
}
.detail-nav {
  margin: 0 auto;
  width: 70%;
  background-color: white;
  height: 70%;
  border-radius: 10px;
}

.box-nav {
  margin: 0 auto;
  width: 70%;
  background-color: black;
  height: 100%;
  border-radius: 10px;
}
.navbar {
  position: relative;
  height: 100vh;
  display: flex;
  align-items: center;
}
.nav ul li button {
  width: 60px;
  background: none;
  border: none;
  height: 60px;
}
.nav ul li button:hover {
  background: none;
  box-shadow: inset 100px 0 0 0 rgb(0 0 0 / 61%);
  color: white;
}
.navbar .nav ul {
  align-items: center;
  list-style: none;
  justify-content: space-evenly;
  display: flex;
  height: 100%;
}

.nav {
  bottom: 0;
  width: 100%;
  position: absolute;
  background: linear-gradient(
    90deg,
    rgb(255 174 1) 0%,
    rgb(255 75 0) 53%,
    rgb(255 25 1) 100%,
    rgba(0, 212, 255, 1) 100%
  );
}
</style>