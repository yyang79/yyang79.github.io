<template>
  <div id="index">
    <div class="header">
      <Header />
    </div>

    <div class="index-mian">
      <Main />
    </div>

    <div
      v-drag
      id="chatplace"
      v-show="this.$store.state.backstage_index.chatplace"
    >
      <Chat />
    </div>
    <div
      @click="chatreset"
      id="chatmin"
      v-show="this.$store.state.backstage_index.chatmin"
    >
      <i style="font-size: 30px" class="el-icon-caret-top"></i>
    </div>
    <div v-show="this.$store.state.backstage_index.chat" id="back_chat">
      <el-container>
        <el-header height="100px" style="background: #ff8566; padding: 0px">
          <div id="close" style="width: 100%; height: 30px">
            <a href="javascript:void(0)" style="float: right" @click="chat()">
              <i style="margin: 5px 10px" class="el-icon-close"></i
            ></a>
            <a href="javascript:void(0)" style="float: right" @click="chat()"
              ><i style="margin: 5px 10px" class="el-icon-minus"></i
            ></a>
          </div>
          <div style="width: 100%; height: 70px">
            <el-image
              style="
                width: 50px;
                height: 50px;
                border-radius: 50%;
                margin: 10px;
              "
              :src="require('../../../assets/images/logo.png')"
            ></el-image>
            <span style="position: relative; top: -25px; left: 0px"
              >花无缺鲜花店</span
            >
          </div>
        </el-header>
        <el-main style="padding: 0">
          <div class="inputdeep">
            <el-input
              size="small"
              style="background-color: #e3e3e3"
              prefix-icon="el-icon-search"
              v-model="search"
              placeholder="搜索"
            ></el-input>
          </div>
          <el-tabs
            @tab-click="handleClick"
            v-model="this.$store.state.backstage_index.activeName"
            :stretch="true"
          >
            <el-tab-pane label=" 消息 " name="1">
              <el-container>
                <el-main style="max-height: 400px; padding: 5px; flex-grow: 1">
                  <div
                    id="newlist"
                    v-for="list in this.$store.state.backstage_index.newlists"
                    :key="list.userName"
                    style="width: 100%; height: 50px"
                  >
                    <div
                      @dblclick="newchatplace(list.userName)"
                      style="width: 100%; height: 100%"
                    >
                      <el-image
                        style="
                          width: 40px;
                          height: 40px;
                          border-radius: 50%;
                          margin: 5px 10px;
                        "
                        :src="require('../../../assets/images/logo.png')"
                      ></el-image>
                      <span style="position: relative; top: -20px; left: 0px">{{
                        list.userName
                      }}</span>
                    </div>
                    <div
                      @click="delnewlist(list.userName)"
                      style="
                        z-index: 12;
                        width: 21px;
                        height: 21px;
                        position: relative;
                        top: -35px;
                        left: 240px;
                      "
                    >
                      <a href="javascript:void(0)"
                        ><i class="el-icon-close"></i
                      ></a>
                    </div>
                  </div>
                </el-main>
              </el-container>
            </el-tab-pane>
            <el-tab-pane label=" 联系人 " name="2">
              <el-container>
                <el-main style="max-height: 400px; padding: 5px; flex-grow: 1">
                  <div
                    id="newlist"
                    v-for="list in this.$store.state.backstage_index.lists"
                    :key="list.userName"
                    @dblclick="playchatplace(list.userName)"
                    style="width: 100%; height: 50px"
                  >
                    <el-image
                      style="
                        width: 40px;
                        height: 40px;
                        border-radius: 50%;
                        margin: 5px 10px;
                      "
                      :src="require('../../../assets/images/logo.png')"
                    ></el-image>
                    <span style="position: relative; top: -20px; left: 0px">{{
                      list.userName
                    }}</span>
                  </div>
                </el-main>
              </el-container>
            </el-tab-pane>
          </el-tabs>
        </el-main>
      </el-container>
    </div>
    <footer>
      <Footer />
    </footer>
  </div>
</template>

