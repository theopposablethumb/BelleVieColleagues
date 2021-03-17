export let circles = [
    {
        name: 'oxfordshire',
        title: 'Oxfordshire',
        teams: ['oxford'],
        coach: 'Dave Lister',
    }
];

export let teams = [
    {
        name: 'oxford',
        title: 'Oxford',
        circle: 'oxfordshire',
        colleagues: [{id: 1, name: 'Adam Mitchell'}, {id: 2, name: 'Amelia Pond'}, {id: 3, name: 'Bill Potts'}, {id: 4, name: 'Clara Oswald',}, {id: 5, name: 'Jack Harkness'}, {id: 6, name: 'Rory Williams'}, {id: 7, name: 'Rose Tyler'}, {id: 8, name: 'Ryan Sinclair'}, {id: 9, name: 'Sarah J Smith'}, {id: 10, name: 'Yasmin Khan'}], 
        capacity: 708,
        utilisation: 65
    }
];

export let colleagues = [
    {
        id: 1,
        name: 'Adam Mitchell',
        photo: './colleagues/adam-mitchell.png',
        role: 'Wellbeing Support Worker',
        team: 'Oxford',
        linkWorker: null,
        contractedHours: 35,
        annualLeave: false,
        annualLeaveAllowance: 12,
        absence: false,
        mobile: '07778987650',
        email: 'adam.mitchell@belleviecare.co.uk',
        slack: 'https://bellevie-for-all.slack.com/archives/D01DYEVSJN5',
        shifts: [{id: 1}, {id: 4}, {id: 5}, {id: 8}, {id: 17}],
        visits: [],
        contractStartDate: '2020-11-02',
        probation: true,
    },
    {
        id: 2,
        name: 'Amelia Pond',
        photo: './colleagues/amelia-pond.png',
        role: 'Wellbeing Support Worker',
        team: 'Oxford',
        linkWorker: null,
        contractedHours: 12,
        annualLeave: 6,
        absence: false,
        mobile: '07778987651',
        email: '@belleviecare.co.uk',
        slack: 'https://bellevie-for-all.slack.com/archives/D01DYEVSJN5',
        shifts: [{id: 15}, {id: 2}],
        visits: [],
        contractStartDate: '2020-8-12',
        probation: false,
    },
    {
        id: 3,
        name: 'Bill Potts',
        photo: './colleagues/bill-potts.png',
        role: 'Wellbeing Support Worker',
        team: 'Oxford',
        linkWorker: null,
        contractedHours: 30,
        annualLeave: 24,
        absence: false,
        mobile: '07778987652',
        email: '@belleviecare.co.uk',
        slack: 'https://bellevie-for-all.slack.com/archives/D01DYEVSJN5',
        shifts: [{id: 2}, {id: 9}, {id: 18}],
        visits: [],
        contractStartDate: '2020-8-12',
        probation: false,
    },
    {
        id: 4,
        name: 'Clara Oswald',
        photo: './colleagues/clara-oswald.png',
        role: 'Wellbeing Support Worker',
        team: 'Oxford',
        linkWorker: null,
        contractedHours: 15,
        annualLeave: 14,
        absence: false,
        mobile: '07778987653',
        email: '@belleviecare.co.uk',
        slack: 'https://bellevie-for-all.slack.com/archives/D01DYEVSJN5',
        shifts: [{id: 6}, {id: 10}, {id: 12}, {id: 19}],
        visits: [],
        contractStartDate: '2020-04-06',
        probation: false,
    },
    {
        id: 5,
        name: 'Jack Harkness',
        photo: './colleagues/jack-harkness.png',
        role: 'Wellbeing Support Worker',
        team: 'Oxford',
        linkWorker: null,
        contractedHours: 15,
        annualLeave: 4,
        absence: false,
        mobile: '07778987654',
        email: '@belleviecare.co.uk',
        slack: 'https://bellevie-for-all.slack.com/archives/D01DYEVSJN5',
        shifts: [{id: 3}, {id: 14}],
        visits: [],
        contractStartDate: '2020-04-06',
        probation: false,
    },
    {
        id: 6,
        name: 'Rory Williams',
        photo: './colleagues/rory-williams.png',
        role: 'Wellbeing Support Worker',
        team: 'Oxford',
        linkWorker: null,
        contractedHours: 15,
        annualLeave: 8,
        absence: false,
        mobile: '07778987655',
        email: '@belleviecare.co.uk',
        slack: 'https://bellevie-for-all.slack.com/archives/D01DYEVSJN5',
        shifts: [{id: 6}, {id: 20}],
        visits: [],
        contractStartDate: '2020-04-06',
        probation: false,
    },
    {
        id: 7,
        name: 'Rose Tyler',
        photo: './colleagues/rose-tyler.png',
        role: 'Rota Champion',
        team: 'Oxford',
        linkWorker: null,
        contractedHours: 35,
        annualLeave: 24,
        absence: false,
        mobile: '07778987656',
        email: '@belleviecare.co.uk',
        slack: 'https://bellevie-for-all.slack.com/archives/D01DYEVSJN5',
        shifts: [{id: 5}, {id: 7}, {id: 11}, {id: 24}],
        visits: [],
        contractStartDate: '2020-04-06',
        probation: false,
    },
    {
        id: 8,
        name: 'Ryan Sinclair',
        photo: './colleagues/ryan-sinclair.png',
        role: 'Wellbeing Support Worker',
        team: 'Oxford',
        linkWorker: null,
        contractedHours: 15,
        annualLeave: 12,
        absence: false,
        mobile: '07778987657',
        email: '@belleviecare.co.uk',
        slack: 'https://bellevie-for-all.slack.com/archives/D01DYEVSJN5',
        shifts: [{id: 8}],
        visits: [],
        contractStartDate: '2020-04-06',
        probation: false,
    },
    {
        id: 9,
        name: 'Sarah J Smith',
        photo: './colleagues/sarah-j-smith.png',
        role: 'Wellbeing Support Worker',
        team: 'Oxford',
        linkWorker: null,
        contractedHours: 0,
        annualLeave: 0,
        absence: false,
        mobile: '07778987658',
        email: '@belleviecare.co.uk',
        slack: 'https://bellevie-for-all.slack.com/archives/D01DYEVSJN5',
        shifts: [{id: 23}],
        visits: [],
        contractStartDate: '2020-04-06',
        probation: false,
    },
    {
        id: 10,
        name: 'Yasmin Khan',
        photo: './colleagues/yasmin-khan.png',
        role: 'Wellbeing Support Worker',
        team: 'Oxford',
        linkWorker: null,
        contractedHours: 0,
        annualLeave: 0,
        absence: false,
        mobile: '07778987659',
        email: '@belleviecare.co.uk',
        slack: 'https://bellevie-for-all.slack.com/archives/D01DYEVSJN5',
        shifts: [{id: 22}],
        visits: [],
        contractStartDate: '2020-04-06',
        probation: false,
    }
    
];

