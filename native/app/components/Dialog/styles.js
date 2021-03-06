import EStyleSheet from 'react-native-extended-stylesheet'

export default EStyleSheet.create({

  wrapper: {
    ...EStyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center'
  },

  blur: {
    ...EStyleSheet.absoluteFillObject
  },

  container: {
    backgroundColor: '$colorWhite',
    flexDirection: 'column',
    overflow: 'hidden',
    borderRadius: 8,
    width: '80%',
    maxWidth: 400
  },

  header: {
    backgroundColor: '$colorLightGray',
    borderBottomWidth: 1,
    borderBottomColor: '$colorGray',
    alignItems: 'center',
    padding: 12
  },

  textTitle: {
    color: '$colorDialogTitle',
    fontSize: 13
  },

  body: {
    alignItems: 'center',
    justifyContent: 'center'
  },


  footer: {
    padding: 12,
    backgroundColor: '$colorWhite',
    alignItems: 'center'
  },

  buttonClose: {
    width: '100%',
    alignItems: 'center'
  },

  textClose: {
    color: '$colorButtonText',
    fontWeight: 'bold'
  }

})
