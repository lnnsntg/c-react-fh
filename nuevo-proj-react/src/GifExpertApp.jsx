import React, { useState } from 'react'
import './styles.css'
import { nanoid } from 'nanoid'

import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'

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

      {categories.map(category => (
        <GifGrid key={nanoid()} category={category} />
      ))}
    </>
  )
}

export default GifExpertApp
