import React from 'react'
import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useParams, useNavigate } from 'react-router-dom'


const SearchBox = () => {
    
    const navigate = useNavigate();
    const { keyword: urlkeyword } = useParams();
    const [keyword, setKeyword] = useState(urlkeyword || '')
  
    const submitHandler = (e) => {
        e.preventDefault();
        if(keyword.trim()){
            setKeyword('')
            navigate(`/search/${keyword}`)
        }else{
            navigate('/')
        }
    }

    return (
        <Form onSubmit={submitHandler} className='d-flex' >
            <Form.Control type='text' name='q' onChange={(e) => setKeyword(e.target.value)} 
            className='mr-sm-2 ml-sm-5' value={keyword} placeholder='Search Product'></Form.Control>
            <Button type='submit' variant='outline-success' className='p-2 mx-2'>Search</Button>
        </Form>
    )
}

export default SearchBox