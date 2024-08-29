import character1 from '../../../assets/characters/paladin.jpg'
import character2 from '../../../assets/characters/necromancer.jpg'
import character3 from '../../../assets/characters/Knight.jpg'
import character4 from '../../../assets/characters/Dark_knight.jpg'
import character5 from '../../../assets/characters/Fallen_Angel.jpg'
import character6 from '../../../assets/characters/Magic_Knight.jpg'
import character7 from '../../../assets/characters/Piromaniac.jpg'
import character8 from '../../../assets/characters/Priest.jpg'
import character9 from '../../../assets/characters/Wizard.jpg'

import lifeIcon from '../../../assets/images/stats-icon/life.png'
import divineIcon from '../../../assets/images/stats-icon/divine.png'
import manaIcon from '../../../assets/images/stats-icon/mana.png'
import fireIcon from '../../../assets/images/stats-icon/fire.png'
import darkIcon from '../../../assets/images/stats-icon/dark.png'
import armorIcon from '../../../assets/images/stats-icon/armor.png'

import level1 from '../../../assets/images/level-icon/1.png'
import level10 from '../../../assets/images/level-icon/10.png'

import item1 from '../../../assets/images/items/sword.png'
import item2 from '../../../assets/images/items/rageRing.png'
import item3 from '../../../assets/images/items/grail.png'

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
      { name: 'USD', amount: 140000, image: lifeIcon },
      { name: 'ARS', amount: 200000, image: manaIcon },
      { name: 'Com...', amount: 0, image: armorIcon },
      { name: 'Stocks', amount: 50000, image: fireIcon },
      { name: 'Cripto', amount: 0, image: divineIcon },
      { name: 'Other', amount: 50000, image: darkIcon }
    ],
    crew: [
      {
        id: 1,
        image: character4,
        rare: 3
      },
      {
        id: 2,
        image: character7,
        rare: 5
      },
      {
        id: 3,
        image: character6,
        rare: 2
      },
      {
        id: 4,
        image: character5,
        rare: 4
      },
      {
        id: 5,
        image: character3,
        rare: 4
      },
      {
        id: 6,
        image: character8,
        rare: 1
      }
    ],
    items: [
      {
        id: 1,
        image: item1,
        rare: 1
      },
      {
        id: 2,
        image: item2,
        rare: 3
      },
      {
        id: 3,
        image: item3,
        rare: 5
      }
    ],
    goal: 450000
  },
  {
    text: 'Chaldu',
    photo: character2,
    class: 'Necromancer',
    level: level10,
    title: 'King of Ashes',
    color: '#9F4CD4',
    stats: [
      { name: 'USD', amount: 1400000, image: lifeIcon },
      { name: 'ARS', amount: 2000, image: manaIcon },
      { name: 'Com...', amount: 0, image: armorIcon },
      { name: 'Stocks', amount: 50000, image: fireIcon },
      { name: 'Cripto', amount: 2000, image: divineIcon },
      { name: 'Other', amount: 5000000, image: darkIcon }
    ],
    crew: [
      {
        id: 1,
        image: character3,
        rare: 1
      },
      {
        id: 2,
        image: character6,
        rare: 5
      },
      {
        id: 3,
        image: character5,
        rare: 3
      },
      {
        id: 4,
        image: character4,
        rare: 4
      },
      {
        id: 5,
        image: character9,
        rare: 3
      },
      {
        id: 6,
        image: character8,
        rare: 2
      }
    ],
    items: [
      {
        id: 1,
        image: item1,
        rare: 1
      }
    ],
    goal: 9000000
  }
]

export const Stats = {
  stats: [
    { name: 'NFC', amount: 500000, image: lifeIcon },
    { name: 'NFC', amount: 500000, image: manaIcon },
    { name: 'USD', amount: 140000, image: fireIcon },
    { name: 'ARS', amount: 200000, image: divineIcon },
    { name: 'QQQ', amount: 50000, image: darkIcon }
  ]
}
