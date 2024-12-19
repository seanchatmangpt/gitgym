#!/usr/bin/env fish

# Base directory for Nuxt API handlers
set base_dir "server/api/agents"

# Ensure the directory structure exists
mkdir -p $base_dir/[id]

# Write index.js (GET All Agents)
echo "import { defineEventHandler, useFetch } from 'h3';

export default defineEventHandler(async () => {
  const response = await \$fetch('http://localhost:3001/agents');
  return response;
});
" > $base_dir/index.js

# Write [id].js (GET Single Agent by ID)
echo "import { defineEventHandler, useFetch } from 'h3';

export default defineEventHandler(async (event) => {
  const id = event.context.params.id;
  const response = await \$fetch(\`http://localhost:3001/agents/\${id}\`);
  return response;
});
" > $base_dir/[id].js

# Write create.js (POST Create New Agent)
echo "import { defineEventHandler, readBody, useFetch } from 'h3';

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const response = await \$fetch('http://localhost:3001/agents', {
    method: 'POST',
    body,
  });
  return response;
});
" > $base_dir/create.js

# Write [id]/update.js (PUT Update Agent)
echo "import { defineEventHandler, readBody, useFetch } from 'h3';

export default defineEventHandler(async (event) => {
  const id = event.context.params.id;
  const body = await readBody(event);
  const response = await \$fetch(\`http://localhost:3001/agents/\${id}\`, {
    method: 'PUT',
    body,
  });
  return response;
});
" > $base_dir/[id]/update.js

# Write [id]/delete.js (DELETE Agent)
echo "import { defineEventHandler, useFetch } from 'h3';

export default defineEventHandler(async (event) => {
  const id = event.context.params.id;
  await \$fetch(\`http://localhost:3001/agents/\${id}\`, {
    method: 'DELETE',
  });
  return { success: true };
});
" > $base_dir/[id]/delete.js

# Confirm completion
echo "All handlers have been written to $base_dir"
