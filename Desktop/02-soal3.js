    // dibawah ini merupakan history transasksi yang telah kalian lakukan
    const items = [
        {
        btc: { buy: 10, sell: 9 },
        eth: { buy: 8, sell: 7.5 },
        doge: { buy: 7, sell: 6.5 },
        day: 1,
        },
        {
        btc: { buy: 9, sell: 5 },
        eth: { buy: 7, sell: 4 },
        doge: { buy: 6, sell: 3 },
        day: 2,
        },
        {
        btc: { buy: 5, sell: 10 },
        eth: { buy: 4, sell: 6 },
        doge: { buy: 3, sell: 4 },
        day: 3,
        },
    ];
    
    const calculateIncome = (items) => {
        /// EDIT DOWN HERE
        return items.reduce((hs, itung) => {
            const btcSum = itung.btc.sell - itung.btc.buy;
            const dogeSum = itung.doge.sell - itung.doge.buy;
            const ethSum = itung.eth.sell - itung.eth.buy;
            return {
                btc: hs.btc + btcSum,
                doge: hs.doge + dogeSum,
                eth: hs.eth + ethSum,
            };
        }, {
            btc: 0,
            doge: 0,
            eth: 0
        });
    }

    console.log(calculateIncome(items))
    
    console.log(calculateIncome(items))