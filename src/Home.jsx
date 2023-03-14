import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const navigate = useNavigate()
  const [RoomCode, setRoomCode] = useState('')

  const submitCode = (e) => {
    e.preventDefault()
    navigate(`/room/${RoomCode}`)
  }
  return (
    <div className="flex flex-row min-h-screen justify-center items-center  bg-red-500">
      <form
        action=""
        onSubmit={submitCode}
        className="flex items-center justify-center flex-col font-medium text-xl"
      >
        <label htmlFor="" className=" text-3xl">
          Enter The Room Code
        </label>
        <input
          className=" bg-blue-500 py-3 my-3 text-white rounded-full text-center"
          type="text"
          required
          placeholder="Enter Room Code"
          value={RoomCode}
          onChange={(e) => setRoomCode(e.target.value)}
        />
        <button
          className="py-2 px-4 font-semibold rounded-lg shadow-md text-white bg-blue-500 hover:bg-blue-700"
          type="submit"
        >
          Enter Room
        </button>
      </form>
    </div>
  )
}

export default Home
