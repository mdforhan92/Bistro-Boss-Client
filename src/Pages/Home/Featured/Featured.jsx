import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import feature from '../../../assets/home/featured.jpg'
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed text-white pt-8 my-20">
            <SectionTitle
            subHeading="Check it out"
            heading="Featured Items"
            ></SectionTitle>
            <div className="md:flex justify-center items-center py-20 px-36 pt-12">
            <div>
                <img src={feature} alt="" />
            </div>
            <div className="md:ml-10">
                <p>Aug 20, 2023</p>
                <p className="uppercase">Where can i get some?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, sequi. Voluptates esse alias debitis cupiditate. Voluptatibus, aut consequatur! Nisi beatae, doloribus optio delectus, laudantium quisquam expedita quaerat sint nemo perferendis aperiam praesentium vel cupiditate sequi amet, ut ea nesciunt! Similique, voluptates ducimus necessitatibus modi libero veniam fugiat architecto dolore ea.</p>
                <button className="btn btn-outline border-0 border-b-4 mt-4 text-white">Order Now</button>
            </div>
            </div>
        </div>
    );
};

export default Featured;