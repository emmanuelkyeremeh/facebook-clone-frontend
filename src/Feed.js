import React,{useState} from 'react'

const Feed = ({name,avatar,ImgUrl,caption}) => {
    const today = new Date()
    const date =  today.getDate() + '-' + (today.getMonth()+1) + '-' + today.getFullYear()
    const [color, setcolor] = useState("black")
    const [like, setlike] = useState("Like")
    const colorChange = () =>{
        setcolor("blue")
        setlike("Liked!")
    }
    
   
    return (
        <div className="feed">
            <div className="feed-top">
                <div className="left">
                <img style={{width:"40px",height:"40px",borderRadius:"50%"}} src={`${avatar}`} alt=""/>
                 <p>{name} <br/><span className="date">{date}</span></p>
                </div>
                <div className="right">
                     <i class="fas fa-ellipsis-v"></i>
                </div>
            </div>
            <div className="feed-text">
                {caption}
            </div>
            <div className="feed-img">
                <img style={{width:"100%",height:"100%"}} src={`${ImgUrl}`} alt=""/>
            </div>
            <div className="feed-bottom">
                <div style={{cursor:"pointer"}} className="like" onClick={colorChange}>
                <i style={{color:color}} class="far fa-thumbs-up"></i> 
                <p style={{color:color}}>{like}</p>
                </div>
                <div className="comment">
                <i class="far fa-comment-alt"></i>
                <p>Comment</p>
                </div>
                <div className="share">
                <i class="far fa-share-square"></i>
                <p>Share</p>
                </div>
            </div>
        </div>
    )
}

export default Feed
