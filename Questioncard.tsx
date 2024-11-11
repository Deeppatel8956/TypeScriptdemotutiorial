import React from 'react'

type Props={
    questionNr:number,
    totalQuestion:number,
    question:string,
    answer:string[],
    callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
    userquestion:any;
}
const Questioncard:React.FC<Props> = ({questionNr,question,totalQuestion,answer,callback,userquestion  }) => {
  return (
    <div>Questioncard</div>
  )
}

export default Questioncard