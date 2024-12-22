import Header from "../module/header/Header"
import Call from "../module/call/Call"
import About from "../module/about/About"
import Quotation from "../module/quotation/Quotation"
import Advantage from "../module/advantage/Advantage"
import We from "../module/we/We"
import Form from "../module/form/Form"
import New from "../module/new/New"
import Footer from "../module/footer/Footer"

type Props = {}

export default function HomePage({}: Props) {
  return (
    <div className="w-full max-w-[1522px] m-auto">
      <Header />
      <Call />
      <About />
      <Quotation />
      <Advantage />
      <We />
      <Form />
      <New />
      <Footer />
    </div>
  )
}