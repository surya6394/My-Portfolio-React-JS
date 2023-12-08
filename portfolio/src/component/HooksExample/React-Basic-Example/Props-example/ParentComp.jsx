import React from 'react'
import ChildComp from './ChildComp';

const ParentComp = () => {

    const dataFromParent = "Welcome to React";

  return (
    <>
    <div>ParentComp</div>
    <ChildComp data={dataFromParent} />
    </>
  )
}

export default ParentComp