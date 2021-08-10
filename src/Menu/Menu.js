import "./Menu.css"
import PageTitle from "./PageTitle"
import PageHeader from "./PageHeader"
import MenuBox from "./MenuBox"

//<PageHeader headerColor={"#999"} headerContent={"Introducing Oppa, Australia's new and exciting soju startup."}/>
let itemList = [
    { 
        id: 0,
        title: "Chilsung soju",
        imageUrl: "https://justliquor.com.au/1080-large_default/chamisul-soju.jpg",
        price: 19
    },
    { 
        id: 1,
        title: "Andong soju",
        imageUrl: "https://justliquor.com.au/1015-large_default/good-day-soju-citron.jpg",
        price: 6
    },
    { 
        id: 2,
        title: "Churum soju",
        imageUrl: "https://justliquor.com.au/2776-large_default/chum-churum-original-soju.jpg",
        price: 10
    },
    { 
        id: 0,
        title: "Ashpalmer soju",
        imageUrl: "https://justliquor.com.au/1080-large_default/chamisul-soju.jpg",
        price: 19
    },
    { 
        id: 1,
        title: "Tent soju",
        imageUrl: "https://justliquor.com.au/1015-large_default/good-day-soju-citron.jpg",
        price: 6
    },
    { 
        id: 2,
        title: "Anabolic soju",
        imageUrl: "https://justliquor.com.au/2776-large_default/chum-churum-original-soju.jpg",
        price: 10
    },
    { 
        id: 0,
        title: "Chilsung soju",
        imageUrl: "https://justliquor.com.au/1080-large_default/chamisul-soju.jpg",
        price: 19
    },
    { 
        id: 1,
        title: "Andong soju",
        imageUrl: "https://justliquor.com.au/1015-large_default/good-day-soju-citron.jpg",
        price: 6
    },
    { 
        id: 2,
        title: "Churum soju",
        imageUrl: "https://justliquor.com.au/2776-large_default/chum-churum-original-soju.jpg",
        price: 10
    },
];

export default function Menu() {

    const menuItems = itemList.map((item) => 
        <MenuBox key={item.title} title={item.title} productImage={item.imageUrl} price={item.price}/>
    );

    return (
        <div className='Menu'>
            <PageTitle titleColor={"#5ebcaf"} titleContent={"Menu"} fadeStartOffset={0} fadeEndOffset={250}/>
            <PageHeader headerColor={"#5ebcaf"} headerContent={"Browse our delicious range of Soju"}/>
            <div className="MenuBoxContainer">
                {menuItems}
            </div>
        </div>
    )
}