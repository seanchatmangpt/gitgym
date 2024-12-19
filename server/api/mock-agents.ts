const agents: Agent[] = [
  {
    id: 1,
    name: 'Alex Smith',
    email: 'alex.smith@example.com',
    avatar: {
      src: 'https://i.pravatar.cc/128?u=1',
    },
    status: 'subscribed',
    location: 'New York, USA',
    description: 'Experienced software engineer specializing in full-stack development.',
    skills: ['JavaScript', 'TypeScript', 'Vue.js'],
    metrics: {
      tasksCompleted: 120,
      performanceScore: 95,
    },
    isActive: true,
  },
  {
    id: 2,
    name: 'Jordan Brown',
    email: 'jordan.brown@example.com',
    avatar: {
      src: 'https://i.pravatar.cc/128?u=2',
    },
    status: 'unsubscribed',
    location: 'London, UK',
    description: 'Product manager with expertise in agile workflows.',
    skills: ['Agile', 'Scrum', 'Leadership'],
    metrics: {
      tasksCompleted: 85,
      performanceScore: 88,
    },
    isActive: false,
  },
  // Add the rest of the agents here, following the same structure.
]

export default eventHandler(async (event) => {
  const { q, statuses, locations, sort, order } = getQuery(event) as {
    q?: string
    statuses?: UserStatus[]
    locations?: string[]
    sort?: 'name' | 'email'
    order?: 'asc' | 'desc'
  }

  return agents
    .filter((agent) => {
      if (!q) return true
      return (
        agent.name.search(new RegExp(q, 'i')) !== -1 ||
        agent.email.search(new RegExp(q, 'i')) !== -1
      )
    })
    .filter((agent) => {
      if (!statuses?.length) return true
      return statuses.includes(agent.status)
    })
    .filter((agent) => {
      if (!locations?.length) return true
      return locations.includes(agent.location)
    })
    .sort((a, b) => {
      if (!sort) return 0

      const aValue = a[sort]
      const bValue = b[sort]

      if (aValue < bValue) return order === 'asc' ? -1 : 1
      if (aValue > bValue) return order === 'asc' ? 1 : -1
      return 0
    })
})

