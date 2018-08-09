<template>
  <div class="calculatorTwo">
      <div v-if="point"  class="outputDomian">
          <div class="outputLeft">
            <div class="numberTop">
                <button v-for="i in 9" :key="i" @click="thisNumber(i)" >{{i}}</button>
            </div>
            <div class="numberButtom">
                <button class="buttonSpot"  @click="thisNumber('.')" >.</button>
                <button class="button0" @click="thisNumber(0)" >0</button>
                <button @click="cleanVal">清空</button>
                <!-- <button :outputVal="outputVal" v-on:click="passVal">
                    <span class="imgbg"></span>
                </button> -->
            </div>
          </div>
      </div>
    <div  v-else="point" class="outputDomian">
      <div class="outputLeft">
        <div class="numberTop">
          <button v-for="i in 9" :key="i" @click="thisNumber(i)" >{{i}}</button>
        </div>
        <div class="numberButtom">
          <button class="buttonSpot"   >.</button>
          <button class="button0" @click="thisNumber(0)" >0</button>
          <button @click="cleanVal">清空</button>
          <!-- <button :outputVal="outputVal" v-on:click="passVal">
              <span class="imgbg"></span>
          </button> -->
        </div>
      </div>
    </div>
  </div>

</template>
<script>
export default {
  data() {
    return {
    };
  },
  props: {
    input: HTMLInputElement,
    point: {
      type: Boolean,
      default: true
    }
  },
  mounted() {
    if (this.input) {
      this.setFocusToInput();
    }
  },
  methods: {
    cleanVal() {
      this.input.value = "";
      this.input.focus()
    },
    thisNumber(i) {
      if (!this.input) return;
      let caret = this.getCaret();
      let text = this.input.value;
      if (i === ".") {
        if (text.indexOf(".") == -1) {
          text = text + ".";
        } else {
          text = text;
        }
      } else {
        text = text + "" + i;
      }
    //   let e = document.createEvent("Event");
    //   e.initEvent("keypress", true, true);
    //   e.which = e.keyCode = i.charCodeAt();
    //   if (this.input.dispatchEvent(e)) {
    //     text = this.insertChar(caret, text, i);
    //   }
      //text = this.insertChar(caret, text, i);
      console.log(text);
      this.input.value = text;
      this.input.focus()
    // this.setFocusToInput(caret);
    },
    supportsSelection() {
      return /text|password|search|tel|url/.test(this.input.type);
    },
    getCaret() {
      if (this.supportsSelection()) {
        let pos = {
          start: this.input.selectionStart || 0,
          end: this.input.selectionEnd || 0
        };

        if (pos.end < pos.start) pos.end = pos.start;

        return pos;
      } else {
        let val = this.input.value;
        return {
          start: val.length,
          end: val.length
        };
      }
    },
    insertChar(caret, text, ch) {
      text =
        text.substr(0, caret.start) + ch.toString() + text.substr(caret.start);
      caret.start += ch.length;
      caret.end = caret.start;
      return text;
    },
    setFocusToInput(caret) {
      this.input.focus();
      if (caret && this.supportsSelection()) {
        this.input.selectionStart = caret.start;
        this.input.selectionEnd = caret.end;
      }
    },

  }
};
</script>
<style lang="scss">
.calculatorTwo {
  flex: 1;
  background: #1d1d1d;
  width: 348px;
  height: 220px;
  border-radius: 4px;
  .textDomain {
    display: flex;
    width: 100%;
    height: 38px;
    margin-bottom: 1px;
    input {
      border: none;
      outline: none;
      text-align: right;
      padding-right: 15px;
      background-image: linear-gradient(0deg, #575757 0%, #2c2c2c 100%);
      border-radius: 4px;
      width: 260px;
      height: 38px;
      color: #fff;
      font-size: 16px;
    }
    button {
      border: 0;
      outline: none;
      border-left: 1px solid #1d1d1d;
      background-image: linear-gradient(-180deg, #575757 0%, #2c2c2c 100%);
      border-radius: 4px;
      width: 89px;
      height: 38px;
      font-size: 16px;
      color: #ffffff;
      letter-spacing: 0;
      line-height: 16px;
      text-align: center;
    }
  }
  .outputDomian {
    display: flex;
    width: 100%;
    height: 218px;
    .outputLeft {
      .numberTop {
        button {
          border: 0;
          outline: none;
          border-right: 1px solid #1d1d1d;
          margin-bottom: 1px;
          background-image: linear-gradient(-180deg, #575757 0%, #2c2c2c 100%);
          border-radius: 4px;
          width: 116px;
          height: 54px;
          font-size: 18px;
          color: #ffffff;
          letter-spacing: 0;
          text-align: center;
        }
      }
      .numberButtom {
        display: flex;
        .button0 {
          border: 0;
          outline: none;
          border-right: 1px solid #1d1d1d;
          background-image: linear-gradient(-180deg, #575757 0%, #2c2c2c 100%);
          border-radius: 4px;
          width: 116px;
          height: 54px;
          font-size: 18px;
          color: #ffffff;
          letter-spacing: 0;
          text-align: center;
        }
        .buttonSpot {
          border: 0;
          outline: none;
          border-right: 1px solid #1d1d1d;
          background-image: linear-gradient(-180deg, #575757 0%, #2c2c2c 100%);
          border-radius: 4px;
          width: 116px;
          height: 54px;
          font-size: 18px;
          color: #ffffff;
          letter-spacing: 0;
          text-align: center;
        }
        button:last-child {
          border: 0;
          outline: none;
          background-image: linear-gradient(0deg, #ea5414 0%, #ff8f5f 98%);
          border-radius: 4px;
          width: 116px;
          height: 54px;
          font-size: 18px;
          color: #ffffff;
          letter-spacing: 0;
          text-align: center;
          .imgbg {
            display: block;
            margin-left: 37px;
            margin-bottom: 5px;
            width: 28px;
            height: 27px;
            background: url(../assets/images/huiche.png) 100% 100% no-repeat;
          }
        }
      }
    }
  }
}
</style>
