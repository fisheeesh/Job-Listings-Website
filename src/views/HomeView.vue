<template>
    <Hero />
    <HomeCard />
    <JobLists :limit="3" :show-button="true" />
</template>

<script setup>
import Hero from '@/components/Hero.vue';
import HomeCard from '@/components/HomeCard.vue';
import JobLists from '@/components/JobLists.vue';
</script>

<style></style>