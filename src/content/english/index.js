import home from './home'
import rbcn2022 from './2022'
import germany from './germany'
import sponsor from './sponsor'
import archive from './archive'

export default {
  langName: 'English',
  newsBanner: 'Workshops released! <a href="https://cfp.robocon.io/robocon-2023-online/cfp">Online CFP</a> extended!',
  navbar: {
    links: [
      { text: 'RBCN23', name: 'Home' },
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
