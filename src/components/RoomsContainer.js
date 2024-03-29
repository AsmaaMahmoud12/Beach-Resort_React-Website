import React from 'react'
import RoomsList from './RoomsList'
import RoomsFilter from './RoomsFilter'
import { withRoomConsumer } from '../Context'
import Loading from './Loading'

function RoomsContainer({context}){
    const { loading, sortedRooms, rooms} = context

    if(loading) {
        return <Loading />
    }
    return (
        <>
            <RoomsFilter rooms={rooms}/>
            <RoomsList rooms={sortedRooms} />
        </>
    )
}

export default withRoomConsumer(RoomsContainer)

// import React from 'react'
// import RoomsList from './RoomsList'
// import RoomsFilter from './RoomsFilter'
// import { RoomConsumer } from '../Context'
// import Loading from './Loading'

// const RoomsContainer = () => {
//     return (
//         <RoomConsumer>
//             {
//                 (value) => {
//                     const { loading, sortedRooms, rooms} = value
//                     if(loading) {
//                         return <Loading />
//                     }
//                     return (
//                         <div>
//                             <RoomsFilter rooms={rooms}/>
//                             <RoomsList rooms={sortedRooms} />
//                         </div>
//                     )
//                 }
//             }
//         </RoomConsumer>
//     )
// }

// export default RoomsContainer