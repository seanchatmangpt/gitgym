import { defineEventHandler, useFetch } from 'h3';

export default defineEventHandler(async (event) => {
  const id = event.context.params.id;
  await $fetch(`http://localhost:3001/agents/${id}`, {
    method: 'DELETE',
  });
  return { success: true };
});

