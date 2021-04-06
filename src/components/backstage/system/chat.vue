<template>
  <div id="chat">
    <el-container
      style="
        height: 460px;
        width: 920px;
        border: 1px solid #e3e3e3;
        border-radius: 3px;
        margin: 12.5px auto;
      "
    >
      <el-header
        style="
          height: 60px;
          border-bottom: 1px solid #e3e3e3;
          background: #438eb9;
        "
        ><div style="text-align: center"><h4>当前聊天用户名</h4></div>
      </el-header>
      <el-container style="height: 400px">
        <el-aside
          id="el-aside"
          width="150px"
          style="border-right: 1px solid #e3e3e3"
        >
          <div
            v-for="user in users"
            :key="user.name"
            style="height: 40px; width: 100%"
          >
            <span style="margin: 10px">{{ user.name }}</span>
            <i
              style="float: right; margin: 10px"
              class="el-icon-circle-close"
            ></i>
          </div>
        </el-aside>
        <el-main style="padding: 0px">
          <el-container style="height: 400px; margin: 0px">
            <el-aside width="618px">
              <el-container width="600px" height="400px">
                <el-main id="chatlist" style="height: 270px; margin: 0px; padding: 0px">
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
                  style="
                    margin: 0px;
                    padding: 0px;
                    border-top: 1px solid #e3e3e3;
                  "
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
                      v-model="textarea"
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
                    <el-button size="mini" style="float: right">关闭</el-button>
                  </div>
                </el-footer>
              </el-container>
            </el-aside>
            <el-main style="width: 150px; border-left: 1px solid #e3e3e3">
              <div style="text-align: center"><span>VIP用户列表</span></div>
            </el-main>
          </el-container>
        </el-main>
      </el-container>
    </el-container>
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
  beforeCreate() {
    this.$axios
      .get("http://127.0.0.1:3000/chat")
      .then((res) => {
        for (let i = 0; i < res.data.length; i++) {
          this.chats = res.data;
          //   if (res.data[i].sendName == "admin") {

          //   } else {
          //   }
        }
      })
      .catch((error) => {
        window.console.log(error);
      });
  },

  mounted() {
    this.scrollToBottom();
  },

  //每次页面渲染完之后滚动条在最底部
  updated: function () {
    this.scrollToBottom();
  },

  methods: {
    send() {
      var time = this.getdate();
      this.$axios
        .post("http://127.0.0.1:3000/chat/send", {
          sendName: "admin",
          receiverName: "user",
          sendTime: time,
          sendContent: this.textarea,
        })
        .then(() => {})
        .catch((error) => {
          window.console.log(error);
        });
      this.textarea = "";
      this.reload();
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