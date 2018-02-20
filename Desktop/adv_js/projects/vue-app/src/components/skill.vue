<template>
  <div class="wrapper">
   <h3>{{name}}</h3>
   <form @submit.prevent="addSkill">
     <input type="text" name="skill" v-model="skill" placeholder="Type Skill">
    
   </form>
   <ul>
     <li v-for="(data,index) in skills" :key="index">{{data.skill}}</li>
   </ul> 
  </div>
</template>

<script>
export default {
  name: 'skill',
  data () {
    return {
      name: 'Skill app',
      skill :'',
      skills:[]
    }

  },
   /*METHODS INN  VUE*/
    methods:{
      addSkill(){
        this.skills.push({skill:this.skill})
        this.skill='';
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.wrapper{
  margin: 2em auto;
  background:#F97300;
  max-width: 40em;
   padding: 1em;
}
h1, h3{
  font-weight: normal;
  color:#F8F5E4;
}
ul {
  list-style-type: none;
  padding: 0;
 
}
li {
  border-left: 4px solid #10828C;
  color: #0E3047;
  background:  #f4f4f4;
  padding: 1em;
  margin-bottom: 1em;
  text-align: left;
}
a {
  color: #42b983;
}
input[type=text]{
    background: white;
    border: 0;
    height: 3em;
    width: 100%;
    margin: 1em auto;
   
    border-radius: 6px;
    color: #666;
    text-align: center;
    font-size: 1em;
}
</style>
