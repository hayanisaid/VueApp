<template>

  <div class="hello">
    <h3>hello {{name}}</h3>
    <p>{{btnState?"the button is disabled ":"the btn is Active"}}</p>
    <button v-on:click="changeName" v-bind:disabled="btnState">change name</button>
    <h3>For loop in vue</h3>
    <ul>
      <li v-for="(data,index) in skills" :key='index'>{{index}}.{{data.skill}}</li>
    </ul>

    <h3>IF statement in vue</h3>
    <p v-if="skills.length>=1">you have more than 1 skill</p>
    <p v-else>You have no skill Bro</p>
  </div>
</template>

<script>
export default {
  name: 'skills',
  data(){
    return{
      name:"said hayani",
      btnState:true,
      skills:[
       {'skill': 'vue.js'},
       {'skill': 'angular'},
       {'skill': 'react'},
       {'skill': 'Python'},
       {'skill': 'Javascript'},
       {'skill': 'HTML'}
       ],
       changeName:function(){
        alert("hi there")
       }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
