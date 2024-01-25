const About = () => {
  return (
    <div>
      <h1 className="text-4xl text-center font-semibold mb-2">About Us</h1>
      <hr />
      <p className="p-2 text-center tracking-wider">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum facere
        doloremque veritatis odit similique sequi. Odit amet fuga nam quam quasi
        facilis sed doloremque saepe sint perspiciatis explicabo totam vero quas
        provident ipsam, veritatis nostrum velit quos recusandae est mollitia
        esse fugit dolore laudantium. Ex vel explicabo earum unde eligendi autem
        praesentium, doloremque distinctio nesciunt porro tempore quis eaque
        labore voluptatibus ea necessitatibus exercitationem tempora molestias.
        Ad consequuntur veniam sequi ullam tempore vel tenetur soluta dolore
        sunt maxime aliquam corporis est, quo saepe dolorem optio minus sint
        nemo totam dolorum! Reprehenderit delectus expedita a alias nam
        recusandae illo debitis repellat libero, quasi explicabo molestiae
        saepe, dolorem tempore itaque eveniet quam dignissimos blanditiis
        excepturi harum numquam vel nihil? Ipsum
      </p>

      <div className="p-2 my-5">
        <h1 className="text-center font-semibold text-3xl my-6">
          Our Products
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="card h-[100] bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://images.pexels.com/photos/298863/pexels-photo-298863.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Shoes"
              />
            </figure>
            <div className="card-body text-center items-center">
              <h2 className="card-title ">Men's Clothing</h2>
            </div>
          </div>
          <div className="card h-[100] bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://images.pexels.com/photos/7679720/pexels-photo-7679720.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Shoes"
              />
            </figure>
            <div className="card-body text-center items-center">
              <h2 className="card-title ">Women's Clothing</h2>
            </div>
          </div>
          <div className="card h-[100] bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://images.pexels.com/photos/1927259/pexels-photo-1927259.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Shoes"
              />
            </figure>
            <div className="card-body text-center items-center">
              <h2 className="card-title ">Jewelery</h2>
            </div>
          </div>
          <div className="card h-[100] bg-base-100 shadow-xl">
            <figure>
              <img
                src="https://images.pexels.com/photos/356056/pexels-photo-356056.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Shoes"
              />
            </figure>
            <div className="card-body text-center items-center">
              <h2 className="card-title ">Electronics</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
