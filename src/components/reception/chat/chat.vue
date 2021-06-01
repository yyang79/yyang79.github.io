<template>
  <div id="chat">
    <div
      v-show="this.$store.state.index.openchat"
      style="
        position: fixed;
        bottom: 0px;
        right: 50px;
        background: #409eff;
        width: 150px;
        height: 40px;
        z-index: 10;
      "
    >
      <i
        style="float: left; font-size: 30px; margin: 5px"
        class="el-icon-chat-dot-round"
      ></i>
      <a
        style="padding: 10px 20px; position: relative; top: 10px; left: 0px"
        href="javascript:void(0)"
        @click="openchat()"
        >在线咨询</a
      >
    </div>
    <div
      v-show="this.$store.state.index.chat"
      v-drag
      style="
        position: fixed;
        top: 20%;
        right: 10px;
        background: white;
        box-shadow:0 0 10px 3px gray;
        width: 400px;
        z-index: 10;
      "
    >
      <el-container
        style="
          height: 460px;
          width: 400px;
          border: 1px solid #e3e3e3;
          border-radius: 3px;
          margin: 0px auto;
        "
      >
        <el-header
          style="
            height: 60px;
            border-bottom: 1px solid #e3e3e3;
            background: #438eb9;
          "
          ><div style="text-align: center"><span>鲜花预定</span></div>
        </el-header>
        <el-main id="chatlist" style="height: 270px; margin: 0px; padding: 0px">
          <div class="chatlist" style="width: 100%; height: 100%">
            <div
              v-for="chat in chats"
              :key="chat.sendName"
              :class="chat.sendName == 'admin' ? 'ltalk' : 'rtalk'"
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
          style="
            margin: 0px;
            padding: 0px;
            background: white;
            border-top: 1px solid #e3e3e3;
          "
        >
          <div class="toollist" style="height: 29px; width: 100%">
            <i class="el-icon-circle-close"></i><i class="el-icon-picture"></i
            ><i class="el-icon-message-solid"></i><i class="el-icon-more"></i>
          </div>
          <div class="inputDeep" style="height: 65px; width: 100%">
            <el-input
              type="textarea"
              :rows="2"
              style="margin: 0px; border: 0"
              v-model="textarea"
              focus
            >
            </el-input>
          </div>
          <div style="height: 35px; width: 100%; background: white">
            <el-button
              @click="send"
              size="mini"
              style="float: right; margin: 0px 10px"
              >发送</el-button
            >
            <el-button size="mini" @click="closechat()" style="float: right"
              >关闭</el-button
            >
          </div>
        </el-footer>
      </el-container>
    </div>
  </div>
</template>

<script>
export default {
  inject: ["reload"],
  data() {
    return {
      users: [
        { name: "user1" },
        { name: "user2" },
        { name: "user3" },
        { name: "user4" },
      ],
      textarea: "",
      chats: [],
      s: require("../../../assets/images/logo.png"),
    };
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
  created() {
    this.recpchataxios();
  },
  mounted() {
    this.scrollToBottom();
  },
  //每次页面渲染完之后滚动条在最底部
  updated: function () {
    this.scrollToBottom();
  },
  methods: {
    recpchataxios() {
      this.$axios
        .get("http://127.0.0.1:3000/chat")
        .then((res) => {
            this.chats = res.data;
        })
        .catch((error) => {
          window.console.log(error);
        });
    },
    send() {
     var flog = true;
      var list = [];
      var newlists = this.$store.state.backstage_index.newlists;
      if (newlists.length == 0) {
        this.$store.dispatch("backstage_index/newlists", { userName: "user" });
        flog = false;
      } else {
        for (let j = 0; j < newlists.length; j++)
          if (newlists[j].userName == "user") {
            flog = false;
          } else {
            list = { userName: "user" };
          }
      }
      if (flog) {
        this.$store.dispatch("backstage_index/newlists", list);
      }

      var time = this.getdate();
      this.$axios
        .post("http://127.0.0.1:3000/chat/send", {
          sendName: "user",
          receiverName: "admin",
          sendTime: time,
          sendContent: this.textarea,
        })
        .then(() => {})
        .catch((error) => {
          window.console.log(error);
        });
      this.textarea = "";
      this.recpchataxios(); 
    },
    scrollToBottom() {
      this.$nextTick(() => {
        var container = this.$el.querySelector("#chatlist");
        container.scrollTop = container.scrollHeight;
      });
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
    openchat() {
      this.$store.dispatch("index/showchat");
    },
    closechat() {
      this.$store.dispatch("index/hidechat");
    },
  },
};
</script>

<style scoped>
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
</style>