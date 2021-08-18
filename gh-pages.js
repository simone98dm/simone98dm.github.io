import { publish } from 'gh-pages';

publish(
    'build', 
    {
        branch: 'gh-pages',
        repo: 'https://github.com/simone98dm/simone98dm.github.io.git',
        user: {
            name: 'simone98dm',
            email: 'simone.dalmas@outlook.it'
        },
        dotfiles: true
    },
    () => {
        console.log('Deploy Complete!');
    }
);