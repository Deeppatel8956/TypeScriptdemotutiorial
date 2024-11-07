import React, { useRef, useState } from 'react'

const Movebal = () => {
    const [movieing,setMovieing]=useState({x: 0,y:0})

    const blockref=useRef()

    const moviblock=(dir)=>{
    
        const boundries={
            up:movieing.y<=0,
            left:movieing.x<=0,
            right: moving.x >= blockRef?.current.offsetWidth - 145,
            down: moving.y >= blockRef?.current.clientHeight - 115
        }

if (boundries) {
    return
}

        const updates={
            up:{y:movieing.y-10},
            down:{y:movieing.y-10},
            left:{x:movieing.x-10},
            rifht:{x:movieing.x+10}
        }
        setMovieing((prestate)=>({...movieing,...updates[dir]}))
    }
  return (
    <div>
         <div ref={blockRef}>
            <div>
                <button className="horizontal" onClick={() => moveBlock("up")}>Up</button>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between'}}>
                <button  className="vertical" onClick={() => moveBlock("left")}>Left</button>
                <div className="wrapper">
                    <div 
                        className="block"
                        style={{
                            position: 'absolute',
                            left: moving.x,
                            top: moving.y
                        }}></div>
                </div>
                <button className="vertical" onClick={() => moveBlock("right")}>Right</button>
            </div>
            <div>
                <button className="horizontal" onClick={() => moveBlock("down")}>Down</button>
            </div>        
        </div>
    </div>
  )
}

export default Movebal