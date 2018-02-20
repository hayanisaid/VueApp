<template>
  <div class="wrapper">
   <h3>{{name}}</h3>
   <form @submit.prevent="addSkill">
     <input type="text"
      name="skill"
       v-model="skill"
       v-validate="{min:5}"
        placeholder="Type Skill">
        <!-- to use animation.css libs class [enter-active-class] 

          enter-active-class="flip" leave-active-class="moveIn"
        -->
        <transition name="alert-in" >
        <p class="alert" v-if="errors.has('skill')">{{errors.first("skill")}}</p>
        </transition>
   </form>
   <ul>
     <li v-for="(data,index) in skills" :key="index">{{data.skill}}
       <i class="fa fa-close" v-on:click="remove(index)">delete</i>
     </li>

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

        /*check if the data is valid first*/
        this.$validator.validateAll().then((result)=>{
          if (result) {
            this.skills.push({skill:this.skill})
        this.skill=''; 
          }else{
            console.log('Not valid')
          }
        })
        
      },
      remove(index){
        this.skills.splice(index,1)
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
.alert{
  color:#f4f4f4;
  background: #0E3047;
  width: 10em;
  padding: 1em;
}
.alert-in-enter-active{
  animation:bounce-in .3s;
  animation-timing-function: cubic-bezier(.2,0.12 ,.5 , .415);
}
.alert-in-leave-active{
  animation:bounce-in .5s reverse;
  animation-timing-function: cubic-bezier(.2,0.12 ,.5 , .415);
}
@keyframes bounce-in{
  0%{
    transform:scale(0);
  }
    50%{
    transform:scale(0.5);
  }
    100%{
    transform:scale(1);
  }
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
li i{
  cursor: pointer;
  background: yellow;
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
