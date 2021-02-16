const ghpages = require('gh-pages');

ghpages.publish(
    '__sapper__/export/simone98dm.github.io',
    {
        branch: 'master',
        repo: 'https://github.com/simone98dm/simone98dm.github.io.git',
        user: {
            name: 'simone98dm',
            email: 'simone.dalmas@outlook.it'
        }
    },
    () => {
        console.log('Deploy Complete!')
    }
)