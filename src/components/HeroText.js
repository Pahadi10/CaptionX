export default function HeroText({
    h1Text ='Heading',
    h2Text = 'Subheading',
}){

    return (
        <section className="text-center mt-12 sm:mt-24 mb-4 sm:mb-8">
        <h1
          className="text-xl sm:text-3xl"
          style={{ textShadow: "2px 2px 0 rgba(0, 0, 0, .2" }}
        >
          {h1Text}
        </h1>
        <h2 className="text-white/70 text-sm sm:text-base">
            {h2Text}
        </h2>
      </section>
    );
}