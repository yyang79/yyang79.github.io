<template>
  <div id="chatpage">
    <el-container
      style="height: 460px; width: 800px; border-radius: 5px; margin: 0px auto"
    >
      <el-header
        style="
          height: 60px;
          border-bottom: 1px solid #e3e3e3;
          background: #ff8566;
        "
        ><div style="text-align: center">
          <h4>{{ this.$store.state.backstage_index.user }}</h4>
          <a
            id="close"
            style="
              position: relative;
              top: -60px;
              left: 370px;
              padding: 5px 7px;
            "
            href="javascript:void(0)"
            @click="chatmin"
          >
            <i class="el-icon-minus"></i>
          </a>
          <a
            id="close"
            style="
              position: relative;
              top: -60px;
              left: 370px;
              padding: 5px 7px;
            "
            href="javascript:void(0)"
            @click="chatplaceall"
          >
            <i class="el-icon-close"></i>
          </a>
        </div>
      </el-header>
      <el-container style="height: 400px">
        <el-aside
          id="el-aside"
          :width="aside + 'px'"
          style="border-right: 1px solid #e3e3e3"
        >
          <div
            v-for="user in this.$store.state.backstage_index.users"
            :key="user.name"
            :class="
              user.name == $store.state.backstage_index.user
                ? 'nowuser'
                : 'otheruser'
            "
          >
            <div
              style="width: 100%; height: 100%"
              @click="chooseuser(user.name)"
            >
              <span
                style="
                  position: relative;
                  top: 10px;
                  left: 10px;
                  max-width: 90px;
                "
                >{{ user.name }}</span
              >
            </div>
            <div
              style="
                z-index: 12;
                width: 21px;
                height: 21px;
                position: relative;
                top: -30px;
                left: 95px;
              "
              @click="deletechat(user.name)"
            >
              <a href="javascript:void(0)">
                <i class="el-icon-circle-close"></i
              ></a>
            </div>
          </div>
        </el-aside>
        <el-main style="padding: 0px">
          <el-container width="600px" height="400px">
            <el-main
              id="chatlist"
              style="height: 270px; margin: 0px; padding: 0px"
            >
              <div class="chatlist" style="width: 100%; height: 100%">
                <div
                  v-for="chat in chats"
                  :key="chat.sendName"
                  :class="chat.sendName == 'user' ? 'ltalk' : 'rtalk'"
                >
                  <el-image
                    :src="s"
                    style="height: 40px; width: 40px; border-radius: 50%"
                  ></el-image>
                  <span
                    id="chat"
                    style="
                      border: 1px solid #e3e3e3;
                      padding: 10px;
                      margin: 0px 10px;
                      border-radius: 10px;
                      max-width: 220px;
                      display: block;
                      overflow-wrap: break-word;
                    "
                    >{{ chat.sendContent }}</span
                  >
                </div>
              </div>
            </el-main>
            <el-footer
              height="129px"
              style="margin: 0px; padding: 0px; border-top: 1px solid #e3e3e3"
            >
              <div class="toollist" style="height: 29px; width: 100%">
                <i class="el-icon-circle-close"></i
                ><i class="el-icon-picture"></i
                ><i class="el-icon-message-solid"></i
                ><i class="el-icon-more"></i>
              </div>
              <div class="inputDeep" style="height: 65px; width: 100%">
                <el-input
                  type="textarea"
                  :rows="2"
                  :resize="none"
                  style="margin: 0px; border: 0"
                  v-model="sendmessage"
                  focus
                >
                </el-input>
              </div>
              <div style="height: 35px; width: 100%">
                <el-button
                  @click="send"
                  size="mini"
                  style="float: right; margin: 0px 10px"
                  >发送</el-button
                >
                <el-button size="mini" @click="closenow" style="float: right"
                  >关闭</el-button
                >
              </div>
            </el-footer>
          </el-container>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import Utils from "../../../assets/util/util";
