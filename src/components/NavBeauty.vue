<template>
  <div class="nav-beauty">
    <div class="ag-offer-block">
      <div class="ag-format-container">
        <ul class="ag-offer_list">
          <li class="ag-offer_item">
            <div class="ag-offer_visible-item">
              <div class="ag-offer_img-box">
                <img
                  src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/icon-64-1.svg"
                  class="ag-offer_img"
                  alt=""
                />
              </div>
              <div class="ag-offer_title">HTTP : Header & Communication</div>
            </div>
            <div class="ag-offer_hidden-item">
              <p class="ag-offer_text">
                Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
                commodo ligula eget dolor. Aenean massa.
              </p>
            </div>
          </li>
          <li class="ag-offer_item">
            <div class="ag-offer_visible-item">
              <div class="ag-offer_img-box">
                <img
                  src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/icon-64-2.svg"
                  class="ag-offer_img"
                  alt=""
                />
              </div>
              <div class="ag-offer_title">Find devices on network</div>
            </div>
            <div class="ag-offer_hidden-item">
              <p class="ag-offer_text">
                You can effortlessly build pcap visualisation for network
                communications. Explore network devices map and all
                communications between nodes. Classify network nodes by their
                type through pcap analysis. Visualize TCP/UDP communications
                from pcap file with network graph. Quick read pcap files to
                detect DNS, DHCP and LDAP servers and sniff captured DNS
                requests in pcap file. A-Packets uses passive fingerprinting to
                detect running network services and open ports. Devices map
                displays network traffic for popular protocols. It allows
                explore communication links between network nodes using various
                filters.
              </p>
            </div>
          </li>
          <li class="ag-offer_item">
            <div class="ag-offer_visible-item">
              <div class="ag-offer_img-box">
                <img
                  src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/icon-64-3.svg"
                  class="ag-offer_img"
                  alt=""
                />
              </div>
              <div class="ag-offer_title">Donec pede</div>
            </div>
            <div class="ag-offer_hidden-item">
              <p class="ag-offer_text">
                Donec pede justo, fringilla vel, aliquet nec, vulputate eget,
                arcu.
              </p>
            </div>
          </li>
          <li class="ag-offer_item">
            <div class="ag-offer_visible-item">
              <div class="ag-offer_img-box">
                <img
                  src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/icon-64-4.svg"
                  class="ag-offer_img"
                  alt=""
                />
              </div>
              <div class="ag-offer_title">Cras dapibus</div>
            </div>
            <div class="ag-offer_hidden-item">
              <p class="ag-offer_text">
                Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate
                eleifend tellus. Aenean leo ligula, porttitor.
              </p>
            </div>
          </li>
          <li class="ag-offer_item">
            <div class="ag-offer_visible-item">
              <div class="ag-offer_img-box">
                <img
                  src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/icon-64-5.svg"
                  class="ag-offer_img"
                  alt=""
                />
              </div>
              <div class="ag-offer_title">Aliquam lorem</div>
            </div>
            <div class="ag-offer_hidden-item">
              <p class="ag-offer_text">
                Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
                Phasellus viverra nulla ut metus varius.
              </p>
            </div>
          </li>
          <li class="ag-offer_item">
            <div class="ag-offer_visible-item">
              <div class="ag-offer_img-box">
                <img
                  src="https://raw.githack.com/SochavaAG/example-mycode/master/pens/1_images/icon-64-6.svg"
                  class="ag-offer_img"
                  alt=""
                />
              </div>
              <div class="ag-offer_title">Phasellus</div>
            </div>
            <div class="ag-offer_hidden-item">
              <a href="#" class="ag-offer_btn"> Dapibus viverra </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<style scoped>
.ag-format-container {
  margin: 0 auto;
}

.ag-offer-block {
  background: url(/src/image/background1.webp);
  background-size: contain;
}
.ag-offer_list {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -moz-box-pack: justify;
  -ms-flex-pack: justify;
  justify-content: space-between;
  -webkit-flex-wrap: wrap;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: start;
  -webkit-align-items: flex-start;
  -moz-box-align: start;
  -ms-flex-align: start;
  align-items: flex-start;
}
.ag-offer_item {
  width: 33.33%;

  overflow: hidden;

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  position: relative;
}
.ag-offer_item:not(:nth-child(1)):not(:nth-child(2)):not(:nth-child(3)) {
  border-top: 1px solid #c1c1c1;
}
.ag-offer_item:not(:nth-child(3n)) {
  border-right: 1px solid #c1c1c1;
}
.ag-offer_item:nth-child(1) .ag-offer_hidden-item {
  background-color: #e45f0a;
}
.ag-offer_item:nth-child(2) .ag-offer_hidden-item {
  background-color: #ffca00;
}
.ag-offer_item:nth-child(3) .ag-offer_hidden-item {
  background-color: #15c1c1;
}
.ag-offer_item:nth-child(4) .ag-offer_hidden-item {
  background-color: #008000;
}
.ag-offer_item:nth-child(5) .ag-offer_hidden-item {
  background-color: #8c7b00;
}
.ag-offer_item:nth-child(6) .ag-offer_hidden-item {
  background-color: #000080;
}
.ag-offer_item:hover .ag-offer_visible-item {
  opacity: 0;

  -webkit-transform: scale(0);
  -moz-transform: scale(0);
  -ms-transform: scale(0);
  -o-transform: scale(0);
  transform: scale(0);

  -webkit-transition-delay: 0s;
  -moz-transition-delay: 0s;
  -o-transition-delay: 0s;
  transition-delay: 0s;
}
.ag-offer_visible-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  height: 100%;
  width: 100%;
  padding: 35px 40px;

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  -webkit-transition: 0.4s 0.3s;
  -moz-transition: 0.4s 0.3s;
  -o-transition: 0.4s 0.3s;
  transition: 0.4s 0.3s;
}
.ag-offer_img {
  height: 64px;
  width: 64px;
  margin: 0 15px 0 0;
}
.ag-offer_title {
  font-size: 22px;

  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}
