/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import * as React from 'react'
import { Text, View, StyleSheet, TextInput, Button, Alert } from 'react-native'
import { useForm, Controller } from 'react-hook-form'
import Constants from 'expo-constants'

const LoginScreen = () => {
  const {
    handleSubmit,
    control,
    reset,
    formState: { errors }
  } = useForm({
    defaultValues: {
      firstName: '',
      lastName: ''
    }
  })
  const onSubmit = (data: any) => {
    console.log(data)
  }

  return (
    <View tw="flex-1">
      <Text>First name</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="firstName"
        rules={{ required: true }}
      />
      <Text>Last name</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="lastName"
        rules={{ required: true }}
      />

      <View>
        <Button title="Login" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  )
}

export default LoginScreen
