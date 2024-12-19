// Import faker
import { faker } from '@faker-js/faker';

// Utility function to generate a single mock agent
export function generateMockAgent() {
  return {
    id: faker.string.uuid(), // Unique ID
    name: `${faker.hacker.abbreviation()} ${faker.hacker.noun()}`, // Hacker-style name
    role: `${faker.hacker.verb()} ${faker.hacker.ingverb()}`, // Random hacker/IT verb as a job title
    description: faker.hacker.phrase(), // Hacker/IT-related phrase
    iconType: faker.helpers.arrayElement(['code', 'chat', 'support', 'other']), // Random icon type
    skills: faker.helpers.arrayElements(
      ['JavaScript', 'Vue.js', 'Communication', 'Problem Solving', 'React', 'Node.js'],
      faker.number.int({ min: 1, max: 5 })
    ).join(','), // Array of skills
    isActive: faker.datatype.boolean(), // Active status
    metrics: {
      tasks_completed: faker.number.int({ min: 0, max: 500 }), // Random task count
      success_rate: parseFloat(faker.number.float({ min: 50, max: 100, precision: 0.1 }).toFixed(1)), // Success rate as a percentage
      average_response_time: `${faker.number.int({ min: 1, max: 120 })}s`, // Average response time in seconds
    },
  };
}

// Utility function to generate multiple mock agents
export function generateMockAgents(count = 5) {
  return Array.from({ length: count }, generateMockAgent);
}
