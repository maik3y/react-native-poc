import * as React from 'react'
import { Text, View, TextInput, Button } from 'react-native'
import { useForm, Controller } from 'react-hook-form'

const LoginScreen = () => {
  const {
    handleSubmit,
    control,
    formState: { errors }
  } = useForm({
    defaultValues: {
      username: '',
      password: ''
    }
  })
  const onSubmit = (data: unknown) => {
    console.log(data)
  }

  return (
    <View>
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
        name="username"
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
        name="password"
        rules={{ required: true }}
      />

      <View>
        <Button title="Login" onPress={handleSubmit(onSubmit)} />
      </View>
    </View>
  )
}

export default LoginScreen
