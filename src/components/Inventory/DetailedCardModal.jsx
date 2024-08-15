/* eslint-disable react/prop-types */
/* eslint-disable no-undef */
import {
  Text,
  Modal,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView
} from 'react-native'
import React from 'react'
import Calification from './Calification'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import {
  COLOR_DARK_GRAY,
  COLOR_DARK_BORDER,
  COLOR_WHITE,
  COLOR_GRAY_NEW_PROFILE_TEXT,
  COLOR_LIGHT_BORDER
} from '../../commons/constants/colors'

const DetailedCardModal = ({ visible, onClose, image }) => {
  const handleClose = () => {
    onClose?.()
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
              fontFamily: 'InknutAntiqua_300Light',
              color: COLOR_WHITE,
              alignSelf: 'center',
              fontSize: 23
            }}>
            Reinhard
          </Text>
          <Image source={image} style={styles.image} />
          <Calification rarity={3}></Calification>
          <ScrollView
            style={{ width: '100%', height: '100%', marginTop: 15 }}
            showsVerticalScrollIndicator={true}
            persistentScrollbar={true}>
            <Text
              style={{
                fontFamily: 'InknutAntiqua_300Light',
                color: COLOR_GRAY_NEW_PROFILE_TEXT,
                alignSelf: 'start',
                fontSize: 12
              }}>
              En las tierras heladas del norte, un guerrero implacable surgió,
              conocido por su velocidad y destreza con la espada. {'\n'}
              {'\n'}Criado entre las cumbres nevadas, su figura es la de un lobo
              blanco en la noche, acechando en silencio y sin piedad.{'\n'}
              {'\n'}
              En una de sus más siniestras hazañas, este caballero enfrentó a
              Balgharat, un dragón que devastaba su aldea. Sin titubear, lo
              llevó a las alturas heladas, donde su frialdad y maestría con la
              espada lo convirtieron en el verdugo de la bestia. Esta victoria
              se transformó en leyenda, cimentando su nombre como defensor de la
              aldea.{'\n'}
              {'\n'}
              En un mundo de traiciones y cambiantes alianzas, su lealtad es tan
              inquebrantable como su crueldad. Su legado está escrito en las
              páginas del hielo y sangre.
            </Text>
          </ScrollView>
        </View>
      </View>
    </Modal>
  )
}

export default DetailedCardModal

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '40%',
    borderRadius: 25,
    borderWidth: 1,
    borderColor: COLOR_LIGHT_BORDER
  },
  overlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  modal: {
    backgroundColor: COLOR_DARK_GRAY,
    height: '90%',
    width: '84%',
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 25,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: COLOR_DARK_BORDER
  }
})
