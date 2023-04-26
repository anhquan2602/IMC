<template>
  <div>
    <div class="header-main">
      <div class="title">
        <div class="wrap-title">
          <h4>A-PACKETS</h4>
          <h6>Online pcap file analyzer</h6>
        </div>
      </div>
      <div class="video">
        <div class="video-wrapper">
          <iframe
            width="560"
            height="315"
            frameborder="0"
            src="https://www.youtube.com/embed/TVzLAmQvw_U"
            srcdoc="<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}</style><a href=https://www.youtube.com/embed/TVzLAmQvw_U?autoplay=1><img src=https://img.youtube.com/vi/TVzLAmQvw_U/hqdefault.jpg alt='A-Packets Online pcap analyzer overview'><span>▶</span></a>"
            title="A-Packets Online pcap analyzer overview"
          ></iframe>
        </div>
      </div>
      <div class="detail-left hover-img">
        <figure>
          <img src="../image/hiddenl.png" alt="" />
          <figcaption>
            <p>
              Allow read and view pcap file online. Explore IPv4/IPv6, HTTP,
              Telnet, FTP, DNS, SSDP, WPA2 protocols details. You can build map
              of network structure and view nodes communications. Sniff and
              analyze network traffic and other pcap data.
            </p>
          </figcaption>
        </figure>
      </div>
      <div class="detail-right hover-img">
        <figure>
          <img src="../image/hiddenr.png" alt="" />
          <figcaption>
            <p>
              Analyse pcap files to view HTTP headers, request and response
              data. Extract transferred files, office documents, pictures. Find
              passwords for various protocols.
            </p>
          </figcaption>
        </figure>
      </div>
      <div class="function">
        <div class="wrap-button">
          <button class="view">View analyzed pcaps</button>
          <button class="upload">Upload pcap file</button>
        </div>
      </div>
    </div>
    <div class="wrap-main">
      <div class="features">
        <div class="wrap-fd">
          <h6>FEATURES</h6>
          <p>
            Bring intellectual network traffic analysis into Cloud. Open pcap
            files online with our pcapng viewer.
          </p>
        </div>
      </div>
      <Navbar></Navbar>
      <div class="footer-main"></div>
    </div>
  </div>
</template>
<script setup>
import Navbar from "../components/Navbar.vue";
</script>
<style >
@import url(../style/hidden-style.css);
/* features */
.features {
  box-sizing: border-box;
  padding: 10px;
  display: flex;
  width: 100%;
  background-color: black;
  justify-content: center;
}
.wrap-fd {
  width: 50%;
  text-align: center;
  padding: 8px;
  border: 1px solid;
}
/* main-heaer */
.header-main {
  background-position: bottom;
  height: 600px;
  background-image: url(/src/image/background1.webp);
  background-size: cover;
}
.wrap-main {
  width: 100%;
}
.main {
  width: 90%;
  margin: 0 auto;
}
.backgroud {
  height: 650px;
  width: 100%;
}

.backgroud img {
  overflow: hidden;
  object-fit: cover;
  width: 100%;
  height: 100%;
}
/* title */

.title {
  text-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
    rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
    rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  text-align: center;
  box-sizing: border-box;
  width: 390px;
  left: 518px;
  top: 80px;
  height: 100px;
  font-size: 35px;
  font-family: revert;
  padding-top: 10px;
  margin: 0 auto;
}
.wrap-title {
  margin: 0 auto;
}

/* video */
.video {
  padding-top: 30px;
  margin: 0 auto;
  justify-content: center;
  display: flex;
}
/* detail */
.detail-left {
  width: 20%;
  top: 240px;
  position: absolute;
  left: 73px;
}

.detail-right {
  width: 20%;
  top: 230px;
  position: absolute;
  right: 73px;
}

figcaption p {
  font-size: 10px;
}
/* button */
.function {
  padding: 30px;
  height: 70px;
  display: flex;
  justify-content: center;
}
.wrap-button {
  box-sizing: border-box;
  height: 100%;
}

.wrap-button button {
  height: 100%;
  margin: 0px 150px 0px 150px;
  width: 190px;
  background: none;
  color: white;
  font-size: 15px;
  text-shadow: 1px 1px 2px #f88700;
}
</style>