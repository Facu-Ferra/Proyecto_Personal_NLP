/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import {
  Text,
  Modal,
  View,
  StyleSheet,
  Image,
  TouchableOpacity
} from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {
  COLOR_BLACK_GOAL_BACKGORUND,
  COLOR_GRAY_DASHBOARD,
  COLOR_LIGHT_BORDER,
  COLOR_WHITE
} from '../../commons/constants/colors'

const levelsImages = [
  require('../../../assets/images/level-icon/1.png'),
  require('../../../assets/images/level-icon/2.png'),
  require('../../../assets/images/level-icon/3.png'),
  require('../../../assets/images/level-icon/4.png'),
  require('../../../assets/images/level-icon/5.png'),
  require('../../../assets/images/level-icon/6.png'),
  require('../../../assets/images/level-icon/7.png'),
  require('../../../assets/images/level-icon/8.png'),
  require('../../../assets/images/level-icon/9.png'),
  require('../../../assets/images/level-icon/10.png')
]

const imageSize = 70

const LevelsModal = ({ levelImage, visible, onClose }) => {
  const handleClose = () => {
    onClose?.()
  }

  const renderImage = (image, index) => {
    const currentLevelStyle =
      levelImage === image ? { backgroundColor: COLOR_GRAY_DASHBOARD } : {}

    return (
      <View style={styles.row} key={index}>
        <View style={styles.position}>
          <Text style={{ color: COLOR_WHITE }}>{index + 1}</Text>
        </View>
        <View style={[styles.row, styles.content, currentLevelStyle]}>
          <Image
            source={image}
            style={{ height: imageSize, width: imageSize }}
          />
          <Text style={{ color: COLOR_WHITE }}>descripcion</Text>
        </View>
      </View>
    )
  }

  return (
    <Modal
      visible={visible}
      animationType='fade'
      onRequestClose={handleClose}
      transparent>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <View style={{ position: 'absolute', zIndex: 1, right: 5, top: 5 }}>
            <TouchableOpacity onPress={handleClose}>
              <MaterialCommunityIcons
                name='close'
                size={45}
                color={COLOR_WHITE}
              />
            </TouchableOpacity>
          </View>
          <Text
            style={{
              fontFamily: 'InknutAntiqua_600SemiBold',
              color: COLOR_WHITE,
              alignSelf: 'center',
              fontSize: 25
            }}>
            Levels
          </Text>
          {levelsImages.map(renderImage)}
        </View>
      </View>
    </Modal>
  )
}

export default LevelsModal

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'center'
  },
  modal: {
    backgroundColor: COLOR_BLACK_GOAL_BACKGORUND,
    marginHorizontal: 20,
    borderRadius: 25,
    paddingBottom: 15,
    paddingHorizontal: 15
  },
  position: {
    flex: 0.08,
    alignItems: 'center',
    borderWidth: 3,
    borderRadius: 10,
    backgroundColor: COLOR_BLACK_GOAL_BACKGORUND,
    borderColor: COLOR_LIGHT_BORDER
  },
  content: {
    borderRadius: 50,
    flex: 0.92
  },
  row: {
    gap: 10,
    flexDirection: 'row',
    alignItems: 'center'
  }
})