export default {
  inject: ["reload"],
  data() {
    return {
      sendmessage: "",
      chats: [],
      aside: 0,
      s: require("../../../assets/images/logo.png"),
    };
  },
  mounted() {
    if (this.$store.state.backstage_index.users.length < 2) {
      this.aside = 0;
    } else {
      this.aside = 120;
    }
    this.scrollToBottom();
    var that = this;
    Utils.$on("backchataxios", function (val) {
      window.console.log(val);
      alert("调用成功");
      that.backchataxios();
    });
  },
  created() {
    this.backchataxios();
  },

  //每次页面渲染完之后滚动条在最底部
  updated: function () {
    this.scrollToBottom();
  },

  methods: {
    backchataxios() {
      this.$axios
        .post("http://127.0.0.1:3000/chat/user", {
          user: this.$store.state.backstage_index.user,
        })
        .then((res) => {
          for (let i = 0; i < res.data.length; i++) {
            this.chats = res.data;
          }
          if (this.$store.state.backstage_index.users.length < 2) {
            this.aside = 0;
          } else {
            this.aside = 120;
          }
        })
        .catch((error) => {
          window.console.log(error);
        });
    },
    send() {
      var time = this.getdate();
      this.$axios
        .post("http://127.0.0.1:3000/chat/send", {
          sendName: "admin",
          receiverName: this.$store.state.backstage_index.user,
          sendTime: time,
          sendContent: this.sendmessage,
        })
        .then(() => {})
        .catch((error) => {
          window.console.log(error);
        });
      this.sendmessage = "";
      this.backchataxios();
      Utils.$emit("recpchataxios", "调用成功");
    },
    scrollToBottom() {
      this.$nextTick(() => {
        var container = this.$el.querySelector("#chatlist");
        container.scrollTop = container.scrollHeight;
      });
    },
    chatplace() {
      this.$store.dispatch("backstage_index/hidechatplace");
    },
    chatplaceall() {
      this.$store.dispatch("backstage_index/chatplaceall");
      this.$store.dispatch("backstage_index/hidechatplace");
    },
    chatmin() {
      this.$store.dispatch("backstage_index/chatmin");
    },
    deletechat(val) {
      this.$store.dispatch("backstage_index/deletechat", val);
      this.backchataxios();
    },
    closenow() {
      this.$store.dispatch("backstage_index/closenow");
      this.backchataxios();
    },
    chooseuser(val) {
      this.$store.dispatch("backstage_index/chooseuser", val);
      this.backchataxios();
    },
    getdate() {
      var myDate = new Date();
      var myYear = myDate.getFullYear(); //获取完整的年份(4位,1970-????)
      var myMonth = myDate.getMonth() + 1; //获取当前月份(0-11,0代表1月)
      var myToday = myDate.getDate(); //获取当前日(1-31)
      var myHour = myDate.getHours(); //获取当前小时数(0-23)
      var myMinute = myDate.getMinutes(); //获取当前分钟数(0-59)
      var mySecond = myDate.getSeconds(); //获取当前秒数(0-59)
      var time =
        myYear +
        "-" +
        this.fillZero(myMonth) +
        "-" +
        this.fillZero(myToday) +
        " " +
        this.fillZero(myHour) +
        ":" +
        this.fillZero(myMinute) +
        ":" +
        this.fillZero(mySecond);
      return time;
    },
    fillZero(val) {
      var realNum;
      if (val < 10) {
        realNum = "0" + val;
      } else {
        realNum = val;
      }
      return realNum;
    },
  },
};
</script>

<style scoped>
#chatpage {
  box-shadow: 0 0 10px 1px #888888;
}
el-container,
el-header,
el-main,
el-aside,
el-footer {
  margin: 0px;
  padding: 0px;
}

.inputDeep >>> .el-input__inner {
  border: 0;
}
/* 如果你的 el-input type 设置成textarea ，就要用这个了 */
.inputDeep >>> .el-textarea__inner {
  border: 0;
  resize: none; /* 这个是去掉 textarea 下面拉伸的那个标志，如下图 */
}
#el-aside div:hover {
  background: orangered;
}
.toollist i {
  margin: 7px 10px;
}

.ltalk {
  float: left;
  margin: 10px;
  width: 90%;
}

.rtalk {
  float: right;
  margin: 10px;
  width: 90%;
}

.ltalk .el-image {
  float: left;
}
.ltalk span {
  float: left;
}
.rtalk .el-image {
  float: right;
}
.rtalk span {
  float: right;
}
#close:hover {
  background: red;
}
.nowuser {
  background: #e3e3e3;
  height: 40px;
  width: 100%;
}
.otheruser {
  height: 40px;
  width: 100%;
}
</style>