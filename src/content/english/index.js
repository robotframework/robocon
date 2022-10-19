import home from './home'
import rbcn2022 from './2022'
import germany from './germany'
import sponsor from './sponsor'
import archive from './archive'

export default {
  langName: 'English',
  newsBanner: '🎉 Helsinki talks released! 🎉',
  navbar: {
    links: [
      { text: 'RBCN23', name: 'Home' },
      { text: 'RBCN22DE', name: 'Germany', theme: 'theme-germany' },
      { text: 'RBCN22', name: '2022', theme: 'theme-2022' },
      { text: 'Sponsor', name: 'Sponsor' },
      { text: 'Archive', name: 'Archive' }
    ]
  },
  home,
  rbcn2022,
  germany,
  sponsor,
  archive
}