.ag-offer_hidden-item {
  display: -webkit-box;
  display: -webkit-flex;
  display: -moz-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -webkit-align-items: center;
  -moz-box-align: center;
  -ms-flex-align: center;
  align-items: center;

  padding: 30px;

  opacity: 0;

  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  -webkit-transform: rotate(180deg) scale(0);
  -moz-transform: rotate(180deg) scale(0);
  -ms-transform: rotate(180deg) scale(0);
  -o-transform: rotate(180deg) scale(0);
  transform: rotate(180deg) scale(0);

  -webkit-transition: 0.3s;
  -moz-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;
}
.ag-offer_item:hover .ag-offer_hidden-item {
  opacity: 1;

  -webkit-transform: rotate(0deg) scale(1);
  -moz-transform: rotate(0deg) scale(1);
  -ms-transform: rotate(0deg) scale(1);
  -o-transform: rotate(0deg) scale(1);
  transform: rotate(0deg) scale(1);

  -webkit-transition-delay: 0.3s;
  -moz-transition-delay: 0.3s;
  -o-transition-delay: 0.3s;
  transition-delay: 0.3s;
}
.ag-offer_text {
  max-width: 100%;

  opacity: 0;

  font-size: 20px;
  color: #fff;

  -webkit-transition: 0.3s 0.5s;
  -moz-transition: 0.3s 0.5s;
  -o-transition: 0.3s 0.5s;
  transition: 0.3s 0.5s;
}
.ag-offer_item:hover .ag-offer_text {
  opacity: 1;
}
.ag-offer_btn {
  display: block;
  padding: 10px 20px;
  border: 2px solid #fff;

  position: absolute;
  top: 50%;
  left: 50%;

  white-space: nowrap;
  font-size: 25px;
  color: #fff;

  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  border-radius: 3px;

  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
}
.ag-offer_btn:hover {
  border: 2px solid #0000d1;
  background-color: #fff;

  text-decoration: none;
  color: #0000d1;
}

@media only screen and (max-width: 767px) {
  .ag-format-container {
    width: 96%;
  }

  .ag-offer_item {
    width: 100%;
    margin: 0 0 30px;
    border: 0 none !important;
    border-bottom: 1px solid #c1c1c1 !important;
  }
  .ag-offer_visible-item {
    padding: 0 20px 30px;

    -webkit-box-pack: start;
    -webkit-justify-content: flex-start;
    -moz-box-pack: start;
    -ms-flex-pack: start;
    justify-content: flex-start;
  }
  .ag-offer_item:hover .ag-offer_visible-item {
    opacity: 1;

    -webkit-transform: none;
    -moz-transform: none;
    -ms-transform: none;
    -o-transform: none;
    transform: none;
  }
  .ag-offer_hidden-item {
    padding: 0 20px 20px;

    opacity: 1;

    position: static;

    -webkit-transform: none;
    -moz-transform: none;
    -ms-transform: none;
    -o-transform: none;
    transform: none;
  }
  .ag-offer_item:nth-child(1) .ag-offer_hidden-item,
  .ag-offer_item:nth-child(2) .ag-offer_hidden-item,
  .ag-offer_item:nth-child(3) .ag-offer_hidden-item,
  .ag-offer_item:nth-child(4) .ag-offer_hidden-item,
  .ag-offer_item:nth-child(5) .ag-offer_hidden-item,
  .ag-offer_item:nth-child(6) .ag-offer_hidden-item {
    background-color: transparent;
  }
  .ag-offer_item:hover .ag-offer_text {
    opacity: 1;
  }
  .ag-offer_title {
    font-weight: bold;
  }
  .ag-offer_text {
    opacity: 1;

    font-size: 18px;
    color: #000;
  }
  .ag-offer_btn {
    border: 2px solid #0000d1;
    background-color: #000080;

    position: static;

    -webkit-transform: none;
    -moz-transform: none;
    -ms-transform: none;
    -o-transform: none;
    transform: none;
  }
}

@media only screen and (max-width: 639px) {
}

@media only screen and (max-width: 479px) {
}

@media (min-width: 768px) and (max-width: 979px) {
  .ag-format-container {
    width: 750px;
  }
}

@media (min-width: 980px) and (max-width: 1161px) {
  .ag-format-container {
    width: 960px;
  }
}
</style>