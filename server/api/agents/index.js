import {defineEventHandler} from 'h3';

export default defineEventHandler(async () => {
  console.log('agents/index.js');
  return await $fetch('http://localhost:3001/agents');
});

