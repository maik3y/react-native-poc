import { StyleSheet } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BarCodeEvent, BarCodeScanner } from 'expo-barcode-scanner'
import Modal from '../../components/Modal/Modal'
import { useStyled } from '../../hooks/useStyled'
import * as Linking from 'expo-linking'

export default function ScanScreen() {
  const { View, Text, Pressable } = useStyled()

  const [hasPermission, setHasPermission] = useState<boolean | null>(null)
  const [qrCodeParams, setQrCodeParams] = useState<BarCodeEvent | null>(null)
  const [scanned, setScanned] = useState<boolean>(false)
  const [modalVisible, setModalVisible] = useState<boolean>(false)

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync()
      setHasPermission(status === 'granted')
    }
    void getBarCodeScannerPermissions()

    // Reset states on un-mount
    return () => handleClose()
  }, [])

  const handleBarCodeScanned = (params: BarCodeEvent) => {
    setQrCodeParams(params)
    setScanned(true)
    setModalVisible(true)
  }

  const handleClose = () => {
    setQrCodeParams(null)
    setScanned(false)
    setModalVisible(false)
  }

  const handleConfirm = () => {
    if (qrCodeParams?.data) {
      void Linking.openURL(qrCodeParams.data).then(() => {
        handleClose()
      })
    }
  }

  if (hasPermission === null || hasPermission === false) {
    return (
      <View tw="flex-1 justify-center items-center">
        <Text tw="text-center font-bold text-lg dark:color-white">
          No access to camera
        </Text>
        <Pressable onPress={() => void Linking.openSettings()}>
          <Text tw="dark:color-white">
            Enable camera in <Text tw="underline">settings</Text>
          </Text>
        </Pressable>
      </View>
    )
  }

  return (
    <View tw="flex w-full h-full relative p-5">
      <View tw="relative w-full h-full rounded-2xl overflow-hidden">
        <BarCodeScanner
          onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
          style={StyleSheet.absoluteFillObject}
        />
        <Modal
          visible={modalVisible}
          setModalVisibleCallBack={(visible: boolean) =>
            setModalVisible(visible)
          }
          content={
            <View tw="flex-auto justify-center items-center">
              <View tw="block w-3/4 max-w-sm p-6 bg-white border-gray-200 rounded-lg shadow-md dark:bg-gray-900 dark:border-black border">
                {qrCodeParams?.data ? (
                  <Text tw="text-center text-xl pb-4 dark:color-white">
                    Visit: <Text tw="font-bold">{qrCodeParams.data}</Text>?
                  </Text>
                ) : null}
                <View tw="flex flex-row flex-wrap w-full justify-between">
                  <Pressable
                    tw="w-2/5 bg-red-500 hover:bg-red-700 font-bold py-2 px-4 border border-red-700 rounded"
                    onPress={() => handleClose()}>
                    <Text tw="text-center text-white">Cancel</Text>
                  </Pressable>
                  <Pressable
                    tw="w-2/5 bg-green-500 hover:bg-green-700 font-bold py-2 px-4 border border-green-700 rounded"
                    onPress={() => handleConfirm()}>
                    <Text tw="text-center text-white">Confirm</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          }
        />
      </View>
    </View>
  )
}
