import React, { useContext, useEffect, useState } from 'react';

// import Heart from '../../assets/Heart';
import './Post.css';
import { FirebaseContext } from '../../Store/Context';
import { PostContext } from '../../Store/viewContext';
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min';

function Posts() {
  const history = useHistory()
  const [products, setProducts] = useState([  ])
  const {firebase} = useContext(FirebaseContext)
  const {setPostDetails} = useContext(PostContext)
  useEffect(() => {
    firebase.firestore().collection('products').get().then((snapshot)=>{
      const allPost =  snapshot.docs.map((product)=>{
        return{
          ...product.data (),
          id:product.id
        }
      })
      setProducts(allPost)
    })
  })
  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>All Products</span>
        </div>
        <div className="cards">
          { products.map(product=>{
            return(
            <div
              className="card"
              onClick={()=>{
                setPostDetails(product)
                history.push('/view')
              }}
            >
              {/* <div className="favorite">
                <Heart></Heart>
              </div> */}
              <div className="image">
                <img src={product.url} alt="" />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {product.price}</p>
                <span className="kilometer">{product.category}</span>
                <p className="name"> {product.name}</p>
              </div>
              <div className="date">
                <span>{product.createdAt}</span>
              </div>
            </div>
            )
          })
           
          }
        </div>
      </div>
    </div>
  );
}

export default Posts;
