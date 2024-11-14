import { Link } from 'react-router-dom';
import { Carousel, Image } from 'react-bootstrap';
import Loader from './Loader';
import Message from './Message';
import { useGetTopProductsQuery } from '../slices/productApiSlice'

const ProductCarousel = () => {
  const { data: products, isLoading, error } = useGetTopProductsQuery();
  return isLoading ? (
    <Loader />
  ) : error ? (
    <Message variant='danger'>{error?.data?.message || error.error}</Message>
  ) : (
    <Carousel pause='hover' className='bg-dark mb-4'  >
      {products.map((product) => (

         
        <Carousel.Item key={product._id} style={{textAlign:'center'}} >
             
                <Carousel.Caption style={{background:'none', top: '0px',color: '#fff',paddingBottom: '20px', paddingTop: '20px', textAlign: 'center',zIndex: '10',}} >
              <h2 className='text-white' style={{fontSize:'1.4rem', padding:'.5rem 0',}}  >
                {product.name} (${product.price})
              </h2>
            </Carousel.Caption>
          <Link to={`/product/${product._id}`}>
            <Image src={product.image} alt={product.name} style={{width:'30%', margin:'5px',padding:'20px', borderRadius:'50%'}} fluid />
          </Link>
     
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
export default ProductCarousel;