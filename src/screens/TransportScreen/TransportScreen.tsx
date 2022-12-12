import React, { useRef, useState } from 'react'
import { GestureResponderEvent, SafeAreaView } from 'react-native'
import PageTitle from '../../components/PageTitle/PageTitle'
import { useStyled } from '../../hooks/useStyled'

import { Button } from 'react-native'
import { useForm, Controller } from 'react-hook-form'

const TransportForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      noOfUnits: ''
    }
  })
  const { View, TextInput, Text } = useStyled()
  const onSubmit = (data: any) => console.debug(data)

  return (
    <View tw="flex justify-center item-center pt-4">
      <View tw="px-4">
        <Text tw="text-lg">Aantal te verplaatsen units:</Text>
        <Controller
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              tw="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="noOfUnits"
        />
        {errors.noOfUnits && (
          <Text tw="font-bold text-lg text-red-500">required</Text>
        )}
      </View>
      <Button
        title="Bereken transportkosten"
        onPress={handleSubmit(onSubmit)}
      />
    </View>
  )
}

export default function TransportScreen() {
  const { View } = useStyled()

  return (
    <SafeAreaView>
      <View tw="flex flex-start">
        <PageTitle title="Transport" />
        <TransportForm />
      </View>
    </SafeAreaView>
  )
}
