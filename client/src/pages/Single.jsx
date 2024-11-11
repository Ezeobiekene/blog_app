import React from 'react'
import Edit from '../img/edit.png'
import Menu from '../components/Menu'
import Delete from '../img/delete.png'
import { Link } from 'react-router-dom'

const Single = () => {
  return (
    <div className='single'>
      <div className="content">
        <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
        <div className="user">
          <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <div className="info">
            <span>John</span>
            <p>Posted 2 days ago</p>
          </div>
          <div className="edit">
            <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
            </Link>
            
            <img src={Delete} alt="" />
          </div>
        </div>
        <h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Magnam, repellat quasi .</h1>
        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati distinctio totam repellat odio quisquam culpa recusandae vero accusantium voluptatibus, soluta deleniti nihil eum dolorum laudantium aut, veniam possimus? Delectus necessitatibus, similique provident tempore, error aspernatur veniam quam incidunt aut, reiciendis saepe excepturi cum sunt sapiente. Exercitationem repudiandae asperiores fugiat optio, voluptatibus, fuga, expedita aliquid accusamus necessitatibus obcaecati illum quaerat minus at incidunt voluptate esse in? In doloremque nemo sit suscipit pariatur optio dicta eaque officiis natus laborum quos quia ratione, magnam facilis tenetur error est quasi id ipsum, beatae minima ducimus? Iusto reprehenderit, est temporibus ea tenetur commodi ducimus odio vitae, quae quia, quasi nostrum. Ea dolore perferendis molestias nostrum assumenda quas. Repudiandae soluta magnam unde rerum eos quaerat dolorum? Quidem debitis aliquam sint animi vero ducimus, placeat natus dignissimos ipsum quibusdam, nobis explicabo asperiores necessitatibus! Quae laboriosam nesciunt molestias cupiditate officia tempora libero, voluptate non consequatur quis cum, hic eius aspernatur amet dolore accusamus quos minus laudantium, excepturi quidem neque mollitia cumque consectetur praesentium. Ex maiores, mollitia soluta aut incidunt nemo provident cumque eligendi rem, perferendis aliquam voluptatum ducimus ab officia quia aperiam debitis pariatur, quos nihil officiis! Autem recusandae, repellendus pariatur quae est tempora quidem reprehenderit quos numquam neque quibusdam, architecto nesciunt, dolorem voluptatibus nostrum fugiat eveniet vero dolor illum? Natus cupiditate quos rem, mollitia amet nemo sint sed nostrum sunt explicabo exercitationem expedita soluta in dignissimos sit! Perspiciatis ullam facilis necessitatibus odio voluptatum tempore sapiente similique perferendis minus eos quaerat, provident tempora ducimus atque maxime maiores in nostrum repudiandae assumenda natus tenetur amet. Eaque velit dicta repellendus nemo fuga? Maiores obcaecati, quas excepturi explicabo, ex atque animi totam ducimus vitae nam fugiat nobis mollitia! Aut quod odio earum eos, tempora repellat dicta consequuntur dignissimos perferendis, voluptatum reiciendis esse quos minus delectus laborum exercitationem modi inventore aliquid sint error, unde cum ea? Quidem magni enim neque at maxime sapiente ratione distinctio in voluptas, accusamus nobis beatae provident vero. Cum molestiae optio iste laborum tempora nulla ex repellat, totam voluptates corporis expedita maiores accusantium doloribus in minima. Eius rem nostrum explicabo culpa eaque voluptates aperiam repudiandae tempore incidunt nisi nulla aliquid molestias autem, nemo numquam, ipsam vel voluptate laboriosam earum hic! Temporibus animi ratione culpa quo commodi? Saepe cumque, minus eos voluptatum asperiores numquam. Incidunt corrupti dignissimos harum eum optio? Ullam eius excepturi minima exercitationem? Nemo exercitationem cupiditate ducimus accusantium odit illum placeat nostrum sequi rerum. Eum ducimus maiores possimus quas delectus ipsam veniam nisi voluptatibus amet non sed aut voluptate accusantium eligendi, soluta corporis ab magnam officia rerum atque et reiciendis eveniet unde. Ad earum pariatur molestias at veritatis quae ex nostrum nisi illum perspiciatis nesciunt maxime odio ipsam eligendi, corrupti, necessitatibus maiores sed provident eveniet voluptas repudiandae expedita dolore. Provident magnam odit ab eum. Laborum earum autem quidem dolore itaque accusantium distinctio pariatur asperiores laudantium. Sapiente facilis quisquam aperiam voluptatum sit adipisci numquam esse labore, sequi eius quam, omnis laudantium quis harum. Voluptatum, voluptatibus deleniti. Sed voluptate fuga repellat magni, consequatur sunt aut quidem pariatur expedita laudantium!</p>
      </div>
      <Menu />
    </div>
  )
}

export default Single