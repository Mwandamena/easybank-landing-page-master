import { blogs } from "../../constants/constants";
import Container from "../Common/Container";
import Motion from "../Common/Motion";
import Card from "./Card";

const Blog = () => {
  return (
    <section className="w-full relative bg-[--very-light-gray] py-24">
      <Container>
        <div className="py-10">
          <div className="text-center md:text-start">
            <h2 className="text-[var(--dark-blue)] font-medium text-[28px] md:text-[36px]">
              Latest Articles
            </h2>
          </div>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {blogs.map((blog, index) => (
              <Motion del={0.3} i={index} key={blog.id}>
                <Card {...blog} key={blog.id} />
              </Motion>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Blog;
