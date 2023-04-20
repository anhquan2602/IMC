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
            <i class="fa-brands fa-algolia fa-2xl" style="color: #000000;"></i>
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
    <div class="detail-nav">
        <div class="box-nav" v-for="(item ,index) in details" :key="index">
            <div class="img-nav">
                <div class="wrap-img-nv">
                    <img :src="item.image" >
                 </div>
            </div>
            <div class="title-nav">
                {{ item.title }}
            </div>
            <div class="description">
                {{ item.detail }}
            </div>
        </div>
    </div>
  </div>
</template>
<script setup lang="js">
let details = [
    {   id: 1,
        image : "./image/http.png",
        title: "View HTTP headers and HTTP communication",
        detail : "Deep packet inspection allows you to dive into HTTP communications. Explore HTTP requests and responses. Web servers information and payloads, collect forms data and analyze transferred content."
    }, 
    {   id: 2,
        image : "./image/adn.png",
        title: "Find devices on network",
        detail : "Deep packet inspection allows you to dive into HTTP communications. Explore HTTP requests and responses. Web servers information and payloads, collect forms data and analyze transferred content."
    },
    {   id: 3,
        image : "./image/api.png",
        title: "Gather wifi infomation",
        detail : "Deep packet inspection allows you to dive into HTTP communications. Explore HTTP requests and responses. Web servers information and payloads, collect forms data and analyze transferred content."
    },
    {   id: 4,
        image : "./image/arp.png",
        title: "Extract files from pcap",
        detail : "Deep packet inspection allows you to dive into HTTP communications. Explore HTTP requests and responses. Web servers information and payloads, collect forms data and analyze transferred content."
    },
    {   id: 5,
        image : "./image/file.png",
        title: "SMB Sniffer",
        detail : "Deep packet inspection allows you to dive into HTTP communications. Explore HTTP requests and responses. Web servers information and payloads, collect forms data and analyze transferred content."
    },
    ,{   id: 6,
        image : "./image/key.png",
        title: "DNS queries",
        detail : "Deep packet inspection allows you to dive into HTTP communications. Explore HTTP requests and responses. Web servers information and payloads, collect forms data and analyze transferred content."
    }
    ,{   id: 7,
        image : "./image/smb.png",
        title: "Analyze ARP packets",
        detail : "Deep packet inspection allows you to dive into HTTP communications. Explore HTTP requests and responses. Web servers information and payloads, collect forms data and analyze transferred content."
    },
    {   id: 8,
        image : "./image/ssl.png",
        title: "Find passwords in pcap file",
        detail : "Deep packet inspection allows you to dive into HTTP communications. Explore HTTP requests and responses. Web servers information and payloads, collect forms data and analyze transferred content."
    },
    {   id: 9,
        image : "./image/wifi.png",
        title: "Pcap files processing API",
        detail : "Deep packet inspection allows you to dive into HTTP communications. Explore HTTP requests and responses. Web servers information and payloads, collect forms data and analyze transferred content."
    },
    {   id: 10,
        image : "./image/dns.png",
        title: "SSL/TLS infomation",
        detail : "Deep packet inspection allows you to dive into HTTP communications. Explore HTTP requests and responses. Web servers information and payloads, collect forms data and analyze transferred content."
    }
]
</script>
<style scoped>
.detail-nav {background-color: white;height: 88%;opacity: 0.5;}

.box-nav {
    margin: 0 auto;
    width: 70%;
    background-color: black;
    height: 100%;
    border-radius: 10px;
}
.navbar {
  height: 500px;
}
.nav ul li button {
    width: 60px;
    background: none;
    border: none;
    height: 60px;
}
.nav ul li button:hover {
    box-shadow: inset 100px 0 0 0 rgb(0, 0, 0);
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
    background: linear-gradient(90deg, rgb(255 174 1) 0%, rgb(255 75 0) 53%, rgb(255 25 1) 100%, rgba(0,212,255,1) 100%);
    height: 12%;
}
</style>