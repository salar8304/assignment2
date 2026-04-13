document.addEventListener("DOMContentLoaded", () => {
    const datasetURL = "https://makerslab.em-lyon.com/dww/data/products.json";
    const cardsContainer = document.querySelector("#cards-container");
    const popularContainer = document.querySelector("#recommandations-container");
    const resultsTarget = document.querySelector("#results-length");
    const brandFiltersContainer = document.querySelector("#brand-filters-container");
    
    let allShoes = []; 

    const loadData = async (callback) => {
        try {
            const response = await fetch(datasetURL);
            const data = await response.json();
            callback(data);
        } catch (error) {
            console.error("Connection error: " + error);
        }
    };

    const createCardHTML = (brand, model) => {
        const fire = model.fire ? ' 🔥' : '';
        const price = Number(model.price).toFixed(2);
        
        return `
            <article class="product-card">
                <a href="javascript:void(0)" class="main-card-link"></a>
                <button class="heart-btn" onclick="this.classList.toggle('active')">❤</button>
                <div class="image-wrapper"><img src="${model.image}" alt="${model.name}"></div>
                <div class="card-footer">
                    <h3>${model.name}${fire}</h3>
                    <p>${brand.toUpperCase()} | ${model.gender}</p>
                    <p class="price">$${price}</p>
                </div>
            </article>`;
    };

    const displayShoes = (shoesToDisplay, container) => {
        container.innerHTML = ""; 
        shoesToDisplay.forEach(item => {
            container.innerHTML += createCardHTML(item.brand, item.model);
        });
        if (container === cardsContainer) resultsTarget.innerHTML = shoesToDisplay.length;
    };

    const generateBrandButtons = (brands) => {
        brandFiltersContainer.innerHTML = "";
        brands.forEach(brand => {
            const btn = document.createElement("button");
            btn.className = "filter-btn brand-filter";
            btn.innerText = brand.charAt(0).toUpperCase() + brand.slice(1);
            btn.onclick = () => {
                const filtered = allShoes.filter(s => s.brand === brand);
                displayShoes(filtered, cardsContainer);
            };
            brandFiltersContainer.appendChild(btn);
        });
    };

    loadData((data) => {
        data.brands.forEach((brand) => {
            data.items[brand].forEach((model) => {
                const shoeObj = { brand: brand, model: model };
                
                // POPULAR LOGIC: Stan Smith, AF1 Low White, Forum Low OG + 2 extras
                const popularList = [
                    "stan smith", 
                    "air force 1 low white", 
                    "forum low og", 
                    "gel-quantum 360 6 utility", 
                    "rs-z lth"
                ];
                
                if (popularList.includes(model.name.toLowerCase())) {
                    model.fire = true;
                } 
                // FIRE RATIO: 1 out of 6 (Math.random() > 0.83)
                else if (Math.random() > 0.83) {
                    model.fire = true;
                }
                
                allShoes.push(shoeObj);
            });
        });

        generateBrandButtons(data.brands);

        // Display Popular Section
        const popularSelection = allShoes.filter(item => 
            ["stan smith", "air force 1 low white", "forum low og", "gel-quantum 360 6 utility", "rs-z lth"].includes(item.model.name.toLowerCase())
        );
        displayShoes(popularSelection, popularContainer);

        // Display Main Store
        displayShoes(allShoes, cardsContainer);
    });

    // Interaction Listeners
    document.querySelectorAll(".gender-filter").forEach(link => {
        link.addEventListener("click", (e) => {
            const gender = e.target.getAttribute("data-gender");
            const filtered = allShoes.filter(s => s.model.gender.toLowerCase() === gender);
            displayShoes(filtered, cardsContainer);
        });
    });

    document.querySelector("#show-all-btn").addEventListener("click", () => {
        displayShoes(allShoes, cardsContainer);
    });

    document.querySelectorAll(".sort-radio").forEach(radio => {
        radio.addEventListener("change", (e) => {
            const choice = e.target.value;
            if (choice === "price-low") allShoes.sort((a, b) => a.model.price - b.model.price);
            else if (choice === "price-high") allShoes.sort((a, b) => b.model.price - a.model.price);
            else if (choice === "name-az") allShoes.sort((a, b) => a.model.name.localeCompare(b.model.name));
            displayShoes(allShoes, cardsContainer);
        });
    });
});