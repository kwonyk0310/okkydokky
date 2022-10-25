<template>
  <div class="name">{{ greeting(name) }}</div>
  <button class="btn btn-primary"
     v-on:click="updateName"
          >
    click
  </button>
  <div>
    <twitter-outlined />
  </div>
  
</template>

<script>
import { ref } from 'vue';
import { reactive } from 'vue'; //Object or Array를 사용하려면

export default {
  setup(){

    let name = ref('OkkyDokky');
    const namesref = ref({
      id : 2
    })
    const names = reactive({
      id : 1
    })

    const updateName = () => {
      names.id = 2;
      name.value = 'zzzzzz'

      namesref.value.id = 3 ;
      console.log("namesref.value.id : " + namesref.value.id);

      greeting(name.value);
      console.log(name);
    }
    const greeting = (name) => {
      return 'Hello, ' + name;
    }

    return{
      name,
      greeting,
      updateName,
    }
  }

}

</script>

<style>

.name{
  color: darkorange;
}

</style>
