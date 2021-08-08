const priceInputs = document.querySelectorAll("input");
const form = document.querySelector("#myform");

form.addEventListener("submit", (e) => {
    e.preventDefault();

    // collecting prices

    let purchasePrice = Number(priceInputs[0].value);
    let stockQuantity = Number(priceInputs[1].value);
    let currentPrice = Number(priceInputs[2].value);

    // console.log(purchasePrice, stockQuantity, currentPrice)

    if (purchasePrice > 0 && stockQuantity > 0 && currentPrice > 0) {
        if (purchasePrice > currentPrice) {
            //total loss in cash
            const totalLoss = ((purchasePrice - currentPrice) * stockQuantity).toFixed(2);
            const lossPerce = (((purchasePrice - currentPrice) * 100) / purchasePrice).toFixed(2);

            if (lossPerce > 50) {
                document.querySelector(".background").style.backgroundImage =
                    "url('/gif2.webp')";
                document.querySelector(".background").style.backgroundSize = "cover";
                document.querySelector(".background").style.backgroundPosition =
                    "center";
            }
            var losses = "";
            losses = `
            
                    <div class="loss-info">
                    
                        <p> You lost ${lossPerce}%, and Your total loss is ₹${totalLoss}</p>

                    </div>

            `;
            document.querySelector(".output").innerHTML = losses;

        } else {
            //total profit in cash
            const totalProfit = (
                (currentPrice - purchasePrice) *
                stockQuantity
            ).toFixed(2);
            //profit in percentage
            const profitPer = (
                ((currentPrice - purchasePrice) * 100) /
                purchasePrice
            ).toFixed(2);
            // profitPercentage(profitPer)

            if (profitPer > 50) {
                document.querySelector(".background").style.backgroundImage =
                    "url('/giphy.webp')";
                document.querySelector(".background").style.backgroundSize = "cover";
                document.querySelector(".background").style.backgroundPosition =
                    "center";
            }

            var prof = "";
            prof = `
            
                    <div class="loss-info">
                    
                        <p> You gain ${profitPer}%, and Your total profit is ₹${totalProfit}</p>

                    </div>

            `;
            document.querySelector(".output").innerHTML = prof;
        }
    }
});



