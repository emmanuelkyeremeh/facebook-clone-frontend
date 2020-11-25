import React,{useState,useEffect} from 'react'
import Feed from './Feed'
import pic from "./Images/pic.jpg"
import axios from "axios"
import Modal from 'react-awesome-modal';
import 'reactjs-popup/dist/index.css';


const Posts = () => {
    const [visible, setvisible] = useState(false)
    const [avatar, setavatar] = useState('')
    const [name, setname] = useState('')
    const [ImgUrl, setImgUrl] = useState('')
    const [caption,setCaption]= useState('')
    const [posts,setPosts] = useState()

    useEffect(()=>{
      axios.get('https://facebook-backend-clone-1.herokuapp.com/posts/')
      .then(response => setPosts(response.data))
      .catch(err => console.log(err))
    },[])

    const HandleAvatar = (event) =>{
        setavatar(event.target.value)
    }
    const HandleName = (event) =>{
        setname(event.target.value)
    }
    const HandleImgUrl = (event) =>{
        setImgUrl(event.target.value)
    }
    const HandleCaption = (event) => {
        setCaption(event.target.value)
    }
    const OpenModal = () =>{
    setvisible(true)
    }
    const closeModal = () => {
        setvisible(false)
    }
    const HandleSubmit = (event) =>{
      event.preventDefault()
      const Posts = {
          name: name,
          avatar:avatar,
          ImgUrl: ImgUrl,
          caption: caption
      }
      axios.post('https://facebook-backend-clone-1.herokuapp.com/posts/create',Posts)
      .then(res => console.log(res.data))
      window.location = '/'
    }
    return (
        <div className="post-container">   
            <div className="post-block">
                <div className="post-block-inner">
                    <img style={{width:"40px",height:"40px",borderRadius:"50%"}} src={pic} alt=""/> 
                    <input onClick= {OpenModal}  className="post-input" placeholder="What's on your mind?" type="text" name="" id=""/>
                </div>     
                <div className="post-tray">
                <i style={{color:"red"}} class="fas fa-video"></i> <p>Live video</p>
                <i style={{color:"green"}} class="fas fa-images"></i> <p>Photo/Video</p>
                <i  style={{color:"yellow"}} class="far fa-smile-beam"></i> <p>Feeling/Activity</p>
                </div>
            </div>   
            {posts && posts.map((post)=>(
                <Feed
                name = {post.name}
                avatar = {post.avatar}
                ImgUrl = {post.ImgUrl}
                caption = {post.caption}
                />
            ))}
            <section>
                
               
                <Modal visible={visible} width="600" height="450" effect="fadeInUp" onClickAway={closeModal}>
                    <div style={{padding:"1rem"}}>
                    <a style={{float:"right",fontSize:"1.5rem",color:"black"}} href="javascript:void(0);" onClick={closeModal}><i class="far fa-times-circle"></i></a>

                        <h2 style={{textAlign:"center"}}>Create Post</h2>
                        <br/>
                        <hr/>
                        <div>
                            <form onSubmit={HandleSubmit}>
                                <div>
                                    <label>Name</label>
                                    <input type="text" value={name} onChange={HandleName}/>
                                </div>
                                <div>
                                    <label>Link to Avatar (Profile Picture)</label>
                                    <input type="text" value={avatar} onChange={HandleAvatar}/>
                                </div>
                                <div>
                                    <label>Link to Image</label>
                                    <input type="text" value={ImgUrl} onChange={HandleImgUrl}/>
                                </div>
                                <div>
                                    <label>Caption</label>
                                    <input type="text" value={caption} onChange={HandleCaption}/>
                                </div>
                                <input className="submit"  type="submit" value="Submit"/>
                            </form>
                        </div>
                    </div>
                </Modal>
            </section>
        </div>     
    )
}

export default Posts
