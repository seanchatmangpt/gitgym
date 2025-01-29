import httpx

# Base URL for the Nuxt app proxying n8n
BASE_URL = "http://localhost:3000/api/n8n"

# Example: Get all workflows
def get_workflows():
    with httpx.Client() as client:
        response = client.get(f"{BASE_URL}/workflows")
        if response.status_code == 200:
            return response.json()
        else:
            print(f"Failed to fetch workflows: {response.status_code}")
            return None

# Example: Get a specific workflow by ID
def get_workflow(workflow_id):
    with httpx.Client() as client:
        response = client.get(f"{BASE_URL}/workflows/{workflow_id}")
        if response.status_code == 200:
            return response.json()
        else:
            print(f"Failed to fetch workflow {workflow_id}: {response.status_code}")
            return None

# Example: Get execution history
def get_executions():
    with httpx.Client() as client:
        response = client.get(f"{BASE_URL}/executions")
        if response.status_code == 200:
            return response.json()
        else:
            print(f"Failed to fetch executions: {response.status_code}")
            return None

# Main function to test the API
if __name__ == "__main__":
    print("Fetching all workflows...")
    workflows = get_workflows()
    if workflows:
        print(f"Found {len(workflows)} workflows.")
        for workflow in workflows:
            print(f"Workflow: {workflow['name']} (ID: {workflow['id']})")

    print("\nFetching execution history...")
    executions = get_executions()
    if executions:
        print(f"Found {len(executions)} executions.")
