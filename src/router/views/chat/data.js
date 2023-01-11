const chatData = [
    {
        id: 1,
        image: require('@/assets/images/users/avatar-2.jpg'),
        name: 'Bardiya Freeman',
        message: 'Hey! there I\'m available',
        time: '05 min',
        color: 'secondary'  
    },
    {
        id: 2,
        image: require('@/assets/images/users/avatar-3.jpg'),
        name: 'Jeniffer Miller',
        message: 'I\'ve Available!',
        time: '12 min',
        color: 'success'
    },
    {
        id: 3,
        image: require('@/assets/images/users/avatar-6.jpg'),        
        name: 'Abhishek',
        message: 'Namaskaram; Lets Get Started!',
        time: '24 min',
        color: 'success'
    },
    {
        id: 4,
        image: require('@/assets/images/users/avatar-7.jpg'),
        name: 'Jose Vickery',
        message: 'Nice to meet you',
        time: '1 hr',
        color: 'warning'
    },
    {
        id: 5,
        image: require('@/assets/images/users/avatar-8.jpg'),
        name: 'Ojay Ojas',
        message: 'Hey! there I\'m available',
        time: '3 hrs',
        color: 'secondary'
    },
    {
        id: 6,
        image: require('@/assets/images/users/avatar-4.jpg'),
        name: 'Stephany Hadley',
        message: 'I\'ve Ready',
        time: '5 hrs',
        color: 'success'
    },
    {
        id: 7,
        image: require('@/assets/images/users/avatar-2.jpg'),
        name: 'Bardiya Freeman',
        message: 'You Guys Are Awesome!',
        time: '24 min',
        color: 'success'
    },
];

const chatMessagesData = [
    {
        name: 'Steven Franklin',
        message: 'Hello!',
        time: '10:00'
    },
    {
        align: 'right',
        name: 'Ojay Ojas',
        message: 'Hi, How are you? What about our next meeting?',
        time: '10:02'
    },
    {
        name: 'Steven Franklin',
        message: 'Yeah everything is fine',
        time: '10:06'
    },
    {
        name: 'Steven Franklin',
        message: '& Next meeting tomorrow 10.00AM',
        time: '10:06'
    },
    {
        align: 'right',
        name: 'Ojay Ojas',
        message: 'Wow that\'s great',
        time: '10:07'
    }
];

export { chatData, chatMessagesData };