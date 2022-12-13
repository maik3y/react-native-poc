import React, { useState } from 'react'
import { Button } from 'react-native'
import { useForm, Controller } from 'react-hook-form'

import { useStyled } from '../../../../hooks/useStyled'

const TransportForm = () => {
  const [result, setResult] = useState<unknown>('')
  const { View, TextInput, Text } = useStyled()
  const {
    control,
    reset,
    handleSubmit,
    formState: { isDirty, errors }
  } = useForm({
    defaultValues: {
      aantalUnits: ''
    }
  })

  return (
    <View tw="flex justify-center item-center pt-4">
      <View tw="px-4">
        <Text tw="text-lg dark:color-white">Aantal te verplaatsen units:</Text>
        <Controller
          name="aantalUnits"
          control={control}
          rules={{
            required: true
          }}
          render={({ field: { onChange, onBlur, value } }) => (
            <TextInput
              tw={`relative bg-gray-50 border text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 ${
                errors.aantalUnits
                  ? 'border-red-500'
                  : 'border-gray-300 dark:border-gray-600 dark:placeholder-gray-400'
              }`}
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
        />
        <Button
          title="Bereken transportkosten"
          disabled={!isDirty}
          onPress={handleSubmit((data) => {
            reset()
            setResult(data)
          })}
        />
      </View>
      {result ? (
        <View tw="p-4 mt-2">
          <Text>{JSON.stringify(result)}</Text>
        </View>
      ) : null}
    </View>
  )
}
export default TransportForm
