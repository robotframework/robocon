import home from './home'
import germany from './germany'
import sponsor from './sponsor'
import archive from './archive'
import page2023 from './2023'

export default {
  langName: 'English',
  newsBanner: '',
  navbar: {
    links: [
      { text: 'Home', name: 'Home' },
      { text: 'RBCN23', name: 'Robocon2023', theme: 'theme-2023' },
      { text: 'Sponsor', name: 'Sponsor' },
      { text: 'Archive', name: 'Archive' }
    ]
  },
  home,
  germany,
  sponsor,
  archive,
  page2023
}
