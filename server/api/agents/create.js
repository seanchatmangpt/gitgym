import {defineEventHandler, readBody} from 'h3';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  return await $fetch('http://localhost:3001/agents', {
    method: 'POST',
    body,
  });
});

