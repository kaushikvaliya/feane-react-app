import React, { useEffect, useRef, useState } from 'react';
import MenuCard from '../Components/MenuCard';
import { Link } from 'react-router-dom';

const MenuSection = () => {
    const gridItems = useRef(null);
    const [filter, setFilter] = useState('*');
    const [isCardVisible, setIsCardVisible] = useState(true);
    const [showMore, setShowMore] = useState(true);


    useEffect(() => {
        filterItems();
    }, [filter]);



    const filterItems = () => {
        const items = Array.from(gridItems.current.children);
        // console.log("🚀 ~ items:", items)
        items.forEach((item) => {
            const categories = item.getAttribute('data-filter').split();

            if (filter === '*' || categories.includes(filter)) {
                item.classList.add('show');
                item.classList.remove('hide');
            } else {
                item.classList.add('hide');
                item.classList.remove('show');
            }
        });
    }

    const handleViewMore = () => {
        setIsCardVisible(!isCardVisible);
        setShowMore(!showMore);

    };
    return (
        <>
            <section className="food_section layout_padding-bottom">
                <div className="container">
                    <div className="heading_container heading_center">
                        <h2>Our Menu</h2>
                    </div>

                    <ul className="filters_menu">
                        <li onClick={() => setFilter('*')} className={` ${filter === '*' ? 'active' : ''}`}>All</li>
                        <li onClick={() => setFilter('Burger')} className={` ${filter === 'Burger' ? 'active' : ''}`}>Burger</li>
                        <li onClick={() => setFilter('Pizza')} className={` ${filter === 'Pizza' ? 'active' : ''}`}>Pizza</li>
                        <li onClick={() => setFilter('Pasta')} className={` ${filter === 'Pasta' ? 'active' : ''}`}>Pasta</li>
                        <li onClick={() => setFilter('Fries')} className={` ${filter === 'Fries' ? 'active' : ''}`}>Fries</li>
                    </ul>


                    <div className="row grid" ref={gridItems}>
                        <div className="col-sm-6 col-lg-4 wow fadeInUp" data-filter="Pizza">
                            <MenuCard
                                imgsrc="images/f1.png"
                                heading="Delicious Pizza"
                                prise="20"
                            />
                        </div>
                        <div className="col-sm-6 col-lg-4 wow fadeInUp" data-filter="Burger">
                            <MenuCard
                                imgsrc="images/f2.png"
                                data-filter="Burger"
                                heading="Delicious Burger"
                                prise="20"
                            />
                        </div>
                        <div className="col-sm-6 col-lg-4 wow fadeInUp" data-filter="Pizza">
                            <MenuCard
                                imgsrc="images/f3.png"
                                heading="Delicious Pizza"
                                prise="20"
                            />
                        </div>
                        <div className="col-sm-6 col-lg-4 wow fadeInUp" data-filter="Pasta">
                            <MenuCard
                                imgsrc="images/f4.png"
                                heading="Delicious Pasta"
                                prise="20"
                            />
                        </div>
                        <div className="col-sm-6 col-lg-4 wow fadeInUp" data-filter="Fries">
                            <MenuCard
                                imgsrc="images/f5.png"
                                heading="French Fries"
                                prise="20"
                            />
                        </div>
                        <div className="col-sm-6 col-lg-4 wow fadeInUp" data-filter="Pizza">
                            <MenuCard
                                imgsrc="images/f6.png"
                                heading="Delicious Pizza"
                                prise="20"
                            />
                        </div>

                        <div className="col-sm-6 col-lg-4 wow fadeInUp" data-filter="Burger">
                            <MenuCard
                                imgsrc="images/f7.png"
                                heading="Tasty Burger"
                                prise="20"
                            />
                        </div>
                        <div className="col-sm-6 col-lg-4 wow fadeInUp" data-filter="Burger">
                            <MenuCard
                                imgsrc="images/f8.png"
                                heading="Tasty Burger"
                                prise="20"
                            />
                        </div>
                        <div className="col-sm-6 col-lg-4 wow fadeInUp" data-filter="Pasta">
                            <MenuCard
                                imgsrc="images/f9.png"
                                heading="Delicious Pasta"
                                prise="20"
                            />
                        </div>
                    </div>


                    {isCardVisible ? null : <>
                        <div className="row grid">

                            <div className="col-sm-6 col-lg-4">
                                <MenuCard
                                    imgsrc="images/f1.png"
                                    heading="Delicious Burger"
                                    prise="20"
                                />
                            </div>

                            <div className="col-sm-6 col-lg-4">
                                <MenuCard
                                    imgsrc="images/f6.png"
                                    heading="Delicious Pizza"
                                    prise="20"
                                />
                            </div>

                            <div className="col-sm-6 col-lg-4">
                                <MenuCard
                                    imgsrc="images/f9.png"
                                    heading="Delicious Pasta"
                                    prise="20"
                                />
                            </div>



                        </div>

                    </>}



                    <div className="btn-box">
                        <Link onClick={handleViewMore}>
                            {showMore ? 'View More' : 'View Less'}
                        </Link>
                    </div>
                </div>
            </section>
        </>
    );
};

export default MenuSection;







// import React, { useEffect } from 'react';

// function MyComponent() {
//     useEffect(() => {
//         const handleFilterClick = (event) => {
//             const filterMenuItems = document.querySelectorAll('.filters_menu li');

