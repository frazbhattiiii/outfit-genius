import Section1 from "../components/hero/Section1"
import Section2 from "../components/hero/Section2"
import Hero from "../components/hero/hero"

const Home = () => {
  return (
    <>
    <div className="main-container">
      <Hero/>
    </div>
    <div>
      <Section1/>
      <Section2/>
    </div>
    </>

  )
}

export default Home
