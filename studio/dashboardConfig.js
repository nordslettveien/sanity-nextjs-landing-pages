export default {
  widgets: [
    {
      name: 'sanity-tutorials',
      options: {
        templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
      }
    },
    {name: 'structure-menu'},
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
                  buildHookId: '5ed7dfd88b65f2ff5e0ac5b2',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-79btf2oq',
                  apiId: '5719dfc6-ea6c-4944-9672-a7a961fd856c'
                },
                {
                  buildHookId: '5ed7dfd91763a7e21a90c175',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-czq4zvq6',
                  apiId: '80732ca2-05df-4927-8e6e-c33823fcb177'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/nordslettveien/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-czq4zvq6.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page']},
      layout: {width: 'medium'}
    }
  ]
}
