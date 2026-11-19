/** 스크린샷 한 장. src 가 없으면 "준비 중" 자리표시를 보여준다. */
export default function Screenshot({ image }) {
  const { src, caption, device = "desktop" } = image;
  return (
    <figure className={`shot ${device}`}>
      {src ? (
        <a href={src} target="_blank" rel="noopener" title="원본 크기로 보기">
          <img src={src} alt={caption} loading="lazy" />
        </a>
      ) : (
        <div className="shot-empty" role="img" aria-label={`${caption} 스크린샷 준비 중`}>
          <span>스크린샷 준비 중</span>
        </div>
      )}
      <figcaption>{caption}</figcaption>
    </figure>
  );
}
