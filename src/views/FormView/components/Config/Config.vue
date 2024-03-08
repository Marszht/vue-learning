<template>
  <p>
    Ask a yes/no question:
    <!-- <van-input v-model="question" :disabled="loading" placeholder="Please input" ref="inputRef" /> -->
  </p>
  <p>{{ answer }}</p>
  <!-- <van-image style="width: 100px; height: 100px" :src="imgUrl" :fit="fit" /> -->

  <h1>Latest Vue Core Commits</h1>
  <template v-for="branch in branches">
    <!-- <input type="radio" :id="branch" :value="branch" name="branch" v-model="currentBranch" /> -->
    <label :for="branch">{{ branch }}</label>
  </template>
  <p>vuejs/vue@{{ currentBranch }}</p>
  <!-- <ul>
    <li v-for="{ html_url, sha, author, commit } in commits">
      <a :href="html_url" target="_blank" class="commit">{{ sha.slice(0, 7) }}</a>
      - <span class="message">{{ truncate(commit.message) }}</span
      ><br />
      by
      <span class="author">
        <a :href="author.html_url" target="_blank">{{ commit.author.name }}</a>
      </span>
      at <span class="date">{{ formatDate(commit.author.date) }}</span>
    </li>
  </ul> -->
</template>

<script setup lang="ts">
import { ref, watch, watchEffect, onMounted } from 'vue'
const question = ref('')
const answer = ref('Questions usually contain a question mark. ;-)')
const loading = ref(false)
const imgUrl = ref('')
const inputRef = ref(null)

const API_URL = `https://api.github.com/repos/vuejs/core/commits?per_page=3&sha=`
const branches = ['main', 'v2-compat']

const currentBranch = ref(branches[0])
const commits = ref(null)

onMounted(() => {
  console.log(inputRef.value)
  inputRef.value.focus()
}),
  // 这里可以执行副作用，computed 不建议执行副作用
  watch(
    question,
    async (newAQuestion, oldQuestion) => {
      console.log('watch')
      loading.value = true
      answer.value = 'Thinking...'
      try {
        const res = await fetch('https://yesno.wtf/api')
        let resData = await res.json()
        answer.value = resData?.answer
        imgUrl.value = resData?.image
      } catch (error) {
        answer.value = 'Error! Could not reach the API. ' + error
      } finally {
        loading.value = false
      }
    },
    { once: true }
  )

// watchEffect(async () => {
//   console.log('watchEffect')
//   // 该 effect 会立即运行，
//   // 并且在 currentBranch.value 改变时重新运行
//   const url = `${API_URL}${currentBranch.value}`
//   commits.value = await (await fetch(url)).json()
// })

function truncate(v) {
  const newline = v.indexOf('\n')
  return newline > 0 ? v.slice(0, newline) : v
}

function formatDate(v) {
  return v.replace(/T|Z/g, ' ')
}
</script>

<style scoped></style>
