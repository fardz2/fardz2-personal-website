import { Fade } from "./animate/Fade";
import { FormContact } from "./ui/form-contact";

export default function Contact() {
  return (
    <>
      <section className="py-20 " id="contact">
        <div className="relative container mx-auto px-5 md:px-24 ">
          <Fade initial={-10} animate={0} delay={0.7}>
            <h2 className="md:text-5xl text-4xl font-bold ">Contact me</h2>
          </Fade>
          <Fade initial={-10} animate={0} delay={0.8}>
            <div className="mt-10">
              <FormContact />
            </div>
          </Fade>
        </div>
      </section>
    </>
  );
}
