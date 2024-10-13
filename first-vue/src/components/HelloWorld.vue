<script setup lang="ts">
const props = defineProps<HelloWorldProps>()

type HelloWorldProps = {
  msg: string
  countLess: string
  htmlContent: string
  isBtnDisabled: boolean
  user: Record<string, string | number>
  url: string
}

const { msg, countLess, htmlContent, isBtnDisabled } = props

function showProps(anotherWord: string) {
  console.log(props, 'also', anotherWord)
}
</script>

<template>
  <div class="border-2 rounded-3xl p-10 border-black/20 m-10 space-y-4">
    <h1 class="green">{{ msg }} from {{ countLess }}</h1>

    <div class="text-xl">
      <p>User info</p>
      <ul>
        {{ Object.values(user).map((value,i) => { const infoKey = i===0? 'Name':
        i===1? 'Age': 'Email'; return `
        <li>${infoKey}: ${value}</li>
        `}).join('') }}
      </ul>
    </div>

    <button
      :disabled="isBtnDisabled"
      @click="() => console.log('You clicked me!')"
      class="px-4 rounded-md py-2 text-lg bg-green-400/50 text-green-800/80 block disabled:opacity-50"
    >
      Click here
    </button>

    <!-- {isBtnDisabled&& content} -->
    <p v-if="!isBtnDisabled">Now you see btn as enabled</p>

    <a :href="url">fromfolio</a>
    <button
      class="px-4 rounded-md py-2 text-lg bg-green-400/50 text-green-800/80 block disabled:opacity-50"
      @click="() => showProps('yes of course')"
    >
      <!-- v-on:click="() => console.log('You clicked me!')" -->

      Consolling
    </button>

    <!-- This doesn't parse HTML -->
    {{ htmlContent }}

    <!-- For parsing HTML -->
    <div v-html="htmlContent"></div>

    <h3 class="text-3xl text-red-500">
      You’ve successfully created a project with
      <a href="https://vite.dev/" target="_blank" rel="noopener">Vite</a> +
      <a href="https://vuejs.org/" target="_blank" rel="noopener">Vue 3</a>.
      What's next?
    </h3>
  </div>
</template>