//             filterMenuItems.forEach((item) => {
//                 item.classList.remove('active');
//             });

//             event.target.classList.add('active');

//             const data = event.target.getAttribute('data-filter');
//             filterItems(data);
//         };

//         const filterItems = (filter) => {
//             const gridItems = document.querySelectorAll('.grid .all');

//             gridItems.forEach((item) => {
//                 if (filter === 'all' || item.classList.contains(filter)) {
//                     item.style.display = 'block';
//                 } else {
//                     item.style.display = 'none';
//                 }
//             });
//         };

//         const filterMenuItems = document.querySelectorAll('.filters_menu li');
//         filterMenuItems.forEach((item) => {
//             item.addEventListener('click', handleFilterClick);
//         });

//         return () => {
//             filterMenuItems.forEach((item) => {
//                 item.removeEventListener('click', handleFilterClick);
//             });
//         };
//     }, []);

//     return (
//         <div>
//             <ul className="filters_menu">
//                 <li className="active" data-filter="all">All</li>
//                 <li data-filter="filter1">Filter 1</li>
//                 <li data-filter="filter2">Filter 2</li>
//                 <li data-filter="filter3">Filter 3</li>
//             </ul>
//             <div className="grid">
//                 <div className="all filter1">Item 1</div>
//                 <div className="all filter2">Item 2</div>
//                 <div className="all filter3">Item 3</div>
//                 {/* Additional items go here */}
//             </div>
//         </div>
//     );
// }

// export default MyComponent;













// if (filter === '*' || categories.includes(filter)) {
//     item.style.display = 'block';
// } else {
//     item.style.display = 'none';
// }






// import React, { useEffect, useRef, useState } from 'react';
// import MenuCard from '../Components/MenuCard';

// const MenuSection = () => {
//     const [filter, setFilter] = useState('*');
//     const gridItems = useRef(null);

//     useEffect(() => {
//         filterItems();
//     }, [filter]);

//     function filterItems() {
//         const items = Array.from(gridItems.current.children);
//         items.forEach((item) => {
//             const categories = item.getAttribute('data-filter').split(' ');
//             if (filter === '*' || categories.includes(filter)) {
//                 item.style.display = 'block';
//             } else {
//                 item.style.display = 'none';
//             }
//         });
//     }

//     return (
//         <>
//             <section className="food_section layout_padding-bottom">
//                 <div className="container">
//                     <div className="heading_container heading_center">
//                         <h2>Our Menu</h2>
//                     </div>

//                     <ul className="filters_menu">
//                         <li onClick={() => setFilter('*')}>All</li>
//                         <li onClick={() => setFilter('Burger')}>Burger</li>
//                         <li onClick={() => setFilter('Pizza')}>Pizza</li>
//                         <li onClick={() => setFilter('Pasta')}>Pasta</li>
//                         <li onClick={() => setFilter('Fries')}>Fries</li>
//                     </ul>

//                     <div className="row grid" ref={gridItems}>
//                         <div className="col-sm-6 col-lg-4" data-filter="Burger">
//                             <MenuCard
//                                 imgsrc="images/f1.png"
//                                 heading="Delicious Burger"
//                                 prise="20"
//                             />
//                         </div>
//                         <div className="col-sm-6 col-lg-4" data-filter="Burger">
//                             <MenuCard
//                                 imgsrc="images/f2.png"
//                                 heading="Delicious Burger"
//                                 prise="20"
//                             />
//                         </div>
//                         {/* Add more MenuCard components as needed */}
//                     </div>
//                 </div>
//             </section>
//         </>
//     );
// };

// export default MenuSection;






// import React, { useState, useEffect, useRef } from 'react';

// function YourComponent() {
//     const [filter, setFilter] = useState('*');
//     const gridItems = useRef(null);

//     useEffect(() => {
//         filterItems();
//     }, [filter]);

//     function filterItems() {
//         const items = gridItems.current.childNodes;
//         items.forEach((item) => {
//             console.log(item);
//             const categories = Array.from(item.dataset.filter.split(' '));
//             console.log(categories);

//             if (filter === '*' || categories.includes(filter)) {
//                 item.style.display = 'block';
//             } else {
//                 item.style.display = 'none';
//             }
//         });
//     }

//     return (
//         <div>
//             <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
//             <ul>
//                 <li
//                     // data-filter="*"
//                     // className={filter == '' ? 'active' : ''}
//                     onClick={() => setFilter('*')}
//                 >
//                     All
//                 </li>
//                 <li
//                     // data-filter="category1"
//                     // className={filter === '' ? 'active' : ''}
//                     onClick={() => setFilter('category1')}
//                 >
//                     Category 1
//                 </li>
//                 <li
//                     // data-filter="category2"
//                     // className={filter === '' ? 'active' : ''}
//                     onClick={() => setFilter('category2')}
//                 >
//                     Category 2
//                 </li>
//                 {/* Add more menu items as needed */}
//             </ul>

//             <div ref={gridItems}>
//                 <div data-filter="category1">Item 1</div>
//                 <div data-filter="category1">Item 2</div>
//                 <div data-filter="category3">Item 3</div>
//                 <div data-filter="category3">Item 4</div>
//                 <div data-filter="category2">Item 5</div>
//                 <div data-filter="category2">Item 6</div>
//                 {/* Add more grid items as needed */}
//             </div>
//         </div>
//     );
// }

// export default YourComponent;
