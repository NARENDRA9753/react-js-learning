import React from "react";
import { useParams } from "react-router-dom";
function User(){
    const {userId} = useParams()
    return (
        <>
          <h1 className="text-3xl sm:text-4xl bg-grey-700 text-white-800 font-extrabold text-center">UserId:{userId}</h1>
        </>
    )
}
export default User;