import {defineEventHandler} from 'h3';

export default defineEventHandler(async (event) => {
  const id = event.context.params.id;
  return await $fetch(`http://localhost:3001/agents/${id}`);
});

