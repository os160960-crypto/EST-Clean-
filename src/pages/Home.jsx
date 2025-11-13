import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section className="hero">
        <div className="container">
          <h1>EST Clean에 오신 것을 환영합니다</h1>
          <p>전문 청소 서비스로 깨끗한 환경을 만들어 드립니다.</p>
          <Link to="/services" className="btn">서비스 알아보기</Link>
        </div>
      </section>

      <section className="features">
        <div className="container">
          <div className="feature">
            <img src="/images/service1.png" alt="가정 청소 아이콘" loading="lazy" decoding="async" />
            <h2>가정 청소</h2>
            <p>전문가들이 집안을 꼼꼼히 청소해 드립니다.</p>
          </div>
          <div className="feature">
            <img src="/images/service2.png" alt="사무실 청소 아이콘" loading="lazy" decoding="async" />
            <h2>사무실 청소</h2>
            <p>쾌적한 업무 환경을 위한 맞춤형 청소 서비스.</p>
          </div>
          <div className="feature">
            <img src="/images/service3.png" alt="특수 청소 아이콘" loading="lazy" decoding="async" />
            <h2>특수 청소</h2>
            <p>이사 전후, 대청소 등 다양한 특수 청소 서비스 제공.</p>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home

