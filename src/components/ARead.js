import React from "react";

const ARead = () => {
  return (
    <section id="About" className="py-10 bg-black text-white  ">
      <div className="text-center mt-8">
        <h3 className="px-3 text-xl md:text-2xl font-semibold">
          More detailed information about company's background, history, and
          values
        </h3>
        <p className="text-gray-400 my-3 text:lg"> Information about company</p>
        <div className="flex md:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div className="">
            <div className="text-gray-300 my-3 font-serif ">
              <p className="text-justify leading-8 mx-auto">
                Maryam Education and Training Services (METS) is an educational
                company founded with a mission to promote, establish, run,
                manage and maintain educational institutions, colleges of arts,
                research, sciences, information technology and business
                administration, higher-level schools, academics, technical
                training centers and other such educational institutions to
                promote and advance education in the country. METS believes that
                quality education is essential to the development and progress
                of any society. Our company was established in [ October 2022]
                In the memory of Adv Maryam Ali By Two Young Lawyers Adv Asif
                Ali & Adv Fatima Talpur. Since grown to become a leader in the
                education industry, providing high-quality education and
                training programs that meet the needs of our students and
                clients. At METS, we value innovation, excellence, and
                integrity. We strive to stay up-to-date with the latest trends
                and technologies in education to ensure that our students
                receive the best possible education and training. We are
                committed to providing a safe and inclusive learning environment
                where all students feel welcome and valued. Our company is
                dedicated to promoting education and training opportunities for
                people from all walks of life. We believe that education is a
                fundamental right and that everyone should have access to
                highquality education and training programs. Our commitment to
                excellence and our passion for education have helped us build a
                reputation as a trusted and respected educational company. We
                are committed to continuing our work and expanding our services
                to reach more people and make a positive impact on society.
              </p>
            </div>
          </div>
        </div>
        <div>
          <h3 className="px-7 text-xl md:text-2xl font-semibold mt-5">
            Information about your leadership team and any notable achievements
            or awards
          </h3>
          <p className="text-gray-400 my-3 text:lg px-5">
            {" "}
            A section on your company's vision and goals for the future
          </p>
          <div className="text-gray-300 my-3 font-serif items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto ">
            <p className="text-justify leading-8 mx-auto">
              At Maryam Education and Training Services, we are committed to
              providing high-quality education and training programs to
              individuals and organizations around the world. Our vision is to
              become a leading global provider of educational services,
              recognized for our innovative approach to teaching and our
              commitment to promoting social justice, environmental
              sustainability, and human rights. To achieve this vision, we have
              set the following goals: To expand our range of educational
              institutions and training programs to meet the evolving needs of
              our students and clients. To enhance the quality of our
              educational offerings by investing in the latest technologies and
              teaching methodologies. To foster a culture of innovation and
              collaboration, where our team members can share ideas and work
              together to develop new educational solutions. To promote
              diversity, inclusion, and equity in all aspects of our work, from
              the composition of our team to the design of our programs.To
              engage with our local and global communities to address social and
              environmental challenges and promote positive change We are
              confident that by pursuing these goals, we can continue to grow
              and make a positive impact on the world.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ARead;
