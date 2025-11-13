function About() {
  return (
    <>
      <section 
        className="page-hero" 
        style={{ 
          backgroundImage: 'url(/images/abou.jpg), linear-gradient(135deg, #e9f1ff, #ffffff)'
        }}
      >
        <div className="hero-overlay"></div>
        <div className="container">
          <h1>회사 소개</h1>
          <p className="sub">고객과의 신뢰<br />최선을 다하겠습니다.</p>
        </div>
      </section>

      <section className="about-content">
        <div className="container">
          <h2>우리는 이렇게 일합니다</h2>
          <p>
            EST Clean은 가정과 사무 공간의 위생과 편안함을 최우선 가치로 삼습니다.
            표준화된 프로세스와 숙련된 전문가들이 안전하고 효율적인 청소 서비스를 제공합니다.
          </p>
          <p>
            친환경 자재 사용, 합리적인 가격, 책임 있는 A/S를 통해
            고객 여러분께 믿을 수 있는 서비스를 약속드립니다.
          </p>
        </div>
      </section>
    </>
  )
}

export default About

