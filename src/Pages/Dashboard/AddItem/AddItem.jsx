import Swal from "sweetalert2";
import useAxiosSecure from "../../../Hooks/useAxiosSecure";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddItem = () => {
    const [axiosSecure] = useAxiosSecure();
    const { register, handleSubmit} = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`
    const onSubmit = data => {
        const formData = new FormData();
        formData.append("image", data.image[0]);
        fetch(img_hosting_url, {
            method: 'POST',
            body: formData
        })
            .then(response => response.json())
            .then(imgResponse => {
                if(imgResponse.success){
                    const imgURL = imgResponse.data.display_url;
                    const {name, price, category, recipe} = data;
                    const newItem = {name, price: parseFloat(price), category, recipe, image:imgURL}
                    console.log(newItem)
                    axiosSecure.post('/menu', newItem)
                    .then(data => {
                        console.log('after posting new menu item', data.data)
                        if(data.data.insertedId){
                            Swal.fire({
                                position: 'center',
                                icon: 'success',
                                title: 'Menu item successfully added',
                                showConfirmButton: false,
                                timer: 1500
                              })
                        }
                    })
                }
            })
    };
    return (
        <div className="w-full px-10">
            <SectionTitle subHeading="What's new" heading="Add an Item"></SectionTitle>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Name</span>
                    </label>
                    <input type="text" placeholder="Recipe Name"
                    {...register("name", {required: true, maxLength: 1200})}
                    className="input input-bordered w-full " />

                </div>
                <div className="flex my-4">
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text">Category*</span>

                    </label>
                    <select defaultValue="Pick One" {...register("category", { required: true })}
                     className="select select-bordered">
                        <option disabled>Pick one</option>
                        <option>Pizza</option>
                        <option>Soup</option>
                        <option>Salad</option>
                        <option>Dessert</option>
                        <option>Drinks</option> 
                        <option>Desi</option> 
                    </select>
                    <label className="label">
                        <span className="label-text-alt">Alt label</span>
                        <span className="label-text-alt">Alt label</span>
                    </label>
                </div>
                <div className="form-control w-full ml-4">
                    <label className="label">
                        <span className="label-text font-semibold">Price*</span>
                    </label>
                    <input type="number" {...register("price", { required: true })}
                     placeholder="price" className="input input-bordered w-full " />
                </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Recipe Details</span>
                    </label>
                    <textarea {...register("recipe", { required: true })} className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="label-text">Item Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full " />
                </div>
                <input className="btn btn-sm my-4" type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;