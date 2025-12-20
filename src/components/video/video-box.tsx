export default function VideoBox() {
  return (
    <div className="video-box">
      <video className="video-area" loop={true} muted autoPlay playsInline>
        <source src="/video.mp4" type="video/mp4" />
      </video>
    </div>
  );
}
