import { nanoid } from 'nanoid'
import React, { useState } from 'react'
import { AddCategory } from './components/AddCategory'

import './styles.css'

const GifExpertApp = () => {
  const [categories, setCategories] = useState([])

  const onAddCategory = newCategory => {
    if (categories.includes(newCategory)) return

    setCategories([newCategory, ...categories])
  }

  return (
    <>
      <h2>GifExpertApp</h2>

      <AddCategory
        onNewCategory={event => {
          onAddCategory(event)
        }}
      />

      <ol>
        {categories.map(category => {
          const key = nanoid()
          console.log(key)
          return <li key={key}>{category}</li>
        })}
      </ol>
    </>
  )
}

export default GifExpertApp
