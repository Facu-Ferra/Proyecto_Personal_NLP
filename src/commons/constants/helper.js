import character1 from '../../../assets/characters/paladin.jpg'
import character2 from '../../../assets/characters/necromancer.jpg'

import lifeIcon from '../../../assets/images/stats-icon/life.png'
import divineIcon from '../../../assets/images/stats-icon/divine.png'
import manaIcon from '../../../assets/images/stats-icon/mana.png'
import fireIcon from '../../../assets/images/stats-icon/fire.png'
import darkIcon from '../../../assets/images/stats-icon/dark.png'

import level1 from '../../../assets/images/level-icon/1.png'
import level10 from '../../../assets/images/level-icon/10.png'

/* 
    Aca van todos los datos harodeados hasta que se 
    implemente persistencia de datos por storage o backend
*/

export const PROFILES = [
  {
    text: 'Benoffi',
    photo: character1,
    class: 'Paladin',
    level: level1,
    title: 'Apprentice',
    color: '#89d3d7',
    stats: [
      { name: 'USD', amount: 50000, image: lifeIcon },
      { name: 'BTC', amount: 45000, image: divineIcon },
      { name: 'ARS', amount: 20000, image: manaIcon },
      { name: 'QQQ', amount: 30000, image: fireIcon }
    ],
    goal: 200000
  },
  {
    text: 'Chaldu',
    photo: character2,
    class: 'Necromancer',
    level: level10,
    title: 'King of Ashes',
    color: '#9F4CD4',
    stats: [
      { name: 'NFC', amount: 500000, image: darkIcon },
      { name: 'USD', amount: 140000, image: lifeIcon },
      { name: 'ARS', amount: 200000, image: manaIcon },
      { name: 'QQQ', amount: 50000, image: fireIcon }
    ],
    goal: 900000
  }
]
