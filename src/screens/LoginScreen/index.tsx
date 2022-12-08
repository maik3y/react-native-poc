import * as LocalAuthentication from 'expo-local-authentication'
import * as React from 'react'
import { useStyled } from '../../hooks/useStyled'

enum EResult {
  CANCELLED = 'CANCELLED',
  DISABLED = 'DISABLED',
  ERROR = 'ERROR',
  SUCCESS = 'SUCCESS'
}

export default function LoginScreen() {
  const { View, Text, Pressable } = useStyled()
  const [facialRecognitionAvailable, setFacialRecognitionAvailable] =
    React.useState(false)
  const [fingerprintAvailable, setFingerprintAvailable] = React.useState(false)
  const [irisAvailable, setIrisAvailable] = React.useState(false)
  const [loading, setLoading] = React.useState(false)
  const [result, setResult] = React.useState<EResult>()

  const checkSupportedAuthentication = async () => {
    const types = await LocalAuthentication.supportedAuthenticationTypesAsync()
    if (types && types.length) {
      setFacialRecognitionAvailable(
        types.includes(
          LocalAuthentication.AuthenticationType.FACIAL_RECOGNITION
        )
      )
      setFingerprintAvailable(
        types.includes(LocalAuthentication.AuthenticationType.FINGERPRINT)
      )
      setIrisAvailable(
        types.includes(LocalAuthentication.AuthenticationType.IRIS)
      )
    }
  }

  const authenticate = async () => {
    if (loading) {
      return
    }

    setLoading(true)

    try {
      const results = await LocalAuthentication.authenticateAsync()

      if (results.success) {
        setResult(EResult.SUCCESS)
      } else if (results.error === 'unknown') {
        setResult(EResult.DISABLED)
      } else if (
        results.error === 'user_cancel' ||
        results.error === 'system_cancel' ||
        results.error === 'app_cancel'
      ) {
        setResult(EResult.CANCELLED)
      }
    } catch (error) {
      setResult(EResult.ERROR)
    }

    setLoading(false)
  }

  React.useEffect(() => {
    void checkSupportedAuthentication()
  }, [])

  let resultMessage
  switch (result) {
    case EResult.CANCELLED:
      resultMessage = 'Authentication process has been cancelled'
      break
    case EResult.DISABLED:
      resultMessage = 'Biometric authentication has been disabled'
      break
    case EResult.ERROR:
      resultMessage = 'There was an error in authentication'
      break
    case EResult.SUCCESS:
      resultMessage = 'Successfully authenticated'
      break
    default:
      resultMessage = ''
      break
  }

  let description
  if (facialRecognitionAvailable && fingerprintAvailable && irisAvailable) {
    description = 'Authenticate with Face ID, touch ID or iris ID'
  } else if (facialRecognitionAvailable && fingerprintAvailable) {
    description = 'Authenticate with Face ID or touch ID'
  } else if (facialRecognitionAvailable && irisAvailable) {
    description = 'Authenticate with Face ID or iris ID'
  } else if (fingerprintAvailable && irisAvailable) {
    description = 'Authenticate with touch ID or iris ID'
  } else if (facialRecognitionAvailable) {
    description = 'Authenticate with Face ID'
  } else if (fingerprintAvailable) {
    description = 'Authenticate with touch ID '
  } else if (irisAvailable) {
    description = 'Authenticate with iris ID'
  } else {
    description = 'No biometric authentication methods available'
  }

  return (
    <View tw="flex-1 justify-center item-center">
      <Text tw="font-bold text-xl text-center dark:text-white">
        {description}
      </Text>
      {facialRecognitionAvailable || fingerprintAvailable || irisAvailable ? (
        <Pressable onPress={authenticate}>
          <Text tw="text-center mt-5 text-blue-500 text-lg">Authenticate</Text>
        </Pressable>
      ) : null}
      {resultMessage ? (
        <Text tw="text-center mt-24 dark:text-white">{resultMessage}</Text>
      ) : null}
    </View>
  )
}
