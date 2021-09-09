import { comments,CommentType } from "../data/comments"

export const Justre =(replies : CommentType[]) => {
    return(replies.map(s => 
      <div className="flex p-2 items-start space-x-2 pl-14">
      <img className="w-10 w-10 rounded-full" src={s.userImagePath}></img>
      <div className="bg-gray-500 rounded-lg p-2">
        <p className="font-semibold text-white">{s.username}</p>
        <p className='text-white'>{s.commentText}</p>
        {s.likeNum>0 ?
         <div className='flex items-center'>
         <img className='w-4 h-4 mr-1' src='/like.svg'></img>
         <p className='text-gray-300'>{s.likeNum}</p>
       </div>:null}
      </div>
    </div>

      ))

  }
  
