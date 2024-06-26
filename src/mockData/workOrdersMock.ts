export const workOrdersMock = [
  {
    id: 'WO-001',
    generatedDate: '2022-01-01',
    targetDueDate: '2023-01-01',
    status: 'Open',
    priority: '6 - Work List Deficiency',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    fullType: 'Preventative maintenance',
    type: 'PM',
    resource: 'OR',
    subtype: 'Standard',
    scheduleId: 'SMS11',
    scheduleName: 'Loren Ipsum',
    frequency: 'Every Day',
    open: true,
    completed: true,
    canceled: false,
    onHold: true,
  },
  {
    id: 'WO-002',
    generatedDate: '2022-01-02',
    targetDueDate: '2023-01-01',
    status: 'In Progress',
    priority: '6 - Work List Deficiency',
    description:
      'Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    fullType: 'Corrective maintenance',
    type: 'CM',
    resource: 'SK',
    subtype: 'Standard',
    name: 'John Smith',
    email: 'johnsmith@gmail.com',
    number: '508-692-4036',
    open: true,
    completed: false,
    canceled: false,
    onHold: true,
  },
  {
    id: 'WO-003',
    generatedDate: '2022-01-03',
    targetDueDate: '2024-01-01',
    status: 'Closed',
    priority: '6 - Work List Deficiency',
    description:
      'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    fullType: 'Corrective maintenance',
    type: 'CM',
    resource: 'SK',
    subtype: 'Standard',
    name: 'John Smith',
    email: 'johnsmith@gmail.com',
    number: '508-692-4036',
    open: false,
    completed: true,
    canceled: false,
    onHold: false,
  },
  {
    id: 'WO-004',
    generatedDate: '2022-01-04',
    targetDueDate: '2023-11-01',
    status: 'Pending',
    priority: '6 - Work List Deficiency',
    description:
      'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    fullType: 'Preventative maintenance',
    type: 'PM',
    resource: 'NN',
    subtype: 'Standard',
    scheduleId: 'SMS11',
    scheduleName: 'Loren Ipsum',
    frequency: 'Every Day',
    open: false,
    completed: false,
    canceled: true,
    onHold: false,
  },
  {
    id: 'WO-005',
    generatedDate: '2022-01-05',
    targetDueDate: '2023-12-01',
    status: 'Open',
    priority: '5 - Urgent',
    description:
      'Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
    fullType: 'Preventative maintenance',
    type: 'PM',
    resource: 'OR',
    subtype: 'Standard',
    scheduleId: 'SMS11',
    scheduleName: 'Loren Ipsum',
    frequency: 'Every Day',
    open: true,
    completed: false,
    canceled: false,
    onHold: false,
  },
  {
    id: 'WO-006',
    generatedDate: '2022-01-06',
    targetDueDate: '2023-01-02',
    status: 'In Progress',
    priority: '4 - High',
    description:
      'Nulla porttitor accumsan tincidunt. Nulla quis lorem ut libero malesuada feugiat.',
    fullType: 'Corrective maintenance',
    type: 'CM',
    resource: 'SK',
    subtype: 'Standard',
    name: 'John Smith',
    email: 'johnsmith@gmail.com',
    number: '508-692-4036',
    open: true,
    completed: false,
    canceled: false,
    onHold: true,
  },
  {
    id: 'WO-007',
    generatedDate: '2022-01-07',
    targetDueDate: '2023-01-01',
    status: 'Closed',
    priority: '3 - Medium',
    description: 'Cras ultricies ligula sed magna dictum porta.',
    fullType: 'Preventative maintenance',
    type: 'PM',
    resource: 'NN',
    subtype: 'Standard',
    scheduleId: 'SMS11',
    scheduleName: 'Loren Ipsum',
    frequency: 'Every Day',
    open: false,
    completed: true,
    canceled: false,
    onHold: false,
  },
  {
    id: 'WO-008',
    generatedDate: '2022-01-08',
    targetDueDate: '2023-01-01',
    status: 'Pending',
    priority: '2 - Low',
    description: 'Curabitur aliquet quam id dui posuere blandit.',
    fullType: 'Corrective maintenance',
    type: 'CM',
    resource: 'OR',
    subtype: 'Standard',
    name: 'John Smith',
    email: 'johnsmith@gmail.com',
    number: '508-692-4036',
    open: false,
    completed: false,
    canceled: false,
    onHold: true,
  },
  {
    id: 'WO-009',
    generatedDate: '2022-01-09',
    targetDueDate: '2023-01-01',
    status: 'Open',
    priority: '5 - Urgent',
    description: 'Pellentesque in ipsum id orci porta dapibus.',
    fullType: 'Preventative maintenance',
    type: 'PM',
    resource: 'SK',
    subtype: 'Standard',
    scheduleId: 'SMS11',
    scheduleName: 'Loren Ipsum',
    frequency: 'Every Day',
    open: true,
    completed: false,
    canceled: false,
    onHold: false,
  },
  {
    id: 'WO-010',
    generatedDate: '2022-01-10',
    targetDueDate: '2023-01-01',
    status: 'In Progress',
    priority: '4 - High',
    description:
      'Vestibulum ac diam sit amet quam vehicula elementum sed sit amet dui.',
    fullType: 'Corrective maintenance',
    type: 'CM',
    resource: 'NN',
    subtype: 'Standard',
    name: 'John Smith',
    email: 'johnsmith@gmail.com',
    number: '508-692-4036',
    open: true,
    completed: false,
    canceled: false,
    onHold: true,
  },
  {
    id: 'WO-011',
    generatedDate: '2022-01-11',
    targetDueDate: '2023-01-01',
    status: 'Closed',
    priority: '3 - Medium',
    description: 'Donec sollicitudin molestie malesuada.',
    fullType: 'Preventative maintenance',
    type: 'PM',
    resource: 'OR',
    subtype: 'Standard',
    scheduleId: 'SMS11',
    scheduleName: 'Loren Ipsum',
    frequency: 'Every Day',
    open: false,
    completed: true,
    canceled: false,
    onHold: false,
  },
  {
    id: 'WO-012',
    generatedDate: '2022-01-12',
    targetDueDate: '2023-01-01',
    status: 'Pending',
    priority: '2 - Low',
    description: 'Nulla quis lorem ut libero malesuada feugiat.',
    fullType: 'Corrective maintenance',
    type: 'CM',
    resource: 'SK',
    subtype: 'Standard',
    name: 'John Smith',
    email: 'johnsmith@gmail.com',
    number: '508-692-4036',
    open: false,
    completed: false,
    canceled: false,
    onHold: true,
  },
  {
    id: 'WO-013',
    generatedDate: '2022-01-13',
    targetDueDate: '2023-01-01',
    status: 'Open',
    priority: '5 - Urgent',
    description:
      'Vivamus magna justo, lacinia eget consectetur sed, convallis at tellus.',
    fullType: 'Preventative maintenance',
    type: 'PM',
    resource: 'NN',
    subtype: 'Standard',
    scheduleId: 'SMS11',
    scheduleName: 'Loren Ipsum',
    frequency: 'Every Day',
    open: true,
    completed: false,
    canceled: false,
    onHold: false,
  },
  {
    id: 'WO-014',
    generatedDate: '2022-01-14',
    targetDueDate: '2023-01-01',
    status: 'In Progress',
    priority: '4 - High',
    description:
      'Nulla porttitor accumsan tincidunt. Nulla quis lorem ut libero malesuada feugiat.',
    fullType: 'Corrective maintenance',
    type: 'CM',
    resource: 'OR',
    subtype: 'Standard',
    name: 'John Smith',
    email: 'johnsmith@gmail.com',
    number: '508-692-4036',
    open: true,
    completed: false,
    canceled: false,
    onHold: true,
  },
  {
    id: 'WO-015',
    generatedDate: '2022-01-15',
    targetDueDate: '2023-01-01',
    status: 'Closed',
    priority: '3 - Medium',
    description: 'Cras ultricies ligula sed magna dictum porta.',
    fullType: 'Preventative maintenance',
    type: 'PM',
    resource: 'SK',
    subtype: 'Standard',
    scheduleId: 'SMS11',
    scheduleName: 'Loren Ipsum',
    frequency: 'Every Day',
    open: false,
    completed: true,
    canceled: false,
    onHold: false,
  },
  {
    id: 'WO-016',
    generatedDate: '2022-01-16',
    targetDueDate: '2023-01-01',
    status: 'Pending',
    priority: '2 - Low',
    description: 'Curabitur aliquet quam id dui posuere blandit.',
    fullType: 'Corrective maintenance',
    type: 'CM',
    resource: 'NN',
    subtype: 'Standard',
    name: 'John Smith',
    email: 'johnsmith@gmail.com',
    number: '508-692-4036',
    open: false,
    completed: false,
    canceled: false,
    onHold: true,
  },
];