export let week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

export let shifts = [
    {
        id: 1,
        day: 'monday',
        startTime: '7am',
        endTime: '12pm',
        activities: [
            {
                person: 'Sean Pertwee',
                type: 'visit',
                day: 'monday',
                startTime: '7am',
                endTime: '9am',
                duration: 2
            },
            {
                person: '',
                type: 'free',
                day: 'monday',
                startTime: '9am',
                endTime: '10am',
                duration: 1
            },
            {
                person: 'William Hartnell',
                type: 'visit',
                day: 'monday',
                startTime: '10am',
                endTime: '12pm',
                duration: 2
            },   
        ],
        colleagues: [
            {id: 1, name: 'Adam Mitchell'}
        ]
    },
    {
        id: 2,
        day: 'monday',
        startTime: '8am',
        endTime: '1pm',
        activities: [
            {
                person: 'Peter Capaldi',
                type: 'visit',
                day: 'monday',
                startTime: '8am',
                endTime: '9.30am',
                duration: 1.5
            },
            {
                person: '',
                type: 'free',
                day: 'monday',
                startTime: '9.30am',
                endTime: '1pm',
                duration: 3.5
            }
        ],
        colleagues: [
            {id: 3, name: 'Bill Potts'}
        ]
    },
    {
        id: 3,
        day: 'monday',
        startTime: '9am',
        endTime: '2pm',
        activities: [
            {
                person: '',
                type: 'free',
                day: 'monday',
                startTime: '9am',
                endTime: '1pm',
                duration: 4
            },
            {
                person: 'Jodie Whittaker',
                type: 'visit',
                day: 'monday',
                startTime: '1pm',
                endTime: '2pm',
                duration: 1
            },
        ],
        colleagues: [
            {id: 5, name: 'Jack Harkness'}
        ]
    },
    {
        id: 4,
        day: 'monday',
        startTime: '4pm',
        endTime: '9pm',
        activities: [
            {
                person: 'Peter Capaldi',
                type: 'visit',
                day: 'monday',
                startTime: '4pm',
                endTime: '5.30pm',
                duration: 1.5
            },
            {
                person: '',
                type: '',
                day: 'monday',
                startTime: '5.30pm',
                endTime: '8pm',
                duration: 2.5
            },
            {
                person: 'Sean Pertwee',
                type: 'visit',
                day: 'monday',
                startTime: '8pm',
                endTime: '9pm',
                duration: 1
            },
        ],
        colleagues: [
            {id: 1, name: 'Adam Mitchell'}
        ]
    },
    {
        id: 5,
        day: 'tuesday',
        startTime: '7am',
        endTime: '12pm',
        activities: [
            {
                person: 'Patrick Troughton',
                type: 'visit',
                day: 'tuesday',
                startTime: '7am',
                endTime: '8.30am',
                duration: 1.5
            },
            {
                person: 'Tom Baker',
                type: 'visit',
                day: 'tuesday',
                startTime: '9am',
                endTime: '11am',
                duration: 2
            },
            {
                person: '',
                type: 'free',
                day: 'tuesday',
                startTime: '11am',
                endTime: '12pm',
                duration: 1
            }
        ],
        colleagues: [
            {id: 7, name: 'Rose Tyler'}
        ]
    },
    {
        id: 6,
        day: 'tuesday',
        startTime: '10am',
        endTime: '3pm',
        activities: [
            {
                person: '',
                type: 'free',
                day: 'tuesday',
                startTime: '10am',
                endTime: '2pm',
                duration: 4
            },
            {
                person: 'Matthew Smith',
                type: 'visit',
                day: 'tuesday',
                startTime: '2pm',
                endTime: '3pm',
                duration: 1
            }
        ],
        colleagues: [
            {id: 4, name: 'Clara Oswald'}
        ]
    },
    {
        id: 7,
        day: 'tuesday',
        startTime: '4pm',
        endTime: '9pm',
        activities: [
            {
                person: 'Peter Capaldi',
                type: 'visit',
                day: 'tuesday',
                startTime: '4pm',
                endTime: '5.30pm',
                duration: 1.5
            },
            {
                person: 'River Song',
                type: 'visit',
                day: 'tuesday',
                startTime: '6pm',
                endTime: '7pm',
                duration: 1
            },
            {
                person: '',
                type: 'free',
                day: 'tuesday',
                startTime: '7pm',
                endTime: '9pm',
                duration: 2
            },
        ],
        colleagues: [
            {id: 7, name: 'Rose Tyler'}
        ]
    },
    {
        id: 8,
        day: 'wednesday',
        startTime: '7am',
        endTime: '12pm',
        activities: [
            {
                person: 'Jodie Whittaker',
                type: 'visit',
                day: 'wednesday',
                startTime: '7am',
                endTime: '9am',
                duration: 2
            },
            {
                person: '',
                type: 'free',
                day: 'wednesday',
                startTime: '9am',
                endTime: '12pm',
                duration: 5
            },
        ],
        colleagues: [
            {id: 1, name: 'Adam Mitchell'}
        ]
    },
    {
        id: 9,
        day: 'wednesday',
        startTime: '9am',
        endTime: '2pm',
        activities: [
            {
                person: 'Tom Baker',
                type: 'visit',
                day: 'wednesday',
                startTime: '9am',
                endTime: '11am',
                duration: 2
            },
            {
                person: '',
                type: 'free',
                day: 'wednesday',
                startTime: '11am',
                endTime: '2pm',
                duration: 3
            },
        ],
        colleagues: [
            {id: 3, name: 'Bill Potts'}
        ]
    },
    {
        id: 10,
        day: 'wednesday',
        startTime: '10am',
        endTime: '3pm',
        activities: [
            {
                person: '',
                type: 'free',
                day: 'wednesday',
                startTime: '10pm',
                endTime: '2pm',
                duration: 4
            },
            {
                person: 'Matthew Smith',
                type: 'visit',
                day: 'wednesday',
                startTime: '2pm',
                endTime: '3pm',
                duration: 1
            },
        ],
        colleagues: [
            {id: 4, name: 'Clara Oswald'}
        ]
    },
    {
        id: 11,
        day: 'wednesday',
        startTime: '5pm',
        endTime: '10pm',
        activities: [
            {
                person: '',
                type: 'free',
                day: 'wednesday',
                startTime: '5pm',
                endTime: '6pm',
                duration: 1
            },
            {
                person: 'River Song',
                type: 'visit',
                day: 'wednesday',
                startTime: '6pm',
                endTime: '7pm',
                duration: 1
            },
            {
                person: '',
                type: 'free',
                day: 'wednesday',
                startTime: '5pm',
                endTime: '6pm',
                duration: 1
            },
            {
                person: 'Sean Pertwee',
                type: 'visit',
                day: 'wednesday',
                startTime: '8pm',
                endTime: '10pm',
                duration: 2
            },
        ],
        colleagues: [
            {id: 7, name: 'Rose Tyler'}
        ]
    },
    {
        id: 12,
        day: 'thursday',
        startTime: '7am',
        endTime: '12pm',
        activities: [
            {
                person: 'Patrick Troughton',
                type: 'visit',
                day: 'thursday',
                startTime: '7am',
                endTime: '8.30am',
                duration: 1.5
            },
            {
                person: 'Tom Baker',
                type: 'visit',
                day: 'thursday',
                startTime: '9am',
                endTime: '11am',
                duration: 2
            },
            {
                person: '',
                type: 'free',
                day: 'thursday',
                startTime: '11am',
                endTime: '12pm',
                duration: 1
            }
        ],
        colleagues: [
            {id: 4, name: 'Clara Oswald'}
        ]
    },
    {
        id: 13,
        day: 'thursday',
        startTime: '10am',
        endTime: '3pm',
        activities: [
            {
                person: '',
                type: 'free',
                day: 'thursday',
                startTime: '10am',
                endTime: '2pm',
                duration: 4
            },
            {
                person: 'William Hartnell',
                type: 'visit',
                day: 'thursday',
                startTime: '2pm',
                endTime: '3pm',
                duration: 1
            }
        ],
        colleagues: [
            {id: 8, name: 'Ryan Sinclair'}
        ]
    },
    {
        id: 14,
        day: 'thursday',
        startTime: '4pm',
        endTime: '9pm',
        activities: [
            {
                person: 'Jodie Whittaker',
                type: 'visit',
                day: 'thursday',
                startTime: '4pm',
                endTime: '5.30pm',
                duration: 1.5
            },
            {
                person: '',
                type: 'free',
                day: 'thursday',
                startTime: '5.30pm',
                endTime: '9pm',
                duration: 3.5
            }
        ],
        colleagues: [
            {id: 5, name: 'Jack Harkness'}
        ]
    },
    {
        id: 15,
        day: 'friday',
        startTime: '7am',
        endTime: '12pm',
        activities: [
            {
                person: 'Patrick Troughton',
                type: 'visit',
                day: 'friday',
                startTime: '7am',
                endTime: '8.30am',
                duration: 1.5
            },
            {
                person: 'Tom Baker',
                type: 'visit',
                day: 'friday',
                startTime: '9am',
                endTime: '11am',
                duration: 2
            },
            {
                person: '',
                type: 'free',
                day: 'friday',
                startTime: '11am',
                endTime: '12pm',
                duration: 1
            },
        ],
        colleagues: [
            {id: 2, name: 'Amelia Pond'}
        ]
    },
    {
        id: 16,
        day: 'friday',
        startTime: '8.30am',
        endTime: '1.30pm',
        activities: [
            {
                person: 'Matthew Smith',
                type: 'visit',
                day: 'friday',
                startTime: '8.30am',
                endTime: '10am',
                duration: 1.5
            },
            {
                person: '',
                type: 'free',
                day: 'friday',
                startTime: '10am',
                endTime: '1.30m',
                duration: 3.5
            },
        ],
        colleagues: [
            {id: 6, name: 'Rory Williams'}
        ]
    },
    {
        id: 17,
        day: 'friday',
        startTime: '4pm',
        endTime: '9pm',
        activities: [
            {
                person: 'William Hartnell',
                type: 'visit',
                day: 'friday',
                startTime: '4pm',
                endTime: '5pm',
                duration: 1
            },
            {
                person: 'free',
                type: 'visit',
                day: 'friday',
                startTime: '5pm',
                endTime: '9pm',
                duration: 4
            },
        ],
        colleagues: [
            {id: 1, name: 'Adam Mitchell'}
        ]
    },
    {
        id: 18,
        day: 'friday',
        startTime: '4.30pm',
        endTime: '9.30pm',
        activities: [
            {
                person: '',
                type: 'free',
                day: 'friday',
                startTime: '4.30pm',
                endTime: '8.30pm',
                duration: 4
            },
            {
                person: 'Patrick Troughton',
                type: 'visit',
                day: 'friday',
                startTime: '8.30pm',
                endTime: '9.30pm',
                duration: 1
            },
        ],
        colleagues: [
            {id: 3, name: 'Bill Potts'}
        ]
    },
    {
        id: 19,
        day: 'saturday',
        startTime: '8am',
        endTime: '1pm',
        activities: [
            {
                person: 'River Song',
                type: 'visit',
                day: 'saturday',
                startTime: '8am',
                endTime: '9am',
                duration: 1
            },
            {
                person: '',
                type: 'free',
                day: 'saturday',
                startTime: '9am',
                endTime: '10am',
                duration: 1
            },
            {
                person: 'Tom Baker',
                type: 'visit',
                day: 'saturday',
                startTime: '10am',
                endTime: '12pm',
                duration: 2
            },
            {
                person: '',
                type: 'free',
                day: 'saturday',
                startTime: '12pm',
                endTime: '1pm',
                duration: 1
            },
        ],
        colleagues: [
            {id: 4, name: 'Clara Oswald'}
        ]
    },
    {
        id: 20,
        day: 'saturday',
        startTime: '9am',
        endTime: '2pm',
        activities: [
            {
                person: '',
                type: 'free',
                day: 'saturday',
                startTime: '9am',
                endTime: '12.30pm',
                duration: 3.5
            },
            {
                person: 'Jodie Whittaker',
                type: 'visit',
                day: 'saturday',
                startTime: '12.30pm',
                endTime: '2pm',
                duration: 1.5
            },
        ],
        colleagues: [
            {id: 6, name: 'Rory Williams'}
        ]
    },
    {
        id: 21,
        day: 'saturday',
        startTime: '4pm',
        endTime: '9pm',
        activities: [
            {
                person: 'River Song',
                type: 'visit',
                day: 'saturday',
                startTime: '4pm',
                endTime: '5pm',
                duration: 1
            },
            {
                person: 'River Song',
                type: 'free',
                day: 'saturday',
                startTime: '5pm',
                endTime: '8pm',
                duration: 3
            },
            {
                person: 'Sean Pertwee',
                type: 'visit',
                day: 'saturday',
                startTime: '8pm',
                endTime: '9pm',
                duration: 1
            },
        ],
        colleagues: [
            {id: 2, name: 'Amelia Pond'}
        ]
    },
    {
        id: 22,
        day: 'sunday',
        startTime: '8.30am',
        endTime: '1.30pm',
        activities: [
            {
                person: 'River Song',
                type: 'visit',
                day: 'sunday',
                startTime: '8.30am',
                endTime: '9.30am',
                duration: 1
            },
            {
                person: 'Tom Baker',
                type: 'visit',
                day: 'sunday',
                startTime: '10am',
                endTime: '12pm',
                duration: 2
            },
            {
                person: '',
                type: 'free',
                day: 'sunday',
                startTime: '12pm',
                endTime: '1.30pm',
                duration: 1.5
            },
        ],
        colleagues: [
            {id: 10, name: 'Yasmin Khan'}
        ]
    },
    {
        id: 23,
        day: 'sunday',
        startTime: '9am',
        endTime: '2pm',
        activities: [
            {
                person: '',
                type: 'free',
                day: 'sunday',
                startTime: '9am',
                endTime: '12.30pm',
                duration: 3.5
            },
            {
                person: 'Jodie Whittaker',
                type: 'visit',
                day: 'sunday',
                startTime: '12.30pm',
                endTime: '2pm',
                duration: 1.5
            },
        ],
        colleagues: [
            {id: 9, name: 'Sarah J Smith'}
        ]
    },
    {
        id: 24,
        day: 'sunday',
        startTime: '4pm',
        endTime: '9pm',
        activities: [
            {
                person: 'River Song',
                type: 'visit',
                day: 'sunday',
                startTime: '4pm',
                endTime: '5pm',
                duration: 1
            },
            {
                person: 'River Song',
                type: 'free',
                day: 'sunday',
                startTime: '5pm',
                endTime: '9pm',
                duration: 4
            }
        ],
        colleagues: [
            {id: 7, name: 'Rose Tyler'}
        ]
    },
];

