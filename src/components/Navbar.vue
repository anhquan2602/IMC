<script setup>
</script>
<template>
  <div class="navbar">
    <div class="nav">
      <ul>
        <li>
          <button>
            <i
              class="fa-regular fa-window-maximize fa-2xl"
              style="color: #000000"
            ></i>
          </button>
        </li>
        <li>
          <button>
            <i class="fa-solid fa-dna fa-2xl" style="color: #000000"></i>
          </button>
        </li>
        <li>
          <button>
            <i class="fa-solid fa-wifi fa-2xl" style="color: #000000"></i>
          </button>
        </li>
        <li>
          <button>
            <i class="fa-solid fa-file fa-2xl" style="color: #000000"></i>
          </button>
        </li>
        <li>
          <button>
            <i
              class="fa-brands fa-stack-overflow fa-2xl"
              style="color: #000000"
            ></i>
          </button>
        </li>
        <li>
          <button>
            <i class="fa-solid fa-book fa-2xl" style="color: #000000"></i>
          </button>
        </li>
        <li>
          <button>
            <i
              class="fa-regular fa-window-maximize fa-2xl"
              style="color: #000000"
            ></i>
          </button>
        </li>
        <li>
          <button>
            <i class="fa-brands fa-algolia fa-2xl" style="color: #000000"></i>
          </button>
        </li>
        <li>
          <button>
            <i class="fa-solid fa-key fa-2xl" style="color: #000205"></i>
          </button>
        </li>
        <li>
          <button>
            <i class="fa-solid fa-virus fa-2xl" style="color: #000000"></i>
          </button>
        </li>
      </ul>
    </div>
    <div class="detail-nav"></div>
    <!-- <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
      <SplideSlide>
        <img src="../image/arp.png" alt="Sample 1" />
      </SplideSlide>
      <SplideSlide>
        <img src="../image/adn.png" alt="Sample 2" />
      </SplideSlide>
    </Splide> -->
  </div>
</template>
<style scoped>
.detail-nav {
  background-color: white;
  opacity: 0.5;
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