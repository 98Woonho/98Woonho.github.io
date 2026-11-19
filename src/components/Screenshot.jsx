/** 스크린샷 한 장. src 가 없으면 "준비 중" 자리표시를 보여준다. */
export default function Screenshot({ image }) {
  const { src, caption, device = "desktop" } = image;
  return (
    <figure className={`shot ${device}`}>
      {src ? (
        <img src={src} alt={caption} loading="lazy" />
      ) : (
        <div className="shot-empty" role="img" aria-label={`${caption} 스크린샷 준비 중`}>
          <span>스크린샷 준비 중</span>
        </div>
      )}
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