export let visits = [
    {
        person: 'Sean Pertwee',
        day: 'monday',
        startTime: '7pm',
        endTime: '9pm',
        duration: 2
    },
    {
        person: 'Peter Capaldi',
        day: 'monday',
        startTime: '8am',
        endTime: '9.30am',
        duration: 1.5
    },
    {
        person: 'William Hartnell',
        day: 'monday',
        startTime: '10am',
        endTime: '12pm',
        duration: 2
    },   
    {
        person: 'Jodie Whittaker',
        day: 'monday',
        startTime: '1pm',
        endTime: '2pm',
        duration: 1
    },
    {
        person: 'Peter Capaldi',
        day: 'monday',
        startTime: '4pm',
        endTime: '5.30pm',
        duration: 1.5
    },
    {
        person: 'Sean Pertwee',
        day: 'monday',
        startTime: '8pm',
        endTime: '9pm',
        duration: 1
    },
    {
        person: 'Patrick Troughton',
        day: 'tuesday',
        startTime: '7am',
        endTime: '8.30am',
        duration: 1.5
    },
    {
        person: 'Tom Baker',
        day: 'tuesday',
        startTime: '9am',
        endTime: '11am',
        duration: 2
    },
    {
        person: 'Matthew Smith',
        day: 'tuesday',
        startTime: '2pm',
        endTime: '3pm',
        duration: 1
    },
    {
        person: 'Peter Capaldi',
        day: 'tuesday',
        startTime: '4pm',
        endTime: '5.30pm',
        duration: 1.5
    },
    {
        person: 'River Song',
        day: 'tuesday',
        startTime: '6pm',
        endTime: '7pm',
        duration: 1
    },
    {
        person: 'Jodie Whittaker',
        day: 'wednesday',
        startTime: '7am',
        endTime: '9am',
        duration: 2
    },
    {
        person: 'Tom Baker',
        day: 'wednesday',
        startTime: '9am',
        endTime: '11am',
        duration: 2
    },
    {
        person: 'Matthew Smith',
        day: 'wednesday',
        startTime: '2pm',
        endTime: '3pm',
        duration: 1
    },
    {
        person: 'River Song',
        day: 'wednesday',
        startTime: '6pm',
        endTime: '7pm',
        duration: 1
    },
    {
        person: 'Sean Pertwee',
        day: 'wednesday',
        startTime: '8pm',
        endTime: '10pm',
        duration: 2
    },
    {
        person: 'Patrick Troughton',
        day: 'thursday',
        startTime: '7am',
        endTime: '8.30am',
        duration: 1.5
    },
    {
        person: 'Tom Baker',
        day: 'thursday',
        startTime: '9am',
        endTime: '11am',
        duration: 2
    },
    {
        person: 'William Hartnell',
        day: 'thursday',
        startTime: '2pm',
        endTime: '3pm',
        duration: 1
    },
    {
        person: 'Jodie Whittaker',
        day: 'thursday',
        startTime: '4pm',
        endTime: '5.30pm',
        duration: 1.5
    },
    {
        person: 'Patrick Troughton',
        day: 'friday',
        startTime: '7am',
        endTime: '8.30am',
        duration: 1.5
    },
    {
        person: 'Tom Baker',
        day: 'friday',
        startTime: '9am',
        endTime: '11am',
        duration: 2
    },
    {
        person: 'Matthew Smith',
        day: 'friday',
        startTime: '2pm',
        endTime: '3pm',
        duration: 1
    },
    {
        person: 'William Hartnell',
        day: 'friday',
        startTime: '4pm',
        endTime: '5pm',
        duration: 1
    },
    {
        person: 'Patrick Troughton',
        day: 'friday',
        startTime: '8.30pm',
        endTime: '9.30pm',
        duration: 1
    },
    {
        person: 'River Song',
        day: 'saturday',
        startTime: '8am',
        endTime: '9am',
        duration: 1
    },
    {
        person: 'Tom Baker',
        day: 'saturday',
        startTime: '10am',
        endTime: '12pm',
        duration: 2
    },
    {
        person: 'Jodie Whittaker',
        day: 'saturday',
        startTime: '12.30pm',
        endTime: '2pm',
        duration: 1.5
    },
    {
        person: 'River Song',
        day: 'saturday',
        startTime: '4pm',
        endTime: '5pm',
        duration: 1
    },
    {
        person: 'Sean Pertwee',
        day: 'saturday',
        startTime: '8pm',
        endTime: '9pm',
        duration: 1
    },
    {
        person: 'River Song',
        day: 'sunday',
        startTime: '8.30am',
        endTime: '9.30am',
        duration: 1
    },
    {
        person: 'Tom Baker',
        day: 'sunday',
        startTime: '10am',
        endTime: '12pm',
        duration: 2
    },
    {
        person: 'Jodie Whittaker',
        day: 'sunday',
        startTime: '12.30pm',
        endTime: '2pm',
        duration: 1
    },
    {
        person: 'River Song',
        day: 'sunday',
        startTime: '4pm',
        endTime: '5pm',
        duration: 1
    }
]

