<script setup>
import { ref } from 'vue'
import TheFaq from './TheFaq.vue'
const data = [
  {
    id: 1,
    isOpen: false,
    title: 'Where are these chairs assembled?',
    description:
      'We believe in treating all individuals with dignity and respect.',
  },
  {
    id: 2,
    isOpen: false,
    title: 'How long do I have to return my chair?',
    description:
      'We believe in treating all individuals with dignity and respect.',
  },
  {
    id: 3,
    isOpen: false,
    title: 'Do you ship to countries outside the EU?',
    description:
      'We believe in treating all individuals with dignity and respect.',
  },
]
const faqs = ref(data)
function toggleAnswer(id) {
  faqs.value = faqs.value.map(faq =>
    faq.isOpen && faq.id !== id ? { ...faq, isOpen: false } : faq,
  )
  console.log(id)
  faqs.value = faqs.value.map(faq =>
    faq.id === id ? { ...faq, isOpen: !faq.isOpen } : faq,
  )
}
</script>
<template>
  <TheFaq
    v-for="faq in faqs"
    :key="faq.id"
    :faq="faq"
    @toggle-answer="toggleAnswer"
  />
</template>
