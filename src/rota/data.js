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
        shifts: [],
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
        shifts: [],
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
        shifts: [],
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
        shifts: [],
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
        shifts: [],
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
        shifts: [],
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
        shifts: [],
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
        shifts: [],
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
        shifts: [],
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
        shifts: [],
        visits: [],
        contractStartDate: '2020-04-06',
        probation: false,
    }
    
];

export let week = ['monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday', 'sunday'];

export let shifts = [
    {
        day: 'monday',
        startTime: '08:00',
        visits: [],
        colleagues: []
    },
    {
        day: 'monday',
        startTime: '08:00',
        visits: [],
        colleagues: []
    },
    {
        day: 'monday',
        startTime: '09:00',
        visits: [],
        colleagues: []
    },
    {
        day: 'monday',
        startTime: '16:00',
        visits: [],
        colleagues: []
    },
    {
        day: 'monday',
        startTime: '16:30',
        visits: [],
        colleagues: []
    },
    {
        day: 'tuesday',
        startTime: '07:00',
        visits: [],
        colleagues: []
    },
    {
        day: 'tuesday',
        startTime: '08:30',
        visits: [],
        colleagues: []
    },
    {
        day: 'tuesday',
        startTime: '10:00',
        visits: [],
        colleagues: []
    },
    {
        day: 'tuesday',
        startTime: '16:00',
        visits: [],
        colleagues: []
    },
    {
        day: 'tuesday',
        startTime: '16:30',
        visits: [],
        colleagues: []
    },
    {
        day: 'wednesday',
        startTime: '07:00',
        visits: [],
        colleagues: []
    },
    {
        day: 'wednesday',
        startTime: '08:30',
        visits: [],
        colleagues: []
    },
    {
        day: 'wednesday',
        startTime: '10:00',
        visits: [],
        colleagues: []
    },
    {
        day: 'wednesday',
        startTime: '16:00',
        visits: [],
        colleagues: []
    },
    {
        day: 'wednesday',
        startTime: '17:00',
        visits: [],
        colleagues: []
    },
    {
        day: 'wednesday',
        startTime: '17:00',
        visits: [],
        colleagues: []
    },
    {
        day: 'thursday',
        startTime: '07:00',
        visits: [],
        colleagues: []
    },
    {
        day: 'thursday',
        startTime: '08:30',
        visits: [],
        colleagues: []
    },
    {
        day: 'thursday',
        startTime: '10:00',
        visits: [],
        colleagues: []
    },
    {
        day: 'thursday',
        startTime: '16:00',
        visits: [],
        colleagues: []
    },
    {
        day: 'thursday',
        startTime: '16:30',
        visits: [],
        colleagues: []
    },
    {
        day: 'thursday',
        startTime: '17:00',
        visits: [],
        colleagues: []
    },
    {
        day: 'friday',
        startTime: '07:00',
        visits: [],
        colleagues: []
    },
    {
        day: 'friday',
        startTime: '08:30',
        visits: [],
        colleagues: []
    },
    {
        day: 'friday',
        startTime: '10:00',
        visits: [],
        colleagues: []
    },
    {
        day: 'friday',
        startTime: '16:00',
        visits: [],
        colleagues: []
    },
    {
        day: 'friday',
        startTime: '16:30',
        visits: [],
        colleagues: []
    },
    {
        day: 'saturday',
        startTime: '08:30',
        visits: [],
        colleagues: []
    },
    {
        day: 'saturday',
        startTime: '10:00',
        visits: [],
        colleagues: []
    },
    {
        day: 'saturday',
        startTime: '16:00',
        visits: [],
        colleagues: []
    },
    {
        day: 'saturday',
        startTime: '16:00',
        visits: [],
        colleagues: []
    },
    {
        day: 'sunday',
        startTime: '08:30',
        visits: [],
        colleagues: []
    },
    {
        day: 'sunday',
        startTime: '10:00',
        visits: [],
        colleagues: []
    },
    {
        day: 'sunday',
        startTime: '16:00',
        visits: [],
        colleagues: []
    },
    {
        day: 'sunday',
        startTime: '17:00',
        visits: [],
        colleagues: []
    }
];

export let activities = ['Visit', 'Team rota', 'Storytelling', 'Marketing', 'Link Worker', 'Training and eLearning', 'PPE'];

export let people = [
    {
        name: 'William Hartnell',
        address: '21 Gallifrey Drive',
        linkWorker: {id: 1, name: 'Adam Mitchell'},
        visits: []
    },
    {
        name: 'Patrick Troughton',
        address: '12 Mondas Close',
        linkWorker: {id: 3, name: 'Bill Potts'},
        visits: []
    },
    {
        name: 'Sean Pertwee',
        address: '8 Skaro Road',
        linkWorker: {id: 4, name: 'Clara Oswald'},
        visits: []
    },
    {
        name: 'Tom Baker',
        address: '10 Moebius Strip',
        linkWorker: {id: 6, name: 'Rory Williams'},
        visits: []
    },
    {
        name: 'Matthew Smith',
        address: '4 Androzani Manor',
        linkWorker: {id: 8, name: 'Ryan Sinclair'},
        visits: []
    },
    {
        name: 'Jodie Whittaker',
        address: '8 Indigo Prime',
        linkWorker: {id: 7, name: 'Rose Tyler'},
        visits: []
    },
];