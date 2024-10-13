<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'

const countLess = 4333
const isBtnDisabled = countLess > 5000

const user = {
  name: 'John Doe',
  age: 30,
  email: 'john.doe@gmail.com',
}

const convertedSize = (size: number) => {
  return size > 1024 ? `${(size / 1024).toFixed(2)} KB` : `${size} B`
}
</script>

<!-- Template is Layout -->
<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <!-- for dynamic Prop we send v-bind:count-less, but as shortcut we send :count-less -->

      <HelloWorld
        :is-btn-disabled="isBtnDisabled"
        htmlContent="<ol class='bg-red-400 max-w-fit ml-5'><li>Tomatoes</li><li>Potatoes</li></ol>"
        :count-less="convertedSize(countLess)"
        msg="You did it!"
        :user="user"
        url="https://test.fromfolio.com/"
        olsun="yes"
      />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <!-- This is Outlet -->
  <RouterView />
</template>
