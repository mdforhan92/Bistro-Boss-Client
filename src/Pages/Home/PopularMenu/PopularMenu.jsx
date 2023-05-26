import SectionTitle from '../../../components/SectionTitle/SectionTitle';
import MenuItem from '../../../Shared/MenuItem/MenuItem';
import useMenu from '../../../Hooks/useMwnu';

const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular');
   

    return (
        <section className='mb-12'>
            <SectionTitle
            subHeading="From Our Menu"
            heading="Popular Items"
            ></SectionTitle>
            <div className='grid md:grid-cols-2 gap-10'>
                {
                    popular.map(item => <MenuItem
                    key={item._id}
                    item={item}
                    ></MenuItem>)
                }
            </div>
            <button className='btn btn-outline bottom-0 border-b-4 mt-4 text-center'>View Full Menu</button>
        </section>
    );
};

export default PopularMenu;