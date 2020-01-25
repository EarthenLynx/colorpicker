<template>
<div id="pic-root">
  <img src="../../assets/img/sample.png" alt="Image preview">
  <div class="input-container">
    <i @click="numExtractedColors--" class="material-icons">remove</i>
    <label for="file-upload"><i class="material-icons">publish</i></label>
    <input id="file-upload" type="file" @change="changePreview()">
    <i @click="pushToDominantColors()" class="material-icons">image_search</i>
    <i @click="numExtractedColors++" class="material-icons">add</i>
  </div>

  <div class="color-container">
    <div v-for="col in domColors" :key="col" class="spot-container">
      <div class="spot-element">
        <div class="spot-preview" :style="{'background-color': col.hex}"></div>
        <div class="spot-codes">
          <p>{{ col.hex }}</p>
          <p>{{ col.rgb }}</p>
        </div>
      </div>
    </div>
  </div>

</div>
</template>

<script>
import ColorThief from '../../../node_modules/colorthief/dist/color-thief.mjs'
import {
  rgbArrToStr,
  rgbToHex

} from '../../assets/appColorFunctions.js'

export default {
  data() {
    return {
      index: 1,
      numExtractedColors: 5,
      extractedRgb: [
        [61, 52, 150],
        [223, 72, 167],
        [43, 167, 199],
        [154, 57, 147],
        [149, 40, 72]
      ],
      domColors: []
    }
  },

  methods: {
    extractRgb: function() {
      this.extractedRgb = [];
      const colorThief = new ColorThief();
      const img = document.querySelector('img');
      const extractedColors = colorThief.getPalette(img, this.numExtractedColors);
      this.extractedRgb = extractedColors;
    },

    pushToDominantColors: function() {
      this.extractRgb();
      this.domColors = [];

      for (let i = 0; i < this.numExtractedColors; i++) {
        let tempObj = {};

        tempObj.index = this.index;
        tempObj.hex = this.colHex[i];
        tempObj.rgb = this.colRgb[i];
        tempObj.show = false;

        this.domColors.push(tempObj);
      }
      this.index++;
    },

    changePreview: function() {
      let preview = document.querySelector('img');
      let file = document.querySelector('input[type=file]').files[0];
      let reader = new FileReader();

      reader.onloadend = function() {
        preview.src = reader.result;
      }

      if (file) {
        reader.readAsDataURL(file);
      } else {
        preview.src = "../../assets/img/sample.png";
      }
    }
  },

  computed: {
    colHex: function() {
      let tempArr = [];
      for (let i = 0; i < this.numExtractedColors; i++) {
        let tempRgbArr = this.extractedRgb[i];
        tempArr.push(rgbToHex(tempRgbArr[0], tempRgbArr[1], tempRgbArr[2]));
      }
      return tempArr;
    },
    colRgb: function() {
      let tempArr = [];
      for (let i = 0; i < this.numExtractedColors; i++) {
        let tempRgbArr = this.extractedRgb[i];
        tempArr.push(rgbArrToStr(tempRgbArr));
      }
      return tempArr;
    }
  }
}
</script>

<style scoped>
#pic-root {
  max-width: 300px;
  display: block;
  margin: auto;
  padding: 0 15%;
}

input[type=file] {
  display: none
}

img {
  width: 100%;
  height: auto;
}

p {
  padding: 0 12px;
  text-align: right;
}

i {
  padding: 12px 16px 8px;
  background-color: #fff;
  border: 2px solid #a1a1a1;
  border-left: none;
  border-right: none;
  color: #121212;
  margin: 0 0 12px;
  transition: all 0.2s
}

i:hover {
  color: #fff;
  background-color: #a1a1a1;
  transition: all 0.2s
}

.spot-container {
  width: 100%;
  display: block;
  margin: auto;
}

.spot-element {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
}

.spot-preview {
  height: 36px;
  width: 36px;
  border-radius: 50%;
}

.spot-codes {
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 90%;
  ;
}
</style>
