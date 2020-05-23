export default {
  widgets: [
    { name: 'structure-menu' },
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5ec9abb2566965088c3ccd68',
                  title: 'Sanity Studio',
                  name: 'sanity-gatsby-blog-studio-a5ph1r5u',
                  apiId: 'a4a106c2-e32b-496e-8d20-c301c5fac18f'
                },
                {
                  buildHookId: '5ec9abb240c162015b5de8cf',
                  title: 'Blog Website',
                  name: 'sanity-gatsby-blog-web-otddyjb4',
                  apiId: '377f8529-a993-44a3-9b51-330a95286a60'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/aicoshell/sanity-gatsby-blog',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-gatsby-blog-web-otddyjb4.netlify.app', category: 'apps' }
        ]
      }
    },
    { name: 'project-users', layout: { height: 'auto' } },
    {
      name: 'document-list',
      options: { title: 'Recent blog posts', order: '_createdAt desc', types: ['post'] },
      layout: { width: 'medium' }
    }
  ]
}
