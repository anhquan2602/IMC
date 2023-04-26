<template>
  <div class="header">
    <div class="menu-left">
      <ul>
        <li>Features</li>
        <li>FAQ</li>
        <li>Upload</li>
        <li>API</li>
      </ul>
    </div>
    <div class="logo">
      <div class="wrap-image">
        <img src="../../src/image/logo2.png" alt="" />
      </div>
    </div>
    <div class="menu-right">
      <ul>
        <li><router-link to="/Price">Price</router-link></li>
        <li>View Pcaps</li>
        <li>My Pcaps</li>
        <li>Sign In</li>
      </ul>
    </div>
  </div>
</template>
<script></script>
<style scoped>
a {
  text-decoration: blink;
  color: white;
}
.header {
  width: 100%;
  height: 70px;
  background-color: black;
  display: flex;
  position: relative;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
/* logo */
.logo {
  margin: 0 auto;
}

.logo .wrap-image {
  width: 70px;
  height: 70px;
  background-color: white;
  position: relative;
  border-radius: 10px;
}
.logo .wrap-image:hover {
  background-color: rgb(249, 103, 6);
}
.logo .wrap-image img {
  object-fit: cover;
  position: absolute;
  width: 70px;
  height: 70px;
  margin: 0 auto;
}
/* 
menu-left */
.menu-left {
  width: 40%;
}

.menu-left ul {
  justify-content: space-between;
  height: 100%;
  width: 100%;
  list-style-type: none;
  display: flex;
  box-sizing: border-box;
  text-align: center;
  align-items: center;
  font-family: revert;
}
.menu-left ul li {
  padding: 20px;
}
/* menu-right */
.menu-right {
  width: 40%;
}
.menu-right ul {
  justify-content: space-between;
  height: 100%;
  width: 100%;
  list-style-type: none;
  display: flex;
  box-sizing: border-box;
  text-align: center;
  align-items: center;
  font-family: revert;
}
.menu-right ul li {
  padding: 20px;
}
ul li {
  box-shadow: inset 0 0 0 0 rgb(249, 103, 6);
  color: #ffffff;
  margin: 0 -0.25rem;
  padding: 0 0.25rem;
  transition: color 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

ul li:hover {
  box-shadow: inset 100px 0 0 0 rgb(249, 103, 6);
  color: white;
}
</style>