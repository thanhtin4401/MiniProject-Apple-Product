const BASE_URL = "https://62bea99ebe8ba3a10d58a27a.mockapi.io/toDoList/AppleStoreProduct"
const productService = {
    getProduct: () => {
        return axios({
            url: BASE_URL,
            method: "GET"
        })
    }
}

const $ = document.querySelector.bind(document);

// button nav
document.getElementById('btn__nav').onclick = () => {
    $('NAV').classList.toggle("active");


}

const bagPurchaseBtn = $(".bag__btn")

// bagpruchase click
$('.overlay').onclick = () => {
    $('#cart__wrapped').classList.remove('active');
}
bagPurchaseBtn.onclick = () => {
    $('#cart__wrapped').classList.add('active');
}

$('#purchase').onclick = () => {
    $('#cart__purchase__wrapped').classList.remove('hidden');

}

$('#cancle').onclick = () => {
    $('#cart__purchase__wrapped').classList.add('hidden');
}

const renderProductList = (list) => {
    let HTML = ""
    for (var i = 0; i < list.length; i++) {
        let product = list[i];
        let itemProduct = `
        <div class="item text-white p-4">
        <div class="item__heading flex justify-between">
            <div class="LogoIcon"><i class="fa-brands fa-apple text-4xl text-white"></i></div>
            <div class="circleGb border border-inherit rounded-full p-2">
                <span class="GbNumber text-center">128 GB </span>
            </div>
        </div>
        <div class="item__content">
            <img src="${product.img}" alt="" class="product">
            <h1 class="item__name text-lg font-black text-center">
                ${product.name}
            </h1>

            <p class="title font-light text-md text-center">${product.description}</p>
        </div>
        <div class="controler flex justify-between pt-10">
            <div class="controler__btn flex items-center">
                <div class="controler__btn--minus">
                    <i class="fa-solid fa-minus"></i>
                </div>
                <span class="number px-2">0</span>
                <div class="controler__btn--plus">
                    <i class="fa-solid fa-plus"></i>
                </div>
            </div>
            <div class="controler__right flex items-center">
                <h2 id="price" class="text-xl mr-2">${product.price}$</h2>
                <div class="item__card--btn">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                    </svg>

                </div>
            </div>

        </div>
    </div>
        `
        HTML += itemProduct;
    }
    $('.product__right').innerHTML = HTML;
}

let showProduct = () => {
    productService.getProduct()
        .then((res) => {
            renderProductList(res.data);
        })
        .catch((err) => {
            console.log(err);
        })
}
showProduct();



