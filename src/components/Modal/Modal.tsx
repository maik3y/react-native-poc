import { styled } from 'nativewind'
import React from 'react'
import { Modal as NativeModal, View as DefaultView } from 'react-native'

interface ModalProps {
  content: React.ReactNode
  visible?: boolean
  setModalVisibleCallBack?: (visible: boolean) => void
}

export default function Modal({
  content,
  visible,
  setModalVisibleCallBack
}: ModalProps) {
  const View = styled(DefaultView)

  return (
    <View tw="flex-auto justify-center items-center">
      <NativeModal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {
          setModalVisibleCallBack ? setModalVisibleCallBack(false) : null
        }}>
        {content}
      </NativeModal>
    </View>
  )
}
