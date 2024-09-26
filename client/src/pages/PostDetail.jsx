import React from 'react'
import {Link} from 'react-router-dom'
import PostAuthor from '../Components/PostAuthor'
import Thumbnail from '../images/blog22.jpg'

const PostDetail = () => {
  return (
    <section className="post-detail">
      <div className='container post-detail__container'>
        <div className="post-detail__header">
          <PostAuthor/>
          <div className="post-detail__buttons">
            <Link to={'/posts/werwer/edit'} className='btn sm primary'>Edit</Link>
            <Link to={'/posts/werwer/delete'} className='btn sm danger'>Delete</Link>
          </div>
        </div>
        <h1>This is the post title</h1>
        <div className="post-detail__thumbnail">
          <img src={Thumbnail} alt=""/>
        </div>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi eius perferendis itaque facilis ratione corporis repellat, nostrum tenetur officia laboriosam quos asperiores aut assumenda illum quod quibusdam earum minus consequuntur vel. Maxime aut dolor itaque voluptates sit et distinctio minus.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, quam commodi laborum suscipit aliquid reiciendis quo nulla blanditiis non. Pariatur quisquam officiis blanditiis aspernatur ratione reprehenderit quasi enim modi facilis eius impedit, earum sint tempora accusantium magni sequi libero. Sed esse officia, porro debitis atque, repellat veritatis dignissimos deserunt magnam reprehenderit quae optio laboriosam! Minus?
        </p>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, nulla ipsa nobis iste fugiat sapiente eligendi odit. Ad laudantium et perferendis error deserunt beatae pariatur facere dolorum voluptatibus ut. Deleniti vero numquam sapiente quae necessitatibus iusto repellat excepturi possimus cum. Ducimus quasi autem soluta eos quo assumenda rem natus provident, aut quam unde similique nesciunt! Placeat corporis earum consectetur possimus optio minima. Pariatur natus doloribus odit? Earum sunt eum neque, sed nisi amet nesciunt, nam consectetur quis voluptate unde ipsa ullam possimus. Sapiente maiores laudantium fugiat natus ducimus minus exercitationem aliquid! Possimus, ea minus neque praesentium doloribus ad voluptates amet repudiandae atque debitis, fugit totam suscipit dolorum laudantium similique dolore! Nobis cumque labore in quod quibusdam assumenda accusamus, rerum laboriosam et eos officiis praesentium dolores eveniet debitis, eius inventore nostrum adipisci. Iste nostrum, nulla reiciendis totam quidem, eum sunt repudiandae consequatur magnam et asperiores. Neque ab blanditiis aspernatur id labore quasi tenetur molestiae dolorum, quos temporibus eius cupiditate voluptatibus, deserunt perferendis, debitis earum nesciunt! Animi commodi, explicabo quam eligendi, cupiditate nemo odit in culpa itaque ducimus accusantium aliquam laudantium distinctio? Nostrum, sit dicta! Modi ipsum, soluta, ullam reiciendis dolorum eos porro optio eum deleniti minima perspiciatis aut facilis asperiores magni.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto vero voluptatem doloribus quo reprehenderit assumenda, quidem praesentium corrupti non nesciunt consequuntur laudantium recusandae maiores, facilis nisi. Nihil dolores modi facere nobis expedita nostrum maxime aperiam fugit soluta, et laudantium labore ea quod earum corrupti deserunt unde ipsa doloribus veniam nemo vel neque autem ullam incidunt! Odit nulla facere consectetur, perspiciatis ab laboriosam accusamus placeat asperiores sapiente sit nesciunt, accusantium ea vitae incidunt porro in necessitatibus dolor, nostrum nam quam reprehenderit deleniti! Saepe temporibus soluta illo incidunt quia velit repellat odit, fugit doloribus mollitia rerum dolor atque optio aspernatur? Esse at magnam, rerum sunt quibusdam veniam, aperiam iure modi iusto natus asperiores.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis modi quos impedit ipsum commodi obcaecati consequatur at tempore velit excepturi nam accusantium, officia debitis, itaque voluptas dolores quisquam! Enim adipisci officiis quod pariatur animi iusto minus totam alias itaque, numquam ex doloribus praesentium odio dolores libero, nostrum nemo repellat reiciendis recusandae, distinctio soluta voluptate magni. Reiciendis voluptates impedit saepe atque necessitatibus. Dolor cumque quis nemo maiores ipsam deleniti possimus ratione debitis iure voluptates dolorum, consectetur molestias voluptatum repudiandae. Repellendus eligendi molestiae facere provident vitae rem commodi totam dolorem nesciunt nam, ratione iste porro inventore, assumenda cum necessitatibus veritatis aliquam ullam dicta quod nobis. Consectetur expedita obcaecati quibusdam error soluta dicta natus eius hic? Dignissimos ratione laborum tenetur possimus. Sequi mollitia magnam quos ex, sunt nostrum ratione impedit molestiae, velit optio illum aspernatur voluptas hic facilis veniam aut consequuntur commodi consectetur? Maxime, autem cum. Explicabo iste earum voluptatum odio ad placeat numquam iusto mollitia eius quod perspiciatis, magnam animi reiciendis at? Enim nisi suscipit dolorum exercitationem ratione repellendus, deserunt distinctio quas, temporibus delectus vero quo perspiciatis sint itaque soluta eum consequatur qui error deleniti, aliquid autem. Delectus, quam nesciunt officiis aspernatur nobis, soluta quisquam incidunt minus nihil earum provident aliquam mollitia?
        </p>
      </div>
    </section>
  )
}

export default PostDetail