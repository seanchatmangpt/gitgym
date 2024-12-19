import {defineEventHandler, readBody} from 'h3';

export default defineEventHandler(async (event) => {
  const id = event.context.params.id;
  const body = await readBody(event);
  return await $fetch(`http://localhost:3001/agents/${id}`, {
    method: 'PUT',
    body,
  });
});

