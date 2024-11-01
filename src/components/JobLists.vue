<template>
    <section class="bg-blue-50 px-4 py-10">
        <div class="container-xl lg:container m-auto">
            <h2 class="text-3xl font-bold text-green-500 mb-6 text-center">
                Browse Jobs
            </h2>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
                <SingleJob v-for="job in jobs" :key="job.id" :job="job" />
            </div>
        </div>
    </section>

</template>

<script setup>
import jobData from '@/jobs.json'
import { ref } from 'vue';
import SingleJob from './SingleJob.vue';
const jobs = ref(jobData)
console.log(jobs.value)
</script>

<style></style>