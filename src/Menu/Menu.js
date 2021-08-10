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
        price: 19,
        description: "Sweet green grape meets morning dew for the best flavor. Fruit juice in soju is becoming more popular, and Jinro Green Grape has unique green grape flavor and taste that everyone can enjoy. Easy to drink with an alcohol content of 13%, it has such a clean and fresh flavor that will capture your heart."
    },
    { 
        id: 1,
        title: "Andong soju",
        imageUrl: "https://justliquor.com.au/1015-large_default/good-day-soju-citron.jpg",
        price: 6,
        description: "Sweet green grape meets morning dew for the best flavor. Fruit juice in soju is becoming more popular, and Jinro Green Grape has unique green grape flavor and taste that everyone can enjoy. Easy to drink with an alcohol content of 13%, it has such a clean and fresh flavor that will capture your heart."
    },
    { 
        id: 2,
        title: "Churum soju",
        imageUrl: "https://justliquor.com.au/2776-large_default/chum-churum-original-soju.jpg",
        price: 10,
        description: "Sweet green grape meets morning dew for the best flavor. Fruit juice in soju is becoming more popular, and Jinro Green Grape has unique green grape flavor and taste that everyone can enjoy. Easy to drink with an alcohol content of 13%, it has such a clean and fresh flavor that will capture your heart."
    },
];

export default function Menu() {

    const menuItems = itemList.map((item) => 
        <MenuBox key={item.title} title={item.title} productImage={item.imageUrl} price={item.price} description={item.description}/>
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