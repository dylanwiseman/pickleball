import tanjiroImg from './assets/tanjiro.png';
import inosukeImg from './assets/inosuke.png';
import nezukoImg from './assets/nezuko.png';
import zenitsuImg from './assets/zenitsu.png';

const data = [
    {
        id: '1',
        userScore: 11,
        oppScore: 9,
        win: true,
        dayOfWeek: 'Saturday',
        date: 'Aug 20 2022',
        time: '5:13pm',
        player1: {
            index: 0,
            name: 'tanjiro',
            pic: tanjiroImg,
            plus: 10,
            plusPoint: 5,
            minus: 7,
            minusPoint: 3,
        },
        player2: {
            index: 1,
            name: 'inosuke',
            pic: inosukeImg,
            plus: 9,
            plusPoint: 6,
            minus: 5,
            minusPoint: 3,
        },
        player3: {
            index: 2,
            name: 'nezuko',
            pic: nezukoImg,
            plus: 4,
            plusPoint: 2,
            minus: 10,
            minusPoint: 3,
        },
        player4: {
            index: 3,
            name: 'zenitsu',
            pic: zenitsuImg,
            plus: 5,
            plusPoint: 1,
            minus: 6,
            minusPoint: 4,
        },
    },
    {
        id: '2',
        userScore: 6,
        oppScore: 11,
        win: false,
        dayOfWeek: 'Saturday',
        date: 'Aug 20 2022',
        time: '6:45pm',
        player1: {
            name: 'tanjiro',
            pic: tanjiroImg,
            plus: 10,
            plusPoint: 5,
            minus: 7,
            minusPoint: 3,
        },
        player2: {
            name: 'inosuke',
            pic: inosukeImg,
            plus: 9,
            plusPoint: 6,
            minus: 5,
            minusPoint: 3,
        },
        player3: {
            name: 'nezuko',
            pic: nezukoImg,
            plus: 4,
            plusPoint: 2,
            minus: 10,
            minusPoint: 3,
        },
        player4: {
            name: 'zenitsu',
            pic: zenitsuImg,
            plus: 5,
            plusPoint: 1,
            minus: 6,
            minusPoint: 4,
        },
    },
    {
        id: '3',
        userScore: 11,
        oppScore: 2,
        win: true,
        dayOfWeek: 'Saturday',
        date: 'Aug 20 2022',
        time: '5:13pm',
        player1: {
            name: 'tanjiro',
            pic: tanjiroImg,
            plus: 10,
            plusPoint: 5,
            minus: 7,
            minusPoint: 3,
        },
        player2: {
            name: 'inosuke',
            pic: inosukeImg,
            plus: 9,
            plusPoint: 6,
            minus: 5,
            minusPoint: 3,
        },
        player3: {
            name: 'nezuko',
            pic: nezukoImg,
            plus: 4,
            plusPoint: 2,
            minus: 10,
            minusPoint: 3,
        },
        player4: {
            name: 'zenitsu',
            pic: zenitsuImg,
            plus: 5,
            plusPoint: 1,
            minus: 6,
            minusPoint: 4,
        },
    },
    {
        id: '4',
        userScore: 10,
        oppScore: 12,
        win: false,
        dayOfWeek: 'Saturday',
        date: 'Aug 20 2022',
        time: '5:13pm',
        player1: {
            name: 'tanjiro',
            pic: tanjiroImg,
            plus: 10,
            plusPoint: 5,
            minus: 7,
            minusPoint: 3,
        },
        player2: {
            name: 'inosuke',
            pic: inosukeImg,
            plus: 9,
            plusPoint: 6,
            minus: 5,
            minusPoint: 3,
        },
        player3: {
            name: 'nezuko',
            pic: nezukoImg,
            plus: 4,
            plusPoint: 2,
            minus: 10,
            minusPoint: 3,
        },
        player4: {
            name: 'zenitsu',
            pic: zenitsuImg,
            plus: 5,
            plusPoint: 1,
            minus: 6,
            minusPoint: 4,
        },
    },
];

export const players = [
    {
        id: 4,
        name: 'tanjiro',
        pic: tanjiroImg,
    },
    {
        id: 1,
        name: 'inosuke',
        pic: inosukeImg,
    },
    {
        id: 2,
        name: 'nezuko',
        pic: nezukoImg,
    },
    {
        id: 3,
        name: 'zenitsu',
        pic: zenitsuImg,
    },
];

export default data;
