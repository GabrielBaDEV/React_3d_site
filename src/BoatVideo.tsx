function BoatVideo () {
    return <video 
    className="h-100vh w-full object-cover animate-clip-from-top-animation" 
    autoPlay 
    muted 
    loop
    >
    <source src="public/boat-video.mp4" type="video/mp4"/>
    </video>
}

export default BoatVideo