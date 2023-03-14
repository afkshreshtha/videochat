import React from 'react'
import { useParams } from 'react-router-dom'
import { ZegoUIKitPrebuilt } from '@zegocloud/zego-uikit-prebuilt'
import { ZegoSuperBoardManager } from "zego-superboard-web";


const Room = () => {
  const { roomID } = useParams()
  console.log(roomID)
  const meeting = async (element) => {
    const appID =1042960299
    const serverSecret = import.meta.env.VITE_APP_SERVER_SECRET
    const kitToken = ZegoUIKitPrebuilt.generateKitTokenForTest(
      appID,
      serverSecret,
      roomID,
      Date.now().toString(),
      'Enter your name',
    )
    // Create instance object from Kit Token.
    const zp = ZegoUIKitPrebuilt.create(kitToken)
    zp.addPlugins({ZegoSuperBoardManager});
    // start the call
    zp.joinRoom({
      container: element,
      sharedLinks: [
        {
          url:
            window.location.origin +
            window.location.pathname +
            '?roomID=' +
            roomID,
        },
      ],
      scenario: {
        mode: ZegoUIKitPrebuilt.GroupCall, // To implement 1-on-1 calls, modify the parameter here to [ZegoUIKitPrebuilt.OneONoneCall].
      },
      whiteboardConfig: {            
        showAddImageButton: true, 
     },
      videoResolutionList: [
        ZegoUIKitPrebuilt.VideoResolution_360P,
        ZegoUIKitPrebuilt.VideoResolution_180P,
        ZegoUIKitPrebuilt.VideoResolution_480P,
        ZegoUIKitPrebuilt.VideoResolution_720P,
      ],
      videoResolutionDefault: ZegoUIKitPrebuilt.VideoResolution_720P, 
    })
  }

  return <div ref={meeting} style={{ width: '100vw', height: '100vh'  }}></div>
}
export default Room