export let activities = ['Visit', 'Team rota', 'Storytelling', 'Marketing', 'Link Worker', 'Training and eLearning', 'PPE'];

export let people = [
    {
        name: 'William Hartnell',
        address: '21 Gallifrey Drive',
        linkWorker: {id: 1, name: 'Adam Mitchell'},
        visits: [
            {
                day: 'monday',
                startTime: '10am',
                endTime: '12pm',
                duration: 2
            },
            {
                day: 'thursday',
                startTime: '2pm',
                endTime: '3pm',
                duration: 1
            },
            {
                day: 'friday',
                startTime: '4pm',
                endTime: '5pm',
                duration: 1
            },
        ]
    },
    {
        name: 'Patrick Troughton',
        address: '12 Mondas Close',
        linkWorker: {id: 3, name: 'Bill Potts'},
        visits: [
            {
                day: 'tuesday',
                startTime: '7am',
                endTime: '8.30am',
                duration: 1.5
            },
            {
                day: 'thursday',
                startTime: '7am',
                endTime: '8.30am',
                duration: 1.5
            },
            {
                day: 'friday',
                startTime: '7am',
                endTime: '8.30am',
                duration: 1.5
            },
            {
                day: 'friday',
                startTime: '8.30pm',
                endTime: '9.30pm',
                duration: 1
            },
        ]
    },
    {
        name: 'Sean Pertwee',
        address: '8 Skaro Road',
        linkWorker: {id: 4, name: 'Clara Oswald'},
        visits: [
            {
                day: 'monday',
                startTime: '7pm',
                endTime: '9pm',
                duration: 2
            },
            {
                day: 'wednesday',
                startTime: '8pm',
                endTime: '10pm',
                duration: 2
            },
            {
                day: 'saturday',
                startTime: '8pm',
                endTime: '9pm',
                duration: 1
            }
        ]
    },
    {
        name: 'Tom Baker',
        address: '10 Moebius Strip',
        linkWorker: {id: 6, name: 'Rory Williams'},
        visits: [
            {
                day: 'tuesday',
                startTime: '9am',
                endTime: '11am',
                duration: 2
            },
            {
                day: 'wednesday',
                startTime: '9am',
                endTime: '11am',
                duration: 2
            },
            {
                day: 'thursday',
                startTime: '9am',
                endTime: '11am',
                duration: 2
            },
            {
                day: 'friday',
                startTime: '9am',
                endTime: '11am',
                duration: 2
            },
            {
                day: 'saturday',
                startTime: '10am',
                endTime: '12pm',
                duration: 2
            },
            {
                day: 'sunday',
                startTime: '10am',
                endTime: '12pm',
                duration: 2
            }
        ]
    },
    {
        name: 'Matthew Smith',
        address: '4 Androzani Manor',
        linkWorker: {id: 8, name: 'Ryan Sinclair'},
        visits: [
            {
                day: 'tuesday',
                startTime: '2pm',
                endTime: '3pm',
                duration: 1
            },
            {
                day: 'wednesday',
                startTime: '2pm',
                endTime: '3pm',
                duration: 1
            },
            {
                day: 'friday',
                startTime: '2pm',
                endTime: '3pm',
                duration: 1
            }
        ]
    },
    {
        name: 'Peter Capaldi',
        address: '10 Diner Close',
        linkWorker: {id: 8, name: 'Ryan Sinclair'},
        visits: [
            {
                day: 'monday',
                startTime: '8am',
                endTime: '9.30am',
                duration: 1.5
            },
            {
                day: 'monday',
                startTime: '4pm',
                endTime: '5.30pm',
                duration: 1.5
            },
            {
                day: 'tuesday',
                startTime: '4pm',
                endTime: '5.30pm',
                duration: 1.5
            }
        ]
    },
    {
        name: 'Jodie Whittaker',
        address: '8 Indigo Prime',
        linkWorker: {id: 7, name: 'Rose Tyler'},
        visits: [
            {
                day: 'monday',
                startTime: '1pm',
                endTime: '2pm',
                duration: 1
            },
            {
                day: 'wednesday',
                startTime: '7am',
                endTime: '9am',
                duration: 2
            },
            {
                day: 'thursday',
                startTime: '4pm',
                endTime: '5.30pm',
                duration: 1.5
            },
            {
                day: 'saturday',
                startTime: '12.30pm',
                endTime: '2pm',
                duration: 1
            },
            {
                day: 'sunday',
                startTime: '12.30pm',
                endTime: '2pm',
                duration: 1
            }
        ]
    },
    {
        name: 'River Song',
        address: '38 Library Road',
        linkWorker: {id: 7, name: 'Rose Tyler'},
        visits: [
            {
                day: 'tuesday',
                startTime: '6pm',
                endTime: '7pm',
                duration: 1
            },
            {
                day: 'wednesday',
                startTime: '6pm',
                endTime: '7pm',
                duration: 1
            },
            {
                day: 'saturday',
                startTime: '8am',
                endTime: '9am',
                duration: 1
            },
            {
                day: 'saturday',
                startTime: '4pm',
                endTime: '5pm',
                duration: 1
            },
            {
                day: 'sunday',
                startTime: '8.30am',
                endTime: '9.30am',
                duration: 1
            },
            {
                day: 'sunday',
                startTime: '4pm',
                endTime: '5pm',
                duration: 1
            }
        ]
    },
];