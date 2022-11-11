<template>


  
 <nav class="navbar sticky-top navbar-expand-lg" style="background-color: #e3f2fd;">
  <div class="container-fluid">
    
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Q&A</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
    <ul class="nav justify-content-center">
      <li class="nav-item">
        <a class="navbar-brand" href="#">OkkyDokky</a>
      </li>
    </ul>
    <ul class="nav justify-content-end">
      <li class="nav-item">
        <a class="nav-link active" aria-current="page" href="#">Login</a><heart-outlined />
      </li>
    </ul>
  </div>
</nav>

  <div class="name">{{ greeting(name) }}</div>
  <button class="btn btn-primary"
     v-on:click="updateName"
          >
    click
  </button>


  <div>
    <div>
    <a-button type="primary" danger>Primary</a-button>
    <a-button danger>Default</a-button>
    <a-button type="dashed" danger>Dashed</a-button>
    <a-button type="text" danger>Text</a-button>
    <a-button type="link" danger>Link</a-button>
  </div>
  </div>
  
</template>

<script>
import { ref } from 'vue';
import { reactive } from 'vue'; //Object or Array를 사용하려면

export default {
  data() {
      return {
        value: null
      }
    },
    methods: {
      setToday() {
        const now = new Date()
        this.value = new Date(now.getFullYear(), now.getMonth(), now.getDate())
      },
      clearDate() {
        this.value = ''
      }
    },
  setup(){

    let name = ref('Okky  Dokky');
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
