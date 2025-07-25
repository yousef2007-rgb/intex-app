
import { useState,useEffect } from "react";
import { UserInfoForm } from '../../components/CheckoutPageComponents/UserInfoForm';
import { HeadComponent } from '../../components/HomePageComponents/HeadComponent';
import { useSelector } from 'react-redux';
import { useRouter } from 'next/router';
 import Header from '../../components/ui/Header';
import Footer from '../../components/ui/Footer';
export default function Checkout (){
     const cartItems = useSelector((state) => state.cart);
        const [phone, setPhone] = useState('');
        const [name, setName] = useState('');
        const [location, setLocation] = useState('');
            const [totalPrice, setTotalPrice] = useState(0);

            const { lang } = useRouter().query;
            useEffect(() => {
                let num = 0;
                for (let i = 0; i < cartItems.length; i++) {
                    num =
                        num +
                        parseFloat(cartItems[i].item.price * cartItems[i].quantity);
                }
                setTotalPrice(num);
            }, [cartItems]);

                const [cartItemsNumber, setCartItemsNumber] = useState(0);
                useEffect(() => {
                    let num = 0;
                    for (let i = 0; i < cartItems.length; i++) {
                        num = num + cartItems[i].quantity;
                    }
                    setCartItemsNumber(num);
                }, [cartItems]);

                    useEffect(() => {
                        let num = 0;
                        for (let i = 0; i < cartItems.length; i++) {
                            num =
                                num +
                                parseFloat(cartItems[i].item.price * cartItems[i].quantity);
                        }
                        setTotalPrice(num);
                    }, [cartItems]);
            const [PhoneNumberInputVisable, setPhoneNumberInputVisability] =
                useState('block');
        const touglePhoneNumberInputVisablity = () => {
            console.log('tougled');
            setPhoneNumberInputVisability(
                PhoneNumberInputVisable == 'none' ? 'block' : 'none'
            );
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            const itemsArray = [];
            cartItems.map((x, index) => {
                itemsArray.push({
                    discount: 0.0,
                    item_id: String(x.item.nid),
                    item_price: x.item.price,
                    quantity: x.quantity,
                });
            });
            let itemsArrayJSON = JSON.stringify(itemsArray);
            itemsArrayJSON = itemsArrayJSON.replace(/"/g, '\\"');
            fetch(
                `https://orders.fore-site.net/media_admin/api/api_secure.php?module=orders&method=orders_submit&sk1=DICOSECSK1oolshdsf33sadGGHsd376&debug=yes&device_id=33333333&data=1&json1=[{"cart_code":"web_${Math.round(
                    +new Date() * Math.random(1000)
                )}","notes":"${phone}-${name}-${location} ","customer_id":"${parseInt(
                    phone
                )}","order_time":${+new Date()},"status":"saved","sync_time":0,"synced":false,"total":${totalPrice},"total_items":${cartItemsNumber},"items":"${itemsArrayJSON}"}]&lang=en&username=28`,
                {
                    method: 'POST',
                }
            )
				.then((res) => res.json())
                .then((response) =>{
					if(response.result == "success" ){
						return window.location.href = `/Checkedout?lang=${
                            lang == 'arabic' ? 'arabic' : 'english'
                        }`
					}else{
						alert("something went wrong try again please")
					}
}
                )
                .catch((err) => console.error(err));
        };


return (
<>

<div className=" flex flex-col overflow-y-auto tablet:mt-36">
    <HeadComponent />
                <Header />
<UserInfoForm
                                PhoneNumberInputVisable={
                                    PhoneNumberInputVisable
                                }
                                setLocation={setLocation}
                                setPhone={setPhone}
                                setName={setName}
                                handleSubmit={handleSubmit}
                                totalPrice={parseFloat(totalPrice)}
                            />

                            </div>
                             <Footer />
                            </>)


                            }
