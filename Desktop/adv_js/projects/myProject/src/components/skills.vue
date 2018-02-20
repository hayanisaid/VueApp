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

   <h3>v-bind to bind attribute such class </h3>
   <div v-bind:class="{alert:bindme,'addAnotherClass':showClass}">add class bindme if true</div>
   <h2 >bind with object of class</h2>
   <div v-bind:class="objectbinding">add multiple class</div>
  </div>

  <!-- <h3>Style bingind <strong>v-bnid:style={}</strong></h3>
  <div v-bind:style="{ backgroundColor : bgColor , width: bgWidth}">Style bind</div> -->
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
       },
       /*class binding*/
       bindme:true,
       showClass:true,

       /*class binding*/
       objectbinding:{
        active:true,
        inactive:true
       },

       /*Style binding*/
       bgColor:"yellow",
       bgWidth:"400px"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<!-- We can use an external css file using src attrbbute -->
<!-- Scoped used to make style specified to a component -->
<style scoped >
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
.alert{
  background:red;
  width: 200px;
  height: 30px;
  color: #fff;
  margin: 0 auto;
}
.addAnotherClass{
  border:4px solid black;
}
.active{
  background: #f4f4f4;


}
.inactive{
  border:2px solid;
  width: 40px;
}
</style>
