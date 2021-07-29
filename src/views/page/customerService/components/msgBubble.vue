<template>
  <div :class="className">
    {{ msgText }}
  </div>
</template>

<script>
export default {
  name: 'msgBubble',
  props: {
    msg: {
      type: Object,
    },
  },
  data() {
    const classMap = new Map([
      ['time', 'time-msg'],
      ['left', 'left-msg'],
      ['right', 'right-msg'],
      ['end', 'end-msg'],
    ]);
    return {
      className: classMap.get(this.msg.type),
      msgText: this.msg.text,
    };
  },
};
</script>

<style scoped lang="less">

.time-msg {
  flex: 0 0 30px;
  padding: 5px;
  border-radius: 5px;
  align-self: center;
  background-color: #eee;
}

.end-msg {
  flex: 0 0 30px;
  align-self: center;
  color: #c7c7c7;
  margin-bottom: 20px;
  font-size: 12px;
  //border-bottom: 1px solid #eee;
}

.msg(@color:#eee) {
  flex: 0 0 30px;
  line-height: 30px;
  width: 18rem;
  margin: 15px 0;
  background-color: @color;
  position: relative;
  border-radius: 6px;
  padding: 0 1rem;
}

.left-msg {
  .msg();

  &::before {
    content: '';
    position: absolute;
    top: 6px;
    left: -18px;
    height: 0;
    width: 0;
    border: 9px solid;
    border-color: transparent #eee transparent transparent;
  }
}

.right-msg {
  .msg(#9eea6a);
  color: #fff;
  align-self: flex-end;

  &::after {
    content: '';
    position: absolute;
    top: 6px;
    right: -18px;
    height: 0;
    width: 0;
    border: 9px solid;
    border-color: transparent transparent transparent #9eea6a;
  }
}
</style>
