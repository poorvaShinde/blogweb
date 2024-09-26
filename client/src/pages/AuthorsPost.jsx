//here we used rafce instead of rafc to get export deafualt as well
import React, { useState } from 'react'
import { DUMMY_POSTS } from '../data'
import PostItem from '../Components/PostItem'

const AuthorsPost = () => {

  const [posts,setPosts] = useState(DUMMY_POSTS)

  return (
    <section className='posts'>
    {posts.length > 0 ?  <div className='container posts__container'>
        {
            posts.map(
                ({id,thumbnail,category,title,desc,authorID})=>
                <PostItem key={id} postID={id} thumbnail={thumbnail} category={category} title={title} description={desc} authorID={authorID} />
                )
        }
    </div> : <h2 className='center'>No Posts Found</h2>} 
</section>
  )
}

export default AuthorsPost