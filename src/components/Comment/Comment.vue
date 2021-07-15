<template>
  <div class="comment">
    <comment-item
      v-for="item in newCommentData"
      :commentItemData="item"
    ></comment-item>
  </div>
</template>

<script>
import CommentItem from "./CommentItem.vue";
export default {
  components: {
    CommentItem,
  },
  data() {
    return {
      commentData: {
        state: 1,
        data: [
          {
            username: "奥特曼打小鬼",
            dynamicID: "呼啦呼啦20211181332",
            personIcon:
              "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201601%2F15%2F20160115232537_FYdvP.jpeg&refer=http%3A%2F%2Fb-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628344107&t=5f894a3ef22e2f7be43a216df173ea75",
            text: "这辆车太好看了！",
            time: "2021-06-18 13:32",
            commentID: "奥特曼打小鬼202454181332",
            parentCommentId: "null",
          },
          {
            username: "奥特曼打小鬼",
            dynamicID: "呼啦呼啦20211181332",
            personIcon:
              "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.mp.sohu.com%2Fupload%2F20170510%2F62d64c61ccc74f1d840467d483d87566_th.png&refer=http%3A%2F%2Fimg.mp.sohu.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628344107&t=cc8be7b85c9a5da010e8cc4c6f665e57",
            text: "这辆车太好看了！",
            time: "2021-06-18 13:32",
            commentID: "奥特曼打小鬼20525234106181332",
            parentCommentId: "奥特曼打小鬼202454181332",
          },
          {
            username: "奥特曼打小鬼",
            dynamicID: "呼啦呼啦20211181332",
            personIcon:
              "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fwx4.sinaimg.cn%2Fmw690%2F0064Mxxwly1gs5vm10hagj30qy0yh0w8.jpg&refer=http%3A%2F%2Fwx4.sinaimg.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628343995&t=ceaaced98c01f5594824ab9c4c2f7543",
            text: "这辆车太好看了！",
            time: "2021-06-18 13:32",
            commentID: "奥特曼打小鬼2014066123581332",
            parentCommentId: "奥特曼打小鬼202454181332",
          },
          {
            username: "奥特曼打小鬼",
            dynamicID: "呼啦呼啦20211181332",
            personIcon:
              "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fww4.sinaimg.cn%2Fmw690%2F62fe2526gy1gry7dbgqaij20j60nydi4.jpg&refer=http%3A%2F%2Fwww.sina.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628343995&t=4af4f030e9c6061e2f207463546a4644",
            text: "这辆车太好看了！",
            time: "2021-06-18 13:32",
            commentID: "奥特曼打小鬼2021057863476181332",
            parentCommentId: "null",
          },
          {
            username: "奥特曼打小鬼",
            dynamicID: "呼啦呼啦20211181332",
            personIcon:
              "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fww4.sinaimg.cn%2Fmw690%2F62fe2526gy1gry7dbgqaij20j60nydi4.jpg&refer=http%3A%2F%2Fwww.sina.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628343995&t=4af4f030e9c6061e2f207463546a4644",
            text: "这辆车太好看了！",
            time: "2021-06-18 13:32",
            commentID: "奥特曼打小鬼202120345681332",
            parentCommentId: "null",
          },
          {
            username: "奥特曼打小鬼",
            dynamicID: "呼啦呼啦20211181332",
            personIcon:
              "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202106%2F13%2F20210613214437_61305.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628343995&t=325f599b2be1d5c24344cba7822247fd",
            text: "这辆车太好看了！",
            time: "2021-06-18 13:32",
            commentID: "奥特曼打小鬼2025264669181332",
            parentCommentId: "null",
          },
          {
            username: "奥特曼打小鬼",
            dynamicID: "呼啦呼啦20211181332",
            personIcon:
              "https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fc-ssl.duitang.com%2Fuploads%2Fblog%2F202106%2F13%2F20210613214437_61305.thumb.1000_0.jpg&refer=http%3A%2F%2Fc-ssl.duitang.com&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1628343995&t=325f599b2be1d5c24344cba7822247fd",
            text: "这辆车太好看了！",
            time: "2021-06-18 13:32",
            commentID: "奥特曼打小鬼25643786181332",
            parentCommentId: "null",
          },
        ],
      },
      newCommentData: [],
    };
  },
  methods: {
    transformData() {
      console.log("我执行了");
      let length = this.commentData.data.length;
      let oldData = this.commentData.data;
      let _this = this;
      let newCommentData = [];
      for (let i = 0; i < length; i++) {
        console.log(oldData[i]);
        if (oldData[i].parentCommentId === "null") {
          let item = {
            mainData: oldData[i],
            additionData: [],
          };
          for (let j = i + 1; j < length; j++) {
            if (oldData[i].commentID == oldData[j].parentCommentId) {
              item.additionData.push(oldData[j]);
            }
          }
          newCommentData.push(item);
        }
      }
      return newCommentData;
    },
  },
  created() {
    console.log("comment创建了");
    this.newCommentData = this.transformData();
    console.log(this.newCommentData);
    console.log("------");
    console.log(this.commentData);
  },
};
</script>

<style>
</style>
