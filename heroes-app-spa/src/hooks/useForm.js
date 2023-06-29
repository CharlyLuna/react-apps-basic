import { useState } from 'react'

export const useForm = (initialValues = {}) => {
  const [formState, setFormState] = useState(initialValues)

  const onInputChange = ({ target }) => {
    const { name, value } = target
    if (value.startsWith(' ')) return

    setFormState({
      ...formState,
      [name]: value
    })
  }

  const onResetForm = () => {
    setFormState(initialValues)
  }

  return {
    ...formState,
    formState,
    onInputChange,
    onResetForm
  }
}