<script>
import Header from "./header";
import Main from "./main";
import Footer from "./footer";
import Chat from "../system/chat";
export default {
  name: "index",
  inject: ["reload"],
  components: {
    Header,
    Main,
    Footer,
    Chat,
  },
  data() {
    return {
      search: "",
    };
  },
  created() {
    this.$axios
      .get("/chat/user")
      .then((res) => {
        this.$store.dispatch("backstage_index/lists", res.data);
      })
      .catch((err) => {
        window.console.log(err);
      });
    if (
      this.$store.state.login.backinfo.type == undefined ||
      this.$store.state.login.backinfo.type == ""
    ) {
      this.$router.push("/back/login");
      this.$message.warning("请重新登录")
    }
  },
  directives: {
    drag(el) {
      el.onmousedown = function (e) {
        var disx = e.pageX - el.offsetLeft;
        let disY = e.pageY - el.offsetTop;
        document.onmousemove = function (e) {
          if (e.pageX - disx <= 0) {
            el.style.left = 0 + "px";
          }
          if (e.pageX - disx >= 0) {
            el.style.left = e.pageX - disx + "px";
          }
          if (e.pageY - disY <= 0) {
            el.style.top = 0 + "px";
          }
          if (e.pageY - disY >= 0) {
            el.style.top = e.pageY - disY + "px";
          }
        };
        document.onmouseup = function () {
          document.onmousemove = document.onmouseup = null;
        };
      };
    },
  },
  methods: {
    chat() {
      this.$store.dispatch("backstage_index/hidechat");
    },
    chatreset() {
      this.$store.dispatch("backstage_index/chatreset");
    },
    playchatplace(name) {
      var flog = true;
      var list = [];
      var lists = this.$store.state.backstage_index.lists;
      var newlists = this.$store.state.backstage_index.newlists;
      for (let i = 0; i < lists.length; i++) {
        if (lists[i].userName == name) {
          if (newlists.length == 0) {
            this.$store.dispatch("backstage_index/newlists", lists[i]);
            flog = false;
          } else {
            for (let j = 0; j < newlists.length; j++)
              if (newlists[j].userName == name) {
                flog = false;
              } else {
                list = lists[i];
              }
          }
        }
      }
      if (flog) {
        this.$store.dispatch("backstage_index/newlists", list);
      }

      var value = { name: name };
      this.$store.dispatch("backstage_index/adduser", value);
      this.$store.dispatch("backstage_index/showchatplace");
      this.reload();
    },
    newchatplace(name) {
      var value = { name: name };
      this.$store.dispatch("backstage_index/adduser", value);
      this.$store.dispatch("backstage_index/showchatplace");
      this.reload();
    },
    handleClick(e) {
      this.$store.dispatch("backstage_index/active", e.name);
    },
    delnewlist(val) {
      this.$store.dispatch("backstage_index/delnewlist", val);
    },
  },
};
</script>

<style scoped>
body {
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.index {
  margin: 0px;
  padding: 0px;
  width: 100%;
  height: 100%;
}
.header {
  position: fixed;
  left: 0px;
  top: 0px;
  width: 100%;
  height: 80px;
}
.index-mian {
  position: fixed;
  top: 80px;
  left: 0px;
  bottom: 30px;
  width: 100%;
}
footer {
  position: fixed;
  left: 0px;
  bottom: 0px;
  width: 100%;
  height: 30px;
}
#back_chat {
  position: fixed;
  top: 5px;
  right: 5px;
  height: 595px;
  width: 280px;
  background: white;
  box-shadow: 0 0 10px 1px #888888;
  z-index: 10;
}
.inputdeep >>> .el-input__inner {
  border: 0;
  border-radius: 0;
  background: #eeeeee;
}
#newlist:hover {
  background: #e3e3e3;
}
#chatplace {
  position: absolute;
  top: 60px;
  left: 100px;
  background: white;
  z-index: 10;
}
#close a:hover {
  background: red;
}
#chatmin {
  background: #438eb9;
  position: fixed;
  left: 50%;
  bottom: 0px;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  z-index: 10;
}
</style>