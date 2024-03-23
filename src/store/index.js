import { createStore } from 'vuex'
export default createStore({
    state: {
        pizzas: [
            {
                id: 0,
                name: "Burger pizza",
                price: 445,
                imgUrl:
                    "https://dodopizza-a.akamaihd.net/static/Img/Products/c84a4190f97d4364ad2b614bd0d26297_366x366.webp",
                counter: 0,
                category: "Closed",
            },
            {
                id: 1,
                name: "Chicken curry",
                price: 475,
                imgUrl:
                    "https://dodopizza-a.akamaihd.net/static/Img/Products/f88f70774bdc4a198379c2f53b42f48f_366x366.webp",
                counter: 0,
                category: "Grill",
            },
            {
                id: 2,
                name: "Cheese",
                price: 295,
                imgUrl:
                    "https://dodopizza-a.akamaihd.net/static/Img/Products/3ef50ae6706e4988bb7b3d16cd6990ee_584x584.webp",
                counter: 0,
                category: "Vegetarian",
            },
            {
                id: 3,
                name: "Ham and cheese",
                price: 295,
                imgUrl:
                    "https://dodopizza-a.akamaihd.net/static/Img/Products/3fe12c4bb05c470c9cb45fb423b7c049_366x366.webp",
                counter: 0,
                category: "Meat",
            },
            {
                id: 4,
                name: "Pepperoni Fresh",
                price: 325,
                imgUrl:
                    "https://dodopizza-a.akamaihd.net/static/Img/Products/525becd5f6d845ea9f83af0af7e44eea_366x366.webp",
                counter: 0,
                category: "Meat",
            },
            {
                id: 5,
                name: "Double chicken",
                price: 325,
                imgUrl:
                    "https://dodopizza-a.akamaihd.net/static/Img/Products/f351d4358f134c31b5bed9093faf38e3_366x366.webp",
                counter: 0,
                category: "Grill",
            },
            {
                id: 6,
                name: "Ham and mushrooms",
                price: 445,
                imgUrl:
                    "https://dodopizza-a.akamaihd.net/static/Img/Products/be07674c38c54fd78f878a33988a4373_366x366.webp",
                counter: 0,
                category: "Meat",
            },
            {
                id: 7,
                name: "Margarita",
                price: 445,
                imgUrl:
                    "https://dodopizza-a.akamaihd.net/static/Img/Products/97d4780c67b14d66a29fcdfaeadc56be_584x584.webp",
                counter: 0,
                category: "Vegetarian",
            },
            {
                id: 8,
                name: "Hot Pepperoni",
                price: 777,
                imgUrl: "https://dodopizza-a.akamaihd.net/static/Img/Products/4f760d108a3f47fea43520d234157ac2_584x584.webp",
                counter: 0,
                category: "Spicy",
            }, {
                id: 9,
                name: "Arriva!",
                price: 445,
                imgUrl:
                    "https://dodopizza-a.akamaihd.net/static/Img/Products/27a89d3f39414366b2cdcb4965898859_584x584.webp",
                counter: 0,
                category: "Meat",
            }, {
                id: 10,
                name: "Double Pepperoni",
                price: 475,
                imgUrl:
                    "https://dodopizza-a.akamaihd.net/static/Img/Products/32bae7e14c8741cbad6b55f33debfba2_584x584.webp",
                counter: 0,
                category: "Meat",
            },
            {
                id: 11,
                name: "Village",
                price: 475,
                imgUrl:
                    "https://dodopizza-a.akamaihd.net/static/Img/Products/49cf9b2da27b410784dfffbabda0c14f_584x584.webp",
                counter: 0,
                category: "Vegetarian",
            },
            {
                id: 12,
                name: "Vegetables and mushrooms",
                price: 475,
                imgUrl:
                    "https://dodopizza-a.akamaihd.net/static/Img/Products/48f0545652b946bebebfccbee70b3aa5_584x584.webp",
                counter: 0,
                category: "Vegetarian",
            },
            {
                id: 13,
                name: "Asian",
                price: 475,
                imgUrl:
                    "https://dodopizza-a.akamaihd.net/static/Img/Products/a5fbe87430b943b7833e632e94807355_584x584.webp",
                counter: 0,
                category: "Vegetarian",
            },
            {
                id: 14,
                name: "Hawaiian",
                price: 666,
                imgUrl:
                    "https://dodopizza-a.akamaihd.net/static/Img/Products/4c7751e9fb5047a49cb016f8842b3714_584x584.webp",
                counter: 0,
                category: "Closed",
            },
            {
                id: 15,
                name: "Four seasons",
                price: 999,
                imgUrl:
                    "https://dodopizza-a.akamaihd.net/static/Img/Products/d81d7fe9a8f7477f8d3c9cb1bc4239d7_584x584.webp",
                counter: 0,
                category: "Grill",
            },
            {
                id: 16,
                name: "Yeizza",
                price: 222,
                imgUrl:
                    "https://dodopizza-a.akamaihd.net/static/Img/Products/11ee866a4407afd7a0e8674b2b0cc1ab_1875x1875.webp",
                counter: 0,
                category: "Closed",
            },
            {
                id: 17,
                name: "Pesto",
                price: 444,
                imgUrl:
                    "https://dodopizza-a.akamaihd.net/static/Img/Products/0c9b1e335a34475da6610a228cbfdb2c_584x584.webp",
                counter: 0,
                category: "Grill",
            },
            {
                id: 18,
                name: "Carbonara",
                price: 780,
                imgUrl:
                    "https://dodopizza-a.akamaihd.net/static/Img/Products/7e67df55f25341a4b2785a8c1f784485_584x584.webp",
                counter: 0,
                category: "Spicy",
            },
        ],
        filteredPizzas: [],
        totalPrice: (() => {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            return cart.reduce((accumulator, pizza) => accumulator + (pizza.price * pizza.counter), 0);
        })(),
        totalSum: (() => {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            return cart.reduce((accumulator, pizza) => accumulator + pizza.counter, 0);
        })()

    },
    getters: {

    },
    mutations: {
        CHANGE_TOTAL: (state, payload) => {
            state.totalSum = payload.reduce((a, b) => a + b.counter, 0);
            state.totalPrice = payload.reduce((a, b) => a + b.counter * b.price, 0);
        },
        SET_PIZZAS: (state) => {
            state.filteredPizzas = state.pizzas;
        },
        CHANGE_FILTERED_PIZZAS: (state, category) => {
            if (category !== 'All') {
                state.filteredPizzas = state.pizzas.filter((pizza) => pizza.category === category);
            } else {
                state.filteredPizzas = state.pizzas;
            }
        },
        SET_SORT_OPTION: (state, sortOption) => {
            state.sortOption = sortOption;
            switch (sortOption) {
                case 'popularity':
                    state.filteredPizzas.reverse();
                    break;

                case 'price':
                    state.filteredPizzas.sort((a, b) => b.price - a.price);
                    break;

                case 'alphabet':
                    state.filteredPizzas.sort((a, b) => a.name.localeCompare(b.name));
                    break;

                default:
                    state.filteredPizzas.sort((a, b) => b.counter - a.counter);
                    break;
            }
        },
        updateTotalSum(state, totalSum) {
            state.totalSum = totalSum;
        },
        updateTotalPrice(state, totalPrice) {
            state.totalPrice = totalPrice;
        },
        addToCart(state, pizza) {
            if (!state.cart) {
                state.cart = [];
            }
            state.cart.push(pizza);
        },
    },
    actions: {
        initTotalValues: ({ commit }) => {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            commit('CHANGE_TOTAL', cart);
        },
        setPizzas: ({ commit }) => {
            commit('SET_PIZZAS');
        },
        changeFilteredPizzas: ({ commit }, category) => {
            commit('CHANGE_FILTERED_PIZZAS', category);
        },
    },
    modules: {},
});
