import React from 'react'
import { useParams } from 'react-router-dom'

export default function Contact() {

  const param = useParams()
  console.log(param)
  return (
      <h1>contact us</h1>
  )
}
