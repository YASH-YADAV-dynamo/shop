import Header from "../components/Header";
import Footer from "../components/Footer";

const About = () => {
  return (
    <>
      <Header />
      <main className="container mb-4 pb-4">
        <h1 className="py-3">About</h1>
        <p>This is a Shopie Application built with React and React Router.</p>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.
        </p>

        <div className="row my-4">
          <div className="col-md-4">
            <img src="https://placehold.co/300x200" alt="About Us Image 1" />
          </div>

          <div className="col-md-4">
            <img src="https://placehold.co/300x200" alt="About Us Image 2" />
          </div>

          <div className="col-md-4">
            <img src="https://placehold.co/300x200" alt="About Us Image 3" />
          </div>
        </div>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus
          elit a odio consequat, nec ullamcorper est vehicula. Nunc lacinia
          tortor ex, at varius mi euismod sit amet. Donec felis neque, commodo
          id dolor sit amet, luctus sollicitudin augue. In interdum ultricies
          finibus. Sed commodo, justo sit amet dapibus placerat, elit turpis
          porta erat, in ultrices massa odio molestie metus. Vestibulum eget
          turpis quis leo fringilla mollis a eu sem. Ut nec semper libero. Donec
          felis neque, commodo id dolor sit amet, luctus sollicitudin augue.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus
          elit a odio consequat, nec ullamcorper est vehicula. Nunc lacinia
          tortor ex, at varius mi euismod sit amet. Donec felis neque, commodo
          id dolor sit amet, luctus sollicitudin augue. In interdum ultricies
          finibus. Sed commodo, justo sit amet dapibus placerat, elit turpis
          porta erat, in ultrices massa odio molestie metus. Vestibulum eget
          turpis quis leo fringilla mollis a eu sem. Ut nec semper libero. Donec
          felis neque, commodo id dolor sit amet, luctus sollicitudin augue.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc finibus
          elit a odio consequat, nec ullamcorper est vehicula. Nunc lacinia
          tortor ex, at varius mi euismod sit amet. Donec felis neque, commodo
          id dolor sit amet, luctus sollicitudin augue. In interdum ultricies
          finibus. Sed commodo, justo sit amet dapibus placerat, elit turpis
          porta erat, in ultrices massa odio molestie metus. Vestibulum eget
          turpis quis leo fringilla mollis a eu sem. Ut nec semper libero. Donec
          felis neque, commodo id dolor sit amet, luctus sollicitudin augue.
        </p>
      </main>
      <Footer />
    </>
  );
};

export default About;
