<template>
    <section class="px-4 py-10 bg-blue-50">
        <div class="m-auto container-xl lg:container">
            <h2 class="mb-6 text-3xl font-bold text-center text-green-500">
                Browse Jobs
            </h2>
            <div class="grid grid-cols-1 gap-6 md:grid-cols-3">
                <SingleJob v-for="job in state.jobs.slice(0, limit || state.jobs.length)" :key="job.id" :job="job" />
            </div>
        </div>
    </section>

    <section v-if="showButton" class="max-w-lg px-6 m-auto my-10">
        <RouterLink to="/jobs" class="block px-6 py-4 text-center text-white bg-black rounded-xl hover:bg-gray-700">View
            All Jobs</RouterLink>
    </section>

</template>

<script setup>
import { reactive, defineProps, onMounted } from 'vue';
import SingleJob from './SingleJob.vue';
import { RouterLink } from 'vue-router';
import axios from 'axios';

defineProps({
    limit: Number,
    showButton: {
        type: Boolean,
        default: false
    }
})

const state = reactive({
    jobs: [],
    isLoading: true
})

onMounted(async () => {
    try {
        const res = await axios.get('http://localhost:8000/jobs')
        console.log(res.data)
        state.jobs = res.data
    }
    catch (err) {
        console.error('Error Fetching jobs : ', err)
    }
    finally {
        state.isLoading = false
    }
})
</script>

<style></style>