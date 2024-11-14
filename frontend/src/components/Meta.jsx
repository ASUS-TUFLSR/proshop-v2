import React from 'react'
import { Helmet } from 'react-helmet-async'


const Meta = ({ title, description, keywords }) => {
  return (
    <Helmet>
        <title>{title}</title>
        <meta name='description'>{description}</meta>
        <meta name='keywords'>{keywords}</meta>
    </Helmet>
  )
}

Meta.defaultPropd = {
    title:'Welcome to ProShop',
    description:'We sell and provide best products & after sale services',
    keywords:'electronics, buy electronics, cheap electronics',
}

export default Meta