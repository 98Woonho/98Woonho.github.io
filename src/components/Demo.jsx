/** 녹화된 대화 재생(SVG). LLM을 실행하지 않는다. 누르면 원본 크기로 연다. */
export default function Demo({ demo, compact = false }) {
  return (
    <figure className={`demo ${compact ? "compact" : ""}`}>
      {!compact && (
        <figcaption>
          <h3>{demo.title}</h3>
          <code className="tag">{demo.skill}</code>
          <p>{demo.summary}</p>
        </figcaption>
      )}
      <a href={demo.svg} target="_blank" rel="noopener" title="원본 크기로 보기">
        <img src={demo.svg} alt={`${demo.title} 데모: ${demo.prompt}`} loading="lazy" />
      </a>
    </figure>
  );
}
