import { useState, createContext } from "react"
import PropTypes from "prop-types"

export const FormContext = createContext({})

export const FormContextProvider = ({ children }) => {
  const [item, setItem] = useState(null)
  const [title, setTitle] = useState("")
  const [count, setCount] = useState(1)
  const [price, setPrice] = useState(0)
  const [isEditing, setIsEditing] = useState(false)

  const cleanContext = () => {
    setItem(null)
    setTitle("")
    setCount(1)
    setPrice(0)
    setIsEditing(false)
  }

  return (
    <FormContext.Provider
      value={{
        item,
        setItem,
        title,
        setTitle,
        count,
        setCount,
        price,
        setPrice,
        isEditing,
        setIsEditing,
        cleanContext,
      }}
    >
      {children}
    </FormContext.Provider>
  )
}

FormContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
}
