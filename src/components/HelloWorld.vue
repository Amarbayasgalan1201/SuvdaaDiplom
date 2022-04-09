<template>
  <div>
    <h1 class="title">Suvdaa translate</h1>
    <div class="section">

    <el-input placeholder="Орчуулга" @input="test" v-model="client"></el-input>
    <div class="translate">
      <span v-if="client !== ''">{{ translate }}</span>
      <p v-if="isOpenDesc">tailbar: {{ desc }}</p>
    </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  created() {
    this.test()
  },
  data() {
    return {
      client: '',
      translate: '',
      desc: '',
      isOpenDesc: false
    }
  },
  methods: {
    test() {
      axios.get('http://localhost:1337/api/texts').then(el => {
        el.data.data.forEach(text => {
          if (text.attributes.client.toLowerCase() === this.client.toLowerCase()) {
            this.isOpenDesc = true
            // this.client = this.client.split('')
            if (this.client.split('')[0] === this.client.split('')[0].toUpperCase()) {
                this.translate = text.attributes.name
                this.desc = text.attributes.name_desc
              } else {
              this.translate = text.attributes.translate
              this.desc = text.attributes.desc
            }
          } else {
            this.translate = ''
            this.desc = ''
            this.isOpenDesc = false
          }
        })
      })
    }
  }
}
</script>

<style>
.title {
  font-size: 70px;
  color: white;
}
body {
  background: url(../assets/bck.jpg) center center no-repeat;
}
.section {
  position: absolute;  
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 200px;
  background: coral;
  padding: 75px;
}
.translate {
  margin-top: 60px;
  border: 1px solid black;
}
</style>